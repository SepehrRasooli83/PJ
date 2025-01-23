"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFilterContext } from "../../contexts/FiltersContext";
import Filters from "../Filters";
import { FilterType } from "../../app/types/FilterType";
import axios from "axios";
import { useEffect } from "react";
import { parseString } from "xml2js";

type NavbarProps = {
  setVideos: (videos: any[]) => void; // Accept setVideos as a prop
  setArticles: (articles: any[]) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setVideos, setArticles }) => {
  const { searchedTitle, searchedChannel, searchedDescription } =
    useFilterContext(); // Destructure state values instead of setters
  const [display, setDisplay] = useState<"none" | "block">("none");

  const OpenFilters = () => {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  };

  useEffect(() => {
    const initialQuery = localStorage.getItem("lastSearchedQuery") || "";
    const initialFilterType =
      localStorage.getItem("lastSearchedFilterType") || "";

    async function fetchInitialVideos() {
      try {
        const response = await axios.get("/api/videos", {
          params: { q: initialQuery, filterType: initialFilterType },
        });

        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    const fetchInitialArticles = async () => {
      try {
        const Initialq = localStorage.getItem("lastSearchedQuery") || "";

        // Send the topic as a query parameter to the API
        const response = await axios.get(`/api/articles?q=${Initialq}`);

        // Set the articles state with the response data
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchInitialVideos();
    fetchInitialArticles();
  }, []);

  const handleSearch = async () => {
    try {
      // Use the actual values from context, not the setter functions
      const query =
        searchedTitle || searchedChannel || searchedDescription || "";

      let filterType = FilterType.Description; // Default to Description
      if (searchedTitle) {
        filterType = FilterType.Title;
      } else if (searchedChannel) {
        filterType = FilterType.Channel;
      }

      console.log("Calling videos API with:", query, filterType);

      //save user's last search in localstorage to fetch initial videos
      localStorage.setItem("lastSearchedQuery", query);
      localStorage.setItem("lastSearchedFilterType", filterType);

      //fetching articles
      const articlesResponse = await axios.get(`/api/articles?q=${query}`);
      if (articlesResponse.status === 200) {
        console.log("fetched articles successfully");
        setArticles(articlesResponse.data);
      }

      //fetching videos
      const response = await axios.get("/api/videos", {
        params: { q: query, filterType: filterType },
      });

      if (response.status === 200) {
        console.log("Fetched videos successfully", response.data);
        setVideos(response.data); // Update global videos state
      }
    } catch (error) {
      console.error("Error fetching videos or articles:", error);
    }
  };

  return (
    <>
      <nav style={{ backgroundColor: "#F5F5DC", color: "#555454" }}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-[#555454] font-bold text-lg">
            <Link href="http://localhost:3000/home">
              <Image src="/FinalLogo.png" alt="Logo" width={150} height={30} />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a
              href="#home"
              className="hover:text-[#0080FF] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#my-statistics"
              className="hover:text-[#0080FF] font-medium transition-colors"
            >
              My Statistics
            </a>
          </div>

          <div>
            <button className="bg-[#0080FF] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#555454] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <div className="px-5 flex container max-w-full">
        <button className="float-right" type="button" onClick={OpenFilters}>
          Filters
        </button>
      </div>

      {/* Filters Component */}
      <Filters handleSearch={handleSearch} display={display} />
    </>
  );
};

export default Navbar;
