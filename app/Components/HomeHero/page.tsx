'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full h-auto bg-[#F2F0FF] overflow-hidden flex flex-col md:flex-row items-center justify-between py-8">

      {/* Left Section for Mobile & Desktop */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-8 md:px-16 space-y-6 relative">

        {/* Lamp Image */}
        <div className="absolute top-0 left-[-30px] top-[-120px] z-2">
          <Image
            src="/Image/lamp.png"
            alt="Lamp"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Pink Text */}
        <p className="text-[#FB2E86] text-lg md:text-xl font-normal ml-[140px] font-josefin">
          Best Furniture For Your Castle...
        </p>

        {/* Bold Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight ml-[140px] font-josefin ">
          New Furniture Collection Trends in 2020
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-600 ml-[140px] font-josefin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
          phasellus non in justo.
        </p>

        {/* Shop Now Button */}
        <button
          onClick={() => router.push('/grid-product')}
          className="bg-[#FB2E86] text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition-colors ml-[130px] mt-3"
        >
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <div className="relative flex justify-center items-center h-auto">
          {/* Pink Background with 3D effect */}
          <div className="absolute top-12 md:top-16 w-72 h-72 md:w-96 md:h-96 bg-[#F2F0FF] rounded-full transform rotate-6 md:rotate-12 scale-105 z-0"></div>

          {/* Sofa Image */}
          <div className="relative z-10">
            <img
              src="/Image/sofa.png"
              alt="Sofa"
              className="w-[350px] md:w-[450px] h-auto shadow-lg rounded-lg transform scale-105 hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
