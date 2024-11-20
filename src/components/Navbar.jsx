import React from 'react';
import logo from '../assets/AJ_Logo.png';
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa6';

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 mb-20'>
      <div className='flex items-center flex-shrink-0 '>
        <img className='w-40 mx-2' src={logo} alt="logo" />
      </div>
      <div className='flex items-center justify-center gap-4 m-6 text-2xl'>
        <a
          href="https://www.linkedin.com/in/a-j-a-saajith/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AJSAAJITH"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://web.facebook.com/A.J.A.Saajith/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/94757425593?text=Hi%20there%2C%20I%20found%20your%20profile!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
