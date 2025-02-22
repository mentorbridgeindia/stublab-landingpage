import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import about2 from "../assets/about2.svg";

const AboutSection = () => {
    const backgroundVideo = "/videos/backgroundvideo.mp4";

    const featureList = [
        "Mock APIs Instantly",
        "Customizable API Responses",
        "AI-Powered Test Data",
        "Simulate API Failures & Errors",
    ];

    return (
        <Container
            fluid
            className="position-relative text-light p-md-5 p-3"
            style={{ minHeight: "100vh", overflow: "hidden" }}
        >
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

            <Row className="align-items-center position-relative p-md-5 p-3" style={{ zIndex: "1" }}>
                <Col xs={12} md={6} className="d-flex justify-content-center pt-3 pt-md-5">
                    <img
                        src={about2}
                        alt="StubLab Mockserver Illustration"
                        className="img-fluid w-100 w-md-75 h-auto"
                    />
                </Col>

                <Col xs={12} md={6} className="d-flex flex-column align-items-start mt-5">
                    <Badge bg="dark"
                        style={{
                            borderRadius: "5px",
                            padding: "8px 16px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                        }}
                        className="text-light text-start"
                    >
                        About StubLab
                    </Badge>

                    <h2 className="text-light text-start mt-3">StubLab - The Ultimate API Mocking Solution</h2>
                    <p className="text-light text-start">
                        Create, Iterate, and Test APIs without a backend!
                    </p>

                    <div className="d-flex flex-column gap-2">
                        {featureList.map((feature, index) => (
                            <div className="d-flex align-items-center gap-2" key={index}>
                                <FaCheck color="blue" />
                                <p className="mb-0 text-light">{feature}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
