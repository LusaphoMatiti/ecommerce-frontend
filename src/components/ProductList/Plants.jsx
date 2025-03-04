// src/components/ProductList/Plants.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import { fetchProductsByCategory } from "../../services/api.js"; // Named import

const Plants = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory("plants"); // Use the named function
        setProducts(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#2E7D32] mt-20 mb-10 text-center ">
        Plants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
