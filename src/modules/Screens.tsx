import { Badge, Col, Container, Row } from "react-bootstrap";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import './Screens.scss';


export const Components = () => {
  return (
      <Container className="py-5 mt-5 features-container position-relative">
        <Row className="mt-5">
          <Col md={6} xs={12} className="text-center">
            <div className="d-flex justify-content-center w-100">
              <Badge
                pill
                bg="dark"
                text="light"
                className="mb-3 px-3 py-2 shadow-sm"
              >
                ✨ Screens
              </Badge>
            </div>
            <h1 className="text-center mt-3 mb-5 text-light">Enjoy our stublab</h1>
            <p className="lead text-center mt-3 mb-3 text-light">
              Simply create your Api without DB.
              <br />
              Built-In Swagger for automatic documentation.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Swagger</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Api</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Customizable responses</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Api form</Badge>
              <Badge bg="dark" text="light" className="px-3 py-2  shadow-sm">Mock Api</Badge>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-5">
              <div>
                <img src={screen1} className="img-fluid rounded-2 shadow-lg glassy-image" alt="sign-in" />
              </div>
              <div>
                <img src={screen2} className="img-fluid rounded-2 shadow-lg glassy-image" alt="sign-up" />
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="d-flex justify-content-center flex-column gap-3 mt-5 align-items-center">
              <img src={screen4} className="img-fluid rounded-2 shadow-lg glassy-image" alt="account" />
              <img src={screen3} alt="change" className="img-fluid rounded-2 shadow-lg glassy-image" style={{ width: "100%", height: "auto" }} />
            </div>
          </Col>
        </Row>
      </Container>
  );
};