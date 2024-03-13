import React from "react";
import amz from "../../assetss/animi/best-home-interior-design-company-commonfloor-realty-award.png";
import amz2 from "../../assetss/animi/most-entreprising-businesss-entrepreneur-india-award.png";
// import amz3 from "../../assetss/animi/rehau-polymers-edge-banding-upvc-rolling-shutter-windows-150x150";
import amz4 from "../../assetss/animi/most-innovative-home-interior-solutions-times-business-award.png";
import amz5 from "../../assetss/animi/most-innovative-home-interior-startup-entrepreneur-india-award.png";

const Advetrisement = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-12 px-1 bg-backgroundColor">
      <h1 className="  font-semibold text-center text-2xl mt-24 mb-8">
        50+ Awards for Innovative Designs
      </h1>

      <div className=" flex flex-wrap gap-10 justify-center">
        {/* <div className="justify-center  bg-white text-center  drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[25%] px-[2%] py-[2%] hover:bg-orange-200 rounded-md"> */}
        <img src={amz} className="mx-auto lg:w-[22%]" />
        <img src={amz2} className="mx-auto lg:w-[22%]" />
        <img src={amz4} className="mx-auto lg:w-[22%]" />
        <img src={amz5} className="mx-auto lg:w-[22%]" />
      </div>
    </div>
  );
};

export default Advetrisement;
