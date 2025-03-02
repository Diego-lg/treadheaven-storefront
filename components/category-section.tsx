import React from "react";
import { ArrowRight } from "lucide-react";
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface CategorySectionProps {
  billboards?: BillboardType[];
}

function CategorySection({ billboards = [] }: CategorySectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {billboards &&
          billboards.map((billboard, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={billboard.imageUrl}
                  alt={billboard.label || "Category image"}
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {billboard.label}
                </h3>
                <button className="mt-2 flex items-center text-white text-sm font-medium">
                  Shop Now <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategorySection;
