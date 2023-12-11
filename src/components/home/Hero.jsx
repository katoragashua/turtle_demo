import React from "react";
import Btn from "../Btn";

const Hero = () => {
  return (
    <section className="hero relative text-white flex place-items-center h-full">
      <div className="container flex flex-col items-start gap-8 relative">
        <div className="hero-text flex flex-col gap-4 lg:max-w-[40%]  py-7 "  data-aos="fade-up">
          <h1 className="text">
            …We are in the Business of growing Businesses.
          </h1>
          <p>
            Turtle Consulting Nigeria is a Leading international provider of
            training courses, seminars, workshops, programs, conferences, and
            in-house training.
          </p>
        </div>
        <button className="py-4 px-8 bg-[#007aff] rounded-[30px] text-white font-semibold cursor-pointer" data-aos="fade-up">
          Explore our report
        </button>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
