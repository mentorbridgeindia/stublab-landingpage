import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaCheckCircle, FaCogs, FaRegClock } from "react-icons/fa";
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.svg';

const backgroundVideo = "/videos/backgroundvideo.mp4";

const HeroSection: React.FC = () => {
    return (
        <Container fluid className="position-relative text-light p-5 mt-5  " style={{ minHeight: "100vh", overflow: "hidden" }}>

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

            <Row className="w-100 position-relative d-flex p-5 " style={{ zIndex: "1" }}>
                <Col md={6} className="d-flex flex-column">
                    <Badge
                        pill
                        bg="teriary"
                        text="light"
                        className="mb-3 px-3 py-2 shadow-sm"
                    >
                        🚀 Simplify API Testing
                    </Badge>
                    <h1 className=" display-3 text-light text-center mt-5 mb-3">
                        Create & Test APIs Without a Backend
                    </h1>
                    <p className="lead text-light text-center  mt-3 mb-3">
                        StubLab is your ultimate API mocking tool, enabling fast and flexible API testing
                        
                        without waiting for backend development.
                    </p>
                    <div className="d-flex justify-content-center gap-4 mt-3 mb-3">
                        <div className="d-flex flex-column gap-2 p-2 text-light ">
                            <FaCheckCircle className="align-self-center" /> AI-Powered Mock Data
                        </div>
                        <div className="d-flex flex-column gap-2 p-2 text-light">
                            <FaCogs className="align-self-center" /> Customizable API Responses
                        </div>
                        <div className="d-flex flex-column gap-2  p-2 text-light">
                            <FaRegClock className="align-self-center" /> Real-time API Logs
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-3 justify-content-center">
                        <Button variant="light" size="lg" className="px-4 py-2 shadow-sm text-dark">
                            Get Started
                        </Button>
                        
                    </div>
                </Col>
                <Col className="d-flex justify-content-center pt-5 " md={6}>
                    <img
                        src={hero1}
                        alt="StubLab Mockserver Illustration"
                        className="img-fluid w-100"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
