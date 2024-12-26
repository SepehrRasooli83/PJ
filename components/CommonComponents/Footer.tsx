import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#F5F5DC", color: "#555454" }}>
      {/* First Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-[#555454]">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#facebook" className="hover:text-[#0080FF]">
            <i className="fab fa-facebook-f">FB</i>
          </a>
          <a href="#twitter" className="hover:text-[#0080FF]">
            <i className="fab fa-twitter">TW</i>
          </a>
          <a href="#instagram" className="hover:text-[#0080FF]">
            <i className="fab fa-instagram">IG</i>
          </a>
          <a href="#linkedin" className="hover:text-[#0080FF]">
            <i className="fab fa-linkedin-in">LN</i>
          </a>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#statistics" className="hover:text-[#555454]">
            Statistics
          </a>
          <a href="#search" className="hover:text-[#555454]">
            Search
          </a>
          <a href="#about-us" className="hover:text-[#555454]">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-[#555454]">
            Contact Us
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">
          <Link href="http://localhost:3000/home">
            <Image src="/FinalLogo.png" alt="Logo" width={150} height={30} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} Educatube. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
