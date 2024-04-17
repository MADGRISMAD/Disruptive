import React from "react";
import ContentCard from "../components/ContentCard";
import Navbar from "../components/Navbar";

export const ContentLibrary = () => {
  // Aquí podrías obtener la lista de contenido desde tu backend y almacenarla en un estado local
  const contentList = [
    {
      id: 1,
      title: "Título del Contenido 1",
      type: "Imagen",
      author: "Autor 1",
    },
    {
      id: 2,
      title: "Título del Contenido 2",
      type: "Video",
      author: "Autor 2",
    },
    {
      id: 3,
      title: "Título del Contenido 3",
      type: "Texto",
      author: "Autor 3",
    },
    // Agrega más elementos de contenido según sea necesario
  ];

  return (
    <div>
        <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Biblioteca de Contenido</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentList.map((content) => (
            <ContentCard
              key={content.id}
              title={content.title}
              type={content.type}
              author={content.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentLibrary;
