import { Container } from "react-bootstrap";
import { useTheme } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const { state } = useTheme();
  const { darkMode } = state;

  return (
    <Container
      className="d-flex justify-content-center align-items-center experience"
      id="experience"
    >
      <div className="d-flex flex-column align-items-center">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span style={{ color: "var(--orange)" }}>Experience</span>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          45+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span style={{ color: "var(--orange)" }}>Projects</span>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span style={{color: "var(--orange)"}}>Work</span>
      </div>
    </Container>
  );
};

export default Experience;
