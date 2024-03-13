import React from "react";
import amz from "../../assetss/agent/agent1.jpg";
import amz2 from "../../assetss/agent/agent2.jpg";
// import amz3 from "../../assetss/animi/rehau-polymers-edge-banding-upvc-rolling-shutter-windows-150x150";
import amz4 from "../../assetss/agent/agent3.jpg";
import amz5 from "../../assetss/agent/agent6.webp";
// import amz5 from "../../assetss/animi/kessebohmer-clever-kitchen-storage-solutions-india-150x150.jpg";

const Agent = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center  bg-backgroundColor">
      <h1 className=" font-semibold text-center text-2xl mt-24 mb-8">
        Home Interiors Made Easy
      </h1>
      <p className="lg:px-[2%] px-[2%] lg:py-[2%]">
        You book a consultation, get guided by one of the 400+ top-notch
        interior designers, and we take care of the rest, from start to finish.
        We have done it for more than 10,000 homes already.
      </p>

      <div className=" flex flex-wrap lg:gap-1 justify-center  space-x-5">
        <div className="justify-center  bg-white text-center   hover:drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[22%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            <span className="text-4xl">02</span> Meet our designers
          </h3>
        </div>

        <div className="justify-center  bg-white text-center   hover:drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[22%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz2} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            <span className="text-4xl">02</span> Meet our designers
          </h3>
        </div>

        <div className="justify-center  bg-white text-center  hover:drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[22%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz4} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            <span className="text-4xl">03</span> Personalise designs
          </h3>
        </div>

        <div className="justify-center  bg-white text-center   hover:drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[22%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz5} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            <span className="text-4xl">02</span> Personalise designs
          </h3>
        </div>

        {/* <div className="flex flex-wrap justify-center bg-white text-center  drop-shadow-2xl grid grid-col w-[35%] ">
          <img src={amz2} />
          <p className="gap-2">gfshdh jgdhsg gfahsg d</p>
        </div> */}
      </div>

      <div className="lg:ml-[38%] flex gap-[24%] lg:my-[3%]">
        <button
          data-aos="fade-up"
          data-aos-delay="900"
          className="bg-blue-400 text-white hover:bg-blue-500 ml-[4%] px-[1%] lg:px-7 lg:py-3 rounded-md duration-200 hover:text-brightColor transition-all cursor-pointer"
        >
          Learn more
        </button>
        <button
          data-aos="fade-up"
          data-aos-delay="900"
          className="bg-blue-400 text-white hover:bg-blue-500 ml-[4%] px-[10%] lg:px-7 py-3 rounded-md duration-200"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Agent;
