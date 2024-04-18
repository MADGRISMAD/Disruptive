import React from 'react';

const ContentCard = ({ title, type, category, author, imageUrl }) => {
  // Función para obtener el color del badge según la categoría
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Deportes':
        return 'bg-blue-500';
      case 'Matemáticas':
        return 'bg-red-500';
      case 'Ciencias':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Función para obtener el color del badge según el tipo de contenido
  const getTypeColor = (type) => {
    switch (type) {
      case 'Imagen':
        return 'bg-blue-500';
      case 'Video':
        return 'bg-red-500';
      case 'Texto':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg mt-4 filter blur-md"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-sm">Regístrate para ver este contenido</p>
        </div>
      </div>
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(category)} mr-2 mb-2`}>
        {category}
      </span>
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(type)} mb-2`}>
        {type}
      </span>
      <p className="text-gray-400">Autor: {author}</p>
    </div>
  );
}

export default ContentCard;
