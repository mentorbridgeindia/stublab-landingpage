import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Navbar";

const Security: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      <div className="vh-100 d-flex flex-column " style={{ background: 'linear-gradient(135deg, #0d0f1a, #08142e)', paddingTop: '60px' }}>
        <div className="text-center py-4">
          <h1 className="fw-bold text-light">SECURITY MEASURES</h1>
          <span className="px-3 py-1 rounded-pill bg-dark text-light">Updated March 26, 2025</span>
        </div>

        <Container fluid className="d-flex justify-content-center align-items-center flex-grow-1 p-4">
          <div className="bg-white text-dark p-4 rounded shadow-lg text-start" style={{ maxWidth: '800px' }}>
            <p >
              At StubLab, we prioritize the security of your data and API stubs. We implement industry-standard measures to ensure confidentiality, integrity, and availability of our services.
            </p>

            <h2 className="h4 mt-4">1. Data Protection</h2>
            <p>
              We use strong encryption protocols to safeguard all data stored and transmitted within the StubLab ecosystem.
            </p>

            <h2 className="h4 mt-4">2. Authentication & Access Control</h2>
            <p>
              Multi-factor authentication (MFA) is implemented to prevent unauthorized access to user accounts and system resources.
            </p>

            <h2 className="h4 mt-4">3. Secure API Communication</h2>
            <p>
              All API requests and responses are encrypted using HTTPS/TLS to prevent data interception and man-in-the-middle attacks.
            </p>

            <h2 className="h4 mt-4">4. Regular Security Audits</h2>
            <p>
              Our platform undergoes frequent security reviews and penetration testing to identify and mitigate vulnerabilities.
            </p>

            <h2 className="h4 mt-4">5. Incident Response</h2>
            <p>
              We have a dedicated security team that monitors and responds to security incidents, ensuring rapid mitigation of threats.
            </p>

            <p className="fst-italic mt-4">
              By using StubLab, you acknowledge and accept our security policies and procedures.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Security;
