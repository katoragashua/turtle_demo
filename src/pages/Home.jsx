import React from "react";
import Hero from "../components/home/Hero";
import satisfied from "../assets/images/satisfied.jpg";
import Btn from "../components/Btn";
import OurMethods from "../components/home/OurMethods";
import Careers from "../components/home/Careers";
import OurWork from "../components/home/OurWork";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="home">
      <Hero />
      <section className="what-we-do flex flex-col items-center justify-center h-full min-h-[100vh] relative overflow-hidden text-white py-8">
        <div className="overlay-2"></div>
        <img
          src={satisfied}
          alt=""
          className="zoom-in absolute top-0 left-0 right-0 bottom-0 h-full"
        />
        <div className="container flex flex-col items-center gap-12 py-20 rounded-md">
          <h2 className="">Bridging the gap. It's what we do.</h2>
          <p className="lg:max-w-[50%] leading-[1.6] text-center">
            As a global training and consulting organization We Aim to close the
            gap between who you are today and what you can become in the near
            future ,to be committed to our clients in every way by having a wide
            range of services to meet their growing needs, to be dedicated to
            delivering actionable results in a tight-knit bond with our clients
            and having a positive impact on the bottom line.
          </p>
          <div className="flex flex-col gap-8 xl:gap-12 xl:flex-row ">
            <button className="white-btn" data-aos="fade-up">
              What we do
            </button>
            <button className="white-btn" data-aos="fade-up">
              Who we are
            </button>
            <button className="white-btn" data-aos="fade-up">
              Careers
            </button>
          </div>
        </div>
      </section>
      <OurMethods />
      <OurWork />
      <Careers />
    </div>
  );
};

export default Home;
