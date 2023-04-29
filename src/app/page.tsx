"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import ChatPage from "./chatBot";
import LandingPage from ".";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPage />
    </main>
  );
}
