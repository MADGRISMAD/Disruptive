import React, { useState } from "react";

export const AdminPage = () => {
  const [categories, setCategories] = useState([
    { name: "Category 1", active: true },
    { name: "Category 2", active: false },
    { name: "Category 3", active: true },
    { name: "Category 4", active: false },
  ]);

  const [contentTypes, setContentTypes] = useState([]);

  const toggleCategory = (categoryIndex) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].active = !newCategories[categoryIndex].active;
    setCategories(newCategories);
  };

  const addNewData = (data) => {
    // Implementa tu lógica aquí para agregar nuevos datos
    console.log("Nuevos datos agregados:", data);
  };

  return (
    <div className="admin-page-container dark bg-gray-900 text-white p-8">
      <h1 className="admin-page-heading text-3xl font-bold mb-8">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="admin-category-section bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index} className={`category-item flex justify-between items-center ${category.active ? 'bg-green-500' : 'bg-red-500'} p-4 rounded`}>
                <span>{category.name}</span>
                <button onClick={() => toggleCategory(index)} className={`toggle-button text-white px-2 py-1 rounded`}>
                  {category.active ? 'Deactivate' : 'Activate'}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-types-section mt-8 bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Content Types</h2>
          <ul className="content-types-list">
            {contentTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="add-data-section mt-8 bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Add New Data</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newData = {
            category: formData.get("category"),
            contentType: formData.get("contentType"),
          };
          addNewData(newData);
          e.target.reset();
        }}>
          <input type="text" name="category" placeholder="Category" className="border border-gray-600 rounded px-4 py-2 mb-4" />
          <input type="text" name="contentType" placeholder="Content Type" className="border border-gray-600 rounded px-4 py-2 mb-4" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
