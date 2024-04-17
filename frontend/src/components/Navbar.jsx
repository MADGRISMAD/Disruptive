import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Mi Aplicación Multimedia</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Biblioteca</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Perfil</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Crear Contenido</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Cerrar Sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}


