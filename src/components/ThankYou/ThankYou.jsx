import React from "react";
import "./thank.css";
import img from "../../assets/Images/thank-you.gif";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="containerThanks">
      <div className="cardThankYou">
        <Link to={"/search"}>
          <div className="exit">X</div>
        </Link>

        <img className="picThank" src={img} />

        <p>
          Your CV has been received and we will be coacting you shortly
          toFollow-up if you would like to speak to someone immediately
        </p>
        <div className="phoneNumber">407-841-2299</div>
        <h3>FOLLOW US</h3>
        <ul className="listIcons">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaFacebook />
          </li>
        </ul>
      </div>
    </div>
  );
}
