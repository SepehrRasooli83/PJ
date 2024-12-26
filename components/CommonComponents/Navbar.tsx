import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-[#4379F2] border-b border-[#FFEB00]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#6EC207] font-bold text-lg">
          <Link href="http://localhost:3000/home">
            <Image
              src="/Logo.png" // Path relative to the public directory
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Middle Menu */}
        <div className="flex space-x-6 text-[#117554]">
          <a
            href="#search"
            className="hover:text-[#4379F2] font-medium transition-colors"
          >
            Search
          </a>
          <a
            href="#statistics"
            className="hover:text-[#4379F2] font-medium transition-colors"
          >
            Statistics
          </a>
        </div>

        {/* Sign Up */}
        <div>
          <button className="bg-[#4379F2] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#6EC207] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
