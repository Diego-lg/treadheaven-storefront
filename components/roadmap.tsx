"use client";
import React, { useState } from "react";
import { ShoppingBag, Shirt, Palette, Store } from "lucide-react";

const roadmapData = [
  {
    title: "Store Launch",
    description: "Our initial launch with core product offerings",
    timeline: "Q1 2025",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-gray-500 to-gray-700",
  },
  {
    title: "Product Expansion",
    description: "Adding more products like hoodies, hats, and accessories",
    timeline: "Q2 2025",
    icon: <Shirt className="w-6 h-6" />,
    color: "from-gray-600 to-gray-800",
  },
  {
    title: "Designer Marketplace",
    description:
      "Platform for customers to earn money designing and selling their own products",
    timeline: "Q4 2025",
    icon: <Palette className="w-6 h-6" />,
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Physical Store Opening",
    description: "Opening our first local retail location",
    timeline: "Q2 2026",
    icon: <Store className="w-6 h-6" />,
    color: "from-gray-800 to-black",
  },
];

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Journey Forward
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our path as we grow and evolve to serve you better.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Horizontal line */}
            <div className="absolute top-12 left-0 w-full h-px bg-gray-200"></div>

            <div className="flex justify-between">
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-1/4 px-4 text-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline dot */}
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 cursor-pointer
                      ${
                        activeIndex === index
                          ? `bg-gray-800 shadow-sm scale-105 text-white`
                          : "bg-white border border-gray-200 text-gray-500 hover:border-gray-400"
                      }`}
                  >
                    {item.icon}
                  </div>

                  <div
                    className={`transition-all duration-300 ${
                      activeIndex === index ? "transform -translate-y-1" : ""
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2
                      ${
                        activeIndex === index
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.timeline}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-20 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gray-200"></div>

            <div className="space-y-12">
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-16"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-gray-800 shadow-sm scale-105 text-white"
                          : "bg-white border border-gray-200 text-gray-500"
                      }`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2
                      ${
                        activeIndex === index
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.timeline}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-20 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
