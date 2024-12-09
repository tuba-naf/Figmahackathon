'use client';
import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="relative w-full flex flex-col items-center px-4">
      {/* Featured Products Title */}
      <div className="text-center mt-[80px] mb-[32px]">
        <h2 className="font-Josefin-Sans font-bold text-[28px] leading-[34px] sm:text-[32px] sm:leading-[39px] md:text-[42px] md:leading-[49px] text-black">
          Featured Products
        </h2>
      </div>

      {/* Images Container */}
      <div className="flex flex-wrap gap-4 mb-[48px] justify-center">
        {/* Image Divs */}
        {["F1", "F2", "F3", "F4"].map((image, index) => (
          <div key={index} className="w-[150px] h-[200px] sm:w-[220px] sm:h-[300px] md:w-[270px] md:h-[361px]">
            <img
              src={`/Image/${image}.png`}
              alt={`Featured Product ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Latest Products Title */}
      <div className="text-center mb-[32px]">
        <h2 className="font-Josefin-Sans font-bold text-[28px] leading-[34px] sm:text-[32px] sm:leading-[39px] md:text-[42px] md:leading-[49px] text-[#151875]">
          Latest Products
        </h2>
      </div>

      {/* Features Below Latest Products */}
      <div className="flex flex-wrap justify-center gap-4 mb-[48px]">
        {["New Arrival", "Best Seller", "Feature", "Special Offer"].map((feature, index) => (
          <div
            key={index}
            className="font-Lato text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px] text-[#FB2E86]"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Images Below Features */}
      <div className="flex flex-wrap gap-4 mb-[48px] justify-center">
        {/* Rows of Images */}
        {["F5", "F6", "F7", "F8", "F9", "F10"].map((image, index) => (
          <div key={index} className="w-[180px] h-[150px] sm:w-[240px] sm:h-[200px] md:w-[280px] md:h-[240px] lg:w-[360px] lg:h-[306px]">
            <img
              src={`/Image/${image}.png`}
              alt={`Latest Product ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
