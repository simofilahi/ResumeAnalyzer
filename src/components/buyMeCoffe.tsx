import { useDarkMode } from "@src/hooks/useTheme";
import { FaHeart } from "react-icons/fa";

const SupportMessage = () => {
  const [isDark] = useDarkMode();
  return (
    <div
      className={`hidden font-bold md:block mx-2 ${
        isDark ? "text-white" : "text-gray-900"
      } px-[1px]  flex items-center justify-center`}
    >
      <p className="mx-2 inline">
        Help us by supporting our hosting and AI API costs
      </p>
      <FaHeart className="inline text-red-500" />
    </div>
  );
};

const BuyMeCoffeeButton = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/forudevapp"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 flex flex-row item-center"
    >
      <SupportMessage />
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
        alt="Buy Me A Coffee"
        height="24"
        width="108"
        className="rounded-full "
      />
    </a>
  );
};

export default BuyMeCoffeeButton;
