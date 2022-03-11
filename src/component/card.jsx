import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
const Card_component = ({ chepData }) => {
  const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   const unsub = window.addEventListener("scroll", () => {
  //     console.log(window.scrollY);
  //     setScroll(window.scrollY > 600);
  //     // window.scrollY > 1300 && setScroll(window.screenY > 1300);
  //   });
  //   return () => unsub;
  // }, []);

  const navigate = useNavigate();
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
              <div
                className="row"
                style={{ paddingLeft: 10, paddingBottom: 15 }}
                // className={scroll ? "animationText" : ""}
                data-aos="fade-up"
              >
                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 18,
                    width: 60,
                    paddingRight: 0,
                    marginBottom: 15,
                  }}
                >
                  {data.chepName}
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0 }}
                  ></Image>
                </Row>

                <Row
                  className={scroll ? "animationText" : ""}
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 40,
                  }}
                >
                  {data.chepTitleFirstHalf}
                </Row>
                <Row
                  className={scroll ? "animationText" : ""}
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 40,
                    lineHeight: 0.5,
                    paddingBottom: 15,
                  }}
                >
                  {data.chepTitleSecondHalf}
                </Row>
                <Row
                  style={{ width: 256, height: 15 }}
                  className={scroll ? "animationText" : ""}
                >
                  <Image
                    src="./images/verticalDivider.png"
                    style={{ paddingLeft: "5px", width: "100%" }}
                    fluid
                  />
                </Row>
              </div>
            </Card.Title>
            <Row>
              <div
                className="col-6"
                style={{ width: "460px", height: "300px" }}
                data-aos="fade-out"
              >
                {/* <ScrollAnimation
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  duration={2.5}
                  delay={0}
                > */}
                <Card.Img
                  className="animationImage"
                  src={data.chepImage}
                  style={{ width: "100%", paddingLeft: 0, cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/${data.routing}`);
                  }}
                />
                {/* </ScrollAnimation> */}
              </div>

              <div className="col-6" data-aos="fade-up">
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
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 12,
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
                    fontSize: 12,
                    letterSpacing: "1px",
                    fontFamily: "HelveticaNeue-CondensedBold",
                  }}
                >
                  {data.chepImageTitle}
                </Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 12,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "274px",
                    fontFamily: "HelveticaNeue-CondensedBold",
                  }}
                >
                  {data.chepImageDescription}
                </Row>
              </div>
            </Row>
            <div>
              <div className="row" data-aos="fade-up">
                <Col lg={5} sm={12} md={8}>
                  <Row
                    style={{
                      color: "white",
                      float: "left",
                      fontSize: 14,
                      paddingLeft: 10,

                      fontFamily: "HelveticaNeue-Bold",
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      {data.chepDescription}
                    </Row>

                    <Row style={{ paddingLeft: 0, marginTop: 16 }}>
                      <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                        <a
                          role="button"
                          onClick={() => {
                            navigate(`/${data.routing}`);
                          }}
                        >
                          <Image
                            src="./images/btnImage.svg"
                            style={{
                              paddingLeft: 0,
                              width: "100%",
                            }}
                            fluid
                          />
                        </a>
                      </Col>
                      <Col
                        lg={8}
                        style={{
                          fontFamily: "HelveticaNeue-Bold",
                          fontSize: 15,
                          float: "left",
                          paddingLeft: 5,

                          paddingTop: 5,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(`/${data.routing}`);
                        }}
                      >
                        LEARN MORE
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col lg={7} sm={12} md={4}></Col>
              </div>
            </div>
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
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "700px",
          position: "absolute",
          top: 46,
          right: 0,
        }}
      />
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "700px",
          position: "absolute",
          top: 1213,
          right: 0,
        }}
      />
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "675px",
          position: "absolute",
          top: 2331,
          right: 0,
        }}
      />
    </div>
  );
};

export default Card_component;
