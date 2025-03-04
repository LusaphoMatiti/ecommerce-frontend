import React from "react";
import { useCart } from "../../contexts/CartContext";

const PlantCard = ({ product }) => {
  const { addToCart } = useCart();

  // Debug: Log product data
  console.log("Product:", product);
  console.log("Product Price:", product.price, "Type:", typeof product.price);

  // Convert price to a number
  const price = parseFloat(product.price) || 0;

  return (
    <div className="bg-[#FFFDD0] rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <img
        src={product.image_url || "fallback-image.jpg"}
        alt={product.prod_name}
        className="w-full h-100 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{product.prod_name}</h3>
      <p>{product.descrip}</p> <p className="mt-5">R{price.toFixed(2)}</p>
      <button
        className="mt-4 bg-[#FFD700] hover:bg-[#8B4513] text-white py-2 px-4 rounded  transition duration-300 cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;
