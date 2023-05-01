import { useDarkMode } from "@src/hooks/useTheme";
import Image from "next/image";

const Logo = ({ size = 40, showTitle = true }) => {
  const [isDark] = useDarkMode();
  return (
    <a href="/" className="flex items-center space-x-2">
      <Image
        className="w-auto"
        src="/talentscan.png"
        alt="Talent Scan logo"
        width={size}
        height={size}
      />
      {showTitle && (
        <>
          <p
            className={`hidden md:block ${
              isDark ? "text-white" : "text-gray-900"
            } font-sans font-bold text-gray-900 text-2xl`}
          >
            TScan
          </p>
        </>
      )}
    </a>
  );
};

export default Logo;
