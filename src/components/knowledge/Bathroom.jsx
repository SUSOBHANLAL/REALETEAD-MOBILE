import React from "react";
import { Link } from "react-scroll";
import NM from "../../assets/satelite1.jpg";
import NM1 from "../../assets/satelite2.jpg";
import ma1 from "../../assetss/img/room1.jpg";
import ma2 from "../../assetss/img/room2.jpg";
import ma3 from "../../assetss/img/room3.jpg";
import ma4 from "../../assetss/img/room4.jpg";
import ma5 from "../../assetss/img/room5.jpg";
import ma6 from "../../assetss/img/room6.jpg";
import ma7 from "../../assetss/img/room7.jpg";
import ma8 from "../../assetss/img/room8.jpg";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import InfiniteScroll from "react-infinite-scroll-component";

const Bathroom = () => {
  const Bathroomdata = [
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma1,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma2,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma3,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma4,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma5,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma6,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma7,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma8,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma1,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma2,
      aosDelay: "300",
    },
    {
      title: "Rent",
      content: "HSR Layout",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      cover: ma3,
      aosDelay: "300",
    },

    {
      title: "Rent",
      content: "Jaynagar",
      description:
        ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
      // icon: <FaShuttleSpace className="text-7xl" />,
      cover: ma4,
      aosDelay: "500",
    },
    {
      title: "Rent",
      content: "BTM Layout",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      // icon: <FaSpaceAwesome className="text-7xl" />,
      cover: NM,
      aosDelay: "700",
    },
    {
      title: "Rent",
      content: "BTM Layout",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      // icon: <FaSpaceAwesome className="text-7xl" />,
      cover: NM,
      aosDelay: "700",
    },
  ];

  const slidebathroomLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slidebathroomRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log(slidebathroomRight);
  };
  return (
    <>
      <div className=" mt-[3%] flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h6 className="font-semibold text-center text-2xl ">
          End-to-end bathroom
        </h6>
        <div className="lg:pl-[92%]">
          <button
            data-aos="fade-up"
            data-aos-delay="900"
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 "
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              see all
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </button>
        </div>
      </div>

      <div className="relative flex items-center mx-[3%]">
        <IoMdArrowDroprightCircle
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slidebathroomLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-[4%]"
        >
          {/* <InfiniteScroll
            dataLength={data.length}
            next={this.data}
            style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            inverse={true} //
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          > */}
          {Bathroomdata.map((item) => (
            <img
              className="lg:w-[22%] h inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-sm pt-[2%]"
              src={item.cover}
              alt="/"
            />
          ))}
          {/* </InfiniteScroll>  */}
        </div>
        <IoMdArrowDroprightCircle
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slidebathroomRight}
          size={40}
        />
      </div>
    </>
  );
};

export default Bathroom;
