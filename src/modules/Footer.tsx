import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import serverlogo from '../assets/serverlogo.svg';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import './Footer.scss';

const Footer = () => {
    return (
        <Container fluid className="footer-container position-relative text-light p-5 bottom-0">
            <div className='d-flex flex-column gap-5'>
                <Row className="gy-5">
                    <Col lg={6}>
                        <div className='d-flex flex-column gap-3'>
                            <img
                                src={serverlogo}
                                alt="StubLab Mockserver Illustration"
                                className="footer-logo"
                            />
                            <div className="footer-about text-start">
                                <p className="mb-1">Powering API development with</p>
                                <p className="mb-4">instant API mocking & testing.</p>
                                <p className="text-secondary">Built with innovation at Stublab.</p>
                            </div>
                            <div className="subscription-container">
                                <Form className="d-flex gap-3">
                                    <Form.Control
                                        size='sm'
                                        type="email"
                                        placeholder="Subscribe for API updates..."
                                        className="footer-input"
                                    />
                                    <Button className="subscribe-btn btn-sm ">Subscribe</Button>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg={2}>
                        <div className='text-start gap-3'>
                            <h5 className="footer-title">Company</h5>
                            <ul className="footer-links">
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="#docs">API Documentation</a></li>
                                <li><a href="#support">Support</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='text-start gap-3'>
                            <h5 className="footer-title">Legal Security</h5>
                            <ul className="footer-links">
                                <li><a href="#features">Terms of Services</a></li>
                                <li><a href="#pricing">Privacy Policy</a></li>
                                <li><a href="#cookie-policy">Cookie Policy</a></li>
                                <li><a href="#security">Security</a></li>
                                <li><a href="#compliance">Compliance</a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={2}>
                        <div className='text-start gap-3'>
                            <h5 className="footer-title mb-4">Follow Us</h5>
                            <ul className="footer-links">
                                <li><a href="#twitter"><FaTwitter className="social-icon" /> Twitter (X)</a></li>
                                <li><a href="#instagram"><FaInstagram className="social-icon" /> Instagram</a></li>
                                <li><a href="#youtube"><FaYoutube className="social-icon" /> Youtube</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <div className="copyright text-center mt-4">
                    &copy; {new Date().getFullYear()} StubLab. All Rights Reserved.
                </div>

            </div>
        </Container>
    );
};

export default Footer;
