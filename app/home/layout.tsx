"use client";

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/CommonComponents/Navbar";
import Footer from "../../components/CommonComponents/Footer";
import { FilterProvider } from "../../contexts/FiltersContext";
import { useState } from "react";
import VideoCarousel from "../../components/VideosCarousel";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [videos, setVideos] = useState<any[]>([]); // Store videos globally

  return (
    <FilterProvider>
      <SessionProvider>
        <header>
          <nav>
            <Navbar setVideos={setVideos} /> {/* Pass setVideos to Navbar */}
          </nav>
        </header>
        <main>
          {children}
          <VideoCarousel videos={videos} /> {/* Pass videos to VideoCarousel */}
        </main>
        <footer style={{ paddingTop: "20px" }}>
          <Footer />
        </footer>
      </SessionProvider>
    </FilterProvider>
  );
}
