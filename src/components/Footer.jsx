// src/components/Footer.jsx
import React from "react";
import { Facebook, Mail, Instagram } from "lucide-react";

const date = new Date();
let year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About Us */}
          <div>
            <h5 className="text-lg font-medium mb-4">About Seedlings</h5>
            <p className="text-sm">
              Empowering small-scale farmers since 2023 with high-quality seeds,
              plants, tools, and resources.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h5 className="text-lg font-medium mb-4">Useful Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h5 className="text-lg font-medium mb-4">Shop By Category</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/seeds"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Seeds
                </a>
              </li>
              <li>
                <a
                  href="/plants"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Plants
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-[#32CD32] transition duration-300"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

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
                    className="p-2 bg-[#2E7D32] text-white"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="mailto:someone@gmail.com"
                    className="p-2 bg-[#2E7D32] text-white"
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

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">© {year} Seedlings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
