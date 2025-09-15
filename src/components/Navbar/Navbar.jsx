import { Container, Navbar, Button } from "react-bootstrap";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const AppNavbar = () => {
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
          <ul
            className="d-flex align-items-center mb-0"
            style={{ listStyleType: "none", gap: "2rem", marginRight: "5rem" }}
          >
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
          </ul>
        </Navbar>
        <Link to="contact" spy={true} smooth={true}>
          <Button className="button" style={{ flex: "2" }}>
            Contact
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default AppNavbar;
