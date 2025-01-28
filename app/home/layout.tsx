"use client";

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/CommonComponents/Navbar";
import Footer from "../../components/CommonComponents/Footer";
import { FilterProvider } from "../../contexts/FiltersContext";
import { useState } from "react";
import VideoCarousel from "../../components/VideosCarousel";
import ArticlesGrid from "../../components/ArticlesGrid";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [videos, setVideos] = useState<any[]>([]); // Store videos globally
  const [articles, setArticles] = useState<any[]>([]);

  return (
    <FilterProvider>
      <SessionProvider>
        <header>
          <nav>
            <Navbar setVideos={setVideos} setArticles={setArticles} />
          </nav>
        </header>

        <main>
          {children}

          {/* Flex container to display VideoCarousel and ArticlesGrid */}
          <div className="flex flex-row gap-5 p-5 min-h-[calc(100vh-200px)]">
            {/* VideoCarousel */}
            <div className="flex-1 overflow-hidden">
              <VideoCarousel videos={videos} />
            </div>

            {/* ArticlesGrid */}
            <div className="flex-1 overflow-hidden overflow-y-auto">
              <ArticlesGrid articles={articles} />
            </div>
          </div>
        </main>

        <footer className="pt-5">
          <Footer />
        </footer>
      </SessionProvider>
    </FilterProvider>
  );
}
