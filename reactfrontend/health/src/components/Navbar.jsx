import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="top-0 w-full bg-bgColor text-[#faf4d3]">
            <div className="flex items-center justify-between  relative">
                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className="hamburger-icon text-2xl">☰</div>
                </div>
                <Link to="/" className="hidden relative md:flex px-4 py-2 font-light font-serif text-4xl">
                    minding.health
                </Link>
                
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="px-4 py-2 text-2xl">Home</Link>
                    <Link to="/Signup" className="px-4 py-2 text-2xl">Signup</Link>
                    <Link to="/Login" className="px-4 py-2 text-2xl">Login</Link>
                </div>
            </div>

          
            {isOpen && (
                <div className="absolute w-full bg-bgColor z-50 font-serif font-light text-sm text-white md:hidden">
                    <ul className="flex flex-col items-start ">
                        <li className="py-0">
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className="py-0">
                            <Link to="/Signup" onClick={() => setIsOpen(false)}>Signup</Link>
                        </li>
                        <li className="py-0">
                            <Link to="/Login" onClick={() => setIsOpen(false)}>Login</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
