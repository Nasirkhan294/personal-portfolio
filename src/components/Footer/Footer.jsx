import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="d-flex align-items-center footer">
      <img src="/img/wave.png" alt="" style={{ width: "100%" }} />
      <div className="f-content d-flex flex-column align-items-center gap-5 text-white">
        <div className="d-flex gap-4">
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
        <p>Copyright © 2025 .All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
