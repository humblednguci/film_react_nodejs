import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="flex items-center mx-auto w-full max-w-7xl px-4">
        {/* Logo */}
        <Link className='mr-8' to={`/`}>
          <h1 className="m-0 flex items-center ">
            <img src="https://hhpanda.cx/static/logo.png" alt="Logo" className="h-10" />
          </h1>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="list-none p-0 flex space-x-6 text-lg">
            <li className="hover:bg-pink-600 rounded px-3 py-1 transition duration-300">
              <a href="#" className="text-white">Phimmoichill</a>
            </li>
            <li className="hover:bg-pink-600 rounded px-3 py-1 transition duration-300">
              <a href="#" className="text-white">Motchill</a>
            </li>
            <li className="hover:bg-pink-600 rounded px-3 py-1 transition duration-300">
              <a href="#" className="text-white">Truyenqq</a>
            </li>
            <li className="hover:bg-pink-600 rounded px-3 py-1 transition duration-300">
              <a href="#" className="text-white">hhpanda.vin</a>
            </li>
            <li className="hover:bg-pink-600 rounded px-3 py-1 transition duration-300">
              <a href="#" className="text-white">nettruyen</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
