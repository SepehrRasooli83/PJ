import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StepBar from "@/components/StepComponents/StepBar";
import { StepType } from "./types/StepTypes";

export const metadata: Metadata = {
  title: "Choose the Gift you like...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
          <div>
            <StepBar currentStep={StepType.Product} />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
