import { useDarkMode } from "@src/hooks/useTheme";
import Image from "next/image";

const Logo = () => {
  const [isDark] = useDarkMode();
  return (
    <a
      href="https://www.mixo.io/site/resume-analyzer-fbe4y"
      className="flex items-center space-x-2"
    >
      <Image
        className="w-auto h-8"
        src="/skillScan.png"
        alt="skill Scan logo"
        width={40}
        height={40}
      />
      <p
        className={`${
          isDark ? "text-white" : "text-gray-900"
        } font-sans font-bold text-gray-900 text-2xl`}
      >
        Skill Scan
      </p>
    </a>
  );
};

export default Logo;
