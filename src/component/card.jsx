import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";

const Card_component = ({ chepData }) => {
  const cards = chepData.map((data, index) => {
    return (
      <Container key={index}>
        <Card
          style={{
            width: "100%",
            backgroundColor: "black",
            paddingBottom: 25,
            // display: "block",
          }}
        >
          <Card.Body>
            <Card.Title>
              <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 18,
                    width: 56,
                  }}
                >
                  {data.chepName}
                  <hr
                    style={{
                      height: 5,
                      width: "56px",
                      backgroundColor: "#20C5F7",
                    }}
                  />
                </Row>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 40,
                  }}
                >
                  {data.chepTitleFirstHalf}
                </Row>
                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 40,
                    lineHeight: 0.5,
                    paddingBottom: 15,
                  }}
                >
                  {data.chepTitleSecondHalf}
                </Row>
                <Row style={{ width: 256, height: 15 }}>
                  <Image
                    src="./images/verticalDivider.png"
                    style={{ paddingLeft: "5px", width: "100%" }}
                    fluid
                  />
                </Row>
              </Row>
            </Card.Title>
            <Row>
              <Col lg={6} style={{ width: "460px", height: "300px" }}>
                <Card.Img
                  src={data.chepImage}
                  style={{ width: "100%", paddingLeft: 0 }}
                />
              </Col>
              <Col lg={6}>
                <Row style={{ paddingBottom: 15 }}></Row>
                <Row style={{ width: 29.69, height: 19.1 }}>
                  <Image
                    src="./images/imgArrow.svg"
                    style={{ width: "100%", paddingLeft: 10, paddingRight: 0 }}
                    alt="Arrow"
                  />
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontFamily: "Helvetica Neue",
                    fontSize: 20,
                    letterSpacing: "1px",
                  }}
                >
                  IMAGE:
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontSize: 20,
                    letterSpacing: "1px",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  {data.chepImageTitle}
                </Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 20,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  {data.chepImageDescription}
                </Row>
              </Col>
            </Row>
            <Card.Text>
              <Row>
                <Col lg={5} sm={12} md={8}>
                  <Row
                    style={{
                      color: "white",
                      float: "left",
                      fontSize: 14,
                      paddingLeft: 10,
                      fontFamily: "Helvetica Neue",
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      {data.chepDescription}
                    </Row>

                    <Row style={{ paddingLeft: 0, marginTop: 5 }}>
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
                        <a href="#" role="button">
                          <Image
                            src="./images/btnImage.svg"
                            style={{ paddingLeft: 0, width: "100%" }}
                            fluid
                          />
                        </a>
                      </Col>
                      <Col
                        lg={8}
                        style={{
                          fontFamily: "Helvetica Neue",
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
                          paddingTop: 5,
                        }}
                      >
                        LEARN MORE
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col lg={7} sm={12} md={4}></Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  });
  return (
    <div style={{ position: "relative" }}>
      {cards}

      <Image
        fluid
        src="./images/vertical_stripe.png"
        style={{
          width: "68px",
          height: "902px",
          position: "absolute",
          top: 46,
          right: -25,
        }}
      />
      <Image
        fluid
        src="./images/vertical_stripe.png"
        style={{
          width: "68px",
          height: "902px",
          position: "absolute",
          top: 1213,
          right: -25,
        }}
      />
      <Image
        fluid
        src="./images/vertical_stripe.png"
        style={{
          width: "68px",
          height: "600px",
          position: "absolute",
          top: 2331,
          right: -25,
        }}
      />
    </div>
  );
};

export default Card_component;
