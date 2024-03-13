import React from "react";
import img from "../assetss/img/room9.jpg";
import Fullhome from "../assetss/img/full-home.avif";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg w-[85%]" src={Fullhome} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Your Home Special?
          </h2>
          <p>
            Rainbow specialises in providing commercial interior designing
            services for a diverse range of spaces including offices, retail
            stores, hotels, restaurants, warehouses, and residential amenities.
            Our expertise lies in offering comprehensive services such as design
            and build, encompassing a holistic approach to transformational
            design strategies.
          </p>
          <p>
            We excel in sourcing and procuring the finest products from
            top-notch suppliers across the country, ensuring a tailored fit to
            meet your specific requirements.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
