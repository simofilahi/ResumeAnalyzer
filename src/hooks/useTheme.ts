import React, { useContext } from "react";
import { DarkModeContext } from "../provider/darkMode";

export const useDarkMode = () => useContext(DarkModeContext);
