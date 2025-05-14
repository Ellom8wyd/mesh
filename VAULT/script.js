const form = document.getElementById('vault-form');
const content = document.getElementById('vault-content');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (document.getElementById('vault-key').value === 'ECHO-Ω-777') {
    form.style.display = 'none';
    content.style.display = 'block';
    document.querySelector('.status').textContent = 'STATUS: UNLOCKED';
  } else {
    alert('Access Denied.');
  }
});
