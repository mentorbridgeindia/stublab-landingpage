import React from 'react';
import { Button, Col, Container, Card, Badge } from 'react-bootstrap';
import { MdOutlineRocketLaunch } from "react-icons/md";
import security from "../assets/security.svg";

const cardData = [
    {
        stage: "Stage 1",
        title: "Define API Models",
        description: "Easily define API models using a simple UI. Configure endpoints, request types, and mock responses for a hassle-free experience.",
        badges: ["No Backend Required"]
    },
    {
        stage: "Stage 2",
        title: "Mock Responses",
        description: "Create realistic mock responses for different scenarios. Simulate various API behaviors without relying on a live backend.",
        badges: ["Realistic Data", "Scenario Simulation"]
    },
    {
        stage: "Stage 3",
        title: "Test Integration",
        description: "Test your application's integration with the mocked APIs. Ensure seamless communication and data flow during development.",
        badges: ["End-to-End Testing", "Integration Validation"]
    }
];

const LandingCard = () => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center bg-dark p-5 mt-1"
            style={{ minHeight: "100vh" }}
        >
            <Col lg={6} className="d-flex justify-content-center">
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex flex-column align-items-start gap-3' style={{
                        color: 'white',
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        overflowY: "auto",
                        maxHeight: "80vh",
                    }}>
                        <Button>New</Button>
                        <h1>Welcome to StubLab</h1>
                        <p>API Mocking & Testing Made Easy</p>
                    </div>

                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            className="p-4 text-white position-relative"
                            style={{
                                width: "28rem",
                                background: "linear-gradient(135deg, #0d0f1a, #08142e)",
                                borderRadius: "20px",
                                boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
                                border: "none",
                            }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3"
                                style={{ background: "rgba(255, 255, 255, 0.1)", padding: "10px 15px", borderRadius: "10px", width: "50px" }}>
                                <MdOutlineRocketLaunch size={20} color="white" />
                            </div>
                            <div className="position-absolute"
                                style={{ top: "20px", right: "20px", background: "rgba(255, 255, 255, 0.1)", padding: "6px 12px", borderRadius: "10px", fontSize: "14px", color: "#fff" }}>
                                {card.stage}
                            </div>
                            <Card.Body style={{ color: 'white' }} >
                                <Card.Title className="fw-bold fs-4 d-flex align-items-start">{card.title}</Card.Title>
                                <Card.Text className="d-flex align-items-start text-start">
                                    {card.description}
                                </Card.Text>
                                <div className="d-flex gap-3 mt-3">
                                    {card.badges.map((badge, badgeIndex) => (
                                        <Badge
                                            key={badgeIndex}
                                            bg=''
                                            style={{ borderRadius: "10px", padding: "8px 16px", background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}>
                                            {badge}
                                        </Badge>
                                    ))}

                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Col>

            <Col lg={6} className="d-flex flex-column justify-content-center text-center p-5"
                style={{ position: "sticky", top: "100px" }}>
                <img
                    src={security}
                    alt="Mockserver Illustration"
                    className="img-fluid"
                    style={{ maxWidth: "80%", height: "80%" }}
                />
            </Col>
        </Container>
    );
};

export default LandingCard;
