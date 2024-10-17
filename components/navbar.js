// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg  bg-transparent z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center text-white font-bold text-3xl">
//           Shakktii AI
//           </div>

//           <div className="hidden md:flex space-x-4">
//             <Link href="/" className="text-white hover:text-orange-600">
//               HOME
//             </Link>
//             <Link href="/about" className="text-white hover:text-orange-600">
//               ABOUT US
//             </Link>
//             <Link href="/services" className="text-white hover:text-orange-600">
//               SERVICES
//             </Link>
            
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1">
//           <Link href="/" className="block text-gray-800 hover:text-blue-600">
//             HOME
//           </Link>
//           <Link href="/about" className="block text-gray-800 hover:text-blue-600">
//             ABOUT US
//           </Link>
//           <Link href="/services" className="block text-gray-800 hover:text-blue-600">
//             SERVICES
//           </Link>
         
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const NavLink = ({ href, label, isMobile }) => (
  <Link href={href}>
    <span
      className={classNames(
        'hover:text-orange-600',
        isMobile ? 'block text-gray-800 py-2' : 'text-white'
      )}
    >
      {label}
    </span>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-white font-bold text-3xl">
            Shakktii AI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="/" label="HOME" />
            <NavLink href="/about" label="ABOUT US" />
            <NavLink href="/services" label="SERVICES" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
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
      <div
        className={classNames(
          'md:hidden bg-white px-2 pt-2 pb-3 transition-all duration-300 ease-in-out',
          { hidden: !isOpen }
        )}
      >
        <NavLink href="/" label="HOME" isMobile />
        <NavLink href="/about" label="ABOUT US" isMobile />
        <NavLink href="/services" label="SERVICES" isMobile />
      </div>
    </nav>
  );
};

export default Navbar;
