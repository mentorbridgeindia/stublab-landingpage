import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import serverlogo from '../assets/serverlogo.svg';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.scss';

const backgroundVideo = "/videos/backgroundvideo.mp4";

const Footer = () => {
    return (
        <div className='position-relative p-5 text-light'>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: "-1" }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <Row className="gy-5 position-relative" style={{ zIndex: "1" }}>
                <Col lg={6} className='d-flex flex-column gap-3'>
                    <img
                        src={serverlogo}
                        alt="StubLab Mockserver Illustration"
                        className="footer-logo"
                    />
                    <div className="footer-about text-start">
                        <p className="mb-1">Powering API development with</p>
                        <p className="mb-4">instant API mocking & testing.</p>
                        <p className="text-secondary">Built with innovation at StubLab.</p>
                    </div>
                </Col>

                <Col lg={2} xs={6} className='text-start'>
                    <h5 className="footer-title">Company</h5>
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#docs">API Documentation</a></li>
                        <li><a href="#support">Support</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </Col>
                
                <Col lg={2} xs={6} className='text-start'>
                    <h5 className="footer-title">Legal & Security</h5>
                    <ul className="footer-links">
                        <li><a href="#features">Terms of Services</a></li>
                        <li><a href="#pricing">Privacy Policy</a></li>
                        <li><a href="#cookie-policy">Cookie Policy</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#compliance">Compliance</a></li>
                    </ul>
                </Col>

                <Col lg={2} className='text-start'>
                    <h5 className="footer-title mb-2">Follow Us</h5>
                    <ul className="footer-links">
                        <li><a href="#twitter"><FaTwitter className="social-icon" /> Twitter (X)</a></li>
                        <li><a href="#instagram"><FaInstagram className="social-icon" /> Instagram</a></li>
                        <li><a href="#youtube"><FaYoutube className="social-icon" /> YouTube</a></li>
                        <li><a href="#linkedin"><FaLinkedin className="social-icon" /> LinkedIn</a></li>
                        <li><a href="#facebook"><FaFacebook className="social-icon" /> Facebook</a></li>
                    </ul>
                </Col>
            </Row>
            
            <div className="text-center mt-4 position-relative" style={{ zIndex: "1" }}>
                &copy; {new Date().getFullYear()} StubLab. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;