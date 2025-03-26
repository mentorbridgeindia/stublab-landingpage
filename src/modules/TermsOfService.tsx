import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Navbar";

const TermsOfService: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      <div className="vh-100 d-flex flex-column " style={{ background: 'linear-gradient(135deg, #0d0f1a, #08142e)' ,paddingTop: '60px' }}>
        <div className="text-center py-4">
          <h1 className="fw-bold text-light">TERMS OF SERVICE</h1>
          <span className="px-3 py-1 rounded-pill bg-dark text-light">Updated March 26, 2025</span>
        </div>

        <Container fluid className="d-flex justify-content-center align-items-center flex-grow-1 p-4">
          <div className="bg-white text-dark p-4 rounded shadow-lg text-start" style={{ maxWidth: '800px' }}>
            <p>
              Welcome to StubLab, an innovative stub server application designed to empower development
              teams to configure, test, and iterate on APIs quickly and efficiently.
            </p>

            <h2 className="h4 mt-4">1. Service Overview</h2>
            <p>
              StubLab provides a comprehensive API development and testing platform that allows users
              to create, configure, and manage API stubs without the need for a traditional database.
            </p>

            <h2 className="h4 mt-4">2. Key Service Features</h2>

            <h3 className="h5 mt-3">2.1 Flexible API Stubbing</h3>
            <p>
              Users can create fully customizable APIs and endpoints without a backend database.
              Our platform generates and serves mock responses based on pre-configured models.
            </p>

            <h3 className="h5 mt-3">2.2 Reusable Models and Mock Data</h3>
            <p>
              Define and reuse API request and response models across multiple endpoints.
              Set default values and customize responses for various testing scenarios.
            </p>

            <h2 className="h4 mt-4">3. User Responsibilities</h2>
            <p>
              By using StubLab, you agree to:
            </p>
            <ul>
              <li>Use the service responsibly and in compliance with our guidelines.</li>
              <li>Protect the confidentiality of your account credentials.</li>
              <li>Not misuse or attempt to circumvent security measures.</li>
            </ul>

            <p className="fst-italic mt-4">
              By using StubLab, you acknowledge and accept these Terms of Service.
            </p>
          </div>
        </Container>
      </div>
    </>
  );

};

export default TermsOfService;
