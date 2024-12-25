"use client";

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/CommonComponents/Navbar";
import Footer from "../../components/CommonComponents/Footer";

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
