"use client";

import React, { useState } from "react";
import { FilterType } from "../app/types/FilterType";

type FiltersArgType = {
  setSearchingTitle: (value: string | null) => void;
  setSearchingChannel: (value: string | null) => void;
  setSearchingDescription: (value: string | null) => void;
  display: "none" | "block";
};

const Filters: React.FC<FiltersArgType> = ({
  setSearchingTitle,
  setSearchingChannel,
  setSearchingDescription,
  display,
}) => {
  const [searchedTitle, setSearchedTitleLocal] = useState<string | null>(null);
  const [searchedChannel, setSearchedChannelLocal] = useState<string | null>(
    null
  );
  const [searchedDescription, setSearchedDescriptionLocal] = useState<
    string | null
  >(null);

  // Handle changes in the input fields, but don't update parent state yet
  function SetFilterText(input: string, type: FilterType) {
    switch (type) {
      case FilterType.Title:
        setSearchedTitleLocal(input);
        break;
      case FilterType.Channel:
        setSearchedChannelLocal(input);
        break;
      case FilterType.Description:
        setSearchedDescriptionLocal(input);
        break;
    }
  }

  // Handle the search action when the button is clicked
  function Search() {
    // Only trigger the state update in the parent component when the search button is clicked
    setSearchingTitle(searchedTitle);
    setSearchingChannel(searchedChannel);
    setSearchingDescription(searchedDescription);

    // Optionally, you can log the search values for debugging
    console.log(
      `${searchedTitle} - ${searchedChannel} - ${searchedDescription}`
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
              value={searchedTitle || ""}
              onChange={(e) => SetFilterText(e.target.value, FilterType.Title)}
              type="text"
              placeholder="react in 3 minutes..."
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Channel Name Filter */}
          <div className="flex flex-col">
            <label htmlFor="channel" className="mb-1">
              Channel Name:
            </label>
            <input
              id="channel"
              name="channel"
              value={searchedChannel || ""}
              onChange={(e) =>
                SetFilterText(e.target.value, FilterType.Channel)
              }
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
              value={searchedDescription || ""}
              onChange={(e) =>
                SetFilterText(e.target.value, FilterType.Description)
              }
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
