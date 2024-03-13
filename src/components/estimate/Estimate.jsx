import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";
const Estimate = () => {
  return (
    <section className="bg-primary text-white pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
        <div
          className="ml-4 pl-2 border-r-2 border-l-2 border-t-2 border-b-2 border-l-sky-800 border-r-sky-800 border-b-sky-800"
          data-aos="zoom-in"
        >
          <p className="text-sky-800 uppercase">
            fbsdjfsv GVSVavgsghs hCSHACVSHAVHDV HGCSGDCVSAHD D
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sky-800 uppercase"
          >
            our mission
          </p>
          <h6
            data-aos="fade-up"
            data-aos-delay="500"
            className="uppercase text-5xl text-sky-800"
          >
            Rapidscat
          </h6>
          <p data-aos="fade-up" data-aos-delay="700" className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae reprehenderit expedita corporis, non doloremque.
            Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos molestiae reprehenderit
            expedita corporis, non doloremque. Consequatur consectetur quisquam
            qui sunt.
          </p>
          <img
            src={sateliteImg}
            alt=""
            className="w-10 sm:w-[80%] mx-auto max-h-[35px] object-cover"
          />
        </div>
        <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-t-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
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
            className="uppercase text-5xl text-sky-800"
          >
            Rapidscat
          </h1>
          <p data-aos="fade-up" data-aos-delay="700" className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae reprehenderit expedita corporis, non doloremque.
            Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos molestiae reprehenderit
            expedita corporis, non doloremque. Consequatur consectetur quisquam
            qui sunt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
