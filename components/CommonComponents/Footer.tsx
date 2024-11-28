"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Social media icons
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInfoCircle,
} from "react-icons/ai"; // Random icons
import { FiGithub } from "react-icons/fi"; // Another random icon
import { FiInstagram } from "react-icons/fi"; // Another social media icon
import React from "react";

const footerText = [
  "Welcome to our website! We're glad to have you here.",
  "Explore a wide range of products, and find the perfect one for you.",
  "Feel free to contact us if you need help or have any questions.",
  "Your satisfaction is our priority. Enjoy shopping with us!",
  "Join our community for updates, promotions, and more!",
];

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-700">
      {/* First Row */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center flex-wrap">
        {/* Left: Icons */}
        <div className="flex flex-wrap gap-2 w-1/2">
          {" "}
          {/* Reduced gap from gap-4 to gap-2 */}
          <div className="flex flex-wrap w-full justify-around">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaFacebookF size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaTwitter size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaInstagram size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaLinkedinIn size={20} />
            </button>
          </div>
          <div className="flex flex-wrap w-full justify-around mt-4">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <AiOutlineHome size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <AiOutlineMail size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <AiOutlinePhone size={20} />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <AiOutlineInfoCircle size={20} />
            </button>
          </div>
        </div>

        {/* Middle: Text */}
        <div className="w-1/3 text-center px-4">
          <p className="text-sm mb-2">{footerText[1]}</p>
        </div>

        {/* Right: Logo */}
        <div className="w-1/6 text-center">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 hover:text-gray-900"
          >
            <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              Logo
            </span>
          </a>
        </div>
      </div>

      {/* Second Row: Copyright */}
      <div className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 YourWebsiteName. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
