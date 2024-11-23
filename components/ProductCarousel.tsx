"use client";

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string; // Image URL of the product
  price: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", image: "/images/product1.jpg", price: "$10" },
  { id: 2, name: "Product 2", image: "/images/product2.jpg", price: "$20" },
  { id: 3, name: "Product 3", image: "/images/product3.jpg", price: "$30" },
  { id: 4, name: "Product 4", image: "/images/product4.jpg", price: "$40" },
  { id: 5, name: "Product 5", image: "/images/product5.jpg", price: "$50" },
  { id: 6, name: "Product 6", image: "/images/product6.jpg", price: "$60" },
  { id: 7, name: "Product 7", image: "/images/product7.jpg", price: "$70" },
  { id: 8, name: "Product 8", image: "/images/product8.jpg", price: "$80" },
];

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  // Get current 4 products based on the current index
  const currentProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ProductCarousel;