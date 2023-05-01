import React, { useEffect } from "react";
import { useState } from "react";
import { getData, storeData } from "../utils";

export const DarkModeContext = React.createContext<any>(null);

const DarkModeProvider = ({ children }: any) => {
  const [isDark, setDark] = useState(false);

  const setIsDark = (isDark: boolean) => {
    // console.log({ isDark });
    setDark((isDark) => {
      storeData("isDark", !isDark);
      return !isDark;
    });
  };

  useEffect(() => {
    (function () {
      const value = getData("isDark");
      // console.log({ value });

      if (value === "true") {
        setDark(true);
      } else if (value === undefined) storeData("isDark", false);
    })();
  }, []);

  return (
    <DarkModeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
