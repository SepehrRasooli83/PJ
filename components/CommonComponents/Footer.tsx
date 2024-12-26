import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* First Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-gray-300">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Placeholder icons (use SVGs or FontAwesome icons as needed) */}
          <a href="#facebook" className="hover:text-blue-600">
            <i className="fab fa-facebook-f">FB</i>
          </a>
          <a href="#twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter">TW</i>
          </a>
          <a href="#instagram" className="hover:text-pink-500">
            <i className="fab fa-instagram">IG</i>
          </a>
          <a href="#linkedin" className="hover:text-blue-700">
            <i className="fab fa-linkedin-in">LN</i>
          </a>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#statistics" className="hover:text-green-600">
            Statistics
          </a>
          <a href="#search" className="hover:text-green-600">
            Search
          </a>
          <a href="#about-us" className="hover:text-green-600">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-green-600">
            Contact Us
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">
          <Link href="http://localhost:3000/home">
            <Image
              src="/Logo.png" // Path relative to the public directory
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Educatube. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
