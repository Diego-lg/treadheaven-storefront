import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            THREAD HEAVEN
          </h3>
          <p className="text-gray-600 text-sm">
            Premium essentials crafted with the finest materials for everyday
            luxury.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">SHOP</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                All Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Best Sellers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">HELP</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Size Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">ABOUT</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Sustainability
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Thread Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
