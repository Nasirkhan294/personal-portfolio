import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a
            href="https://www.instagram.com/nasir_khan294/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/nasirmahdkhan/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Nasirkhan294"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <span>Copyright © 2025 .All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
