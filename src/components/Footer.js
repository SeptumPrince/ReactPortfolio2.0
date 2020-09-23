import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5 footer">
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            {/* Text */}
          </Col>
          <Col className="p-0 d-flex justify-content-left" md={3}>
            Use the piercing in the top right corner to switch pages.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
