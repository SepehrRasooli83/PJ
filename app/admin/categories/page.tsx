"use client";

import mongoose from "mongoose";
import React, { useState,useEffect,useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NewCategoryType = {
  title: string,
  slug: string,
  description: string,
  image_url: string,
  meta_title: string,
  meta_description: string,
  meta_keywords: string,
};

type ActionType =
  | { type: "SET_FIELD"; field: keyof NewCategoryType; payload: any }
  | { type: "RESET" };

const Categories = () => {
  

  //#region Fetching Initial Data
  const [categories, setCategories] = useState<any[]>();
  const [isDateFetched,setIsDataFetched] = useState(false);
  
  useEffect(()=>{
    const fetchCategories = async ()=>{
      try{
        const response = await fetch('/api/category');
        if(!response.ok){
          return new Error("Failed to fetch categories");
        }
        const data: any[] = await response.json();
        setCategories(data);
      }catch(err){
        return new Error(`Error: ${err}`);
      }
    }

    if(isDateFetched || categories?.length === 0 || !categories){
      fetchCategories();
    }
  },[isDateFetched])
//#endregion

  //#region Handling Pagination

  // Pagination state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of categories for the current page
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = categories?.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil((categories?.length ?? 0) / itemsPerPage);

  //#endregion

  //#region Creating New Category

  const categoryInitialState : NewCategoryType = {
    title: "",
    slug: "",
    description: "",
    image_url: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
  };

  function categoryReducer(state: NewCategoryType, action: ActionType) {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.payload };
      case "RESET":
        return categoryInitialState;
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(categoryReducer, categoryInitialState);

  const handleChange = (field: keyof NewCategoryType) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: "SET_FIELD", field, payload: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        alert("Category created successfully!");
        dispatch({ type: "RESET" });
        setIsDataFetched(true);
      } else {
        const error = await response.json();
        alert("Error creating category: " + error.message);
      }
    } catch (err) {
      console.error("Error creating category:", err);
      alert("An unexpected error occurred.");
    }
  };

  //#endregion

  //#region Deleting Category

  const handleDelete = async (id:mongoose.Types.ObjectId)=>{
    try{
      const response = await fetch(`/api/category?id=${id.toString()}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
        }
      });
      if(response.ok){
        alert("Category Deleted");
        setIsDataFetched(true);
      }else{
        const error = await response.json();
        alert(`error has been ocured: ${error}`);
      }
    }catch(err){
      console.log(err);
    }
  }   
  
  //#endregion
  
    
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
              {currentCategories?.map((category, index) => (
                <tr
                  key={category._id}
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
                        <Link href={`/admin/categories/${category._id}`}>Edit</Link>
                      </button>
                      <button onClick={()=>handleDelete(category._id)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
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
        <form onSubmit={handleSubmit}>
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
              value={state.title || ""}
              onChange={handleChange("title")}
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
              value={state.slug || ""}
              onChange={handleChange("slug")}
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
              value={state.description || ""}
              onChange={handleChange("description")}
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
              value={state.image_url || ""}
              onChange={handleChange("image_url")}
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
              value={state.meta_title || ""}
              onChange={handleChange("meta_title")}
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
              value={state.meta_description || ""}
              onChange={handleChange("meta_description")}
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
              value={state.meta_keywords || ""}
              onChange={handleChange("meta_keywords")}
              type="text"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Create Category
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Categories;
