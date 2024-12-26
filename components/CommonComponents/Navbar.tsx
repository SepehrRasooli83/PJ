"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Filters from "../Filters";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [display, setDisplay] = useState<"none" | "block">("none");

  async function OpenFilters() {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  }

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
              href="#search"
              className="hover:text-[#0080FF] font-medium transition-colors"
            >
              Search
            </a>
            <a
              href="#statistics"
              className="hover:text-[#0080FF] font-medium transition-colors"
            >
              Statistics
            </a>
          </div>

          {/* Sign Up */}
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
          onClick={() => OpenFilters()}
        >
          Filters
        </button>
      </div>
      {/* Filters Component */}
      <Filters display={display} />
    </>
  );
};

export default Navbar;
