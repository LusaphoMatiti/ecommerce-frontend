// src/components/Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Function to update the quantity of a product
  const [quantities, setQuantities] = React.useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (productId, action) => {
    setQuantities((prev) => {
      const currentQty = prev[productId] || 1;
      const newQty =
        action === "increase" ? currentQty + 1 : Math.max(currentQty - 1, 1);

      return { ...prev, [productId]: newQty };
    });
  };

  // Calculate the total cart value
  const calculateTotal = () =>
    cartItems.reduce((total, item) => {
      const qty = quantities[item.id] || 1;
      return total + parseFloat(item.price) * qty;
    }, 0);

  // Render when the cart is empty
  if (cartItems.length === 0) {
    return (
      <section className="mx-auto h-screen flex flex-col items-center justify-center">
        <p className="text-center text-gray-600 mb-4">Your cart 🛒 is empty </p>
        <a
          href="/category"
          className="bg-[#32CD32] text-white py-2 px-6 rounded hover:bg-[#2E7D32] transition duration-300 cursor-pointer"
        >
          Shop now
        </a>
      </section>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image_url || "fallback-image.jpg"}
              alt={product.prod_name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Product Name */}
            <h3 className="text-lg font-semibold">{product.prod_name}</h3>

            {/* Product Price */}
            <p className="text-sm font-medium">
              R{(parseFloat(product.price) || 0).toFixed(2)}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-4 space-x-4">
              <button
                onClick={() => handleQuantityChange(product.id, "decrease")}
                className="bg-[#FFD700] hover:bg-[#8B4513] text-white py-1 px-3 rounded transition duration-300"
              >
                -
              </button>
              <span className="text-lg font-medium">
                {quantities[product.id] || 1}
              </span>
              <button
                onClick={() => handleQuantityChange(product.id, "increase")}
                className="bg-[#FFD700] hover:bg-[#8B4513] text-white py-1 px-3 rounded transition duration-300"
              >
                +
              </button>
            </div>

            {/* Remove Item Button */}
            <button
              onClick={() => removeFromCart(product.id)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="mt-8 border-t border-gray-300 pt-4">
        <h3 className="text-xl font-bold mb-4">Cart Total</h3>
        <p className="text-2xl font-bold">R{calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
