# Color Palette Generator

A responsive internship task project for VEDA Technology. It generates five random HEX colors and lets the user copy any color to the clipboard with one click.

## Features

- Generates 5 random HEX color swatches
- Generate New Palette button
- Click-to-copy HEX functionality
- Visible copy confirmation
- Responsive mobile, tablet, and desktop layout
- No framework or external dependency
- Accessible buttons and status feedback

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)

## How it works

`Math.random()` is used to generate six random hexadecimal characters for each color. Each swatch is rendered dynamically into the DOM.

When a swatch is clicked, JavaScript uses the Clipboard API's `navigator.clipboard.writeText()` to copy the HEX value and shows a short confirmation message.

The Clipboard API requires a secure context such as HTTPS in supported browsers, so it works naturally when deployed on services such as Vercel or GitHub Pages.

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. For the most reliable Clipboard API behavior, serve the folder using a local development server.

Example with VS Code Live Server:
- Open the folder in VS Code.
- Install/use Live Server.
- Right-click `index.html`.
- Select **Open with Live Server**.

## Deployment

This is a static site, so no build command or output directory is required.

### Vercel
- Framework Preset: Other
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty

`vercel.json` is included as the deployment configuration.

## Rollback evidence

See `ROLLBACK.md` for the exact Git/Vercel rollback procedure and evidence checklist required for the internship submission.

## Interview questions

### 1. How would you generate a random hex color?
Generate six random values from `0-9` and `A-F`, then prefix the result with `#`.

### 2. What is the Clipboard API used for?
It provides browser APIs for reading and writing clipboard data. This project uses `navigator.clipboard.writeText()` to copy a HEX string.

### 3. How can you give the user feedback after copying?
Update a status element immediately after the copy Promise resolves, for example: `#3A7BD5 copied to clipboard ✓`.

## References

- MDN: Math.random()
- MDN: Clipboard API / Clipboard.writeText()
