import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Bienvenido a la Aplicación de Contenido Multimedia</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link to="/categorias" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center">
          Ver Categorías
        </Link>
        <Link to="/registro" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block text-center">
          Registrarse
        </Link>
      </div>
    </div>
  );
};
