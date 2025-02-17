import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import security from "../assets/security.svg";

const AboutSection = () => {
    return (
        <Container 
            fluid 
            className="text-center bg-dark text-light justify-content-center p-5 mt-1"
            style={{ minHeight: "100vh" }}
        >
            <Row className="align-items-center">
                <Col lg={6}>
                    <img
                        src={security}
                        alt="StubLab Mockserver Illustration"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "100%" }}
                    />
                </Col>

                <Col lg={6}>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex flex-column align-items-start'>
                            <Button variant="secondary" className="text-light">
                                About StubLab
                            </Button>
                        </div>

                        <div className='d-flex flex-column align-items-start py-2'>
                            <h1 className="text-light text-start">StubLab - The Ultimate API Mocking Solution</h1>
                            <p className="text-light">Create, Iterate, and Test APIs without a backend!</p>
                        </div>

                        <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className="form-check-input" />
                            <p className='mb-1 text-light'>Mock APIs Instantly</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className="form-check-input" />
                            <p className='mb-1 text-light'>Customizable API Responses</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className="form-check-input" />
                            <p className='mb-1 text-light'>AI-Powered Test Data</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className="form-check-input" />
                            <p className='mb-1 text-light'>Simulate API Failures & Errors</p>
                        </div>

                        {/* CTA Button */}
                        <div className='d-flex align-items-center py-3'>
                            <Button variant="light" className="text-dark">Learn More</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
