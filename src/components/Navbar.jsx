// src/components/Navbar.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems?.length || 0; // Handle potential undefined state

  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to toggle the Products dropdown (for both full-screen and mobile)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#228B22] fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img src="/seeds.png" alt="Seedlings Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#F5F5F5] cursor-pointer">
            Seedlings
          </span>
        </Link>

        {/* Cart Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/cart"
            className="text-[#F5F5F5] bg-[#FFD700] hover:bg-[#8B4513] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer shadow-2xl"
            aria-label="Cart items"
          >
            🛒 Cart ({cartItemCount})
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen} // Dynamically set aria-expanded
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Visible for Both Mobile and Desktop) */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`} // Conditionally show/hide the menu
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#228B22] md:bg-transparent md:flex-row md:mt-0 md:border-0 md:space-x-8 rtl:space-x-reverse">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded-sm hover:text-[#FFD700] text-[#F5F5F5] md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded-sm hover:text-[#FFD700] text-[#F5F5F5] md:bg-transparent md:p-0"
              >
                About
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={() =>
                  setIsProductsDropdownOpen(!isProductsDropdownOpen)
                }
                className="block py-2 px-3 rounded-sm hover:text-[#FFD700] text-[#F5F5F5] md:bg-transparent md:p-0 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isProductsDropdownOpen}
              >
                Products
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 py-2 bg-[#228B22] rounded-md shadow-lg min-w-max md:block"
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <li>
                    <Link
                      to="/seeds"
                      className="block py-2 px-4 text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#228B22]"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Seeds
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plants"
                      className="block py-2 px-4 text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#228B22]"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tools"
                      className="block py-2 px-4 text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#228B22]"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="block py-2 px-4 text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#228B22]"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded-sm hover:text-[#FFD700] text-[#F5F5F5] md:bg-transparent md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
