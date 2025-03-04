import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white pt-10 pb-10 py-2 p-5">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#2E7D32] mb-8">
          Why Choose Seedlings?
        </h3>
        <p className="text-lg text-gray-600 mb-12">
          At Seedlings, we're committed to empowering small-scale farmers with
          high-quality products and exceptional service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-[#FFFDD0] shadow-md p-6 rounded-lg ">
            <img
              src="quality-icon.png"
              alt="Quality Assurance"
              className="w-16 h-16 mx-auto mb-4 text-[#2E7D32]"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Quality Assurance
            </h4>
            <p className="text-gray-600 text-center">
              All our seeds and plants are rigorously tested to ensure they meet
              the highest standards.
            </p>
          </div>

          <div className="bg-[#FFFDD0] shadow-md p-6 rounded-lg">
            <img
              src="price-icon.png"
              alt="Affordable Prices"
              className="w-16 h-16 mx-auto mb-4 text-[#2E7D32]"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Affordable Prices
            </h4>
            <p className="text-gray-600 text-center">
              We offer competitive pricing without compromising on quality,
              making farming accessible for everyone.
            </p>
          </div>

          <div className="bg-[#FFFDD0] shadow-md p-6 rounded-lg">
            <img
              src="sustainability-icon.png"
              alt="Sustainable Products"
              className="w-16 h-16 mx-auto mb-4 text-[#2E7D32]"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Sustainable Products
            </h4>
            <p className="text-gray-600 text-center">
              Our products are eco-friendly and designed to promote sustainable
              farming practices.
            </p>
          </div>

          <div className="bg-[#FFFDD0] shadow-md p-6 rounded-lg">
            <img
              src="support-icon.png"
              alt="Excellent Support"
              className="w-16 h-16 mx-auto mb-4 text-[#2E7D32]"
            />
            <h4 className="text-lg font-semibold text-[#2E7D32]">
              Excellent Support
            </h4>
            <p className="text-gray-600 text-center">
              Our dedicated team is always here to help you with any questions
              or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
