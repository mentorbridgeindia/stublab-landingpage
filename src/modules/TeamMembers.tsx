import React from 'react';
import { Container } from 'react-bootstrap';
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
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-3 text-center">
          <h2>Meet Our Team</h2>
          <p>Our talented professionals who make it all happen.</p>
        </div>
        
        <div className="team-scroll-container">
          <div className="team-scroll-wrapper">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-wrapper">
                <div className="team-card pt-2">
                  <div className="team-image-container">
                    <img src={member.img} className="team-image" alt={member.name} />
                    <div className="social-icons">
                      <a href={member.linkedin}><FaLinkedin /></a>
                      <a href={member.github}><FaGithub /></a>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamMembers;