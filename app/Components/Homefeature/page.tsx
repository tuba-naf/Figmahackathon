'use client'
import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Featured Products Title */}
      <div className="w-[367px] h-[42px] text-center mt-20 mb-8">
        <div className="font-Josefin-Sans font-bold text-[42px] leading-[49px] text-black">
          Featured Products
        </div>
      </div>

      {/* Images Container - Centered */}
      <div className="flex gap-4 mb-12 justify-center">
        {/* First Image Div */}
        <div className="w-[270px] h-[361px]">
          <img
            src="/Image/F1.png" // Replace with your image path
            alt="Image 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Second Image Div */}
        <div className="w-[270px] h-[361px]">
          <img
            src="/Image/F2.png" // Replace with your image path
            alt="Image 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Third Image Div */}
        <div className="w-[270px] h-[361px]">
          <img
            src="/Image/F3.png" // Replace with your image path
            alt="Image 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Fourth Image Div */}
        <div className="w-[270px] h-[361px]">
          <img
            src="/Image/F4.png" // Replace with your image path
            alt="Image 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Latest Products Title */}
      <div className="w-[367px] h-[42px] text-center mb-8">
        <div className="font-Josefin-Sans font-bold text-[42px] leading-[49px] text-[#151875]">
          Latest Products
        </div>
      </div>

      {/* Features Below Latest Products */}
      <div className="flex justify-center gap-10 mb-12 items-center">
        {/* New Arrival */}
        <div className="font-Lato text-[18px] leading-[22px] text-[#FB2E86]">
          New Arrival
        </div>

        {/* Best Seller */}
        <div className="font-Lato text-[18px] leading-[22px] text-[#FB2E86]">
          Best Seller
        </div>

        {/* Feature */}
        <div className="font-Lato text-[18px] leading-[22px] text-[#FB2E86]">
          Feature
        </div>

        {/* Special Offer */}
        <div className="font-Lato text-[18px] leading-[22px] text-[#FB2E86]">
          Special Offer
        </div>
      </div>

      {/* Six Images (5 to 10) Below Features Row */}
      <div className="flex flex-col gap-4 mb-12 justify-center">
        {/* First Row of Images (5, 6, 7) */}
        <div className="flex gap-4 justify-center">
          {/* Fifth Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F5.png" // Replace with your image path
              alt="Image 5"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Sixth Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F6.png" // Replace with your image path
              alt="Image 6"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Seventh Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F7.png" // Replace with your image path
              alt="Image 7"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Second Row of Images (8, 9, 10) */}
        <div className="flex gap-4 justify-center">
          {/* Eighth Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F8.png" // Replace with your image path
              alt="Image 8"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Ninth Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F9.png" // Replace with your image path
              alt="Image 9"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Tenth Image Div */}
          <div className="w-[360px] h-[306px]">
            <img
              src="/Image/F10.png" // Replace with your image path
              alt="Image 10"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FeaturedProducts;
