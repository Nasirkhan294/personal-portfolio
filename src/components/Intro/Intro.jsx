import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Intro.css";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { useTheme } from "../../Context";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const { state } = useTheme();
  const { darkMode } = state;

  return (
    <Container className="intro">
      <Row id="Intro" style={{ marginTop: "6rem" }}>
        {/* left name side */}
        <Col lg={6} className="px-0">
          <div>
            <h1
              className="fw-bold"
              style={{ color: darkMode ? "white" : "", fontSize: "3rem" }}
            >
              Hy! I Am
            </h1>
            <h2
              className="fw-bold"
              style={{ color: "var(--orange)", fontSize: "3rem" }}
            >
              Nasir Mahmood
            </h2>
            <p
              className="lh-sm mb-4"
              style={{ fontSize: "16px", color: "var(--gray)" }}
            >
              Creative Frontend Developer with a passion for creating beautiful,
              user-friendly websites and delivering top-quality results.
            </p>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <Button className="button">Hire me</Button>
          </Link>
          {/* social icons */}
          <div className="d-flex i-icons my-5">
            <a
              href="https://github.com/Nasirkhan294"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/github.png" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/nasirmahdkhan/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/linkedin.png" alt="Linkedin" />
            </a>
            <a
              href="https://www.instagram.com/nasir_khan294/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/instagram.png" alt="instagram" />
            </a>
          </div>
        </Col>
        {/* right image side */}
        <Col className="i-right mt-5 mt-lg-0">
          <img src="/img/Vector1.png" alt="Vector blue" />
          <img src="/img/Vector2.png" alt="Vector yellow" />
          <img src="/img/boy.png" alt="A man with yellow shirt" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src="/img/glassesimoji.png"
            alt="Glasses Emoji"
          />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img="/img/crown.png" text1="Web" text2="Developer" />
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "20rem" }}
            whileInView={{ left: "0.5rem" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv
              img="/img/thumbup.png"
              text1="Best Design"
              text2="Award"
            />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
