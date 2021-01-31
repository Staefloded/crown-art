import React, { useState } from "react";
import "../../styles/layout/footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Hello World");
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <img
            src="http://crown-art.ancorathemes.com/wp-content/uploads/2017/02/logo-2.png"
            alt="Footer Logo"
            className="footer__top--logo"
          />
          <h2 className="footer__top--headerText">Newsletter</h2>

          <p className="footer__top--subHeaderText">Subscribe to our mailing list</p>

          <form className="footer__top--form">
            <div className="footer__top--formContainer">
              <input
                type="type"
                required
                name="email"
                value={email}
                className="footer__top--formField"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-orange footer__top--formSubmit"
                onSubmit={handleSubmit}
              >
                sign up
              </button>
            </div>
          </form>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom--container">
            <div className="footer__links">
              <h2 className="footer__links--header">Menu</h2>

              <ul className="footer__links--body">
                <li>
                  <a href="#!" className="footer__links--link">
                    Classes
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    programs
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Team
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__links">
              <h2 className="footer__links--header">Courses</h2>

              <ul className="footer__links--body">
                <li>
                  <a href="#!" className="footer__links--link">
                    Painting
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Sculptur
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Sketch
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Drawing
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Digital
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__links">
              <h2 className="footer__links--header">Contact</h2>

              <ul className="footer__links--body">
                <li>
                  <a href="#!" className="footer__links--link">
                    1 888 123 4567
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    info@crownart.com
                  </a>
                </li>

                <li>
                  <p className="footer__links--address">566 Potter Ave, Ridgewood, NY 11385</p>
                </li>
              </ul>
            </div>

            <div className="footer__links">
              <h2 className="footer__links--header">Socials</h2>

              <ul className="footer__links--body">
                <li>
                  <a href="#!" className="footer__links--link">
                    Facebook
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Dribble
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Instagram
                  </a>
                </li>

                <li>
                  <a href="#!" className="footer__links--link">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <p>
            <a href="#!">Crown App</a> © 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
