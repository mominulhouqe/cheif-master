import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-primary">
      <div className="navbar-container flex justify-between items-center mx-auto max-w-6xl px-4 py-3">
        <a href="#" className="navbar-brand text-2xl font-bold text-white flex-grow">
          My App
        </a>
        <button className="navbar-toggler ml-auto my-3 text-white lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div
          className={`navbar-menu lg:flex lg:items-center ${
            isOpen ? 'flex flex-col lg:flex-row lg:ml-auto' : 'hidden'
          }`}
          id="navbar-menu"
        >
          <Link to='/' className="navbar-link text-white hover:text-secondary py-2 lg:py-0 lg:px-4">
            Home
          </Link>
          <Link to='/about' className="navbar-link text-white hover:text-secondary py-2 lg:py-0 lg:px-4">
            About
          </Link>
          <Link to="/contact" className="navbar-link text-white hover:text-secondary py-2 lg:py-0 lg:px-4">
            Contact
          </Link>

          <Link to='/login'>
          <button className="bg-accent text-white py-2 px-4 rounded-lg ml-3 lg:ml-6">
            Sign In
          </button>
          </Link>

          <Link to='/register'>
          <button className="bg-accent text-white py-2 px-4 rounded-lg ml-3 lg:ml-6">
            Sign Up
          </button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Header;
