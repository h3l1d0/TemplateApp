// src/components/ThemeToggle.tsx
import { useDarkMode } from "../../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark((d) => !d)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl transition"
      aria-label="Toggle Theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}