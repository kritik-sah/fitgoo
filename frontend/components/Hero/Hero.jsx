import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="md:min-h-[90vh] p-4 flex items-center justify-center bg-gradient-to-r from-gray-100 via-[#ffd5d5] to-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-3 items-start justify-center max-w-xl">
          <h1 className="text-lg md:text-5xl font-bold">FIND GYM NEAR YOU</h1>
          <h3 className="text-md md:text-lg font-semibold text-gray-800">
            fitgoo help you to find the best gyms near you, which you can use as
            per your convinience and pay only for days which you had used.
          </h3>
        </div>
        <div className="flex flex-col gap-3 items-start justify-center max-w-xl">
          <Image
            src="/assets/images/hero-image.jpg"
            alt="FitGoo hero section image"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
