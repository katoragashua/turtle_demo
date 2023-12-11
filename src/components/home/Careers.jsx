import React from "react";
import SectionHead from "./SectionHead";
import join from "../../assets/images/join.jpg";
import Btn from "../Btn";

const Careers = () => {
  const style = {
    padding: "1rem 2rem",
    borderRadius: "25px",
    backgroundColor: "rgba(59 130 246)",
  };

  return (
    <section className="careers">
      <SectionHead text={"Careers"} bg={"#007aff"} />
      <div className="container flex flex-col items-center gap-16 py-28 xl:flex-row">
        <div data-aos="fade-left">
          <img src={join} alt="" />
        </div>
        <div className="flex flex-col items-center gap-12 xl:items-start" data-aos="fade-right">
          <h2 className="">Join us</h2>
          <p>
            Deciding the career for you is more than simply “landing the job.”
            It’s finding a place where you know you make a difference each day,
            where you can be your most authentic self. It’s choosing your
            impact.
          </p>
          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <button className="career-btn">Explore careers</button>
            <button className="career-btn">Search and apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
