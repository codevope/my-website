import { themeStore, toggleTheme } from '@/stores/themeStore';
import { useStore } from '@nanostores/react';

const ThemeToggle = () => {
  const theme = useStore(themeStore);

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gradient-to-br from-[#FF6F61] to-[#6B5B95] hover:from-[#FF8C78] hover:to-[#8B7CB0] transition-all duration-300 relative group shadow-md hover:shadow-lg"
      aria-label="Cambiar tema"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <span className="text-lg transition-transform duration-300">
          {theme === 'light' ? '🌙' : '☀️'}
        </span>
      </div>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
        Cambiar tema
      </span>
    </button>
  );
};

export default ThemeToggle;