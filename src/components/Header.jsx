import React from "react";
import Navigation from "./Navigation";
import turtle_logo from "../assets/images/turtle_aviation.png";
import Nav from "./Nav"

const searchIcon = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const globeIcon = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const arrowDown = (
  <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
      fill="rgba(255,255,255,1)"
    ></path>
  </svg>
);

const Header = () => {

  const [dropDown, setDropDown] = React.useState(() => false)



  return (
    <header className="header bg-black h-16 text-white">
      {/* <div className="absolute py-12 bg-black top-[100%] min-w-full">
        <div className="container">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          libero eligendi, tempore eum quam, blanditiis a labore iusto quisquam
          nihil dolor aperiam officia dolores maxime distinctio nostrum
          praesentium possimus laborum atque eaque! Tenetur eligendi quidem,
          repellat rerum placeat possimus voluptatem fugit nemo architecto
          veniam inventore unde modi laudantium maiores eum in repudiandae,
          magni facilis autem esse. Voluptate aliquid debitis maxime adipisci
          quis inventore temporibus quam minima repellat magnam esse voluptatum
          dolorum vero, numquam totam cumque nam! Dolor nobis quia qui
          perferendis eaque eos quae esse harum quasi temporibus, libero vero
          non in laboriosam illo. Libero pariatur voluptatum quia voluptates
          architecto.
        </div>
      </div> */}
      <div className="container flex items-center  gap-4">
        <div className="logo">
          <img
            src={turtle_logo}
            alt="the company logo"
            className="w-[80px] self-start "
          />
        </div>
        {/* <div className="navigation">
          <ul className="flex gap-4">
            <li className="flex gap-2">
              <div>Who we are</div>
              {arrowDown}
            </li>
            <li className="flex gap-2">
              <div>What we do</div>
              {arrowDown}
            </li>
            <li className="flex gap-2">
              <div>Our thinking</div>
              {arrowDown}
            </li>
            <li className="flex gap-2">
              <div>Careers</div>
              {arrowDown}
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li>{searchIcon}</li>
            <li>
              <div className="flex text-white gap-2">
                {globeIcon}
                <span>NG-EN</span>
              </div>
            </li>
          </ul>
        </div> */}
        {/* <Nav/> */}
        <Navigation/>
      </div>
    </header>
  );
};

export default Header;
