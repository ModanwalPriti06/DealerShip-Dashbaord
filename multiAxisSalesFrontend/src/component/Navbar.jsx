
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/dealshipImage.png'


const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
    <div className="text-xl font-bold flex justify-center items-center h-full">
        <img alt="logo" src={logo} className="h-10 w-auto mr-2"/>
           Dealership Dashboard
    </div>
      <div className="space-x-4">
        <Link to="/" className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100">Home</Link>
        <Link to="/chat" className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100">Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;
