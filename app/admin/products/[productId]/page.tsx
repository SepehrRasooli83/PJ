'use client';

import mongoose from 'mongoose';
import { useParams } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';

type ProductState = {
  title: string;
  slug: string;
  description: string;
  image_url: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  categoryId:mongoose.Types.ObjectId | null
};

type Action =
  | { type: 'SET_FIELD'; field: keyof ProductState; value: string }
  | { type: 'SET_ALL'; payload: ProductState };

const initialState: ProductState = {
  title: '',
  slug: '',
  description: '',
  image_url: '',
  meta_title: '',
  meta_description: '',
  meta_keywords: '',
  categoryId:null
};

const reducer = (state: ProductState, action: Action): ProductState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ALL':
      return { ...action.payload };
    default:
      return state;
  }
};

const ProductEdit = () => {
  const params = useParams();
  const [productId, setproductId] = useState<string | undefined>(undefined);
  const [state, dispatch] = useReducer(reducer, initialState); // Initialize reducer
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    if (params.productId) {
      setproductId(params.productId.toString());
    }
    
    const fetchById = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: 'SET_ALL', payload: data }); // Populate the form with fetched data
        } else {
          console.error('Product not found');
        }
      } catch (err) {
        console.error('Error fetching Product:', err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchById();
    }
  }, [params.ProductId, productId]);

  // Handle loading and rendering the Product
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (field: keyof ProductState, value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        console.log('Product updated successfully');
        alert('Product updated');
      } else {
        console.error('Failed to update Product');
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

export default ProductEdit;
