// Simple helpers for year + nav active state
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // If you add serverless routing later, this can be extended
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('is-active', href === path);
  });

  // Enable md buttons acting as links (Material Web components support href)
});
