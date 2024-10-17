import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg  bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-white font-bold text-3xl">
          Shakktii AI
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-orange-600">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-orange-600">
              ABOUT US
            </Link>
            <Link href="/services" className="text-white hover:text-orange-600">
              SERVICES
            </Link>
            
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-800 hover:text-blue-600">
            HOME
          </Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-600">
            ABOUT US
          </Link>
          <Link href="/services" className="block text-gray-800 hover:text-blue-600">
            SERVICES
          </Link>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
