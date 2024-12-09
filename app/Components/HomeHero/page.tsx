'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full h-auto bg-[#F2F0FF] overflow-hidden flex flex-col md:flex-row items-center justify-between py-8">

      {/* Left Section for Mobile & Desktop */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row md:items-start md:justify-start px-4 sm:px-8 md:px-16 space-y-4 sm:space-y-6 md:space-y-0 relative z-5">

        {/* Lamp Image */}
        <div className="relative flex-shrink-0 mr-4 -mt-12"> {/* Increased negative margin to move lamp up */}
          <Image
            src="/Image/lamp.png"
            alt="Lamp"
            width={200}
            height={200}
            className="object-contain sm:w-[250px] md:w-[300px]"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start justify-center space-y-3 sm:space-y-5 ml-4"> {/* Added margin-left to move text left */}
          {/* Pink Text */}
          <p className="text-[#FB2E86] text-sm sm:text-lg md:text-xl font-normal font-josefin z-8">
            Best Furniture For Your Castle...
          </p>

          {/* Bold Heading */}
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-black leading-snug sm:leading-tight font-josefin">
            New Furniture Collection Trends in 2020
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 font-josefin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>

          {/* Shop Now Button */}
          <button
            onClick={() => router.push('/Components/Shopify')}
            className="bg-[#FB2E86] text-white py-2 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-pink-700 transition-colors mt-3 text-sm sm:text-base md:text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center mt-8 md:mt-0">
        <div className="relative flex justify-center items-center h-auto">

          {/* Pink Background with 3D effect */}
          <div className="absolute top-10 sm:top-12 md:top-16 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-[#F2F0FF] rounded-full transform rotate-6 md:rotate-12 scale-105 z-0"></div>

          {/* Sofa Image */}
          <div className="relative z-10">
            <img
              src="/Image/sofa.png"
              alt="Sofa"
              className="w-60 sm:w-72 md:w-96 h-auto shadow-lg rounded-lg transform scale-100 hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
