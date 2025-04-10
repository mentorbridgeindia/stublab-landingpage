import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/stublab-logo.svg";
import "./Navbar.scss";

const CustomNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

      if (currentScrollPos === 0) {
        setVisible(true);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      } else if (scrollDifference > 5) {
        if (isScrollingDown && visible) {
          setVisible(true);
          setIsAnimating(true);
        } else if (!isScrollingDown && !visible) {
          setVisible(true);
          setIsAnimating(true);
          setTimeout(() => {
            setIsAnimating(false);
          }, 600);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar ${!visible ? "navbar-hidden" : ""} ${
        isAnimating ? "animate__animated animate__fadeInDown" : ""
      }`}
      id='contact' >
      <Navbar.Brand href="#" className="logo">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Nav.Link>
          <Nav.Link href="https://stublab.securosphere.in/login" rel="noopener noreferrer">Login</Nav.Link>
          <Nav.Link href="https://stublab.securosphere.in/register" rel="noopener noreferrer">Register</Nav.Link>
          <Nav.Link onClick={handleScrollToContact}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
