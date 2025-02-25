import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaCheckCircle, FaCogs, FaRegClock } from "react-icons/fa";
import hero1 from "../assets/hero1.svg";


const HeroSection: React.FC = () => {
    return (
        <Container
            fluid
            className="position-relative text-light p-md-5 p-3 mt-3 mt-md-5"
            style={{ minHeight: "60vh", overflow: "hidden" }}
        >
            <Row className="w-100 position-relative d-flex p-md-5 p-5" style={{ zIndex: "1" }}>
                <Col md={6} className="d-flex flex-column align-items-start">
                    <Badge pill bg="dark" text="light" className="mb-3 px-3 py-2 shadow-sm">
                        🚀 Simplify API Testing
                    </Badge>
                    <h1 className="text-light text-start mt-3 mb-3" >
                        Create & Test APIs Without a Backend
                    </h1>
                    <p className=" text-light text-start mt-3 mb-3" >
                        StubLab is your ultimate API mocking tool, enabling fast and flexible API testing
                        without waiting for backend development.
                    </p>
                    <div className="d-flex flex-column flex-md-row gap-3 mt-3">
                        <div className="d-flex align-items-center gap-2 text-light">
                            <FaCheckCircle /> AI-Powered Mock Data
                        </div>
                        <div className="d-flex align-items-center gap-2 text-light">
                            <FaCogs /> Customize Responses
                        </div>
                        <div className="d-flex align-items-center gap-2 text-light">
                            <FaRegClock /> Real-time API Logs
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <Button variant="light" size="sm" className="px-4 py-2 shadow-sm text-dark">
                            Get Started
                        </Button>
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center pt-2 d-none d-md-flex ">
                    <img src={hero1} alt="StubLab Mockserver Illustration" className="img-fluid w-100 w-md-100 h-auto" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
