import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Navbar";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      <div className="vh-100 d-flex flex-column" style={{ background: 'linear-gradient(135deg, #0d0f1a, #08142e)', paddingTop: '60px' }}>
        <div className="text-center py-4">
          <h1 className="fw-bold text-light">PRIVACY POLICY</h1>
          <span className="px-3 py-1 rounded-pill bg-dark text-light">Updated March 26, 2025</span>
        </div>

        <Container fluid className="d-flex justify-content-center align-items-center flex-grow-1 p-4">
          <div className="bg-white text-dark p-4 rounded shadow-lg text-start" style={{ maxWidth: '800px' }}>
            <p>
              At StubLab, we value your privacy and are committed to protecting your personal data. 
              This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us.
            </p>

            <h2 className="h4 mt-4">1. Information We Collect</h2>
            <p>
              We collect the following types of data to enhance your experience:
            </p>
            <ul>
              <li>Personal Information: Name, email address, and account credentials when you register.</li>
              <li>Usage Data: Information about your interactions with StubLab, including API requests and responses.</li>
              <li>Technical Data: IP addresses, browser type, and other related metadata for security and analytics.</li>
            </ul>

            <h2 className="h4 mt-4">2. How We Use Your Information</h2>
            <p>
              The data we collect is used for the following purposes:
            </p>
            <ul>
              <li>To provide and maintain our API stubbing services.</li>
              <li>To enhance user experience through analytics and performance tracking.</li>
              <li>To ensure security and prevent unauthorized access.</li>
              <li>To communicate updates, security alerts, and support information.</li>
            </ul>

            <h2 className="h4 mt-4">3. Data Sharing and Security</h2>
            <p>
              We do not sell or share your personal data with third parties except in the following cases:
            </p>
            <ul>
              <li>When required by law or to comply with legal obligations.</li>
              <li>With trusted service providers who assist in maintaining our platform.</li>
              <li>To enforce our Terms of Service and protect the security of our users.</li>
            </ul>

            <h2 className="h4 mt-4">4. Your Rights and Choices</h2>
            <p>
              You have the right to access, modify, or delete your personal data. If you wish to request changes, 
              please contact our support team.
            </p>

            <p className="fst-italic mt-4">
              By using StubLab, you agree to this Privacy Policy and our commitment to protecting your data.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPolicy;
