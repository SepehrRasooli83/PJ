"use client";

import React from "react";
import { FilterType } from "../app/types/FilterType";
import { useFilterContext } from "../contexts/FiltersContext";

type FiltersProps = {
  display: "none" | "block";
  handleSearch: () => void; // Function to trigger search
};

const Filters: React.FC<FiltersProps> = ({ display, handleSearch }) => {
  //#region Filter Context
  const {
    searchedTitle,
    searchedChannel,
    searchedDescription,
    setSearchedTitle,
    setSearchedChannel,
    setSearchedDescription,
  } = useFilterContext();
  //#endregion

  return (
    <div
      style={{ display }}
      className="p-3 bg-[#e6f2ff] border-t-4 border-[#0080FF] rounded-t-2xl"
    >
      <form className="space-y-4 bg-[#e6f2ff]">
        <div className="w-full text-slate-600 border border-slate-300 justify-center p-4 gap-4 rounded-lg shadow-md">
          <div className="flex space-x-4 mb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-4">
              <input
                id="title"
                value={searchedTitle || ""}
                onChange={(e) => setSearchedTitle(e.target.value)}
                className="bg-[#fff] text-zinc-400 font-mono ring-1 ring-[#3399ff] focus:ring-2 focus:ring-[#0080FF] outline-none duration-300 placeholder:text-xs placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md w-full"
                autoComplete="off"
                placeholder="Title like CSharp..."
                name="text"
                type="text"
              />

              <input
                id="channel"
                value={searchedChannel || ""}
                onChange={(e) => setSearchedChannel(e.target.value)}
                className="bg-[#fff] text-zinc-400 font-mono ring-1 ring-[#3399ff] focus:ring-2 focus:ring-[#0080FF] outline-none duration-300 placeholder:text-xs placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md w-full"
                autoComplete="off"
                placeholder="Channel like FreeCodeCamp..."
                name="text"
                type="text"
              />

              <input
                id="description"
                value={searchedDescription || ""}
                onChange={(e) => setSearchedDescription(e.target.value)}
                className="bg-[#fff] text-zinc-400 font-mono ring-1 ring-[#3399ff] focus:ring-2 focus:ring-[#0080FF] outline-none duration-300 placeholder:text-xs placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md w-full"
                autoComplete="off"
                placeholder="Description..."
                name="text"
                type="text"
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            type="submit"
            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-md bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0080FF] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Explore
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
