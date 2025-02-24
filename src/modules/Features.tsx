import React from 'react';
import { Button, Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { FaServer, FaBrain, FaCodeBranch, FaBug, FaClock, FaShieldAlt } from "react-icons/fa";

const featuresData = [
    {
        icon: <FaServer size={30} className="text-light" />,
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
        icon: <FaCodeBranch size={30} className="text-light" />,
        title: "Customizable Responses",
        subtitle: "Status Codes & Errors",
        description: "Simulate different API responses, delays, and errors with ease.",
    },
    {
        icon: <FaBug size={30} className="text-light" />,
        title: "Error Simulation",
        subtitle: "Debugging Made Easy",
        description: "Test API failures by triggering specific error responses.",
    },
    {
        icon: <FaClock size={30} className="text-light" />,
        title: "Real-time API Logs",
        badge: "PRO",
        subtitle: "Track API Requests",
        description: "Monitor API calls and responses in real time with logging.",
    },
    {
        icon: <FaShieldAlt size={30} className="text-light" />,
        title: "Secure & Private",
        subtitle: "Access Control",
        description: "Control who can access and modify your mock APIs with security layers.",
    },
];

const Features = () => {
    return (
        
            <Container fluid className="position-relative text-light p-5 " style={{ minHeight: "100vh", overflow: "hidden" }}>

                <div className="d-flex flex-column align-items-center gap-5 position-relative text-center" style={{ zIndex: "1" }}>
                    <div className="text-center mb-4">
                        <Button variant="outline-light" size='sm'>Features</Button>
                        <h1 className="mt-3 fs-2">StubLab Features</h1>
                        <p >Create, Iterate, and Test APIs Faster</p>
                    </div>

                    <Row className="g-5" style={{ maxWidth: "1200px" }}>
                        {featuresData.map((feature, index) => (
                            <Col key={index} md={4} sm={6} xs={12}>
                                <Card
                                    className="text-white p-3 border-0 shadow-lg position-relative"
                                    style={{
                                        background: "linear-gradient(135deg, #0d0f1a, #08142e)",
                                        borderRadius: "20px",
                                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
                                        border: "none",
                                    }}
                                >
                                    {feature.badge && (
                                        <Badge
                                            bg="dark"
                                            className="position-absolute my-3 end-0 mx-4 d-block d-sm-none "
                                            style={{ padding: "6px 12px", fontSize: "0.75rem", borderRadius: "8px" }}
                                        >
                                            {feature.badge}
                                        </Badge>
                                    )}
                                    <Card.Body className='d-flex flex-column gap-1'>
                                        <div className="d-flex align-items-start mb-3 flex-column gap-2">
                                            {feature.icon}
                                            <h5 className='d-flex flex-row gap-3'>
                                                {feature.title}{" "}
                                                {feature.badge && <Badge bg='primary' className='d-none d-sm-inline'>{feature.badge}</Badge>}
                                            </h5>
                                        </div>
                                        <Card.Subtitle className="mb-1 text-start">{feature.subtitle}</Card.Subtitle>
                                        <Card.Text className="mt-1 text-start">{feature.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                </div>
            </Container>
    );
};

export default Features;
