"use client";

import React from "react";
import { FilterType } from "../app/types/FilterType";
import { useFilterContext } from "../contexts/FiltersContext";

type FiltersProps = {
  display: "none" | "block";
  handleSearch: () => void; // Function to trigger search
};

const Filters: React.FC<FiltersProps> = ({ display, handleSearch }) => {
  const {
    searchedTitle,
    searchedChannel,
    searchedDescription,
    setSearchedTitle,
    setSearchedChannel,
    setSearchedDescription,
  } = useFilterContext();

  return (
    <div
      style={{
        display,
        backgroundColor: "#f8fafc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <form className="space-y-4">
        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              value={searchedTitle || ""}
              onChange={(e) => setSearchedTitle(e.target.value)}
              type="text"
              placeholder="react in 3 minutes..."
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="channel">Channel Name:</label>
            <input
              id="channel"
              value={searchedChannel || ""}
              onChange={(e) => setSearchedChannel(e.target.value)}
              type="text"
              placeholder="free code camp..."
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              value={searchedDescription || ""}
              onChange={(e) => setSearchedDescription(e.target.value)}
              type="text"
              placeholder="this video is about..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          type="button"
          className="w-auto p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
