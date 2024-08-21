import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer hover:opacity-50"
          onClick={toggleTheme}
        >
          <HiSun className="text-primary text-xl mr-2" /> Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer hover:opacity-50"
          onClick={toggleTheme}
        >
          <HiMoon className="text-primary text-xl mr-2" /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
