import { MoonIcon, SunIcon } from "@/components/react/shared/Icons";
import { themeStore, toggleTheme } from "@/stores/themeStore";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const theme = useStore(themeStore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evitar FOUC en SSR

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-all duration-300 relative group"
      aria-label="Cambiar tema"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <span className="text-lg transition-transform duration-300 text-gray-600 dark:text-gray-200 group-hover:scale-110">
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
