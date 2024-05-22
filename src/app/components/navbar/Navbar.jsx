"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({ styleProps = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 lg:px-16 px-4 bg-transparent flex flex-wrap items-center py-4">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-xl" style={styleProps}>
          TrailTales
        </Link>
      </div>
      <label
        htmlFor="menu-toggle"
        className="pointer-cursor md:hidden block"
        onClick={toggleNavbar}
      >
        <svg
          className="fill-current"
          style={{ color: styleProps.color || "white" }}
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className={`md:flex md:items-center md:w-auto w-full ${
          isOpen ? "block" : "hidden"
        }`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0 backdrop-brightness-50  md:backdrop-brightness-100">
            <li>
              <Link
                className="md:p-4 py-3 px-0 block"
                href="/about"
                style={styleProps}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                style={styleProps}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                style={styleProps}
              >
                Profile
              </Link>
            </li>
            <li
              className="border rounded-md"
              style={{ borderColor: styleProps.color || "white" }}
            >
              <Link href="/search" className="p-2 block" style={styleProps}>
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
