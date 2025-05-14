// --- Classified Asset Registry (Base64‐encoded URLs) ---
const ASSETS = [
  {
    name: "Synesthetic Logs",
    b64url: "bG9ncy9zZXJhcGhpbmExLm1wMw==" // atob → "logs/seraphina1.mp3"
  },
  {
    name: "Safe-Route Maps",
    b64url: "bWFwcy9wYXRjaDEucGRm"           // atob → "maps/patch1.pdf"
  },
  {
    name: "Counter-Resonance Schematic",
    b64url: "c2NoZW1hdGljcy92YWxlMS5wbmc=" // atob → "schematics/vale1.png"
  }
];

const VALID_TOKEN = "ASCEND2025";  // change as desired

// Elements
const form = document.getElementById('mesh-form');
const loginContainer = document.getElementById('login-container');
const meshContent = document.getElementById('mesh-content');
const streamsContainer = document.getElementById('streams');

// Utility to decode Base64 URL and create a link
function createStreamLink(name, b64url) {
  const url = atob(b64url);
  const div = document.createElement('div');
  div.className = 'stream';
  const h3 = document.createElement('h3');
  h3.textContent = name;
  const p = document.createElement('p');
  const a = document.createElement('a');
  a.href = url;
  a.textContent = "Download";
  a.setAttribute('download', '');
  a.rel = 'noopener noreferrer';
  p.appendChild(a);
  div.appendChild(h3);
  div.appendChild(p);
  return div;
}

// Handle form submission
form.addEventListener('submit', e => {
  e.preventDefault();
  const token = document.getElementById('token').value.trim();
  if (token === VALID_TOKEN) {
    // Hide login, show content
    loginContainer.style.display = 'none';
    meshContent.style.display = 'block';

    // Populate streams
    ASSETS.forEach(asset => {
      const linkNode = createStreamLink(asset.name, asset.b64url);
      streamsContainer.appendChild(linkNode);
    });
  } else {
    alert('Invalid token. Access denied.');
  }
});
