import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = parseInt(localStorage.getItem("darkMode")!);
      setDarkMode(storedValue);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode ? true : false);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode ? 0 : 1));
  };

  return (
    <button onClick={toggleDarkMode} className={`px-4 py-2 rounded-full ${darkMode ? "bg-yellow-400" : "bg-gray-800"} ${darkMode ? "text-gray-900" : "text-white"} transition-colors duration-200`}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
