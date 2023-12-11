import React from "react";
import { Link } from "react-router-dom";

const Agreements = () => {
  return (
    <section className="agreements bg-white py-8">
      <div className="container flex flex-col items-start gap-2">
        <ul className="flex gap-8">
          <li>
            <small>
              <Link>Terms of Use</Link>
            </small>
          </li>
          <li>
            <small>
              <Link>Cookies</Link>
            </small>
          </li>
          <li>
            <small>
              <Link>Privacy Policy</Link>
            </small>
          </li>
        </ul>
        <small className="max-w-[55%]">
          Turtle refers to one or more of Turtle Consulting Limited, a Nigerian
          private company limited by guarantee, its network of member firms, and
          their related entities. TCL and each of its member firms are legally
          separate and independent entities. Please see www.turtle.com/about for
          a detailed description of TCL and its member firms.
        </small>

        <small>
          &copy;{new Date().getFullYear()} See{" "}
          <a href="" style={{ color: "#007aff", fontWeight: "normal" }}>
            Terms of use
          </a>{" "}
          for more details.
        </small>
      </div>
    </section>
  );
};

export default Agreements;
