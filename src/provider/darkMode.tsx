import React, { useEffect } from "react";
import { useState } from "react";
import { getData, storeData } from "../utils";

export const DarkModeContext = React.createContext<any>(null);

const DarkModeProvider = ({ children }: any) => {
  const [isDark, setDark] = useState(false);

  const setIsDark = (isDark: boolean) => {
    console.log({ isDark });
    setDark((isDark) => !isDark);
    storeData("isDark", !isDark.toString());
  };

  useEffect(() => {
    (function () {
      const value = getData("isDark");

      if (value === "true") {
        setDark(true);
      }
    })();
  }, []);

  console.log("rerender");

  return (
    <DarkModeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
