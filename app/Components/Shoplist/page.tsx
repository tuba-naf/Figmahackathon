import React from "react";
const ShopList = () => {
  return (
    
    <div className="min-h-screen  flex flex-col justify-center items-center px-4 mt-20">
      {/* Image Grid */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Static images */}
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative ">
          <img
            src="/Image/E1.png"
            alt="Accessory 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E2.png"
            alt="Accessory 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E3.png"
            alt="Accessory 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E4.png"
            alt="Accessory 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E5.png"
            alt="Accessory 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E6.png"
            alt="Accessory 6"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E7.png"
            alt="Accessory 7"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E8.png"
            alt="Accessory 8"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E9.png"
            alt="Accessory 9"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E10.png"
            alt="Accessory 10"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E11.png"
            alt="Accessory 11"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full max-w-[270px] h-auto aspect-[270/363] relative">
          <img
            src="/Image/E12.png"
            alt="Accessory 12"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Additional Image */}
      <div className="relative w-full flex justify-center mt-10 sm:mt-12">
        <div className="w-full max-w-[904px] h-auto relative">
          <img
            src="/Image/IMG1.png"
            alt="Accessory 13"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopList;
