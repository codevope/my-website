import { atom } from "nanostores";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      return storedTheme;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", prefersDark);
    localStorage.setItem("theme", theme);
    return theme;
  }
  return "dark";
};

export const themeStore = atom(getInitialTheme());

export const toggleTheme = () => {
  const newTheme = themeStore.get() === "light" ? "dark" : "light";
  themeStore.set(newTheme);
  localStorage.setItem("theme", newTheme);
};

themeStore.subscribe((theme) => {
  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
});
