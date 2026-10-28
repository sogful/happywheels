import argparse
import json
import pathlib
import shutil
import struct

#//////////////////////////////////////////////////////////////////////#


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=pathlib.Path)
    parser.add_argument("--destination", type=pathlib.Path, default=pathlib.Path(__file__).resolve().parent.parent / "assets/images/animate")
    parser.add_argument("--quality", choices=["medium", "low", "all"], default="all")
    parser.add_argument("--apply", action="store_true")
    options = parser.parse_args()
    qualities = {"medium": "0.6", "low": "0.3"}
    selected = qualities if options.quality == "all" else {options.quality: qualities[options.quality]}
    plans = []
    atlases = sorted(file for file in options.destination.rglob("*.json") if "@" not in file.stem)
    if not atlases:
        raise ValueError("No existing animation atlases found")
    for atlas in atlases:
        relative = atlas.relative_to(options.destination)
        reference = json.loads(atlas.read_text(encoding="utf-8"))
        for scale in selected.values():
            variant = relative.with_name(f"{relative.stem}@{scale}x.json")
            source = options.source / variant
            data = json.loads(source.read_text(encoding="utf-8"))
            if set(data["frames"]) != set(reference["frames"]):
                raise ValueError(f"Frame names do not match: {variant}")
            image = pathlib.Path(data["meta"]["image"])
            if image.name != str(image):
                raise ValueError(f"Image must be in its atlas directory: {variant}")
            png = source.parent / image
            header = png.read_bytes()[:24]
            if header[:8] != b"\x89PNG\r\n\x1a\n":
                raise ValueError(f"Not a PNG: {png}")
            width, height = struct.unpack(">II", header[16:24])
            if width != data["meta"]["size"]["w"] or height != data["meta"]["size"]["h"]:
                raise ValueError(f"Image dimensions do not match: {variant}")
            for entry in data["frames"].values():
                frame = entry["frame"]
                if frame["x"] < 0 or frame["y"] < 0 or frame["x"] + frame["w"] > width or frame["y"] + frame["h"] > height:
                    raise ValueError(f"Frame outside image: {variant}")
            for original, target in [(source, options.destination / variant), (png, options.destination / variant.parent / image)]:
                if target.exists():
                    if target.read_bytes() != original.read_bytes():
                        raise ValueError(f"Existing file differs: {target}")
                else:
                    plans.append((original, target))
    total = sum(source.stat().st_size for source, target in plans)
    if options.apply:
        for source, target in plans:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, target)
    print(json.dumps({"atlases": len(atlases), "qualities": list(selected), "files": len(plans), "bytes": total, "applied": options.apply}))


#//////////////////////////////////////////////////////////////////////#

if __name__ == "__main__":
    main()
