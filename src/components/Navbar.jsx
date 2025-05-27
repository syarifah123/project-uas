import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/produk", label: "Manajemen Produk" },
    { path: "/artikel", label: "Manajemen Artikel" },
    { path: "/karyawan", label: "Manajemen Karyawan" },
    { path: "/job-application", label: "Job Application" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900">
          Admin Panel
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 px-6 md:px-0 py-4 md:py-0`}
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;