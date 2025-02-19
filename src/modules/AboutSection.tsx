import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import about1 from "../assets/about.svg";

const AboutSection = () => {
    const backgroundVideo = "/videos/backgroundvideo.mp4";

    const featureList = [
        "Mock APIs Instantly",
        "Customizable API Responses",
        "AI-Powered Test Data",
        "Simulate API Failures & Errors",
    ];

    return (
        <Container fluid className="position-relative text-light p-5 " style={{ minHeight: "100vh", overflow: "hidden" }}>
            <video
                autoPlay
                loop
                muted
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: "-1" }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Row className="align-items-center position-relative p-5" style={{ zIndex: "1" }}>
                <Col className="d-flex justify-content-center pt-5 " md={6}>
                    <img
                        src={about1}
                        alt="StubLab Mockserver Illustration"
                        className="img-fluid w-75"
                    />
                </Col>

                <Col lg={6}>
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex flex-column align-items-center align-items-lg-start  mt-3">
                            <Badge
                                bg=""
                                style={{ borderRadius: "5px", padding: "8px 16px", background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
                                className="text-light"
                            >
                                About StubLab
                            </Badge>
                        </div>

                        <div className="d-flex flex-column align-items-start py-2 gap-3">
                            <h2 className="text-light text-start">StubLab - The Ultimate API Mocking Solution</h2>
                            <p className="text-light">Create, Iterate, and Test APIs without a backend!</p>
                        </div>

                        {featureList.map((feature, index) => (
                            <div className="d-flex align-items-center gap-3 " key={index}>
                                <FaCheck color="blue" />
                                <p className="mb-1 text-light">{feature}</p>
                            </div>
                        ))}


                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
