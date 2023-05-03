import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar bg-primary">
    <div className="navbar-container">
      <a href="#" className="navbar-brand text-2xl font-bold text-white">My App</a>
      <button className="navbar-toggler ml-auto text-white lg:hidden" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className={`navbar-menu ${isOpen ? '' : 'hidden'} lg:flex lg:items-center`} id="navbar-menu">
        <a href="#" className="navbar-link text-white hover:text-secondary mx-5">Home</a>
        <a href="#" className="navbar-link text-white hover:text-secondary mx-5">About</a>
        <a href="#" className="navbar-link text-white hover:text-secondary mx-5">Contact</a>
      </div>
    </div>
  </nav>
  
  
  );
};

export default Header;