import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll";
import {Container, Navbar, Nav} from "react-bootstrap";
import "./navbar.css";
import image from "../../assests/images/CODEPEDIA3.png";

function CollapseNavbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="myColor"
      variant="dark"
      fixed="top"
      scrollNav={scrollNav}
    >
      <Container>
        <Navbar.Brand onClick={toggleHome}>
          <img src={image} alt="first" className="img2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="navStyle">
              Home
            </Nav.Link>
            <Nav.Link href="/skills" className="navStyle">
              Skills
            </Nav.Link>
            <Nav.Link href="/learn/code" className="navStyle">
              Learn/Code
            </Nav.Link>
            <Nav.Link href="/practice" className="navStyle">
              Practice
            </Nav.Link>
            <Nav.Link href="/contactus" className="navStyle">
              ContactUs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapseNavbar;
