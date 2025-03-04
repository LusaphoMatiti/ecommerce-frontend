import React from "react";

const Product = () => {
  return (
    <section className="bg-[#FFFDD0] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h3 className="text-3xl font-bold text-[#2E7D32] text-center mb-8">
          Shop Our: Tomato Seeds
        </h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className=" lg:order-2">
            <img
              src="tomato-seedling.jpg"
              alt="Tomato Seedling"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div className=" lg:order-1 lg:text-left text-center">
            <h4 className="text-2xl font-semibold text-[#2E7D32] mb-4">
              Tomato Seeds
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              Our premium tomato seeds are perfect for growing juicy, flavorful
              tomatoes in your garden. These seeds are non-GMO, high-yielding,
              and resistant to common diseases.
            </p>
            <a
              className="bg-[#32CD32] text-white py-2 px-6 rounded hover:bg-[#2E7D32] transition duration-300 cursor-pointer"
              href="#category"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
