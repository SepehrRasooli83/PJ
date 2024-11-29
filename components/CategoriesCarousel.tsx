"use client";

import React, { useState } from "react";

// Sample data: Array of categories
const categories = [
  "Playstation Account",
  "Xbox Account",
  "Freepik Account",
  "PayPal Account",
  "Apple ID",
  "Telegram Premium",
  "Google Play Gift Card",
  "Discord Account",
  "Volume Services",
  "iTunes Gift Card",
  "Call of Duty CP",
  "Netflix Account",
  "Spotify Account",
  "Apple Music Subscription",
  "Skype Credit",
  "YouTube Premium Account",
  "TradingView Subscription",
  "GitHub Account",
  "LightNode Server",
  "NOD32 License",
  "Stars Major (Specify Service)",
  "SoundCloud Account",
  "Steam Account",
  "Hetzner Cloud",
  "ChatGPT Subscription",
  "Canva Account",
  "Epic Games Account",
  "EA Play Account",
  "Twitch Account",
  "Riot Games Points",
  "Figma Premium Account",
  "Notion Pro Subscription",
  "Shopify Store Subscription",
  "Coursera Premium Account",
  "Duolingo Super Version",
];

const CategoryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 20; // Adjusted for demonstration purposes (8 items per page)

  // Function to move backward
  const handleMoveBackward = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // Function to move forward
  const handleMoveForward = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, categories.length - itemsPerPage)
    );
  };

  // Get the current set of categories to display
  const currentCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Carousel Title */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        Categories
      </h2>

      {/* Category Grid */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {currentCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all"
          >
            <span className="text-sm text-gray-700 font-medium text-center">
              {category}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleMoveBackward}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all disabled:bg-gray-200"
        >
          &#8592; Move Backward
        </button>
        <button
          onClick={handleMoveForward}
          disabled={currentIndex + itemsPerPage >= categories.length}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all disabled:bg-gray-200"
        >
          Move Forward &#8594;
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
