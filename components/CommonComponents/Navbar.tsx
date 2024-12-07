'use client'

import { FaUser, FaSignOutAlt,FaList,FaPowerOff } from "react-icons/fa"; // Install react-icons if you haven't yet
import { FiSearch } from "react-icons/fi"; // For the search icon
import './Navbar.css';
import '@/app/globals.css';
import { SessionProvider,useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <SessionProvider>
      <div className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Section: User and Orders */}

          <div className="tooltip-container">
            <div className="button-content">
              <span className="text">User Panel</span>
              <FaUser />
            </div>

            {/* Tooltip Content */}
            <div className="tooltip-content">
              <div className="social-icons">
                {status === "authenticated" && (
                  <>
                    {/* Show these icons if the user is authenticated */}
                    <a onClick={()=>signOut()} className="social-icon linkedin">
                      <FaPowerOff />
                    </a>
                    <a href="#" className="social-icon twitter">
                      <FaList />
                    </a>
                  </>
                )}
                {status === "unauthenticated" && (
                  <>
                    {/* Show this icon if the user is unauthenticated */}
                    <a href="/user/login" className="social-icon facebook">
                      <FaSignOutAlt />
                      <span className="text-sm mt-1">LogIn</span>
                    </a>
                  </>
                )}
                {status === "loading" && (
                  <>
                    {/* Optionally, show a loading icon or placeholder */}
                    <span className="social-icon loading">Loading...</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Middle Section: Search Bar */}
          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FiSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Right Section: Logo */}
          <div className="text-gray-700 font-semibold text-xl">
            <a href="#" className="hover:text-gray-900">
              Logo
            </a>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
