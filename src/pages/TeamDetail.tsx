import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import {
  FaCalendarDay,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaLinkedin,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaRocket,
  FaShareAlt,
  FaTools,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "../modules/Footer";
import TeamNavbar from "../modules/TeamNavbar";
import { teamMemberDetails } from "./team-detail";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  coverImage: string;
  profileImage: string;
  professionalSummary: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  skills: string[];
  dailyActivities: string[];
  inspirations: string[];
  ambition: string;
  favoriteTool: string;
  favoritePlace: string;
  favoriteQuote: string;
  alternativeCareer: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const TeamDetail = () => {
  const { id } = useParams();
  const teamMember = teamMemberDetails[id as keyof typeof teamMemberDetails];

  if (teamMember === undefined) {
    window.history.back();
  }

  return (
    teamMember && (
      <div>
        <TeamNavbar />
        <div className="min-vh-100 mt-8 px-5">
          <div
            className="position-relative border-radius-10"
            style={{
              height: "750px",
              backgroundImage: `url(${teamMember.coverImage})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="position-absolute top-40 start-50 translate-middle-x text-center mb-4">
              <img
                src={teamMember.profileImage}
                alt={teamMember.name}
                className="rounded-circle border border-4 border-white shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h2 className="mt-3 text-white">{teamMember.name}</h2>
              <h5 className="text-white-50">{teamMember.designation}</h5>
            </div>
          </div>

          <Container className="py-5 member-details">
            <Row className="g-4">
              {/* Professional Summary */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaLaptopCode className="text-primary me-2" />
                      <h5 className="mb-0">Professional Summary</h5>
                    </div>
                    <p className="">{teamMember.professionalSummary}</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Education & Skills */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaGraduationCap className="text-primary me-2" />
                      <h5 className="mb-0">Education & Skills</h5>
                    </div>
                    {teamMember.education.map((edu, index) => (
                      <div key={index} className="mb-3">
                        <h6>{edu.degree}</h6>
                        <p className=" mb-1">{edu.institution}</p>
                        <small className="">{edu.year}</small>
                      </div>
                    ))}
                    <div className="mt-3">
                      <h6>Skills</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {teamMember.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            bg="light"
                            text="dark"
                            className="badge-skill px-3 py-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Daily Activities */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaCalendarDay className="text-primary me-2" />
                      <h5 className="mb-0">Daily Activities</h5>
                    </div>
                    <ul className="list-unstyled">
                      {teamMember.dailyActivities.map((activity, index) => (
                        <li key={index} className="mb-2">
                          <span className="">•</span> {activity}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              {/* Inspirations */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaLightbulb className="text-primary me-2" />
                      <h5 className="mb-0">Inspirations</h5>
                    </div>
                    <ul className="list-unstyled">
                      {teamMember.inspirations.map((inspiration, index) => (
                        <li key={index} className="mb-2">
                          <span className="">•</span> {inspiration}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              {/* Ambition */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaRocket className="text-primary me-2" />
                      <h5 className="mb-0">Ambition</h5>
                    </div>
                    <p className="">{teamMember.ambition}</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Favorite Tool */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaTools className="text-primary me-2" />
                      <h5 className="mb-0">Favorite Tool</h5>
                    </div>
                    <p className="">{teamMember.favoriteTool}</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Favorite Place */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <h5 className="mb-0">Favorite Place</h5>
                    </div>
                    <p className="">{teamMember.favoritePlace}</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Favorite Quote */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaQuoteLeft className="text-primary me-2" />
                      <h5 className="mb-0">Favorite Quote</h5>
                    </div>
                    <p className=" fst-italic">"{teamMember.favoriteQuote}"</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Alternative Career */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaUserAlt className="text-primary me-2" />
                      <h5 className="mb-0">Alternative Career</h5>
                    </div>
                    <p className="">{teamMember.alternativeCareer}</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Social Links */}
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaShareAlt className="text-primary me-2" />
                      <h5 className="mb-0">Social Links</h5>
                    </div>
                    <div className="d-flex gap-3">
                      {teamMember.socialLinks.linkedin && (
                        <a
                          href={teamMember.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <FaLinkedin className="text-primary fs-4" />
                        </a>
                      )}
                      {teamMember.socialLinks.twitter && (
                        <a
                          href={teamMember.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <FaTwitter className="text-primary fs-4" />
                        </a>
                      )}
                      {teamMember.socialLinks.github && (
                        <a
                          href={teamMember.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <FaGithub className="text-primary fs-4" />
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    )
  );
};
