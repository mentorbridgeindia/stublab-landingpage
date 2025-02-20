import { Badge, Col, Container, Row } from "react-bootstrap";
import signinImg from "../assets/api1.png";
import signupImg from "../assets/api2.png";
import otp from "../assets/api3.png";
import auth from "../assets/api4.png";
import './Screens.scss';
const backgroundVideo = "/videos/backgroundvideo.mp4";


export const Components = () => {
  return (
    <div className="position-relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: "-1" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <Container className="py-5 mt-5 features-container position-relative">
        <Row className="mt-5">
          <Col md={6} xs={12}>
            <Badge
              pill
              bg="dark"
              text="light"
              className="mb-3 px-3 py-2 shadow-sm"
            >
              ✨ Screens
            </Badge>
            <h1 className="text-center mt-3 mb-5 text-light">Ready-to-Use Screens</h1>
            <p className="lead text-center mt-3 mb-3 text-light">
             Simply create your Api without DB.
              <br />
              Built-In Swagger for automatic documentation.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
              <Badge bg="dark" text="light"  className="px-3 py-2  shadow-sm">Swagger</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Api</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Customizable responses</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Api form</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Mock Api</Badge>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-5">
              <div>
                <img src={signinImg} className="img-fluid rounded-2 shadow-lg glassy-image" alt="sign-in" />
              </div>
              <div>
                <img src={signupImg} className="img-fluid rounded-2 shadow-lg glassy-image" alt="sign-up" />
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="d-flex justify-content-center flex-column gap-2 mt-5 align-items-center">
              <img src={auth} className="img-fluid rounded-2 shadow-lg glassy-image" alt="account" />
              <img src={otp} alt="change" className="img-fluid rounded-2 shadow-lg glassy-image" style={{ width: "100%", height: "auto" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};