#!/usr/bin/env python3
"""Render PNG thumbnails of concept mock-up pages.

Optional helper. The gallery's live <iframe> tiles work everywhere with no
dependencies and even show motion; use this only when you want flat PNGs to
paste into an email or doc, and a headless browser is available.

Requires Playwright + Chromium:
    pip install playwright --break-system-packages
    python -m playwright install chromium   # needs system libs; may not work in
                                             # minimal sandboxes

Usage:
    python render_thumbnails.py <mockups_dir> [--width 1200] [--scale 0.4]

Renders every concept-*.html in <mockups_dir> to <mockups_dir>/thumbnails/<name>.png.
Falls back with a clear message if Playwright/Chromium isn't usable.
"""
import argparse
import glob
import os
import sys


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("mockups_dir")
    ap.add_argument("--width", type=int, default=1200)
    ap.add_argument("--height", type=int, default=1400)
    ap.add_argument("--scale", type=float, default=0.4,
                    help="device scale factor for the output PNG size")
    args = ap.parse_args()

    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        sys.exit("Playwright not installed. Run: pip install playwright "
                 "--break-system-packages && python -m playwright install chromium\n"
                 "Or just use the gallery's live iframe tiles (no deps needed).")

    pages = sorted(glob.glob(os.path.join(args.mockups_dir, "concept-*.html")))
    if not pages:
        sys.exit(f"No concept-*.html files found in {args.mockups_dir}")

    out_dir = os.path.join(args.mockups_dir, "thumbnails")
    os.makedirs(out_dir, exist_ok=True)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page(viewport={"width": args.width, "height": args.height},
                                    device_scale_factor=args.scale)
            for path in pages:
                page.goto("file://" + os.path.abspath(path))
                page.wait_for_timeout(400)  # let fonts/animations settle
                name = os.path.splitext(os.path.basename(path))[0]
                out = os.path.join(out_dir, name + ".png")
                page.screenshot(path=out, full_page=True)
                print("wrote", out)
            browser.close()
    except Exception as e:
        sys.exit(f"Could not launch Chromium ({e}).\n"
                 "Use the gallery's live iframe tiles instead — no browser needed.")


if __name__ == "__main__":
    main()
