import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img1 from '../assets/TeamMembers/umar.jpg';
import img2 from '../assets/TeamMembers/Devaki.png';
import img3 from '../assets/TeamMembers/sherin.png';
import img4 from '../assets/TeamMembers/harini.jpg';
import img5 from '../assets/TeamMembers/karthi.png';
import img6 from '../assets/TeamMembers/viji.png';
import img7 from '../assets/TeamMembers/nivi.png';
import img8 from '../assets/TeamMembers/vijay.png';
import img9 from '../assets/TeamMembers/pavi.png';
import './TeamMembers.scss';

const teamMembers = [
  { name: 'Umar Farook J', role: 'Analyst', img: img1, linkedin: 'https://www.linkedin.com/in/umar-farook-j-56b371280/', github: 'https://github.com/Umarfarook1912' },
  { name: 'Devaki R', role: 'Backend Lead', img: img2, linkedin: 'https://www.linkedin.com/in/devaki-r-701b882b4', github: 'https://github.com/devakiravi' },
  { name: 'Sherin Sithara M', role: 'Dev-Engineer | Java', img: img3, linkedin: 'https://www.linkedin.com/in/sherin-sithara-1a6244263/', github: 'https://github.com/sherinsithara' },
  { name: 'Harini S', role: 'Dev-Engineer | Java', img: img4, linkedin: 'https://www.linkedin.com/in/harinisundar', github: 'https://github.com/Harinisundar08' },
  { name: 'Karthekeyan M', role: 'Dev-Engineer | React', img: img5, linkedin: 'https://www.linkedin.com/in/karthekeyan-m', github: 'https://github.com/karthi049' },
  { name: 'Vijayalakshmi T', role: 'Dev-Engineer | React', img: img6, linkedin: 'https://linkedin.com/in/vijayalakshmi-t-7a1764290', github: 'https://github.com/vijayalakshmiTHIRUMOORTHY' },
  { name: 'Nivethitha M', role: 'Dev-Engineer | Node', img: img7, linkedin: 'https://www.linkedin.com/in/nivethitha01', github: 'https://github.com/NivethithaAbilash' },
  { name: 'Vijay Karthik S', role: 'Dev-Engineer | React', img: img8, linkedin: 'https://www.linkedin.com/in/vijaykarthik-s-3b3930287/', github: 'https://github.com/Vijaykarthik1' },
  { name: 'Pavithra Harini S', role: 'Dev-Engineer | Node', img: img9, linkedin: 'https://www.linkedin.com/in/pavithraharini-s-267506266', github: 'https://github.com/Pavithrahar' },
];

const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

const TeamMembers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scrollStep = () => {
      if (!scrollContainer || isPaused || isDragging.current) return;
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(scrollStep, 10);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  return (
      
      <Container fluid className="position-relative text-light p-5" style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-column gap-3 text-center">
            <h2>Meet Our Team</h2>
            <p>Our talented professionals who make it all happen.</p>
          </div>

          <div className="d-flex flex-column align-items-center gap-5">
            <div
              className="team-scroll-container"
              ref={scrollRef}
              style={{
                overflowX: "auto",
                cursor: "grab",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                whiteSpace: "nowrap",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
            >
              <div className="team-scroll-wrapper">
                {duplicatedTeamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="team-card-wrapper"
                    onMouseEnter={() => setIsPaused(true)} 
                    onMouseLeave={() => setIsPaused(false)} 
                  >
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
