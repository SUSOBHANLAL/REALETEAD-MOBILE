import React from "react";
import sateliteImg from "../../assets/inspiration.avif";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-[12%] ">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-white text-center  drop-shadow-2xl  rounded-md mr-[3%]">
            <div data-aos="zoom-in" className="w-[67%] md:w-[67%]">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-md"
              />
              <h2 className="sky-800">this is the home</h2>
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
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
                className="uppercase text-2xl text-zinc-400"
              >
                Looking for inspiration?
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="text-zinc-400"
              >
                Visit a Livspace Experience Centre.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="text-zinc-400 text-2xl"
              >
                Find one close to you.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
