import React from "react";
import { Facebook, Mail, Instagram } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#FFFDD0] pt-40 py-12">
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

        {/* Column 4: Contact & Social Media */}
        <div className="lg:flex flex-col">
          <h5 className="text-lg font-medium mb-4">Contact Us</h5>
          <p className="text-sm mb-4">
            Email: info@seedlings.com <br />
            Phone: +27 123 456 789
          </p>
          <div>
            <h5 className="text-lg font-medium mt-8 mb-4 lg:text-start sm:text-center">
              Follow Us
            </h5>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2E7D32] text-white rounded-4xl"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="mailto:someone@gmail.com"
                  className="p-2 bg-[#2E7D32] text-white  rounded-4xl"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2E7D32] text-white rounded-full "
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
