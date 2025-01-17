"use client";

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/CommonComponents/Navbar";
import Footer from "../../components/CommonComponents/Footer";
import { FilterProvider } from "../../contexts/FiltersContext";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FilterProvider>
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
    </FilterProvider>
  );
}
