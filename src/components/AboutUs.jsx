import React from "react";

const About = () => {
  return (
    <section className="bg-[#FFFDD0] py-12">
      <div className="container mx-auto text-center">
        {/* About us */}
        <h3 className="text-3xl font-bold text-[#2E7D32] mb-8">About Us</h3>

        {/*Description */}
        <p className="text-lg text-gray-600 mb-8">
          At Seedlings, we are dedicated to empowering small-scale farmers by
          providing high-quality seeds, plants, tools, protective gear, and
          educational resources. Our mission is to support sustainable farming
          practices and help farmers grow their future.
        </p>

        {/*Social Media */}
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/seedlings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E7D32] hover:text-[#32CD32] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4m0 0v4m0-4h4m-4 0h4m16 0v4m0 0v4m0-4h4m-4 0h4m-16 9v4m0 0v4m0-4h4m-4 0h4m-12-1C3 14.567 4.567 12 7 12h10c2.433 0 4-2.567 4-5V7c0-2.433-1.567-4-4-4H7c-2.433 0-4 1.567-4 4v2z"
              />
            </svg>
          </a>

          {/*Whatsapp */}
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E7D32] hover:text-[#32CD32] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v14l-5-5H7l-5 5V5z"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/seedlings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E7D32] hover:text-[#32CD32] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 11.5a8.386 8.386 0 01-.94 3.8 8.5 8.5 0 01-7.6 4.7 8.387 8.387 0 01-3.8-.94L3 21l1.94-5.63A8.386 8.386 0 013 11.5a8.387 8.387 0 014.7-7.6 8.5 8.5 0 013.8-.94 8.387 8.387 0 017.6 4.7 8.386 8.386 0 013.8 9.4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
