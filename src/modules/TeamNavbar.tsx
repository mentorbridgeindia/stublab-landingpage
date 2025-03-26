import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as IconLogo } from "../assets/icon-logo.svg";
import "./Navbar.scss";

const TeamNavbar: React.FC<{ isDetailPage?: boolean }> = ({
  isDetailPage = false,
}) => {
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

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar detail-page-navbar ${
        !visible ? "navbar-hidden" : ""
      } ${isAnimating ? "animate__animated animate__fadeInDown" : ""}`}
    >
      <Navbar.Brand href="#" className="logo">
        <IconLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TeamNavbar;
