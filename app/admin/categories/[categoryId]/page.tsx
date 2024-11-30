'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategoryEdit = () => {
  const params = useParams();
  const [catId, setCatId] = useState<string | undefined>(undefined); // Initialize with undefined

  useEffect(() => {
    // Ensure that we only update the state once the params.id is available
    if (params.categoryId) {
      setCatId(params.categoryId.toString());
    }

    

  }, [params.categoryId]); // Dependency on params.id to update when it changes

  return (
    <>
      <div>
        <h1>{`id == ${catId}`}</h1>
      </div>
    </>
  );
};

export default CategoryEdit;
