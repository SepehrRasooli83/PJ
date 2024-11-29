"use client";

import React, { useState } from "react";

const Categories = () => {
  // Fake data for categories (25 categories)
  const categories = [
    {
      id: 1,
      title: "Cat 1",
      slug: "cat-1",
      description: "Description 1",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 1",
      meta_description: "Meta description 1",
      meta_keywords: "keyword1, keyword2",
    },
    {
      id: 2,
      title: "Cat 2",
      slug: "cat-2",
      description: "Description 2",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 2",
      meta_description: "Meta description 2",
      meta_keywords: "keyword3, keyword4",
    },
    {
      id: 3,
      title: "Cat 3",
      slug: "cat-3",
      description: "Description 3",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 3",
      meta_description: "Meta description 3",
      meta_keywords: "keyword5, keyword6",
    },
    {
      id: 4,
      title: "Cat 4",
      slug: "cat-4",
      description: "Description 4",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 4",
      meta_description: "Meta description 4",
      meta_keywords: "keyword7, keyword8",
    },
    {
      id: 5,
      title: "Cat 5",
      slug: "cat-5",
      description: "Description 5",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 5",
      meta_description: "Meta description 5",
      meta_keywords: "keyword9, keyword10",
    },
    {
      id: 6,
      title: "Cat 6",
      slug: "cat-6",
      description: "Description 6",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 6",
      meta_description: "Meta description 6",
      meta_keywords: "keyword11, keyword12",
    },
    {
      id: 7,
      title: "Cat 7",
      slug: "cat-7",
      description: "Description 7",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 7",
      meta_description: "Meta description 7",
      meta_keywords: "keyword13, keyword14",
    },
    {
      id: 8,
      title: "Cat 8",
      slug: "cat-8",
      description: "Description 8",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 8",
      meta_description: "Meta description 8",
      meta_keywords: "keyword15, keyword16",
    },
    {
      id: 9,
      title: "Cat 9",
      slug: "cat-9",
      description: "Description 9",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 9",
      meta_description: "Meta description 9",
      meta_keywords: "keyword17, keyword18",
    },
    {
      id: 10,
      title: "Cat 10",
      slug: "cat-10",
      description: "Description 10",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 10",
      meta_description: "Meta description 10",
      meta_keywords: "keyword19, keyword20",
    },
    {
      id: 11,
      title: "Cat 11",
      slug: "cat-11",
      description: "Description 11",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 11",
      meta_description: "Meta description 11",
      meta_keywords: "keyword21, keyword22",
    },
    {
      id: 12,
      title: "Cat 12",
      slug: "cat-12",
      description: "Description 12",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 12",
      meta_description: "Meta description 12",
      meta_keywords: "keyword23, keyword24",
    },
    {
      id: 13,
      title: "Cat 13",
      slug: "cat-13",
      description: "Description 13",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 13",
      meta_description: "Meta description 13",
      meta_keywords: "keyword25, keyword26",
    },
    {
      id: 14,
      title: "Cat 14",
      slug: "cat-14",
      description: "Description 14",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 14",
      meta_description: "Meta description 14",
      meta_keywords: "keyword27, keyword28",
    },
    {
      id: 15,
      title: "Cat 15",
      slug: "cat-15",
      description: "Description 15",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 15",
      meta_description: "Meta description 15",
      meta_keywords: "keyword29, keyword30",
    },
    {
      id: 16,
      title: "Cat 16",
      slug: "cat-16",
      description: "Description 16",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 16",
      meta_description: "Meta description 16",
      meta_keywords: "keyword31, keyword32",
    },
    {
      id: 17,
      title: "Cat 17",
      slug: "cat-17",
      description: "Description 17",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 17",
      meta_description: "Meta description 17",
      meta_keywords: "keyword33, keyword34",
    },
    {
      id: 18,
      title: "Cat 18",
      slug: "cat-18",
      description: "Description 18",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 18",
      meta_description: "Meta description 18",
      meta_keywords: "keyword35, keyword36",
    },
    {
      id: 19,
      title: "Cat 19",
      slug: "cat-19",
      description: "Description 19",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 19",
      meta_description: "Meta description 19",
      meta_keywords: "keyword37, keyword38",
    },
    {
      id: 20,
      title: "Cat 20",
      slug: "cat-20",
      description: "Description 20",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 20",
      meta_description: "Meta description 20",
      meta_keywords: "keyword39, keyword40",
    },
    {
      id: 21,
      title: "Cat 21",
      slug: "cat-21",
      description: "Description 21",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 21",
      meta_description: "Meta description 21",
      meta_keywords: "keyword41, keyword42",
    },
    {
      id: 22,
      title: "Cat 22",
      slug: "cat-22",
      description: "Description 22",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 22",
      meta_description: "Meta description 22",
      meta_keywords: "keyword43, keyword44",
    },
    {
      id: 23,
      title: "Cat 23",
      slug: "cat-23",
      description: "Description 23",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 23",
      meta_description: "Meta description 23",
      meta_keywords: "keyword45, keyword46",
    },
    {
      id: 24,
      title: "Cat 24",
      slug: "cat-24",
      description: "Description 24",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 24",
      meta_description: "Meta description 24",
      meta_keywords: "keyword47, keyword48",
    },
    {
      id: 25,
      title: "Cat 25",
      slug: "cat-25",
      description: "Description 25",
      img_url: "https://via.placeholder.com/150",
      meta_title: "Meta title 25",
      meta_description: "Meta description 25",
      meta_keywords: "keyword49, keyword50",
    },
  ];

  // Pagination state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of categories for the current page
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-800 text-white shadow-lg rounded-lg">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">
          Category List
        </h3>
        <div className="overflow-x-auto rounded-lg bg-gray-700">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-600 text-gray-300">
              <tr>
                <th className="px-6 py-3 text-left">#</th> {/* Number Column */}
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Slug</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Meta Title</th>
                <th className="px-6 py-3 text-left">Meta Description</th>
                <th className="px-6 py-3 text-left">Meta Keywords</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category, index) => (
                <tr
                  key={category.id}
                  className="bg-gray-700 hover:bg-gray-600 border-b border-gray-500"
                >
                  <td className="px-6 py-4">
                    {indexOfFirstCategory + index + 1}
                  </td>{" "}
                  {/* Display number */}
                  <td className="px-6 py-4">{category.title}</td>
                  <td className="px-6 py-4">{category.slug}</td>
                  <td className="px-6 py-4">{category.description}</td>
                  <td className="px-6 py-4">
                    <img
                      src={category.img_url}
                      alt={category.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4">{category.meta_title}</td>
                  <td className="px-6 py-4">{category.meta_description}</td>
                  <td className="px-6 py-4">{category.meta_keywords}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1 ? "bg-blue-600" : "bg-gray-600"
              } text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-300">
          Create New Category
        </h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-300"
            >
              Slug
            </label>
            <input
              name="slug"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <input
              name="description"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="img_url"
              className="block text-sm font-medium text-gray-300"
            >
              Image URL
            </label>
            <input
              name="img_url"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="meta_title"
              className="block text-sm font-medium text-gray-300"
            >
              Meta Title
            </label>
            <input
              name="meta_title"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="meta_description"
              className="block text-sm font-medium text-gray-300"
            >
              Meta Description
            </label>
            <input
              name="meta_description"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="meta_keywords"
              className="block text-sm font-medium text-gray-300"
            >
              Meta Keywords
            </label>
            <input
              name="meta_keywords"
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
