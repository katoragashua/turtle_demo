import React, { useState } from "react";

const NavItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={handleToggle}>
        {title}
        {isOpen ? " ▲" : " ▼"}
      </div>
      {isOpen && <ul>{children}</ul>}
    </li>
  );
};

const SubNavItem = ({ title, link }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="absolute top-[100%] bg-black w-full pb-32">
      <ul className="flex gap-4">
        <NavItem title="Services">
          <SubNavItem title="Consulting" link="/consulting" />
          <SubNavItem title="Audit & Assurance" link="/audit" />
          {/* Add more sub-items as needed */}
        </NavItem>
        <NavItem title="Industries">
          <SubNavItem title="Technology" link="/technology" />
          <SubNavItem title="Financial Services" link="/financial-services" />
          {/* Add more sub-items as needed */}
        </NavItem>
        {/* Add more top-level items as needed */}
      </ul>
    </nav>
  );
};

export default Nav;
