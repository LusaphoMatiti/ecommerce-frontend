// src/components/ProductList/Tools.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import { fetchProductsByCategory } from "../../services/api.js"; // Named import

const Tools = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory("tools"); // Use the named function
        setProducts(data);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#2E7D32] mt-20 mb-10 text-center ">
        Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
