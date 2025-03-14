import { atom } from 'nanostores';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = window.localStorage ? localStorage.getItem('theme') : null;
    if (storedTheme) {
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      return storedTheme;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', prefersDark);
    return theme;
  }
  return 'dark';
};

export const themeStore = atom(getInitialTheme());

export const toggleTheme = () => {
  themeStore.set(themeStore.get() === 'light' ? 'dark' : 'light');
};

themeStore.subscribe((theme) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
});
