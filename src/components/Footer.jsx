import React from "react";
import Agreements from "./Agreements";
const youtube = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const twitter = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const facebook = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const linkedin = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto text-white bg-black">
        <div className="container flex flex-col items-start justify-between gap-12 xl:flex-row xl:items-end">
          <div className="footer-main flex flex-col gap-8">
            <h2 className="">Let's connect</h2>
            <div className="flex flex-col gap-20 xl:flex-row">
              <ul className="flex flex-col gap-8">
                <li>
                  <h4>
                    <a href="">Get in touch</a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="">Explore careers</a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="">View locations</a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="">Learn about Turtle</a>
                  </h4>
                </li>
              </ul>
              <div className="flex gap-20">
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="">Who we are</a>
                  </li>
                  <li>
                    <a href="">What we do</a>
                  </li>
                  <li>
                    <a href="">Our thinking</a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="">Newsroom</a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">Press releases</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-socials flex flex-col gap-2 items-start xl:items-center ">
            <p className="text-white">Follow us</p>
            <div className="socials flex gap-2">
              {facebook}
              {linkedin}
              {twitter}
              {youtube}
            </div>
          </div>
        </div>
      </footer>
      <Agreements />
    </>
  );
};

export default Footer;
