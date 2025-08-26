import React from "react";
import { assets } from "../../assets/assets";
import "./Home1.css";

const Home1 = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center text-center mt-[500px] md:mt-[390px]  overflow-hidden">
      {/* Background Scroll Wrapper */}
      <div className="absolute w-full h-full top-0 left-0 flex bg-container">
        <div
          className="flex-1 w-screen h-full bg-cover bg-no-repeat bg-moving"
          style={{ backgroundImage: `url(${assets.Banner})` }}
        ></div>
        <div
          className="flex-1 w-screen h-full bg-cover bg-no-repeat bg-moving"
          style={{ backgroundImage: `url(${assets.Banner})` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-black bg-transparent">
        <img
          src={assets.Above}
          alt=""
          className="mix-blend-screen opacity-50 max-w-full"
        />
      </div>
    </div>
  );
};

export default Home1;
