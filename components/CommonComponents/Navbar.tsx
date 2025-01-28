"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFilterContext } from "../../contexts/FiltersContext";
import Filters from "../Filters";
import { FilterType } from "../../app/types/FilterType";
import axios from "axios";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";

// #region Types

type NavbarProps = {
  setVideos: (videos: any[]) => void;
  setArticles: (articles: any[]) => void;
};

// #endregion

const Navbar: React.FC<NavbarProps> = ({ setVideos, setArticles }) => {
  // #region State and Context

  const { searchedTitle, searchedChannel, searchedDescription } =
    useFilterContext();
  const [display, setDisplay] = useState<"none" | "block">("none");
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInButtonOpen, setIsSignInButtonOpen] = useState(false);

  // #endregion

  // #region Handlers

  const OpenFilters = () => {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  };

  const toggleArrow = () => {
    setIsOpen(!isOpen);
    OpenFilters();
  };

  const toggleSignInDropdown = () => {
    setIsSignInButtonOpen(!isSignInButtonOpen);
  };

  const handleSearch = async () => {
    try {
      const query =
        searchedTitle || searchedChannel || searchedDescription || "";

      let filterType = FilterType.Description;
      if (searchedTitle) {
        filterType = FilterType.Title;
      } else if (searchedChannel) {
        filterType = FilterType.Channel;
      }

      console.log("Calling videos API with:", query, filterType);

      localStorage.setItem("lastSearchedQuery", query);
      localStorage.setItem("lastSearchedFilterType", filterType);

      const articlesResponse = await axios.get(`/api/articles?q=${query}`);
      if (articlesResponse.status === 200) {
        console.log("Fetched articles successfully");
        setArticles(articlesResponse.data);
      }

      const response = await axios.get("/api/videos", {
        params: { q: query, filterType: filterType },
      });

      if (response.status === 200) {
        console.log("Fetched videos successfully", response.data);
        setVideos(response.data);
      }
    } catch (error) {
      console.error("Error fetching videos or articles:", error);
    }
  };

  // #endregion

  // #region Effects

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
        const response = await axios.get(`/api/articles?q=${Initialq}`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchInitialVideos();
    fetchInitialArticles();
  }, []);

  // #endregion

  // #region Render

  return (
    <>
      <nav
        className="max-h-auto border-b-4 border-[#0080FF] rounded-b-2xl bg-[#f2f8ff]"
        style={{
          color: "#555454",
        }}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* LOGO */}
          <div className="text-[#555454] font-bold text-lg">
            <Link href="http://localhost:3000/home">
              <Image
                src="/FinalLogo.png"
                alt="Logo"
                width={120}
                height={30}
                className="w-[120px] md:w-[150px] lg:w-[140px] h-auto"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="px-2 flex space-x-10">
            <a
              href="#home"
              className="pe-5 flex items-center hover:border-b-2 hover:border-[#0080FF] hover:text-[#0080FF] font-medium transition-colors"
            >
              <MdOutlineTravelExplore className="text-[#004080] mr-1" />
              Explore
            </a>

            <a
              href="#my-statistics"
              className="ps-5 flex items-center hover:border-b-2 hover:border-[#0080FF] hover:text-[#0080FF] font-medium transition-colors"
            >
              <GiProgression className="text-[#004080] mr-1" />
              Progress
            </a>
          </div>

          {/* Buttons */}
          <div className="relative w-md">
            <button
              onClick={toggleSignInDropdown}
              className="drop-shadow-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 border-0 rounded-lg text-lg text-white bg-gradient-to-l from-[#0080FF] to-[#ec1393] hover:from-[#ec1393] hover:to-[#0080FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Begin
            </button>

            {isSignInButtonOpen && (
              <div className="relative font-semibold mt-2 left-0 w-full">
                <div>
                  <button className="px-2 drop-shadow-l flex w-full rounded-full shadow-lg border-[3px] border-black-500 bg-[#f1f1f1] hover:border-[#0080FF] hover:text-[#004080]">
                    Sign In
                    <IoMdLogIn className="ml-1 mt-[4px] bg-[#f1f1f1]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filters Button */}
        <div className="px-5 flex justify-center container">
          <button
            className="py-2 justify-center text-md w-[170px] rounded-tl-lg rounded-tr-lg px-2 text-white bg-[#0080FF] py-0 flex items-center gap-2"
            type="button"
            onClick={toggleArrow}
          >
            Search
            <AiFillCaretDown
              className={`text-[#fff] bg-[#0080FF] transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <Filters handleSearch={handleSearch} display={display} />
      </nav>
    </>
  );

  // #endregion
};

export default Navbar;
