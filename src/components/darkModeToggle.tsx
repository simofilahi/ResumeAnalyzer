import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-80"
      //   style={{ visibility: isDarkMode ? "visible" : "hidden" }}
    >
      <div
        className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer"
        onClick={handleSwitchClick}
      >
        <FaMoon
          className="absolute text-gray-800 transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarkMode ? 0 : 1,
            transform: isDarkMode ? "translateX(0)" : "translateX(-20px)",
          }}
        />
        <FaSun
          className="absolute text-yellow-500 transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarkMode ? 1 : 0,
            transform: isDarkMode ? "translateX(20px)" : "translateX(0)",
          }}
        />
      </div>
    </div>
  );
}

export default DarkModeToggle;
