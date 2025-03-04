// src/components/Admin.jsx
import React, { useState } from "react";
import { createProduct } from "../services/api.js"; // Named import

const Admin = () => {
  const [formData, setFormData] = useState({
    prod_name: "",
    price: 0,
    description: "",
    category: "seeds",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("prod_name", formData.prod_name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("image", formData.image);

    try {
      // Use the named import 'createProduct' instead of api.post
      await createProduct(formDataToSend);
      alert("Product added successfully!");
      setFormData({
        prod_name: "",
        price: 0,
        description: "",
        category: "seeds",
        image: null,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2">Name:</label>
          <input
            type="text"
            name="prod_name"
            value={formData.prod_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            required
          >
            <option value="seeds">Seeds</option>
            <option value="plants">Plants</option>
            <option value="tools">Tools</option>
            <option value="resources">Resources</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#32CD32] text-white py-2 px-6 rounded hover:bg-[#2E7D32] transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Admin;
