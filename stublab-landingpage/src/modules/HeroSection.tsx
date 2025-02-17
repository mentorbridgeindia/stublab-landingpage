import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { ReactComponent as Check } from "../assets/heroimg.svg";

const HeroSection: React.FC = () => {
    return (
        <Container
            fluid
            className="text-center bg-dark py-5 d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div
                id="globe"
                className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7 peekaboo"
            >
                <canvas
                    width="700"
                    height="654"
                    className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
                    style={{ width: "700px", height: "654.594px" }}
                ></canvas>
            </div>
            <Row className="w-100">
                <Col md={12} className="d-flex flex-column align-items-center">
                    <Badge
                        pill
                        bg="secondary"
                        text="light"
                        className="mb-3 px-3 py-2 shadow-sm"
                    >
                        🚀 Simplify API Testing
                    </Badge>
                    <h1 className="display-4 fw-bold text-light text-center mt-5 mb-3">
                        Create & Test APIs <br /> Without a Backend
                    </h1>
                    <p className="lead text-light text-center mt-3 mb-3">
                        StubLab is your ultimate API mocking tool, enabling fast and flexible API testing  
                        <br />
                        without waiting for backend development.
                    </p>
                    <div className="d-flex justify-content-center gap-5 mt-3 mb-3">
                        <div className="p-2 text-light">
                            <Check /> AI-Powered Mock Data
                        </div>
                        <div className="p-2 text-light">
                            <Check /> Customizable API Responses
                        </div>
                        <div className="p-2 text-light">
                            <Check /> Real-time API Logs
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <Button variant="light" size="lg" className="px-4 py-2 shadow-sm text-dark">
                            Get Started
                        </Button>
                        <Button variant="outline-light" size="lg" className="px-4 py-2 shadow-sm">
                            Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
