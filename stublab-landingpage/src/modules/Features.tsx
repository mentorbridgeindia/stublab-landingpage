import React from 'react';
import { Button, Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { FaServer, FaBrain, FaCodeBranch, FaBug, FaClock, FaShieldAlt } from "react-icons/fa";

// const backgroundVideo = "/videos/backgroundvideo.mp4"; 
const featuresData = [
    {
        icon: <FaServer size={30} className="text-warning" />,
        title: "Mock API Server",
        badge: "PRO",
        subtitle: "No Backend Required",
        description: "Create and test APIs instantly without needing a backend.",
    },
    {
        icon: <FaBrain size={30} className="text-light" />,
        title: "AI-Powered Data",
        subtitle: "Realistic Test Data",
        description: "Generate dynamic mock data using AI for better testing.",
    },
    {
        icon: <FaCodeBranch size={30} className="text-primary" />,
        title: "Customizable Responses",
        subtitle: "Status Codes & Errors",
        description: "Simulate different API responses, delays, and errors with ease.",
    },
    {
        icon: <FaBug size={30} className="text-info" />,
        title: "Error Simulation",
        subtitle: "Debugging Made Easy",
        description: "Test API failures by triggering specific error responses.",
    },
    {
        icon: <FaClock size={30} className="text-warning" />,
        title: "Real-time API Logs",
        badge: "PRO",
        subtitle: "Track API Requests",
        description: "Monitor API calls and responses in real time with logging.",
    },
    {
        icon: <FaShieldAlt size={30} className="text-success" />,
        title: "Secure & Private",
        subtitle: "Access Control",
        description: "Control who can access and modify your mock APIs with security layers.",
    },
];

const Features = () => {
    return (
        <Container fluid className="position-relative text-light p-5 " style={{ minHeight: "100vh", overflow: "hidden" }}>
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

            <div className="d-flex flex-column align-items-center gap-5 position-relative" style={{ zIndex: "1" }}>
                <div className="text-center mb-4">
                    <Button variant="outline-light">Features</Button>
                    <h1 className="mt-3">StubLab Features</h1>
                    <p>Create, Iterate, and Test APIs Faster</p>
                    <Button variant="outline-light">View More</Button>
                </div>

                <Row className="g-5" style={{ maxWidth: "1200px" }}>
                    {featuresData.map((feature, index) => (
                        <Col key={index} md={4} sm={6}>
                            <Card
                                className="text-white p-3 border-0 shadow-lg"
                                style={{
                                    background: "linear-gradient(135deg, #0d0f1a, #08142e)",
                                    borderRadius: "20px",
                                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
                                    border: "none",
                                }}
                            >
                                <Card.Body className='d-flex flex-column gap-1'>
                                    <div className="d-flex align-items-start mb-3 flex-column gap-2">
                                        {feature.icon}
                                        <h5 className='d-flex flex-row gap-3'>
                                            {feature.title}{" "}
                                            {feature.badge && <Badge bg='primary'>{feature.badge}</Badge>}
                                        </h5>
                                    </div>
                                    <Card.Subtitle className="mb-1 text-start">{feature.subtitle}</Card.Subtitle>
                                    <Card.Text className="mt-1 text-start">{feature.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4">
                    <Button variant="outline-light">View More</Button>
                </div>
            </div>
        </Container>
    );
};

export default Features;
