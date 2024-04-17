import React from 'react';

const ContentCard = ({ title, type, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">Tipo: {type}</p>
      <p className="text-gray-600">Autor: {author}</p>
    </div>
  );
}

export default ContentCard;