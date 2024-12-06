'use client'


import "../globals.css";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import StepBar from "@/components/StepComponents/StepBar";
import { SessionProvider } from "next-auth/react";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <SessionProvider>
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
        </SessionProvider>
      </div>
    </div>
  );
}





