import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Navbar.scss";
import logo from '../assets/logo.png';
const CustomNavbar: React.FC = () => {
    return (
        
        <Navbar expand="md" className="custom-navbar position-fixed ">
            <Navbar.Brand href="#" className="logo">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="https://stublab.securosphere.in/login"  rel="noopener noreferrer">Login</Nav.Link>
                    <Nav.Link href="https://stublab.securosphere.in/register"  rel="noopener noreferrer">Register</Nav.Link>
                    <Nav.Link href="#account">Account</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
