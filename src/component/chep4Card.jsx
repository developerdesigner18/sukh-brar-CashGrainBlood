import React from "react";
import { Container, Col, Image, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./chep4Card.css";

const ChepFourCard = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="cardHolder">
        <div className="container">
          <Container>
            {/* -------------------------------card 1 ------------------------------------------ */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 66,
              }}
            >
              <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Card.Title>
                  <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                    <Row
                      style={{
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardIndexTextFour">01/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextFour">
                        A MATCH <br /> TO “REMEBER”
                      </p>
                    </Row>

                    <Row
                      style={{ width: 332, height: 15 }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <Image
                        src="./images/verticalDivider.png"
                        style={{ paddingLeft: "0px", width: "100%" }}
                        fluid
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep4/chepFourOne.png"
                      style={{ width: "100%", paddingLeft: 0 }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    />
                  </Col>
                  <Col lg={6}>
                    <Row style={{ width: 28.96, height: 18.71, marginTop: 15 }}>
                      <Image
                        src="./images/imgArrow.svg"
                        style={{
                          width: "100%",
                          paddingLeft: 0,

                          paddingRight: 0,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        alt="Arrow"
                      />
                    </Row>
                    <Row>
                      <p
                        className="image-note"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        IMAGE:
                      </p>
                    </Row>
                    <Row
                      style={{
                        width: 274,
                      }}
                    >
                      <p
                        className="imgDescFour"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <span style={{ color: "white" }}>Leopoldo Luque</span>{" "}
                        cheers the 6:0 goal with raised arms. Behind him Mario
                        Kempes and on the ground the Peruvian keeper Ramon
                        Quiroga (l) and defender Rojas. In group B of the second
                        final round of the World Cup, Argentinia defeated Peru
                        with 6:0 on 21 June 1978 in Rosario. usage worldwide
                        (Photo by Scheidemann/picture alliance via Getty Images)
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={5} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 0,
                        }}
                      >
                        <Row
                          className="cardDescFour"
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                        >
                          <p style={{ paddingBottom: 3 }}>
                            The match between Argentina and Peru is one of the
                            most commented on, analyzed, scrutinized and
                            criticized match in soccer history. Much has been
                            made about the overall quality of play, the lack of
                            energy exhibited by Peru’s side, and the
                            questionable refereeing. There were also allegations
                            of bribery and collusion between governments.
                          </p>
                        </Row>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* =-------------------------------card -2 ----------------------------------------------- */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 66,
              }}
            >
              <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Card.Title>
                  <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                    <Row
                      style={{
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardIndexTextFour">02/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextFour">
                        “EL GORDO”
                        <br /> THE BRIBER
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
                      <Image
                        src="./images/verticalDivider.png"
                        style={{ paddingLeft: "0px", width: "100%" }}
                        fluid
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep4/chepFourTwo.png"
                      style={{ width: "100%", paddingLeft: 0 }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    />
                  </Col>
                  <Col lg={6}>
                    <Row style={{ width: 28.96, height: 18.71, marginTop: 15 }}>
                      <Image
                        src="./images/imgArrow.svg"
                        style={{
                          width: "100%",
                          paddingLeft: 0,

                          paddingRight: 0,
                        }}
                        alt="Arrow"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="image-note">IMAGE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 246,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="imgDescFour">
                        <span style={{ color: "white" }}>
                          Captain Carlos Lacoste
                        </span>{" "}
                        <br />
                        His comrades-in-arms nicknamed the fat framed, 1.85 cm
                        tall man who used to combine an impeccable uniform with
                        cigarettes and an arrogant expression, “El Gordo” (”The
                        Fat One”). In 1974, Massera sent him as his emissary to
                        the World Cup 78 Support Committee, that worked under
                        the orbit of José López Rega in the Ministry of Social
                        Welfare.
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={5} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 0,
                        }}
                      >
                        <Row className="cardDescFour">
                          <p
                            style={{ paddingBottom: 3 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The order to fix the result came directly from the
                            man then heading the military junta, General Jorge
                            Videla. The man he gave the orders to was Captain
                            Carlos Lacoste.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            Who better to turn to than the chairman of the
                            organizing committee for the World Cup? Captain
                            Carlos Lacoste was president of the nation for 11
                            days, but he never had as much power as he obtained
                            through football during the last dictatorship
                            (1976–1983). He was the chairman of the 1978 World
                            Cup Autarchic Entity.
                          </p>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          paddingTop: 10,
                          marginTop: 5,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://papelitos.com.ar/nota/carlos-alberto-lacoste-en-el-mundial-78?z_language=en"
                            target="_blank"
                            role="button"
                          >
                            <Image
                              src="./images/btnImage.png"
                              style={{ paddingLeft: 0, width: "100%" }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          lg={8}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 0,
                            color: "white",
                          }}
                        >
                          Learn More About <br />
                          Carlos Alberto Lacoste
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ---------------------------------------------------card 3----------------------------------------- */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 66,
              }}
            >
              <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Card.Title>
                  <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                    <Row
                      style={{
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardIndexTextFour">03/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextFour">
                        THE ALLEGED
                        <br /> COST OF THE FIX
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
                      <Image
                        src="./images/verticalDivider.png"
                        style={{ paddingLeft: "0px", width: "100%" }}
                        fluid
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep4/chepFourThree.png"
                      style={{ width: "100%", paddingLeft: 0 }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    />
                  </Col>
                  <Col lg={6}>
                    <Row style={{ width: 28.96, height: 18.71, marginTop: 15 }}>
                      <Image
                        src="./images/imgArrow.svg"
                        style={{
                          width: "100%",
                          paddingLeft: 0,

                          paddingRight: 0,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        alt="Arrow"
                      />
                    </Row>
                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="image-note">IMAGE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 291,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="imgDescFour">
                        <span style={{ color: "white" }}>
                          Jorge Rafael Videla (Center)
                        </span>
                        <br />
                        Argentine dictator Jorge Rafael Videla attending the
                        World Cup match between Argentina and Peru, 1978.
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={6} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 0,
                        }}
                      >
                        <Row className="cardDescFour">
                          <p
                            style={{ paddingBottom: 3 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            Lacoste allegedly carried out a series of detailed
                            negotiations with the Peruvian officials; the bribes
                            took a series of forms.
                          </p>
                          <p
                            style={{ color: "#20c5f7" }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            • 35,000 tons of Argentinian grain shipped to Peru{" "}
                            <br />
                            • The unfreezing of a $50 million credit line to the
                            Peruvian government <br />• Videla’s regime agreed
                            to receive and imprison 13 Peruvian political <br />
                            {"  "}
                            <span style={{ marginLeft: 10 }}>
                              dissidents who were vocally opposed to the
                              Peruvian regime.
                            </span>
                          </p>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          paddingTop: 10,
                          marginTop: 5,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://www.amazon.com/They-Stole-Game-David-Yallop/dp/178033401X"
                            target="_blank"
                            role="button"
                          >
                            <Image
                              src="./images/btnImage.png"
                              style={{ paddingLeft: 0, width: "100%" }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          lg={8}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 10,
                            color: "white",
                          }}
                        >
                          Learn More “How They Stole The Game”
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* -----------------------------------------card 4----------------------------------------------- */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 66,
              }}
            >
              <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Card.Title>
                  <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                    <Row
                      style={{
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardIndexTextFour">04/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>
                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextFour">
                        THE MOST
                        <br /> INSIDIOUS <br /> ALLEGATION
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
                      <Image
                        src="./images/verticalDivider.png"
                        style={{ paddingLeft: "0px", width: "100%" }}
                        fluid
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep4/chepFourFour.png"
                      style={{ width: "100%", paddingLeft: 0 }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    />
                  </Col>
                  <Col lg={6}>
                    <Row style={{ width: 28.96, height: 18.71, marginTop: 15 }}>
                      <Image
                        src="./images/imgArrow.svg"
                        style={{
                          width: "100%",
                          paddingLeft: 0,
                          paddingRight: 0,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        alt="Arrow"
                      />
                    </Row>
                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="image-note">IMAGE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 266,
                        height: 160,
                      }}
                    >
                      <p
                        className="imgDescFour"
                        style={{ paddingBottom: 10 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <span style={{ color: "white" }}>
                          VICTIMS OF THE JUNTA
                        </span>{" "}
                        <br />
                        Victims of the Navy Petty-Officers School Of Mechanics
                        crossed all ages and backgrounds.
                      </p>
                      <p
                        className="imgDescFour"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Graciela Alberti (top), Alberto Donadio, (center) and
                        Ida Idad (below) were detained – just some of the
                        thousands of the disappeared.
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={5} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 0,
                        }}
                      >
                        <Row className="cardDescFour">
                          <p
                            style={{ paddingBottom: 3 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            Prisoners who were released after the regime had
                            ended would say that the only time there was respite
                            from physical harm was when Argentina played its
                            matches.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The most insidious match-fixing allegation was the
                            Peruvian junta demanding the Argentine dictatorship
                            arrest and detain several Peruvian dissidents in
                            exile in Argentina. Perhaps some were prisoners
                            detained at the ESMA.
                          </p>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          paddingTop: 10,
                          marginTop: 5,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://en.wikipedia.org/wiki/Navy_Petty-Officers_School"
                            target="_blank"
                            role="button"
                          >
                            <Image
                              src="./images/btnImage.png"
                              style={{ paddingLeft: 0, width: "100%" }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          lg={8}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 0,
                            color: "white",
                          }}
                        >
                          Learn More <br />
                          The Navy Petty-Officers School of Mechanics
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
        <div className="footerFour">
          <Row style={{ marginRight: 0 }}>
            <Col
              lg={10}
              style={{
                textAlign: "right",
                marginTop: 15,
                color: "white",
                fontFamily: "StardosBold",
                fontSize: "24px",
              }}
            >
              <h3
                style={{
                  marginBottom: 0,
                  cursor: "pointer",
                  textAlign: "right",
                }}
                onClick={() => {
                  navigate("/chepFive");
                }}
              >
                CHAPTER FIVE: “We Argentines are right…
              </h3>{" "}
            </Col>
            <Col
              lg={2}
              style={{ textAlign: "left", padding: "8px 6px 6px 6px" }}
            >
              <a role="button">
                <Image
                  src="./images/chep1/forwardArrow.svg"
                  alt=""
                  onClick={() => {
                    navigate("/chepFive");
                  }}
                />
              </a>
            </Col>
          </Row>
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 28,
              height: 902,
              position: "absolute",
              top: 1110,
              right: 0,
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 28,
              height: 902,
              position: "absolute",
              top: 2250,
              right: 0,
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 28,
              height: 902,
              position: "absolute",
              top: 3420,
              right: 0,
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepFourCard;
