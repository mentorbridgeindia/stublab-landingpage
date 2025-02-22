import React, { useState } from 'react';
import { Col, Container, Card, Badge, Row, Button } from 'react-bootstrap';
import { MdOutlineRocketLaunch } from "react-icons/md";
import card1 from '../assets/api1.png';
import card2 from '../assets/api2.png';
import card3 from '../assets/api3.png';
import './LandingCard.scss';

const backgroundVideo = "/videos/backgroundvideo.mp4";

const cardData = [
    {
        stage: "Stage 1",
        title: "Define API Models",
        description: "Easily define API models using a simple UI. Configure endpoints, request types, and mock responses for a hassle-free experience.",
        badges: ["No Backend Required"],
        image: card1
    },
    {
        stage: "Stage 2",
        title: "Mock Responses",
        description: "Create realistic mock responses for different scenarios. Simulate various API behaviors without relying on a live backend.",
        badges: ["Realistic Data", "Scenario Simulation"],
        image: card2
    },
    {
        stage: "Stage 3",
        title: "Test Integration",
        description: "Test your application's integration with the mocked APIs. Ensure seamless communication and data flow during development.",
        badges: ["End-to-End Testing", "Integration Validation"],
        image: card3
    }
];

const LandingCard = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    return (
        <Container fluid className="position-relative text-light p-5" style={{ overflow: "hidden" }}>
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

            <div className='d-flex flex-column align-items-start gap-3 p-4 px-md-5 desktop-margin mobile-align'
                style={{
                    color: 'white',
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    overflowY: "auto",
                    maxHeight: "80vh",
                }}
            >

                <Button variant="outline-light" size="sm" className="px-4 py-2 shadow-sm">
                    New
                </Button>
                <h1>Welcome to StubLab</h1>
                <p>API Mocking & Testing Made Easy</p>
            </div>

            <Row className="d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "1" }}>
                {cardData.map((card, index) => (
                    <Row
                        key={index}
                        className="d-flex align-items-center mb-5 w-100"
                        style={{
                            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                            filter: activeCardIndex !== null && activeCardIndex !== index ? "blur(5px)" : "none",
                            transition: "filter 0.3s ease"
                        }}
                        onMouseEnter={() => setActiveCardIndex(index)}
                        onMouseLeave={() => setActiveCardIndex(null)}
                    >
                        <Col lg={6} md={12} className="d-flex justify-content-center mb-3">
                            <Card
                                className="p-4 text-white position-relative"
                                style={{
                                    width: "100%",
                                    maxWidth: "28rem",
                                    background: "linear-gradient(135deg, #0d0f1a, #08142e)",
                                    borderRadius: "20px",
                                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
                                    border: "none",
                                    transition: "transform 0.3s ease",
                                    transform: activeCardIndex === index ? "scale(1.05)" : "scale(1)"
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
                                <Card.Body style={{ color: 'white' }}>
                                    <Card.Title className="fw-bold fs-4 d-flex align-items-start">{card.title}</Card.Title>
                                    <Card.Text className="d-flex align-items-start text-start">
                                        {card.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-3 mt-3">
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
                        </Col>

                        <Col lg={6} md={12} className="d-flex justify-content-center image-container">
                            <img
                                src={card.image}
                                alt={`Illustration for ${card.title}`}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    height: "auto",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease",
                                    filter: activeCardIndex === index ? "brightness(1.2)" : "brightness(0.8)",
                                    transform: activeCardIndex === index ? "scale(1.05)" : "scale(1)",
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
                                    borderRadius: "20px",
                                }}
                            />
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default LandingCard;
