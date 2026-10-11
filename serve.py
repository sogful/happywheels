import os
import json
import re
import threading
import http.cookiejar
import urllib.error
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent
MISSING = ROOT / "__not_found__"
REMOTE_ORIGIN = "https://totaljerkface.com"
PROXY_PREFIX = "/__tjf_proxy/"
portable_queue_source = b"_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t}"
portable_queue_patch = b"_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];if(n.event===e){t._queue.shift();if((t._queueDepth||0)>=64){setTimeout(function(){t._loadQueue()},0);return t}t._queueDepth=(t._queueDepth||0)+1;t._loadQueue();t._queueDepth--}e||n.action()}return t}"


class RemoteSession:
    def __init__(self):
        self.cookies = http.cookiejar.CookieJar()
        self.opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(self.cookies))
        self.lock = threading.RLock()
        self.authenticated = False
        self.user_id = None
        self.username = None

    def request(self, path, method, body, user_agent, content_type="", referer=""):
        headers = {
            "User-Agent": user_agent or "Mozilla/5.0",
            "Accept": "*/*",
            "Accept-Encoding": "identity",
            "Origin": REMOTE_ORIGIN,
            "Referer": referer or f"{REMOTE_ORIGIN}/happy_wheels.tjf",
        }
        if content_type:
            headers["Content-Type"] = content_type
        request = urllib.request.Request(f"{REMOTE_ORIGIN}{path}", data=body, headers=headers, method=method)
        with self.lock:
            try:
                response = self.opener.open(request, timeout=25)
            except urllib.error.HTTPError as error:
                response = error
            return response.status, response.headers.get("Content-Type", "application/octet-stream"), response.read()

    def login(self, email, password, user_agent):
        body = urllib.parse.urlencode({
            "login_user_email": email.strip(),
            "login_user_pass": password.strip(),
            "action": "login",
        }).encode("utf-8")
        with self.lock:
            self.cookies.clear()
            self.authenticated = False
            self.user_id = None
            self.username = None
            try:
                status, _, response = self.request(
                    "/user.hw",
                    "POST",
                    body,
                    user_agent,
                    "application/x-www-form-urlencoded; charset=UTF-8",
                    f"{REMOTE_ORIGIN}/user_login.tjf",
                )
            except (OSError, urllib.error.URLError, TimeoutError):
                return "unavailable"
            result = response.decode("utf-8", errors="replace").strip().lower()
            if 200 <= status < 300 and result == "success:true":
                self.authenticated = True
                if self.load_identity(user_agent):
                    return "success"
                self.cookies.clear()
                self.authenticated = False
                return "unavailable"
            if result == "failure:userpass":
                return "credentials"
            if result == "failure:verify_email":
                return "verification"
            if result.startswith("lockout:"):
                return "lockout"
            return "unavailable"

    def logout(self, user_agent):
        body = urllib.parse.urlencode({"action": "logout"}).encode("utf-8")
        with self.lock:
            try:
                self.request(
                    "/user.hw",
                    "POST",
                    body,
                    user_agent,
                    "application/x-www-form-urlencoded; charset=UTF-8",
                    f"{REMOTE_ORIGIN}/happy_wheels.tjf",
                )
            except (OSError, urllib.error.URLError, TimeoutError):
                return False
            self.cookies.clear()
            self.authenticated = False
            self.user_id = None
            self.username = None
            return True

    def load_identity(self, user_agent):
        try:
            status, _, response = self.request(
                "/happy-wheels-js/index.tjf",
                "GET",
                None,
                user_agent,
                referer=f"{REMOTE_ORIGIN}/happy_wheels.tjf",
            )
        except (OSError, urllib.error.URLError, TimeoutError):
            return False
        if status != 200:
            return False
        page = response.decode("utf-8", errors="replace")
        settings = re.search(r'window\["HW_SETTINGS"\]\s*=\s*\{(.*?)\};', page, re.DOTALL)
        if not settings:
            return False
        user_id = re.search(r'["\']user_id["\']\s*:\s*["\']?(\d+)["\']?', settings.group(1))
        username = re.search(r'["\']username["\']\s*:\s*("(?:\\.|[^"\\])*")', settings.group(1))
        if not user_id or not username:
            return False
        try:
            username_value = json.loads(username.group(1))
        except json.JSONDecodeError:
            return False
        if not username_value:
            return False
        self.user_id = int(user_id.group(1))
        self.username = username_value
        return True

    def account(self):
        with self.lock:
            return {
                "authenticated": self.authenticated,
                "user_id": self.user_id,
                "username": self.username,
            }

    def is_authenticated(self):
        with self.lock:
            return self.authenticated


REMOTE_SESSION = RemoteSession()


class PortableHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def translate_path(self, request_path):
        parts = [part for part in unquote(urlsplit(request_path).path).split("/") if part]
        if any(part.startswith(".") for part in parts):
            return str(MISSING)
        if parts == ["happy_wheels.tjf"]:
            return str(ROOT / "index.html")

        path = (ROOT.joinpath(*parts)).resolve()
        if not path.is_relative_to(ROOT):
            return str(MISSING)
        if path.is_dir():
            path = path / "index.html"
        return str(path)

    def list_directory(self, path):
        self.send_error(404)
        return None

    def do_GET(self):
        path = urlsplit(self.path).path
        if path == "/api/account":
            self.send_json(200, REMOTE_SESSION.account())
        elif re.fullmatch(r"/happy-wheels-js/js/dependencies\.[A-Za-z0-9_-]+\.js", path):
            self.serve_game_dependencies(path)
        elif path.startswith(PROXY_PREFIX):
            self.proxy_request("GET")
        else:
            super().do_GET()

    def serve_game_dependencies(self, path):
        file_path = Path(self.translate_path(path))
        try:
            response_body = file_path.read_bytes()
        except OSError:
            self.send_error(404)
            return
        if response_body.count(portable_queue_source) != 1:
            self.send_error(500, "Unexpected game dependency contents")
            return

        response_body = response_body.replace(portable_queue_source, portable_queue_patch, 1)
        self.send_response(200)
        self.send_header("Content-type", self.guess_type(str(file_path)))
        self.send_header("Content-Length", str(len(response_body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(response_body)

    def do_POST(self):
        path = urlsplit(self.path).path
        if path == "/api/login":
            self.login_request()
        elif path == "/api/logout":
            if not self.is_local_request():
                self.send_json(403, {"ok": False, "reason": "origin"})
                return
            success = REMOTE_SESSION.logout(self.headers.get("User-Agent", ""))
            self.send_json(200 if success else 502, {"ok": success})
        elif path.startswith(PROXY_PREFIX):
            self.proxy_request("POST")
        else:
            self.send_error(404)

    def do_HEAD(self):
        path = urlsplit(self.path).path
        if path.startswith(PROXY_PREFIX):
            self.proxy_request("HEAD")
        else:
            super().do_HEAD()

    def send_json(self, status, payload):
        body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def is_local_request(self):
        origin = urlsplit(self.headers.get("Origin", ""))
        host = urlsplit(f"//{self.headers.get('Host', '')}")
        local_hosts = {"127.0.0.1", "localhost"}
        port = self.server.server_address[1]
        return (
            origin.scheme == "http"
            and origin.hostname in local_hosts
            and origin.hostname == host.hostname
            and origin.port == port
        )

    def login_request(self):
        if not self.is_local_request():
            self.send_json(403, {"ok": False, "reason": "origin"})
            return
        if self.headers.get_content_type() != "application/json":
            self.send_json(415, {"ok": False, "reason": "format"})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > 8192:
                raise ValueError
            credentials = json.loads(self.rfile.read(length))
            email = credentials.get("email", "")
            password = credentials.get("password", "")
            if not isinstance(email, str) or not isinstance(password, str):
                raise ValueError
            if not email.strip() or not password.strip() or len(email) > 320 or len(password) > 1024:
                raise ValueError
        except (ValueError, json.JSONDecodeError):
            self.send_json(400, {"ok": False, "reason": "format"})
            return

        result = REMOTE_SESSION.login(email, password, self.headers.get("User-Agent", ""))
        if result == "success":
            self.send_json(200, {"ok": True})
        else:
            status = 401 if result == "credentials" else 403 if result == "verification" else 429 if result == "lockout" else 502
            self.send_json(status, {"ok": False, "reason": result})

    def proxy_request(self, method):
        if method == "POST" and not self.is_local_request():
            self.send_json(403, {"ok": False, "reason": "origin"})
            return
        parsed = urlsplit(self.path)
        remote_path = unquote(parsed.path[len(PROXY_PREFIX):])
        if (
            not remote_path
            or ".." in remote_path.split("/")
            or "\\" in remote_path
            or not re.fullmatch(r"[A-Za-z0-9_./-]+\.hw", remote_path)
        ):
            self.send_error(404)
            return
        body = None
        content_type = ""
        if method == "POST":
            try:
                length = int(self.headers.get("Content-Length", "0"))
                if length < 0 or length > 16 * 1024 * 1024:
                    raise ValueError
                body = self.rfile.read(length)
                content_type = self.headers.get("Content-Type", "")
            except ValueError:
                self.send_error(413)
                return
        try:
            status, response_type, response_body = REMOTE_SESSION.request(
                f"/{remote_path}" + (f"?{parsed.query}" if parsed.query else ""),
                method,
                body,
                self.headers.get("User-Agent", ""),
                content_type,
            )
        except (OSError, urllib.error.URLError, TimeoutError):
            self.send_json(502, {"ok": False, "reason": "upstream"})
            return
        self.send_response(status)
        self.send_header("Content-Type", response_type)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(response_body)))
        self.end_headers()
        if method != "HEAD":
            self.wfile.write(response_body)

    def log_message(self, format_string, *args):
        pass


class PortableServer(ThreadingHTTPServer):
    request_queue_size = 256


def main():
    port = int(os.environ.get("PORT", "8765"))
    server = PortableServer(("127.0.0.1", port), PortableHandler)
    print(f"Happy Wheels is available at http://127.0.0.1:{port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
