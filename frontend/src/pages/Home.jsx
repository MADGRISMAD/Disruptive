import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-gradient-to-br from-grey-800 via-purple-600 to-grey-950 text-white min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">Descubre un Nuevo Mundo de Entretenimiento</h1>
        <p className="text-lg mb-8">Bienvenido a nuestra plataforma de contenido multimedia. Explora una amplia variedad de categorías y disfruta de contenido exclusivo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-purple-600 shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Explora Nuestro Contenido</h2>
            <p className="text-lg mb-4">Sumérgete en una biblioteca de contenido multimedia cuidadosamente seleccionado. Desde Textos hasta videos, tenemos algo para todos.</p>
            <Link to="/content-library" className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-6 rounded-lg inline-block">Explorar</Link>
          </div>
          <div className="bg-indigo-600 shadow-md rounded-lg p-8"> 
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Comunidad</h2>
            <p className="text-lg mb-4">Regístrate ahora para acceder a funciones exclusivas, crear listas de reproducción personalizadas y participar en discusiones con otros miembros.</p>
            <Link to="/login" className="bg-white hover:bg-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-lg inline-block">Registrarse</Link> {/* Cambio de color de texto */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
