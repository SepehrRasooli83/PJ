'use client';

import { useParams } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';

type CategoryState = {
  title: string;
  slug: string;
  description: string;
  image_url: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
};

type Action =
  | { type: 'SET_FIELD'; field: keyof CategoryState; value: string }
  | { type: 'SET_ALL'; payload: CategoryState };

const initialState: CategoryState = {
  title: '',
  slug: '',
  description: '',
  image_url: '',
  meta_title: '',
  meta_description: '',
  meta_keywords: '',
};

const reducer = (state: CategoryState, action: Action): CategoryState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ALL':
      return { ...action.payload };
    default:
      return state;
  }
};

const CategoryEdit = () => {
  const params = useParams();
  const [catId, setCatId] = useState<string | undefined>(undefined);
  const [state, dispatch] = useReducer(reducer, initialState); // Initialize reducer
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.categoryId) {
      setCatId(params.categoryId.toString());
    }

    const fetchById = async () => {
      try {
        const response = await fetch(`/api/category/${catId}`);
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: 'SET_ALL', payload: data }); // Populate the form with fetched data
        } else {
          console.error('Category not found');
        }
      } catch (err) {
        console.error('Error fetching category:', err);
      } finally {
        setLoading(false);
      }
    };

    if (catId) {
      fetchById();
    }
  }, [params.categoryId, catId]);

  // Handle loading and rendering the category
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (field: keyof CategoryState, value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/category/${catId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        console.log('Category updated successfully');
        alert('Category updated');
      } else {
        console.error('Failed to update category');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
  <div className="max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
    <form method="post" onSubmit={handleSubmit} className="space-y-6">
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
          onChange={(e) => handleChange('title', e.target.value)}
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
          onChange={(e) => handleChange('slug', e.target.value)}
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
          onChange={(e) => handleChange('description', e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="image_url"
          className="block text-sm font-medium text-gray-300"
        >
          Image URL
        </label>
        <input
          name="image_url"
          type="text"
          value={state.image_url || ""}
          onChange={(e) => handleChange('image_url', e.target.value)}
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
          onChange={(e) => handleChange('meta_title', e.target.value)}
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
          onChange={(e) => handleChange('meta_description', e.target.value)}
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
          value={state.meta_keywords || ""}
          onChange={(e) => handleChange('meta_keywords', e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Save
      </button>
    </form>
  </div>
</>
  );
};

export default CategoryEdit;
