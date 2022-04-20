import React, { useState } from "react";
import { Container, Col, Image, Row, Card } from "react-bootstrap";
import "./chep5Card.css";
import { useNavigate } from "react-router-dom";
import FsLightbox from "fslightbox-react";

const ChepFiveCard = () => {
  const navigate = useNavigate();
  const [toggler, setToggler] = useState(false);
  return (
    <React.Fragment>
      <div className="cardHolder">
        <div>
          {/* -------------------------------card 1 ------------------------------------------ */}
          <div className="cardFive" onClick={() => setToggler(!toggler)}>
            <FsLightbox
              toggler={toggler}
              sources={["https://www.youtube.com/watch?v=Pe1se2P6sxI"]}
            />
            <Container>
              <div className="cardHeader">
                <Row style={{ paddingLeft: 20, paddingBottom: 15 }}>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 18,
                      width: 56,
                      paddingRight: 0,
                      marginBottom: 15,
                      marginTop: 59.3,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    03/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                    ></Image>
                  </Row>
                  <Col
                    style={{
                      textAlign: "right",
                      paddingRight: 0,
                    }}
                  ></Col>

                  <Row>
                    <Image
                      src="./images/chep5/aregntina.png"
                      style={{
                        paddingLeft: "0px",
                        width: 59,
                        height: 83,
                        paddingRight: 0,
                      }}
                      fluid
                    />
                    <Image
                      src="./images/chep5/dutch_logo.png"
                      style={{
                        paddingLeft: "5px",
                        width: 58,
                        height: 68,
                        paddingRight: 0,
                        marginLeft: 14,
                        marginTop: 17,
                      }}
                      fluid
                    />
                  </Row>
                  <Row style={{ width: 395, height: 15 }}>
                    <p
                      style={{
                        color: "white",
                        paddingLeft: "0px",

                        fontSize: 24,
                        paddingRight: 0,
                        fontFamily: "StardosBold",
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      1978 FIFA World Cup FINAL ARGENTINA v. HOLLAND
                      <br />
                    </p>
                  </Row>
                </Row>
              </div>
              <div className="cardBody">
                <Row
                  style={{
                    position: "absolute",
                    top: 400,
                    left: 605.8,
                  }}
                >
                  <a role="button">
                    <img
                      src="./images/chep1/YoutubeCard.svg"
                      style={{
                        width: 106,
                        height: 74,
                      }}
                      alt=""
                    />
                  </a>
                </Row>
              </div>
              <div style={{ position: "absolute", right: 151, bottom: 45.5 }}>
                <a role="button">
                  <img src="./images/chep1/youtube.svg" alt="" />
                </a>
              </div>
            </Container>
          </div>
          <Container>
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 66,
              }}
            >
              <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Row style={{ marginBottom: 0 }}>
                  <Col lg={7} style={{ height: "300px" }}>
                    <Row>
                      <Col>
                        <Row
                          style={{
                            paddingLeft: 0,
                          }}
                        >
                          <Row className="cardDescFive" style={{ width: 528 }}>
                            <p
                              style={{ paddingBottom: 3 }}
                              data-aos="fade-up"
                              data-aos-anchor-placement="bottom-bottom"
                            >
                              <span
                                style={{
                                  fontSize: 24,
                                  fantFamily: "StardosBold",
                                }}
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                              >
                                EXTRA TIME CHAMPIONS
                              </span>
                              <br />
                              1–1 after 90 minutes; Argentina won in extra time
                              3–1. The start of the final was mired in some
                              controversy. The Dutch accused the Argentines of
                              using stalling tactics to delay the match, which
                              allowed tension to build in front of a hostile
                              Buenos Aires crowd.
                            </p>

                            <p
                              data-aos="fade-up"
                              data-aos-anchor-placement="bottom-bottom"
                            >
                              The Netherlands refused to attend the post-match
                              ceremonies.
                            </p>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={5}>
                    <Row style={{ width: 28.96, height: 18.71, marginTop: 5 }}>
                      <Image
                        src="./images/chep1/upArrow.svg"
                        style={{
                          width: 26.36,
                          height: 17.2,
                          paddingLeft: 0,

                          paddingRight: 0,
                        }}
                        alt="Arrow"
                      />
                    </Row>
                    <Row
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    >
                      <p className="image-note">IMAGE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 271,
                      }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    >
                      <p className="imgDescFive">
                        Argentinian players during the FIFA World Cup final
                        match between Argentina and The Netherlands on June 25,
                        1978 at the Estadio Monumental Antonio Vespuci at Buenos
                        Aires, Argentina. (Photo by VI Images via Getty Images)
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            {/* =-------------------------------card -2 ----------------------------------------------- */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 0,
                marginTop: 0,
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
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    >
                      <p className="cardIndexTextFive">02/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                    >
                      <p className="cardTitleTextFive">
                        “TOTAL FOOTBALL”
                        <br /> GENERATION COMES <br /> TO AN END
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
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
                      src="./images/chep5/chepFiveTwo.png"
                      style={{ width: "100%", paddingLeft: 0 }}
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
                        width: 246,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="imgDescFive">
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
                        <Row className="cardDescFive">
                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            Total Football – a style of play where any outfield
                            player can take over the role of any other player in
                            a team – was a Dutch invention that captured the
                            imagination of the football world. It requires
                            players to be comfortable in multiple positions;
                            hence, it requires intelligent and technically
                            diverse players.
                          </p>

                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            This was manifested beautifully by the great Johan
                            Cruyff and the Dutch team at the 1974 World Cup in
                            West Germany.
                          </p>
                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The same style of football was played by the Dutch
                            team in Argentina. Again they reached the final, and
                            again they lost to the host nation.
                          </p>
                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            It truly was the end of a romantic era in European
                            football
                          </p>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 5,
                        }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://en.wikipedia.org/wiki/Total_Football"
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
                          <a
                            href="https://en.wikipedia.org/wiki/Total_Football"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More About Total Football
                          </a>
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
                      <p className="cardIndexTextFive">03/04</p>
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
                      <p className="cardTitleTextFive">
                        THE MALVINAS:
                        <br /> THE BEGINNING <br /> OF THE END
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
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
                      src="./images/chep5/chepFiveThree.png"
                      style={{ width: "100%", paddingLeft: 0 }}
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
                      <p className="imgDescFive">
                        <span style={{ color: "white" }}>
                          Milva Lezcano, sister of soldier Angel Gonzalez,
                        </span>{" "}
                        <br />
                        whose remains were recently identified by the Red Cross
                        and rest at Darwin Cemetery in the Falkland Islands,
                        attends a ceremony honoring the fallen in the South
                        Atlantic conflict, on the thirty-sixth anniversary of
                        the 1982 Falklands (Malvinas) War between Great Britain
                        and Argentina, in Buenos Aires, on April 2, 2018.
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
                        <Row className="cardDescFive">
                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            On April 2, 1982 Argentine forces mounted amphibious
                            landings, known as Operation Rosario, on the
                            Falkland (Malvinas) Islands. This was disputed
                            territory between Argentina and Great Britain.
                          </p>

                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The British government dispatched a naval task force
                            to engage the Argentine Navy and Air Force before
                            making an amphibious assault on the islands.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The conflict lasted 74 days and ended with an
                            Argentine surrender on June 14, when the islands
                            were returned to British control. The occupation was
                            popular with the people of Argentina, but that
                            support disappeared after the military defeat. It
                            was the beginning of the end for the Junta.
                          </p>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 5,
                        }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://en.wikipedia.org/wiki/Falklands_War"
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
                          <a
                            href="https://en.wikipedia.org/wiki/Falklands_War"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More About The Falklands War
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
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
                      <p className="cardIndexTextFive">04/04</p>
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
                      <p className="cardTitleTextFive">
                        AND JUSTICE <br /> FOR ALL
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15 }}>
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
                      src="./images/chep5/mobCardFive.png"
                      style={{ width: "100%", paddingLeft: 0 }}
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
                        height: 170,
                      }}
                    >
                      <p
                        className="imgDescFive"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <span style={{ color: "white" }}>
                          DICTATOR LED TO PRISON
                        </span>{" "}
                        <br />
                        Former Argentine dictator Jorge Videla(C) is escorted by
                        police into the San Isidro court building in Buenos
                        Aires 11 June.
                      </p>
                      <p
                        className="imgDescFive"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        On 17 May 2013, Videla was reported as having died of
                        natural causes in his sleep while serving his sentence
                        at a Marcos Paz prison.
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
                        <Row className="cardDescFive">
                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            Videla relinquished power to Roberto Viola on 29
                            March 1981; the military regime continued until it
                            collapsed after losing the Falklands war in 1982.
                            Democracy was restored in 1983.
                          </p>

                          <p
                            style={{ paddingBottom: 10 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The new government began prosecution of top-ranking
                            officers for crimes committed during the
                            dictatorship in what was called the Trial of the
                            Juntas of 1985. Videla was convicted of numerous
                            homicides, kidnapping, torture, and many other
                            crimes. He was sentenced to life imprisonment and
                            was discharged from the military in 1985.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            On 17 May 2013, Videla was reported as having died
                            of natural causes in his sleep while serving his
                            sentence at a Marcos Paz prison.
                          </p>
                        </Row>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          {/* ------------------------------------------card5----------------------------------------------------------- */}
          <div className="cardFiveBottom">
            <div className="cardHeader">
              <Row
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: 0,
                }}
              >
                <Row style={{ marginTop: 36 }}>
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "0px",

                      fontSize: 36,
                      paddingRight: 0,
                      fontFamily: "StardosBold",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The Victims IN THEIR OWN WORDS
                    <br />
                  </p>
                  <p
                    style={{
                      color: "white",
                      width: 771,
                      margin: "0px auto",
                      fontSize: 20,
                      paddingRight: 0,
                      fontFamily: "StardosBold",
                      textAlign: "center",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    “When You Hear The Words ‘World Cup’, It Reminds You Of What
                    Happened.
                    <br /> It Reminds You Of The Disappeared, Of The
                    Kidnappings,
                    <br /> Of The Murders. Everything Comes Together.” <br />
                    <span style={{ fontFamily: "HelveticaNeue-CondensedBold" }}>
                      {" "}
                      Mother of The Missing - Taty Almeida{" "}
                    </span>
                  </p>
                </Row>
                <Row
                  style={{
                    paddingLeft: 0,
                    paddingTop: 0,
                    marginTop: 5,
                  }}
                >
                  <Col
                    style={{
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 12,
                      //   float: "left",
                      paddingLeft: 0,
                      paddingTop: 10,
                      color: "white",
                    }}
                  >
                    <a
                      href="http://www.espn.com/espn/feature/story/_/id/11036214/while-world-watched-world-cup-brings-back-memories-argentina-dirty-war"
                      target="_blank"
                      role="button"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Listen To The Victims In Their Own Words
                      <Image
                        src="./images/btnImage.png"
                        style={{ marginLeft: 10, width: 34.98 }}
                        fluid
                      />
                    </a>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
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
          />
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 28,
              height: 902,
              position: "absolute",
              top: 3480,
              right: 0,
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepFiveCard;
