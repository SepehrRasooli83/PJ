'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CategoryModelType } from '@/models/CategoryModel';

const CategoryEdit = () => {
  const params = useParams();
  const [catId, setCatId] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<any>(null); // 'any' is fine if you don't have a strong type for category
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    if (params.categoryId) {
      setCatId(params.categoryId.toString());
    }

    const fetchById = async () => {
      try {
        const response = await fetch(`/api/category/${catId}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data); // Set the fetched category
        } else {
          console.error('Category not found');
        }
      } catch (err) {
        console.error('Error fetching category:', err);
      } finally {
        setLoading(false); // Stop loading when the fetch is complete (success or error)
      }
    };

    if (catId) {
      fetchById();
    }
  }, [params.categoryId, catId]); // Re-run when params.categoryId or catId changes

  // Handle loading and rendering the category
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!category) {
    return <p>Category not found</p>; // Handle the case where category is not available
  }

  return (
    <>
      <div>
        <h2>{category.title}</h2>
        <br />
        <h3>{category.slug}</h3>
        <br />
        <p>{category.description}</p>
        <br />
      </div>
    </>
  );
};

export default CategoryEdit;
