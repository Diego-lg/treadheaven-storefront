import Image from "next/image";
import React from "react";

function Hero({}) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/assets/background.png"
          alt="Hero background"
          priority
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Unleash Your Creativity
          <br />
          Wear the Future
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white">
          Step into a world where art meets innovation—our AI-crafted T-shirt
          designs transform everyday wear into wearable masterpieces
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
          <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
