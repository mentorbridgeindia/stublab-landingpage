import React from 'react';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import './Faq.scss';

const faqData = [
  {
    question: "What do I need to get started?",
    answer: "To get started, you'll need to create an account and complete the initial setup process. Our platform provides all the necessary tools and resources to begin your journey."
  },
  {
    question: "What kind of customization is available?",
    answer: "We offer extensive customization options including themes, layouts, color schemes, and functionality modules. You can tailor every aspect to match your specific needs."
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: "Our platform is designed with beginners in mind. We provide an intuitive interface, drag-and-drop functionality, and comprehensive tutorials to help you get started quickly."
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our service, you can request a full refund within the first 30 days of your purchase."
  },
  {
    question: "Do I need to know how to code?",
    answer: "No coding knowledge is required! Our platform is built to be user-friendly for everyone, regardless of technical expertise. However, if you do know how to code, you can access advanced customization options."
  }
];

const Faq = () => {
  return (
    <Container fluid className="faq-container position-relative text-light py-5">
      <Row className="justify-content-center align-items-start g-5">
        <Col lg={5} className="pe-lg-5">
          <div className="sticky-top pt-5">
            <div className="d-flex flex-column align-items-start gap-3 mb-4">
              <Badge className="custom-badge">FAQ</Badge>
              <h1 className="display-4 mb-0 fw-bold">Frequently</h1>
              <h1 className="display-4 text-secondary mb-0 fw-bold">Asked Questions</h1>
            </div>
            <p className="text-secondary mb-0 pe-lg-5">
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
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