import React from "react";
import { FilterType } from "../app/types/FilterType";
import { useFilterContext } from "../contexts/FiltersContext"; // Import the custom hook

type FiltersProps = {
  display: "none" | "block";
  setSearchedTitle: (value: string | null) => void;
  setSearchedChannel: (value: string | null) => void;
  setSearchedDescription: (value: string | null) => void;
  setVideos: (videos: any[]) => void; // Add the setter for videos state
  handleSearch: () => void; // Add the handleSearch function
};

const Filters: React.FC<FiltersProps> = ({
  setSearchedTitle,
  setSearchedChannel,
  setSearchedDescription,
  display,
  setVideos,
  handleSearch, // Receive the handleSearch function
}) => {
  const {
    searchedTitle,
    searchedChannel,
    searchedDescription,
    setSearchedTitle: contextSetSearchedTitle,
    setSearchedChannel: contextSetSearchedChannel,
    setSearchedDescription: contextSetSearchedDescription,
  } = useFilterContext();

  // Handle changes in the input fields
  function SetFilterText(input: string, type: FilterType) {
    switch (type) {
      case FilterType.Title:
        setSearchedTitle(input);
        break;
      case FilterType.Channel:
        setSearchedChannel(input);
        break;
      case FilterType.Description:
        setSearchedDescription(input);
        break;
    }
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

        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleSearch(); // Trigger search
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
