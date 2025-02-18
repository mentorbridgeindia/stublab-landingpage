import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img1 from '../assets/TeamMembers/umar.jpg';
import './TeamMembers.scss'; 

const teamMembers = [
  {
    name: 'Deco Milan',
    role: 'Founder',
    img: img1,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'John Doe',
    role: 'Developer',
    img: img1,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'John Smith',
    role: 'Designer',
    img: img1,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Alex Johnson',
    role: 'Co-Founder',
    img: img1,
    linkedin: '#',
    github: '#',
  },
];

const TeamMembers = () => {
  return (
    <Container fluid className="position-relative text-light p-5" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Row>
        <div className="d-flex flex-column gap-3 text-center">
          <h2>Meet Our Team</h2>
          <p>Our talented professionals who make it all happen.</p>
        </div>
      </Row>
      <Row className="d-flex justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={3} className="d-flex justify-content-center mb-4">
            <Card className="team-card">
              <div className="team-image-container">
                <Card.Img variant="top" src={member.img} className="team-image" />
                <div className="social-icons">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaLinkedin />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="team-name">{member.name}</Card.Title>
                <Card.Text className="team-role">{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamMembers;
