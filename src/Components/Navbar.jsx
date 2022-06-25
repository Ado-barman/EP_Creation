import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";

function Navbar() {
  const [change, setChange] = useState(false);
  function handleChange() {
    setChange(!change);
  }
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="logo">
          EP Creation<i class="fa-solid fa-camera-retro"></i>
        </h1>
        <div className="MenuItems" onClick={handleChange}>
          <i
            className={
              change ? "fa-solid fa-times" : "fa-solid fa-bars-staggered"
            }
          ></i>
        </div>
        <ul className={change ? "nav-menu active" : "nav-menu"}>
          {NavbarData.map((items, index) => {
            return (
              <li key={index}>
                <Link
                  className={items.cName}
                  to={items.url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
