const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const status = document.getElementById("status");

const SWATCH_COUNT = 5;
const HEX_CHARS = "0123456789ABCDEF";

function randomHexColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
  }
  return hex;
}

function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r) + (0.587 * g) + (0.114 * b);
  return luminance > 160 ? "#18233f" : "#ffffff";
}

function generatePalette() {
  palette.innerHTML = "";
  status.textContent = "";

  for (let i = 0; i < SWATCH_COUNT; i++) {
    const color = randomHexColor();
    const swatch = document.createElement("button");

    swatch.type = "button";
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    swatch.style.color = getTextColor(color);
    swatch.setAttribute("aria-label", `Copy ${color}`);

    swatch.innerHTML = `
      <span class="swatch-info">
        <span class="hex">${color}</span>
        <span class="hint">Click to copy</span>
      </span>
    `;

    swatch.addEventListener("click", () => copyColor(color));
    palette.appendChild(swatch);
  }
}

async function copyColor(color) {
  try {
    await navigator.clipboard.writeText(color);
    status.textContent = `${color} copied to clipboard ✓`;
  } catch (error) {
    // Fallback for browsers/environments where Clipboard API is unavailable.
    const input = document.createElement("input");
    input.value = color;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    status.textContent = `${color} copied ✓`;
  }

  window.clearTimeout(copyColor.timer);
  copyColor.timer = window.setTimeout(() => {
    status.textContent = "";
  }, 2200);
}

generateBtn.addEventListener("click", generatePalette);
generatePalette();
