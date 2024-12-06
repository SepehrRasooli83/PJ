'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { useEffect } from 'react';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log('We Are In Profile Page');
    // Redirect to login if no session
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    // The redirect should be handled by useEffect, so this won't be reached.
    return null;
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.phone}</h1>
    </div>
  );
}


// import React from 'react'

// const Profile = () => {
//   return (
//     <div>
//       <h1>Wellcome to profile page asshole!</h1>
//     </div>
//   )
// }

// export default Profile
