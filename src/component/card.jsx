import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Card_component = () => {
  return (
    <Container>
      <Card style={{ width: "100rem" }}>
        <Card.Body>
          <Card.Title>
            <Row style={{ paddingLeft: 10 }}>
              <Row>CH/01</Row>
              <Row>FROM HOST</Row>
              <Row>TO JUNTA</Row>
            </Row>
          </Card.Title>
          <Row>
            <Col lg={4}>
              <Card.Img
                src="chep1img.png"
                style={{ width: "100%", paddingLeft: 0 }}
              />
            </Col>
            <Col lg={8}>
              <Row>
                <p style={{ textAlign: "left" }}>Hello World</p>
              </Row>
            </Col>
          </Row>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Card_component;
