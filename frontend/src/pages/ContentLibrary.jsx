import React, { useState } from "react";
import ContentCard from "../components/ContentCard";
import Navbar from "../components/Navbar";

export const ContentLibrary = () => {
  const initialContentList = [
    {
      id: 1,
      title: "Título del Contenido 1",
      type: "Imagen",
      category: "Deportes",
      author: "Autor 1",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 2,
      title: "Título del Contenido 2",
      type: "Video",
      category: "Deportes",
      author: "Autor 2",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 3,
      title: "Título del Contenido 3",
      type: "Texto",
      category: "Deportes",
      author: "Autor 3",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 4,
      title: "Título del Contenido 4",
      type: "Imagen",
      category: "Matemáticas",
      author: "Autor 4",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 5,
      title: "Título del Contenido 5",
      type: "Video",
      category: "Matemáticas",
      author: "Autor 5",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 6,
      title: "Título del Contenido 6",
      type: "Texto",
      category: "Matemáticas",
      author: "Autor 6",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 7,
      title: "Título del Contenido 7",
      type: "Imagen",
      category: "Ciencias",
      author: "Autor 7",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 8,
      title: "Título del Contenido 8",
      type: "Video",
      category: "Ciencias",
      author: "Autor 8",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
    {
      id: 9,
      title: "Título del Contenido 9",
      type: "Texto",
      category: "Ciencias",
      author: "Autor 9",
      imageUrl: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph",
    },
  ];
  

  const [contentList, setContentList] = useState(initialContentList);
  const [originalContentList] = useState(initialContentList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filterByTypeAndCategory = () => {
    if (selectedType === "Todos" && selectedCategory === "Todas") {
      setContentList(originalContentList);
    } else if (selectedType === "Todos") {
      const filteredContent = originalContentList.filter((content) => content.category === selectedCategory);
      setContentList(filteredContent);
    } else if (selectedCategory === "Todas") {
      const filteredContent = originalContentList.filter((content) => content.type === selectedType);
      setContentList(filteredContent);
    } else {
      const filteredContent = originalContentList.filter((content) => content.type === selectedType && content.category === selectedCategory);
      setContentList(filteredContent);
    }
  };

  const resetContent = () => {
    setContentList(originalContentList);
    setSelectedType("Todos");
    setSelectedCategory("Todas");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Biblioteca de Contenido</h1>
        <div className="flex justify-between mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>Filtrar</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={resetContent}>Restablecer</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentList.map((content) => (
            <ContentCard
              key={content.id}
              title={content.title}
              type={content.type}
              category={content.category}
              author={content.author}
              imageUrl={content.imageUrl}
            />
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-gray-800 rounded-lg text-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-white mb-2">Filtrar contenido</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <select
                          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-900 text-white"
                          value={selectedType}
                          onChange={(e) => setSelectedType(e.target.value)}
                        >
                          <option value="Todos">Todos</option>
                          <option value="Imagen">Imagen</option>
                          <option value="Video">Video</option>
                          <option value="Texto">Texto</option>
                        </select>
                        <select
                          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-900 text-white"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="Todas">Todas</option>
                          <option value="Deportes">Deportes</option>
                          <option value="Matemáticas">Matemáticas</option>
                          <option value="Ciencias">Ciencias</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      filterByTypeAndCategory();
                      setIsModalOpen(false);
                    }}
                  >
                    Filtrar
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentLibrary;
