import DarkModeProvider from "@src/provider/darkMode";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
      <Analytics />
    </DarkModeProvider>
  );
}
