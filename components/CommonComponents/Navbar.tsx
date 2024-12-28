"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Filters from "../Filters";

// Accept the necessary functions as props from MainPage (which is the parent component)
type NavbarProps = {
  setSearchingTitle: (value: string | null) => void;
  setSearchingChannel: (value: string | null) => void;
  setSearchingDescription: (value: string | null) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  setSearchingTitle,
  setSearchingChannel,
  setSearchingDescription,
}) => {
  // State to manage the display of the Filters component (show/hide)
  const [display, setDisplay] = useState<"none" | "block">("none");

  // Toggle the display of the Filters component
  const OpenFilters = () => {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  };

  return (
    <>
      <nav style={{ backgroundColor: "#F5F5DC", color: "#555454" }}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-[#555454] font-bold text-lg">
            <Link href="http://localhost:3000/home">
              <Image src="/FinalLogo.png" alt="Logo" width={150} height={30} />
            </Link>
          </div>

          {/* Middle Menu */}
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

          {/* Sign Up Button */}
          <div>
            <button className="bg-[#0080FF] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#555454] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Filters Button */}
      <div className="px-5 flex container max-w-full">
        <button
          className="float-right"
          type="button"
          onClick={OpenFilters} // Open/Close Filters on button click
        >
          Filters
        </button>
      </div>

      {/* Filters Component */}
      <Filters
        setSearchingTitle={setSearchingTitle}
        setSearchingChannel={setSearchingChannel}
        setSearchingDescription={setSearchingDescription}
        display={display} // Control the visibility of Filters
      />
    </>
  );
};

export default Navbar;
