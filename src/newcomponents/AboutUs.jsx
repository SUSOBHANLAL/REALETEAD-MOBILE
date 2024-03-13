import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import img1 from "../assetss/img/room2.jpg";
import Fullhome from "../assetss/img/full-home.avif";
const AboutUs = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 py-10">
      <div className="w-[95%] flex flex-col items-center bg-white text-center  drop-shadow-2xl p-1 rounded-md mr-[3%]">
        <img src={img1} alt="" className="w-[95%]" />
        <p className="text-xs">
          We use carefully screened, reputable suppliers for materials and
          fittings.
        </p>
      </div>
      {/* <div className="flex md:space-x-10 space-x-4">
        <div className="mt-10 space-y-4 ">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Buy Dream Your House</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-[54%] h-[36%] flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Sell Your House Easily</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
      </div> */}
      <div className="">
        <h1 className="text-6xl font-bold py-[2%]">
          Know <span className="text-yellow-400">About us</span>{" "}
        </h1>
        <div className="md:flex">
          <p className="text-sm text-gray-400 mb-[15%] w-[85%] md:w-[55%] px-[4%]">
            Having studied and worked as architects for 15 years, we founded
            DesignCafe in 2015 to extend the intelligent and beautiful home
            interior design to a wider range of budgets. Obsessively quality
            focused, we do most things in-house – with expert designers, our own
            factory, and trained carpenters – to ensure flawless execution. We
            consistently focus on solving customer needs, with a big focus on
            space optimisation, to deliver up to 20% extra space to your home.
          </p>
          <div className="w-[95%] md:w-[38%] flex flex-col items-center bg-white text-center  drop-shadow-2xl p-1 rounded-md mr-[3%]">
            <img src={Fullhome} alt="" className="w-[95%]" />
            <p className="text-xs">
              We use carefully screened, reputable suppliers for materials and
              fittings.
            </p>
          </div>
          {/* <img src={Fullhome} alt="" className="md:w-[35%]" /> */}
          {/* <p className="text-sm text-gray-400 mb-[15%] w-[85%] md:w-[35%] md:w-[55%] px-[.6%]">
            Having studied and worked as architects for 15 years, we founded
            DesignCafe in 2015 to extend the intelligent and beautiful home
            interior design to a wider range of budgets. Obsessively quality
            focused, we do most things in-house – with expert designers, our own
            factory, and trained carpenters – to ensure flawless execution. We
            consistently focus on solving customer needs, with a big focus on
            space optimisation, to deliver up to 20% extra space to your home.
          </p> */}
        </div>
        <button className=" rounded-md bg-yellow-400 md:ml-[15%] ml-[27%] mt-[7%]">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
