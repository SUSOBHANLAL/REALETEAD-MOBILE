import React from "react";
import amz from "../../assetss/animi/elica-kitchen-chimney-hob-ovens-supplier-india-150x150.png";
import amz2 from "../../assetss/animi/faber-kitchen-chimney-hob-gas-stove-cooktop-supplier-150x150.png";
// import amz3 from "../../assetss/animi/rehau-polymers-edge-banding-upvc-rolling-shutter-windows-150x150";
import amz4 from "../../assetss/animi/hettich-india-kitchen-hinges-cutlery-tray-hardware-tandem-box-150x150.png";
// import amz5 from "../../assetss/animi/kessebohmer-clever-kitchen-storage-solutions-india-150x150.jpg";

const Company = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Insides & Tools
      </h1>

      <div className=" flex flex-wrap gap-10 justify-center">
        <div className="justify-center  bg-white text-center  drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[25%] px-[2%] py-[2%] hover:bg-orange-200 rounded-md">
          <img src={amz} className="mx-auto" />
          <h3 className="pt-[7%] pb-[5%] font-medium font-serif text-xl">
            Creating Timeless Interiors
          </h3>
          <p className="mx-auto font-sans py-[7%] text-sm">
            Embark on a journey through the Aristry of interior Design, and
            Rediscover Your space's True Potential
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="900"
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
          >
            Explore
          </button>
        </div>

        <div className="justify-center  bg-white text-center  drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[25%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz2} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            Harmonize Your Spaces with Vaastu Shastra
          </h3>
          <p className="mx-auto font-sans pb-[7%] text-sm">
            Discover the serenity of Harmonious Living:Embrace Vaastu Shastra to
            transform Your Spaces
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="900"
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
          >
            Explore
          </button>
        </div>

        <div className="justify-center  bg-white text-center  drop-shadow-2xl grid grid-col lg:h-[45%] lg:w-[25%] px-[2%] py-[2%] rounded-md hover:bg-orange-200">
          <img src={amz4} className="mx-auto" />
          <h3 className="pt-[5%] pb-[2%] font-medium font-serif text-xl">
            Connecting You with the Ideal Buyer
          </h3>
          <p className="mx-auto font-sans pb-[7%] text-sm">
            Closing the Divide between Sellers and Their Ideal Buyers: Making
            the Perfect Connection
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="900"
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
          >
            Explore
          </button>
        </div>

        {/* <div className="flex flex-wrap justify-center bg-white text-center  drop-shadow-2xl grid grid-col w-[35%] ">
          <img src={amz2} />
          <p className="gap-2">gfshdh jgdhsg gfahsg d</p>
        </div> */}
      </div>
    </div>
  );
};

export default Company;
