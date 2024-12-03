import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import StepBar from "@/components/StepComponents/StepBar";
import { StepType } from "./types/StepTypes";

export const metadata: Metadata = {
  title: "All Services Available...",
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
            <StepBar />
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ paddingTop: "20px" }}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
