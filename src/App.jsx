// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Catergories.jsx";
import Footer from "./components/Footer.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Seeds from "./components/ProductList/Seeds.jsx";
import Plants from "./components/ProductList/Plants.jsx";
import Tools from "./components/ProductList/Tools.jsx";
import Resources from "./components/ProductList/Resources.jsx";
import About from "./components/AboutUs.jsx";
import Admin from "./components/Admin.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Categories />
                  <WhyChooseUs />
                  <Product />
                  <Seeds />
                  <Plants />
                  <Tools />
                  <Resources />
                </>
              }
            />

            {/* Product Categories */}
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/tools" element={<Tools />} />

            <Route path="/category" element={<Categories />} />
            <Route path="/resources" element={<Resources />} />

            {/* About Us */}
            <Route path="/about" element={<About />} />

            {/* Admin Page (Protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            {/* Cart */}
            <Route path="/cart" element={<Cart />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      const password = prompt("Enter admin password:");
      if (password === "your-admin-password") {
        setIsAuthenticated(true);
      } else {
        alert("Invalid password. Access denied.");
      }
    };
    checkAuth();
  }, []);

  return isAuthenticated ? children : null;
};

export default App;
