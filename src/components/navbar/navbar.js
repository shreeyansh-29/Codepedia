import {Container, Navbar, Nav} from "react-bootstrap";
import "./navbar.css";
import image from "../../assests/images/CODEPEDIA3.png";

function CollapseNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="myColor" variant="dark">
      <Container>
        <Navbar.Brand>
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
