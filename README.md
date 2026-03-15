# No Glow YouTube

Removes YouTube's ambient mode glow effect that appears behind videos in dark mode. Perfect for OLED/AMOLED screen users and Dark Reader users who want a true black background without the blurred light bleed around the video player.

## Install

**Option 1 — Firefox Add-ons (recommended)**
Install directly from the Mozilla Add-ons store:
`(Coming Soon)`

**Option 2 — Manual install**
1. Download the `.zip` file from this repository
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select the downloaded `.zip` file

> Note: Temporary add-ons installed via `about:debugging` are removed when Firefox is closed. For a permanent install use Option 1.

## What it does
Hides the `#cinematics` element that YouTube uses to render the ambient glow behind the video player. No settings, no data collection, no background scripts — a single content script with four lines of code.

## License
MIT
