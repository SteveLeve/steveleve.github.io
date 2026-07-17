document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  const root = document.documentElement;
  const toggles = document.querySelectorAll('[data-theme-toggle], .theme-toggle');
  const storageKey = 'preferred-color-theme';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let storageAvailable = true;

  try {
    const testKey = '__theme-test__';
    localStorage.setItem(testKey, 'ok');
    localStorage.removeItem(testKey);
  } catch (err) {
    storageAvailable = false;
  }

  const getStoredTheme = () => {
    if (!storageAvailable) return null;
    const value = localStorage.getItem(storageKey);
    return value === 'light' || value === 'dark' ? value : null;
  };

  const storeTheme = theme => {
    if (!storageAvailable) return;
    localStorage.setItem(storageKey, theme);
  };

  const clearStoredTheme = () => {
    if (!storageAvailable) return;
    localStorage.removeItem(storageKey);
  };

  const updateToggleUI = theme => {
    const toDark = theme === 'light';
    const label = toDark ? 'Switch to dark theme' : 'Switch to light theme';
    toggles.forEach(btn => {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });
  };

  const applyTheme = theme => {
    root.setAttribute('data-theme', theme);
    updateToggleUI(theme);
  };

  const storedTheme = getStoredTheme();
  const systemTheme = mediaQuery.matches ? 'dark' : 'light';
  applyTheme(storedTheme || systemTheme);

  const handleMediaChange = event => {
    if (getStoredTheme()) return;
    applyTheme(event.matches ? 'dark' : 'light');
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleMediaChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleMediaChange);
  }

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      const latestSystem = mediaQuery.matches ? 'dark' : 'light';
      if (next === latestSystem) {
        clearStoredTheme();
      } else {
        storeTheme(next);
      }
    });
  });
});
