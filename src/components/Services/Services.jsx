import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import HeartEmoji from "/img/heartemoji.png";
import Glasses from "/img/glasses.png";
import Humble from "/img/humble.png";
import "./Services.css";
import { useTheme } from "../../Context";

const Services = () => {
  // context
  const { state } = useTheme();
  const { darkMode } = state;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <Container className="services" id="services">
      <Row>
        {/* left side */}
        <Col lg={6} className="position-relative px-0 mb-5 mb-md-0">
          {/* dark mode */}
          <h2
            className="fw-bold"
            style={{ color: darkMode ? "white" : "", fontSize: "2.5rem" }}
          >
            My Awesome
          </h2>
          <h3
            className="fw-bold"
            style={{ color: "var(--orange)", fontSize: "2.5rem" }}
          >
            services
          </h3>
          <p
            className="mb-5"
            style={{ color: "var(--gray)", fontSize: "16px" }}
          >
            I create visually appealing, high-performing digital experiences
            tailored to your needs. From design to development, I ensure
            quality, creativity, and functionality in every project.
          </p>
          <a href="Resume.pdf" download="Nasir's Resume.pdf">
            <Button className="button">Get My Resume</Button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </Col>
        {/* right */}
        <Col lg={6} className="cards">
          {/* first card */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-6rem" }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={
                "HTML5, CSS3, Bootstrap5, TailwindCSS, JavaScript, React, Redux"
              }
            />
          </motion.div>
          {/* 3rd */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={
                "Designing seamless user experiences and intuitive interfaces that keep users engaged and delighted."
              }
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
