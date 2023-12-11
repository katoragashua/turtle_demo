import React from "react";
import SectionHead from "./SectionHead";
import Card from "./Card";
import { data } from "../../data.js";

const OurMethods = () => {
  const cards = data.map((datum) => <Card key={datum.id} {...datum}  />);
  return (
    <section className="our-methods bg-[#f5f6f6]">
      <SectionHead text={"Our Methods"} bg={"#26890d"} />
      <div className="container flex flex-col gap-16 items-center py-20">
        <h2>How do we achieve this?</h2>
        <div className="grid items-start">{cards}</div>
      </div>
    </section>
  );
};

export default OurMethods;
