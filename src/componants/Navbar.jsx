"use client";

import { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={isActive("/") ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary transition-all"}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className={isActive("/services") ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary transition-all"}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={isActive("/about") ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary transition-all"}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100/90 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <FaHeartbeat className="text-primary text-2xl md:text-3xl" />
          <span className="text-xl md:text-2xl font-bold heading-gradient">Care.xyz</span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="btn btn-outline btn-primary rounded-full px-6 border-2 font-bold hover:!text-white">
              Login
            </Link>
            <Link href="/register" className="btn btn-gradient rounded-full px-6 shadow-md font-bold">
              Register
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary text-3xl transition-all duration-300"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute left-0 w-full bg-base-100 border-b shadow-xl transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isOpen ? "top-[100%] opacity-100 max-h-[500px]" : "top-[-500%] opacity-0 max-h-0"
        }`}
      >
        <div className="container mx-auto">
          <ul className="menu menu-vertical p-5 gap-3">
            {navLinks}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link 
                href="/login" 
                className="btn btn-outline btn-primary rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="btn btn-gradient rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;