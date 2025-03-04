import React from "react";
import image from "/seedling.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#FFFDD0] relative h-screen flex items-center z-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container mx-auto text-center z-0">
        <h2 className="text-4xl font-bold text-white mb-4 shadow-2xl">
          Grow Your Future with Seedlings
        </h2>
        <p className="text-lg text-white mb-8 shadow-2xl">
          High-quality seeds, plants, tools, and resources for small-scale
          farmers.
        </p>
        <a
          className="bg-[#32CD32] text-white py-2 px-6 rounded hover:bg-[#2E7D32] transition duration-300 cursor-pointer"
          href="#category"
        >
          Shop now
        </a>
      </div>
    </section>
  );
};
export default Hero;
