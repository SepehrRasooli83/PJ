"use client";

import React, { useState } from "react";

type PaperCarouselProps = {
  title: string;
};

interface Paper {
  id: number;
  name: string;
  image: string; // Image URL of the Paper
  price: string;
}

const Papers: Paper[] = [
  { id: 1, name: "Paper 1", image: "/images/Paper1.jpg", price: "$10" },
  { id: 2, name: "Paper 2", image: "/images/Paper2.jpg", price: "$20" },
  { id: 3, name: "Paper 3", image: "/images/Paper3.jpg", price: "$30" },
  { id: 4, name: "Paper 4", image: "/images/Paper4.jpg", price: "$40" },
  { id: 5, name: "Paper 5", image: "/images/Paper5.jpg", price: "$50" },
  { id: 6, name: "Paper 6", image: "/images/Paper6.jpg", price: "$60" },
  { id: 7, name: "Paper 7", image: "/images/Paper7.jpg", price: "$70" },
  { id: 8, name: "Paper 8", image: "/images/Paper8.jpg", price: "$80" },
];

const PaperCarousel: React.FC<PaperCarouselProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < Papers.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  // Get current 4 Papers based on the current index
  const currentPapers = Papers.slice(currentIndex, currentIndex + 4);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 bg-gray-100 rounded-lg p-6 shadow-lg">
      <div>
        {/* Carousel Title */}
        <h2 className="text-xl font-bold text-gray-700 mb-6">{props.title}</h2>
      </div>
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-2 gap-6">
          {currentPapers.map((Paper) => (
            <div
              key={Paper.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={Paper.image}
                alt={Paper.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-700">
                  {Paper.name}
                </h3>
                <p className="text-sm text-gray-600">{Paper.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-400"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-400"
      >
        &#8594;
      </button>
    </div>
  );
};

export default PaperCarousel;
