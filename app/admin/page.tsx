// app/admin/page.tsx

import React from "react";
import Link from "next/link";

const AdminPage = () => {
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
