import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFilterContext } from "../../contexts/FiltersContext";
import Filters from "../Filters";
import { FilterType } from "../../app/types/FilterType"; // Import FilterType
import axios from "axios"; // Import axios for API requests

const Navbar: React.FC = () => {
  const { setSearchedTitle, setSearchedChannel, setSearchedDescription } =
    useFilterContext();
  const [display, setDisplay] = useState<"none" | "block">("none");
  const [videos, setVideos] = useState<any[]>([]); // Videos state to store results

  const OpenFilters = () => {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  };

  // Function to handle the search when the user clicks "Search"
  const handleSearch = async () => {
    try {
      const filterType = setSearchedTitle
        ? FilterType.Title
        : setSearchedChannel
        ? FilterType.Channel
        : FilterType.Description;

      const query =
        setSearchedTitle || setSearchedChannel || setSearchedDescription;

      const response = await axios.get("/api/videos", {
        params: {
          q: query,
          filterType: filterType,
        },
      });

      if (response.status === 200) {
        setVideos(response.data); // Update videos with the results
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
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
      <Filters
        setSearchedTitle={setSearchedTitle}
        setSearchedChannel={setSearchedChannel}
        setSearchedDescription={setSearchedDescription}
        display={display}
        setVideos={setVideos} // Pass setVideos to Filters
        handleSearch={handleSearch} // Pass the handleSearch function to Filters
      />

      {/* VideoCarousel */}
      <div className="video-carousel">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="video-item">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </>
  );
};

export default Navbar;
