import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.scss";
import logo from '../assets/logo.png';

const CustomNavbar: React.FC = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="#" className="logo">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="https://api.stublab.in/login"  rel="noopener noreferrer">Login</Nav.Link>
                    <Nav.Link href="https://api.stublab.in/register"  rel="noopener noreferrer">Register</Nav.Link>
                    <Nav.Link href="#account">Account</Nav.Link>
                    <Nav.Link href="#contact">contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
