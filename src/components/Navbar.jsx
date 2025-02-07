import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-row px-3 py-2 w-full h-max border-sm rounded-md">
      <nav className="text-black text-lg">
        <Link
          className="px-3 py-2 m-2 hover:text-white hover:bg-blue-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-3 py-2 m-2 hover:border-b-2 border-blue-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="px-3 py-2 m-2 hover:border-b-2 border-blue-400"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
