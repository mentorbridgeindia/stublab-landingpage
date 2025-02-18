import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import security from "../assets/security.svg";


const AboutSection = () => {
    // const backgroundVideo = "/videos/backgroundvideo.mp4";
    return (
        <Container fluid className="text-center text-light position-relative p-5 " style={{ minHeight: "100vh" }}>
            {/* <video 
                autoPlay 
                loop 
                muted 
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: "-1" }} 
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            <Row className="align-items-center position-relative" style={{ zIndex: "1" }}>
                <Col lg={6}>
                    <img
                        src={security}
                        alt="StubLab Mockserver Illustration"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "100%" }}
                    />
                </Col>

                <Col lg={6}>
                    <div className="d-flex flex-column gap-2">
                        <div className="d-flex flex-column align-items-center align-items-lg-start  mt-3">
                            <Badge bg="" style={{ borderRadius: "5px", padding: "8px 16px", background: "rgba(255, 255, 255, 0.1)", color: "#fff" }} className="text-light">
                                About StubLab
                            </Badge>
                        </div>

                        <div className="d-flex flex-column align-items-start py-2">
                            <h1 className="text-light text-start">StubLab - The Ultimate API Mocking Solution</h1>
                            <p className="text-light">Create, Iterate, and Test APIs without a backend!</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" />
                            <p className="mb-1 text-light">Mock APIs Instantly</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" />
                            <p className="mb-1 text-light">Customizable API Responses</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" />
                            <p className="mb-1 text-light">AI-Powered Test Data</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" />
                            <p className="mb-1 text-light">Simulate API Failures & Errors</p>
                        </div>

                        <div className="d-flex align-items-center py-3">
                            <Button variant="outline-light" size="sm" className="px-4 py-2  ">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
