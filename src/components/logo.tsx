import { useDarkMode } from "@src/hooks/useTheme";
import Image from "next/image";

const Logo = ({ size = 40, showTitle = true }) => {
  const [isDark] = useDarkMode();
  return (
    <a
      href="https://www.mixo.io/site/resume-analyzer-fbe4y"
      className="flex items-center space-x-2"
    >
      <Image
        className="w-auto"
        src="/skillScan.png"
        alt="skill Scan logo"
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
            Talent Scan
          </p>
        </>
      )}
    </a>
  );
};

export default Logo;
