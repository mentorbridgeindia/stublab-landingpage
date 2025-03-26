import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import serverlogo from '../assets/serverlogo.svg';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.scss';


const Footer = () => {
    return (
        <>
            <hr className="my-2" style={{ color: "grey" }}></hr>
            <div className='position-relative p-5 text-light'>


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
                            <li><a href="#support">Support</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} xs={6} className='text-start'>
                        <h5 className="footer-title">Legal & Security</h5>
                        <ul className="footer-links">
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="#security">Security</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} className='text-start'>
                        <h5 className="footer-title mb-2">Follow Us</h5>
                        <ul className="footer-links">
                            <li><a href="https://x.com/Stublab_India"><FaTwitter className="social-icon" /> Twitter (X)</a></li>
                            <li><a href="https://www.instagram.com/stublab_india"><FaInstagram className="social-icon" /> Instagram</a></li>
                            <li><a href="https://www.youtube.com/@StubLab_India"><FaYoutube className="social-icon" /> YouTube</a></li>
                            <li><a href="https://www.linkedin.com/company/stublab/"><FaLinkedin className="social-icon" /> LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/people/StubLab-India/pfbid0amYdD9N77MNCrw4A1NiLki6F434Wouwn6sW8edGMAB5GQCXwYinLhmzEKvuK7wnwl/"><FaFacebook className="social-icon" /> Facebook</a></li>
                        </ul>
                    </Col>
                </Row>

                <div className="text-center mt-4 position-relative" style={{ zIndex: "1" }}>
                    &copy; {new Date().getFullYear()} StubLab. All Rights Reserved.
                </div>
            </div>
        </>
    );
};

export default Footer;