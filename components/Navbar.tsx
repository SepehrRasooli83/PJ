import { FaUser, FaShoppingBasket } from "react-icons/fa"; // Install react-icons if you haven't yet
import { FiSearch } from "react-icons/fi"; // For the search icon

export default function Navbar() {
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Section: User and Basket Icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="User Account"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaUser size={24} />
          </button>
          <button
            aria-label="Basket"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaShoppingBasket size={24} />
          </button>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FiSearch
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Right Section: Logo */}
        <div className="text-gray-700 font-semibold text-xl">
          <a href="#" className="hover:text-gray-900">
            Logo
          </a>
        </div>
      </div>
    </div>
  );
}
