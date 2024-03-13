import React from "react";
import sateliteImg from "../../assets/inspiration.avif";
const Inspiration = () => {
  return (
    <section className="bg-primary text-white md:py-[1%] py-[9%] flex-col sm:flex sm:flex-row md:px-[12%] rounded-lg">
      <div
        data-aos="zoom-in"
        className="w-full md:w-[87%]  md:border-r-2 md:border-b-2 md:border-t-2 border-t-teal-500 md:border-l-2 border-l-sky-800 border-b-sky-800 py-[3%]    md:py-[3%]"
      >
        <img
          src={sateliteImg}
          alt=""
          className="sm:w-[80%] w-full mx-auto max-h-[350px] object-cover rounded-md "
        />
        <h2 className="sky-800">this is the home</h2>
      </div>
      <div className="mt-[2%] md:mt-[0%] m-[2%] md:m-[0%] space-y-3 xl:pr-36 p-4 border-r-2 border-l-2 border-l-sky-800 md:border-l-0 border-b-2 border-t-teal-500 border-t-2 border-r-sky-800 border-b-sky-800 md:w-[87%] ">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sky-800 uppercase"
        >
          our mission
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="uppercase text-3xl text-zinc-400"
        >
          Looking for inspiration?
        </h1>

        <button
          data-aos="fade-up"
          data-aos-delay="900"
          className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
        >
          Visit a Livspace Experience Centre.
        </button>
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-pink-700 text-md md:pl-[12%] hover:text-blue-500 "
        >
          Find one close to you.📍
        </p>
        {/* <button
          data-aos="fade-up"
          data-aos-delay="900"
          className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
        >
          View All
        </button> */}
      </div>
    </section>
  );
};

export default Inspiration;
