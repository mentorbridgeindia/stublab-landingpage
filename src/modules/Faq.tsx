import React from 'react';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import './Faq.scss';

const faqData = [
  {
    question: "What is StubLab?",
    answer: "StubLab is an API mocking and testing tool that helps developers create, iterate, and test APIs without needing a backend."
  },
  {
    question: "How does StubLab help frontend developers?",
    answer: "Frontend developers can use StubLab to mock API responses instantly, reducing dependency on backend teams and enabling faster development."
  },
  {
    question: "Can I customize API responses?",
    answer: "Yes! StubLab allows you to customize responses, simulate status codes, and add delays to replicate real-world scenarios."
  },
  {
    question: "Does StubLab support AI-generated test data?",
    answer: "Absolutely! StubLab provides AI-powered dynamic mock data to create realistic API responses for better testing."
  },
  {
    question: "Is StubLab secure?",
    answer: "Yes! StubLab ensures security by allowing access control and token-based authentication for your mock APIs."
  }
];

const Faq = () => {
  return (
    <Container fluid className="faq-container position-relative text-light py-5">
      <Row className="justify-content-center align-items-start g-5">
        {/* FAQ Heading */}
        <Col lg={5} className="pe-lg-5">
          <div className="sticky-top pt-5">
            <div className="d-flex flex-column align-items-start gap-3 mb-4">
              <Badge className="custom-badge">FAQ</Badge>
              <h1 className="display-4 mb-0 fw-bold">Frequently</h1>
              <h1 className="display-4 text-secondary mb-0 fw-bold">Asked Questions</h1>
            </div>
            <p className="text-secondary mb-0 pe-lg-5">
              Have questions about StubLab? Find answers to common queries about API mocking, customization, security, and more.
            </p>
          </div>
        </Col>

        <Col lg={5} className="ps-lg-5">
          <Accordion className="custom-accordion">
            {faqData.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
