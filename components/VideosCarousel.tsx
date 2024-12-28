"use client";

import React, { useState } from "react";
import Navbar from "./CommonComponents/Navbar";

const VideosCarousel: React.FC = () => {
  // State for the filters
  const [searchedTitle, setSearchedTitle] = useState<string | null>(null);
  const [searchedChannel, setSearchedChannel] = useState<string | null>(null);
  const [searchedDescription, setSearchedDescription] = useState<string | null>(
    null
  );

  // Function to update the filter states
  const updateTitle = (value: string | null) => setSearchedTitle(value);
  const updateChannel = (value: string | null) => setSearchedChannel(value);
  const updateDescription = (value: string | null) =>
    setSearchedDescription(value);

  return (
    <>
      {/* Pass the state update functions to Navbar */}
      <Navbar
        setSearchingTitle={updateTitle}
        setSearchingChannel={updateChannel}
        setSearchingDescription={updateDescription}
      />

      {/* Render filter values in the main page */}
      <div>
        <h3>Applied Filters</h3>
        <p>Title: {searchedTitle}</p>
        <p>Channel: {searchedChannel}</p>
        <p>Description: {searchedDescription}</p>
      </div>
    </>
  );
};

export default VideosCarousel;
