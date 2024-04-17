import React from 'react';


export const Home = () => {
  return (
    <div>
      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Bienvenido a Mi Aplicación Multimedia</h1>
        <p className="text-lg text-gray-700 mb-8">¡Descubre y comparte contenido multimedia fascinante!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí podrías incluir tarjetas de contenido destacado o alguna otra sección */}
        </div>
      </div>
      
    </div>
  );
}

