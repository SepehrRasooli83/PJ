"use client";

import React, { useEffect, useState } from "react";

type TextFilterType = "title" | "creator" | "description";

type FiltersArgType = {
  display: "none" | "block";
};

const Filters: React.FC<FiltersArgType> = ({ display }) => {
  const [searchedTitle, setSearchedTitle] = useState<string | null>(null);
  const [searchedCreator, setSearchedCreator] = useState<string | null>(null);
  const [searchedDescription, setSearchedDescription] = useState<string | null>(
    null
  );

  async function SetFilterText(input: string, type: TextFilterType) {
    switch (type) {
      case "title":
        setSearchedTitle(input);
        break;
      case "creator":
        setSearchedCreator(input);
        break;
      case "description":
        setSearchedDescription(input);
        break;
    }
  }

  async function Search() {
    console.log(
      `${searchedTitle} - ${searchedCreator} - ${searchedDescription}`
    );
  }

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
          {/* Title Filter */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1">
              Title:
            </label>
            <input
              id="title"
              name="title"
              onChange={(e) => SetFilterText(e.target.value, "title")}
              type="text"
              placeholder="react in 3 minutes..."
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Creator Name Filter */}
          <div className="flex flex-col">
            <label htmlFor="creator" className="mb-1">
              Creator Name:
            </label>
            <input
              id="creator"
              name="creator"
              onChange={(e) => SetFilterText(e.target.value, "creator")}
              type="text"
              placeholder="free code camp..."
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Description Filter */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1">
              Description:
            </label>
            <input
              id="description"
              name="description"
              onChange={(e) => SetFilterText(e.target.value, "description")}
              type="text"
              placeholder="this video is about..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {/* Search Button */}
        <button
          onClick={Search}
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
