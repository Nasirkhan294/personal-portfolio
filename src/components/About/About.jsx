import React, { useContext } from "react";
import "./About.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>All About</span>
          <span>Myself</span>
          <span>
            I'm a passionate Front-End developer on a mission to bring your
            <br />
            dreams to life through code! Whether it's crafting a cutting-edge
            <br />
            project, adding an exciting new feature, or crafting a stunning
            <br />
            website, I've got the skills and expertise to make it happen. Take a
            <br />
            glimpse into my portfolio and journey to see how I've turned ideas
            <br />
            into reality. If you're ready to turn your vision into a digital
            <br />
            masterpiece, reach out to me without hesitation. Let's embark on
            <br />
            this exciting coding adventure together!
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Linkedin} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
