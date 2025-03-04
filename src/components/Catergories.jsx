import React from "react";
import { Link } from "react-router-dom";

const Catergories = () => {
  return (
    <section className="bg-[#FFFDD0] py-12" id="category">
      <div className="pt-10 container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-[#2E7D32] mb-8">
          Shop by category
        </h3>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Seeds */}
          <a
            href="/seeds"
            className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-2xl transition duration-300"
          >
            <img
              src="seeds_icon.png"
              alt="Seeds"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Quality Seeds
            </h4>
          </a>

          {/* Plants */}
          <a
            className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-2xl transition duration-300"
            href="/plants"
          >
            <img
              src="plants_icon.png"
              alt="Plants"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Small Plants
            </h4>
          </a>

          {/* Tools */}
          <a
            className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-2xl transition duration-300"
            href="/tools"
          >
            <img
              src="tools-icon.png"
              alt="Tools"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">Farm Tools</h4>
          </a>

          {/* Resources */}
          <a
            href="/resources"
            className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-2xl transition duration-300"
          >
            <img
              src="resources-icon.png"
              alt="Resources"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">Resources</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catergories;
