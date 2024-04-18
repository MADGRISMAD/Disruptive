import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Biblioteca</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">Acerca</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contacto</Link></li>
          <li><Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">Iniciar Sesión</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
