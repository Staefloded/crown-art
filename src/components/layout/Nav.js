import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/nav.scss";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav  ${show && "nav__black"}`}>
      <div className={`nav__container ${show && "nav__container-black"}`}>
        <div className="nav__logoContainer">
          <img
            src="http://crown-art.ancorathemes.com/wp-content/uploads/2017/02/logo.png"
            alt="Logo"
            className="nav__logo"
          />
        </div>

        <ul className="nav__linksContainer">
          <li className="nav__link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__link">
            <Link to="/gallery">gallery</Link>
          </li>
          <li className="nav__link">
            <Link to="/team">team</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">about us</Link>
          </li>
          <li className="nav__link">
            <Link to="/competition">competition</Link>
          </li>
          <li className="nav__link">
            <Link className="btn btn-blue" to="/contact">
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
