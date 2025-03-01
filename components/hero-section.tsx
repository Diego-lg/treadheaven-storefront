"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Circle } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[500px] h-[90vh] w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-20 top-20 opacity-5">
        <Circle size={300} className="md:size-400" />
      </div>
      <div className="absolute -left-40 bottom-20 opacity-5">
        <Circle size={200} className="md:size-300" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-8 sm:pt-0">
        <div className="max-w-full sm:max-w-2xl transition-all duration-1000 transform translate-y-0 opacity-100 z-10 relative">
          {/* Tagline */}
          <p
            className={`text-gray-500 mb-2 tracking-widest uppercase text-xs sm:text-sm transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Minimalist Collection 2025
          </p>

          {/* Main Headline */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 leading-tight transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Refined <span className="text-gray-300">Simplicity</span> For Modern
            Living
          </h1>

          {/* Description */}
          <p
            className={`text-gray-600 mb-5 sm:mb-8 max-w-lg text-sm sm:text-base transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Discover our curated collection of minimalist essentials designed to
            elevate your everyday experience with thoughtful design and premium
            materials.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group bg-black text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 flex items-center justify-between transition-all duration-300 hover:bg-gray-900">
              <span>Shop Collection</span>
              <ArrowRight
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                size={16}
              />
            </button>
            <button className="border border-gray-300 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 transition-all duration-300 hover:bg-gray-100">
              Explore Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div
        className={`absolute right-0 bottom-0 w-[70%] sm:w-[60%] md:w-1/2 lg:w-[45%] h-1/3 xs:h-[40%] sm:h-1/2 md:h-[60%] lg:h-full transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="relative h-full">
          <img
            src="assets/nike.png"
            alt="Minimalist product"
            className="absolute bottom-0 right-0 h-full w-full object-contain xs:object-cover object-right-bottom"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent 
                        xs:from-white xs:via-white/80 xs:to-transparent 
                        sm:from-white sm:via-white/70 sm:to-transparent 
                        md:bg-gradient-to-t md:from-transparent md:to-transparent"
          ></div>
        </div>
      </div>

      {/* Mobile Navigation Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
        <div className="w-6 sm:w-8 h-1 bg-black rounded-full"></div>
        <div className="w-1.5 sm:w-2 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-1.5 sm:w-2 h-1 bg-gray-300 rounded-full"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-6 left-6 lg:bottom-8 lg:left-8 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
