import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./About.css";
import { useTheme } from "../../Context";
import { Button, Col, Row } from "react-bootstrap";
const About = () => {
  // context
  const { state } = useTheme();
  const { darkMode } = state;

  // transition
  return (
    <Row className="about px-0 px-lg-5" id="about">
      {/* left side */}
      <Col lg={6} className="position-relative">
        {/* dark Mode */}
        <h2
          className="fw-bold"
          style={{ color: darkMode ? "white" : "", fontSize: "2.5rem" }}
        >
          All About
        </h2>
        <h3
          className="fw-bold"
          style={{ color: "var(--orange)", fontSize: "2.5rem" }}
        >
          Myself
        </h3>
        <p
          className="lh-sm mt-4"
          style={{ color: "var(--gray)", fontSize: "16px" }}
        >
          I'm a passionate Front-End developer on a mission to bring your dreams
          to life through code! Whether it's crafting a cutting-edge project,
          adding an exciting new feature, or crafting a stunning website, I've
          got the skills and expertise to make it happen. Take a glimpse into my
          portfolio and journey to see how I've turned ideas into reality. If
          you're ready to turn your vision into a digital masterpiece, reach out
          to me without hesitation. Let's embark on this exciting coding
          adventure together!
        </p>
        <Link to="contact" smooth={true} spy={true}>
          <Button className="button mt-5 px-5">Hire Me</Button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </Col>
      {/* right side */}
      <Col lg={6} className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle" style={{ top: "-5rem", left: "6rem" }}>
            <img src="/img/Upwork.png" alt="Upwork" />
          </div>
          <div className="w-secCircle" style={{ top: "5rem", left: "-3rem" }}>
            <img src="/img/linkedin.png" alt="Linkedin" />
          </div>
          <div className="w-secCircle" style={{ top: "16rem", left: "6rem" }}>
            <img src="/img/fiverr.png" alt="Fiver" />
          </div>
          <div className="w-secCircle" style={{ top: "5rem", left: "15rem" }}>
            <img src="/img/github.png" alt="Github" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </Col>
    </Row>
  );
};

export default About;
