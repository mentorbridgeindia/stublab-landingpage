import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img1 from '../assets/TeamMembers/umar.jpg';
import img2 from '../assets/TeamMembers/Devaki.png';
import img3 from '../assets/TeamMembers/sherin.png';
import img4 from '../assets/TeamMembers/harini.jpg';
import img5 from '../assets/TeamMembers/karthi.png';
import img6 from '../assets/TeamMembers/viji.jpeg';
import img7 from '../assets/TeamMembers/nivi.png'
import img8 from '../assets/TeamMembers/vijay.png';
import img9 from '../assets/TeamMembers/pavi.jpg';
import './TeamMembers.scss';

const teamMembers = [
  { name: 'Umar Farook J', role: 'Analyst', img: img1, linkedin: '#', github: '#' },
  { name: 'Devaki R', role: 'Backend Lead', img: img2, linkedin: '#', github: '#' },
  { name: 'Sherin Sithara M', role: 'Backend', img: img3, linkedin: '#', github: '#' },
  { name: 'Harini S', role: 'Backend', img: img4, linkedin: '#', github: '#' },
  { name: 'Karthekeyan M', role: 'Frontend', img: img5, linkedin: '#', github: '#' },
  { name: 'Vijayalakshmi T', role: 'Frontend', img: img6, linkedin: '#', github: '#' },
  { name: 'Nivethitha M', role: 'Frontend', img: img7, linkedin: '#', github: '#' },
  { name: 'Vijay Karthik T', role: 'Frontend', img: img8, linkedin: '#', github: '#' },
  { name: 'Pavithra Harini S', role: 'Frontend', img: img9, linkedin: '#', github: '#' },

];

const duplicatedTeamMembers = [...teamMembers, ...teamMembers];
const backgroundVideo = "/videos/backgroundvideo.mp4";

const TeamMembers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scrollStep = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(scrollStep, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="position-relative text-light p-5" style={{ minHeight: '100vh', overflow: 'hidden' }}>
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
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-3 text-center">
          <h2>Meet Our Team</h2>
          <p>Our talented professionals who make it all happen.</p>
        </div>

        <div className="d-flex flex-column align-items-center gap-5">
          <div className="team-scroll-container" ref={scrollRef}>
            <div className="team-scroll-wrapper">
              {duplicatedTeamMembers.map((member, index) => (
                <div key={index} className="team-card-wrapper">
                  <div className="team-card">
                    <div className="team-image-container">
                      <img src={member.img} className="team-image" alt={member.name} />
                      <div className="social-icons">
                        <a href={member.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href={member.github} aria-label="GitHub"><FaGithub /></a>
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
      </div>
    </Container>
  );
};

export default TeamMembers;
