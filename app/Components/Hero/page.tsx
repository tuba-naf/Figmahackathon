import React from "react";
import Link from "next/link";
import ShopList from "../Shoplist/page";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[286px] bg-[#F6F5FF] items-center px-4 sm:px-8 z-0">
        {/* Content Wrapper */}
        <div className="relative w-full h-full flex flex-col justify-start items-start pl-4 sm:pl-8 lg:pl-28 pt-8">
          <div>
            {/* Main Text */}
            <div className="font-[Josefin-Sans] font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[40px] text-[#101750] mb-4">
              Shop Grid Default
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 mb-8">
              {/* Home Link */}
              <div className="font-[Lato] font-normal text-[14px] leading-[17px] text-[#000000]">
                <Link href="#">Home</Link>
              </div>

              {/* Shop Link */}
              <div className="font-[Lato] font-normal text-[14px] leading-[17px] text-[#000000]">
                <Link href="#">Shop</Link>
              </div>

              {/* Shop Grid Default Link */}
              <div className="font-[Lato] font-normal text-[14px] leading-[17px] text-[#FB2E86]">
                <Link href="#">Shop Grid Default</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort By Section */}
      <div className="w-full sm:w-[90%] lg:w-[1171px] mx-auto mt-8 px-4 sm:px-6  relative">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md px-6 py-4 sm:px-8 sm:py-5 rounded-md">
          {/* Left Text */}
          <div>
            <div className="font-[Josefin-Sans] text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] text-[#151875] mb-1">
              Ecommerce Accessories & Fashion items
            </div>
            <div className="font-[Lato] text-[12px] leading-[14px] text-[#8A8FB9]">
              About 9,620 results (0.62 seconds)
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-4 sm:mt-0">
            {/* Per Page */}
            <div className="font-[Lato] text-[14px] leading-[17px] text-[#3F509E]">
              Per Page:
            </div>
            <div className="w-[60px] h-[32px] border border-[#E7E6EF]"></div>

            {/* Sort By */}
            <div className="font-[Lato] text-[14px] leading-[17px] text-[#3F509E]">
              Sort by:
            </div>
            <div className="border border-[#E7E6EF] px-3 py-1 bg-white rounded-md">
              <select className="font-[Lato] text-[14px] leading-[17px] text-[#000000] bg-white">
                <option value="bestmatch">Best Match</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="font-[Lato] text-[14px] leading-[17px] text-[#3F509E]">
              View:
            </div>
            <div className="w-[60px] h-[32px] border border-[#E7E6EF] flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* Shop List */}
      <ShopList />
    </div>
  );
};

export default HeroSection;
