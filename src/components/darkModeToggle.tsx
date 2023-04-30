import { useDarkMode } from "@src/hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setToggleDarkMode] = useDarkMode();
  const handleToggle = () => {
    setToggleDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <FaSun className="text-yellow-400" />
      </div>
      <div
        className={`w-12 h-6 rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } p-1 flex items-center cursor-pointer`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
            isDarkMode ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      <div className="ml-2">
        <FaMoon className="text-gray-500" />
      </div>
    </div>
  );
};

export default DarkModeToggle;
