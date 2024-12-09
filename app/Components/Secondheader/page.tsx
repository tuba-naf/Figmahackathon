'use client';

import Link from "next/link";
import { MagnifyingGlassIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Header() {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Side */}
          <div className="flex items-center justify-start">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-center sm:text-left">Hekto</h1>
          </div>

          

{/* Hamburger Menu for Mobile */}
<div className="sm:hidden p-3">
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="p-2 text-gray-700 hover:text-[#FB2E86] focus:outline-none"
  >
    {isMobileMenuOpen ? (
      <XMarkIcon className="w-8 h-6" />
    ) : (
      <Bars3Icon className="w-6 h-6" />
    )}
  </button>
</div>

{/* Mobile Navigation Menu */}
{isMobileMenuOpen && (
  <div className="sm:hidden absolute w-full flex flex-col px-5 py-4 bg-white shadow-lg z-50 top-[80px]"> {/* Position it below header */}
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      className="self-end p-2 text-gray-700 hover:text-[#FB2E86] mb-3"
    >
      <XMarkIcon className="w-6 h-6" />
    </button>
    <ul className="flex flex-col space-y-4 list-none">
      <li>
        <Link
          href="/"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}  // Close the menu after clicking
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/home-about"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/home-contact"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/Components/Shopify"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
)}

          {/* Center Section for Navigation Links */}
          <div className="hidden sm:flex items-center justify-center gap-x-8 w-full sm:w-auto">
            {/* Home Link with Dropdown */}
            <ul className="list-none">
              <li className="relative z-10">
                
                <Link href={"/."}>
                <button
                  onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                  className="flex items-center gap-1 hover:text-[#FB2E86] transition-colors"
                >
                  Home
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                </Link>
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 space-y-1 ${isHomeDropdownOpen ? "block" : "hidden"} list-none`}
                >
                
                  <li>
                    <Link
                      href="/home-about"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-contact"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Pages Link with Dropdown */}
            <ul className="list-none z-10">
              <li className="relative">
                <button
                  onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
                  className="flex items-center gap-1 hover:text-[#FB2E86] transition-colors"
                >
                  Pages
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 space-y-1 ${isPageDropdownOpen ? "block" : "hidden"} list-none`}
                >
                  {/* Add the dropdown items */}
                  {/* Example */}
                  <li>
                    <Link
                      href="/."
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Components/Shopify"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Shop
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Blog
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-[#FB2E86] hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                  {/* Add other links here */}
                </ul>
              </li>
            </ul>

            {/* Individual Links */}
            <ul className="list-none">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/Components/Shopify"}>
                  Shop
                </Link>
              </li>
            </ul>
            <ul className="list-none">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/products"}>
                  Products
                </Link>
              </li>
            </ul>
            <ul className="list-none">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/blog"}>
                  Blog
                </Link>
              </li>
            </ul>
            
            <ul className="list-none">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100 ml-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full flex flex-col px-5 py-2 bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 list-none">
            {/* Add mobile menu items */}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
