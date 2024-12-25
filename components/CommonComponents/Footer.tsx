import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4379F2] text-white">
      {/* First Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-[#FFEB00]">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Placeholder icons (use SVGs or FontAwesome icons as needed) */}
          <a href="#facebook" className="hover:text-[#FFEB00]">
            <i className="fab fa-facebook-f">FB</i>
          </a>
          <a href="#twitter" className="hover:text-[#FFEB00]">
            <i className="fab fa-twitter">TW</i>
          </a>
          <a href="#instagram" className="hover:text-[#FFEB00]">
            <i className="fab fa-instagram">IG</i>
          </a>
          <a href="#linkedin" className="hover:text-[#FFEB00]">
            <i className="fab fa-linkedin-in">LN</i>
          </a>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#statistics" className="hover:text-[#6EC207]">
            Statistics
          </a>
          <a href="#search" className="hover:text-[#6EC207]">
            Search
          </a>
          <a href="#about-us" className="hover:text-[#6EC207]">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-[#6EC207]">
            Contact Us
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#6EC207] font-bold text-lg">Logo</div>

        {/* Copyright */}
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Educatube. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
