'use client';

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";

const AdminPage = () => {
  const { data: session, status } = useSession();

  // Wait for the session to load before rendering
  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while session data is being fetched
  }

  // Handle unauthenticated or invalid session
  if (
    status === "unauthenticated" || // If not logged in
    session?.user?.phone !== '09126853771' &&
    session?.user?.phone !== '09932619008'
  ) {
    console.log(session?.user?.phone?.toString());
    console.log('u are not admin');
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Admin Sections
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-3 rounded-lg transition-all">
              <Link
                href="/admin/categories"
                className="text-xl font-medium hover:text-blue-400"
              >
                Manage Categories
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-3 rounded-lg transition-all">
              <Link
                href="/admin/products"
                className="text-xl font-medium hover:text-blue-400"
              >
                Manage Products
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-3 rounded-lg transition-all">
              <Link
                href="/admin/users"
                className="text-xl font-medium hover:text-blue-400"
              >
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
