import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Toggle from "../Toggle/Toggle";
import { useTheme } from "../../Context";

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { state } = useTheme();
  const { darkMode } = state;

  return (
    <Container
      className="d-flex justify-content-between px-0"
      id="Navbar"
      style={{ marginBottom: "2rem", height: "10vh" }}
    >
      {/* left */}
      <div className="d-flex align-items-center gap-3" style={{ flex: "1" }}>
        <Navbar.Brand className="fw-bold" style={{ fontSize: "1.5rem" }}>
          Nasir
        </Navbar.Brand>
        <Toggle />
      </div>
      {/* right */}
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ flex: "1", fontWeight: "400" }}
      >
        <Navbar className="d-none d-lg-flex" style={{ flex: 10 }}>
          <Nav
            className="d-flex align-items-center mb-0"
            style={{ listStyleType: "none", gap: "2rem", marginRight: "5rem" }}
            activeKey={activeLink}
            onSelect={(selectedKey) => setActiveLink(selectedKey)}
          >
            <Nav.Link
              eventKey="home"
              href="#"
              style={{ color: darkMode ? "white" : "" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="services"
              href="#services"
              style={{ color: darkMode ? "white" : "" }}
            >
              Serivces
            </Nav.Link>
            <Nav.Link
              eventKey="about"
              href="#about"
              style={{ color: darkMode ? "white" : "" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey="portfolio"
              href="#portfolio"
              style={{ color: darkMode ? "white" : "" }}
            >
              Protfolio
            </Nav.Link>
          </Nav>
        </Navbar>
        <Nav.Link href="#contact">
          <Button className="button" style={{ flex: "2" }}>
            Contact
          </Button>
        </Nav.Link>
      </div>
    </Container>
  );
};

export default AppNavbar;
