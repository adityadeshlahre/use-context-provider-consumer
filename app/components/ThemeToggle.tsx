import { useThemeContext } from "~/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex flex-col items-center justify-center">
      current theme : {theme}
      <br />
      <button className="border-2 border-lime-400" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
