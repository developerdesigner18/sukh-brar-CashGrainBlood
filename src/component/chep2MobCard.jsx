import React from "react";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./chep2MObCard.css";

const ChepTwoMobCard = () => {
  return (
    <React.Fragment>
      <div className="chepTwoMobcardHolder">
        <div className="container">
          <Container style={{ marginLeft: 10 }}>
            {/* --------------------------------cardOne-------------------------------- */}
            <div className="cardOneChepTwo">
              <Container style={{ padding: 0 }}>
                <Row
                  style={{
                    width: 56,
                    padding: 0,
                    margin: 0,
                    marginTop: 10,
                  }}
                >
                  <p className="chepTwoCardOneIndex">01/01</p>
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{
                      height: "5px",
                      width: 38,
                      padding: 0,
                      marginLeft: 0,
                    }}
                  ></Image>
                </Row>
              </Container>

              <Row
                className="chepTwoCardOne"
                style={{
                  marginRight: 2,
                  padding: 5,
                  marginLeft: 3,
                  marginTop: 0,
                }}
              >
                <Row style={{ padding: 0 }}>
                  <Image
                    src="./images/forwardArrowBlack.svg"
                    style={{
                      width: 20,
                      marginLeft: 0,
                      padding: 0,
                      marginTop: 171,
                    }}
                  />{" "}
                </Row>
                <Row>
                  <Row style={{ padding: 0 }}>
                    <p
                      style={{
                        marginLeft: 0,
                        padding: 0,
                        color: "white",
                        marginTop: 4,
                        marginBottom: 0,
                        fontSize: 12,
                        fontFamily: "HelveticaNeue-CondensedBold",
                      }}
                    >
                      IMAGE:
                    </p>{" "}
                  </Row>
                  <Row style={{ padding: 0, marginTop: 15 }}>
                    <p className="chepTwoCardOneImgDesc">
                      Cesar Menotti (Coach) <br /> with Daniel Passarella
                      (Captain) <br />
                      <span style={{ color: "white" }}>
                        {" "}
                        SOURCE: GETTY IMAGES
                      </span>
                    </p>{" "}
                  </Row>
                </Row>
                <Row
                  style={{
                    marginTop: 15.4,
                    marginLeft: 0,
                    marginRight: 0,

                    paddingRight: 0,
                    paddingLeft: 0,
                  }}
                >
                  <Row
                    style={{
                      paddingLeft: 0,
                      marginRight: 0,
                    }}
                  >
                    <p className="chepTwoCardOneTitle">
                      THE MANAGER <br /> “EL FLACO”
                    </p>
                  </Row>

                  <Row style={{ width: 165.21, height: 9.21, paddingLeft: 0 }}>
                    <Image
                      src="./images/verticalDivider.png"
                      style={{ paddingLeft: 0, width: "100%", paddingRight: 0 }}
                      fluid
                    />
                  </Row>
                  <Row style={{ padding: 0, marginTop: 5, width: 295.33 }}>
                    <p className="chepTwoCardOneDescText">
                      The Argentinian manager was a tall, skinny, chain-smoking
                      39-year-old, Cesar Luis Menotti. In the tense political
                      climate, it seemed very peculiar that a left-wing
                      intellectual, a former Communist, would be selected to
                      manage the national team.
                    </p>
                  </Row>
                  <Row style={{ padding: 0, marginTop: 5, width: 219.43 }}>
                    <p
                      className="chepTwoCardOneDescText"
                      style={{
                        fontFamily: "HelveticaNeue-CondensedBold",
                        color: "#20C5F7",
                      }}
                    >
                      “Humanity changes, but people still fall in love the same
                      way. In football, as in love, the essence never changes”
                    </p>
                    <p
                      style={{
                        fontFamily: "HelveticaNeue-CondensedBold",
                        fontSize: 12,
                        textAlign: "left",
                        color: "white",
                        marginBottom: 15,
                        paddingLeft: 0,
                      }}
                    >
                      - CESAR MENOTTI
                    </p>
                  </Row>
                  <Row style={{ paddingLeft: 0 }}>
                    <Col
                      sm={4}
                      xs={4}
                      style={{ width: 60, textAlign: "right" }}
                    >
                      <a role="button">
                        <Image
                          src="./images/btnImage.svg"
                          style={{
                            paddingLeft: 0,
                            marginLeft: 0,
                          }}
                          fluid
                        />
                      </a>
                    </Col>
                    <Col
                      xs={7}
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        marginLeft: 0,
                        color: "white",
                        textAlign: "left",
                        marginTop: 0,
                        fontFamily: "HelveticaNeue-Bold",
                        fontSize: 11,
                        paddingBottom: 15,
                        paddingRight: 0,
                      }}
                    >
                      Learn More About <br />
                      The Madres de Plaza de Mayo
                    </Col>
                  </Row>
                </Row>
              </Row>
              <Image
                src="./images/chep2/vertical_stripeForBanner.png"
                style={{
                  width: 17,
                  height: 413,
                  position: "absolute",
                  top: 1556,
                  right: 0,
                }}
              />
            </div>
          </Container>
          {/* ------------------------------cardTwo-------------------------------------- */}
          <Card
            style={{
              width: "100%",
              backgroundColor: "black",

              // display: "block",
            }}
          >
            <Card.Body>
              <Card.Title>
                <Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "HelveticaNeue-Bold",

                      fontSize: 18,
                      width: 152,
                      paddingRight: 0,
                      marginBottom: 10,
                      marginTop: 19.5,
                      textAlign: "left",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: 0,
                        paddingLeft: 34.8,
                        fontSize: 15,
                        fontFamily: "HelveticaNeue-Bold",
                        width: 100,
                      }}
                    >
                      03/06
                    </p>
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{
                        height: "5px",
                        padding: 0,
                        marginLeft: 34.8,
                        width: 45.2,
                      }}
                    ></Image>
                  </Row>

                  <h6
                    style={{
                      fontFamily: "StardosBold",
                      lineHeight: 1.1,

                      fontSize: "16px",
                      color: "white",

                      marginBottom: 0,
                      paddingLeft: 36,
                    }}
                  >
                    THE “FIRST MILITARY JUNTA”{" "}
                  </h6>
                </Row>
              </Card.Title>
              <Swiper
                className="mobile"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
              >
                <SwiperSlide style={{ padding: 5 }}>
                  <Row style={{ textAlign: "center", marginLeft: 10 }}>
                    <Col>
                      <Row>
                        <Image
                          src="./images/chep2/swiper01.png"
                          style={{
                            width: 250.35,
                            height: 150.48,
                            paddingRight: 0,
                            paddingLeft: 0,
                          }}
                        />
                      </Row>
                      <Row style={{ marginTop: 8 }}>
                        <Image
                          fluid
                          src="./images/chep1/upArrow.svg"
                          style={{
                            width: 26.96,
                            height: 17.41,
                            padding: 0,
                            marginTop: 15,
                            marginLeft: 3,
                          }}
                        />
                      </Row>
                      <Row>
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "14px",
                            marginBottom: "5px",
                          }}
                        >
                          OSVALDO ARDILES
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "14px",
                            width: "279px",
                            marginBottom: 0,
                          }}
                        >
                          Osvaldo, “Ossie” Ardiles – Midfield: Going into the
                          tournament, Ardiles was hardly a popular choice. The
                          press wasn’t too keen on Ardiles’ selection; there
                          were other midfielders that seemed a more natural
                          choice. Ardiles had a vital characteristic that tipped
                          things in his balance. He was the more dynamic player
                          – and that is what Menotti was seeking.
                        </p>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          marginTop: 5,
                        }}
                      >
                        <Col
                          sm={2}
                          xs={2}
                          style={{
                            width: 50,
                            // paddingLeft: 0,
                            textAlign: "left",
                          }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: "100%",
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={10}
                          xs={10}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",

                            color: "white",
                            textAlign: "left",
                            paddingTop: 8,
                            paddingLeft: 0,
                            paddingRight: 0,
                            width: 113,
                          }}
                        >
                          Profile Of <br /> Osvaldo Ardiles
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </SwiperSlide>
                <SwiperSlide style={{ padding: 5 }}>
                  <Row style={{ textAlign: "center", marginLeft: 10 }}>
                    <Col>
                      <Row>
                        <Image
                          src="./images/chep2/swiper02.png"
                          style={{
                            width: 267.35,
                            height: 150.48,
                            paddingRight: 0,
                          }}
                        />
                      </Row>
                      <Row style={{ marginTop: 8 }}>
                        {" "}
                        <Image
                          fluid
                          src="./images/chep1/upArrow.svg"
                          style={{
                            width: 26.96,
                            height: 17.41,
                            padding: 0,
                            marginTop: 15,
                            marginLeft: 3,
                          }}
                        />
                      </Row>
                      <Row>
                        {" "}
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "14px",
                            marginBottom: "5px",
                          }}
                        >
                          MARIO KEMPES
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "14px",
                            marginBottom: 0,
                            width: 279,
                          }}
                        >
                          Mario Kempes – Forward: Kempes was a rare Argentine in
                          the fact that he played for the Spanish team Valencia.
                          He was prolific goal scorer in La Liga, with 28 goals
                          in 34 matches. The quality and profile of Kempes led
                          coach Menotti to abandon his policy of selecting only
                          domestic-based players for the home-soil tournament.
                        </p>
                      </Row>

                      <Row
                        style={{
                          paddingLeft: 0,
                          marginTop: 25,
                        }}
                      >
                        <Col
                          sm={2}
                          xs={2}
                          style={{
                            width: 50,
                            // paddingLeft: 0,
                            textAlign: "left",
                          }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: "100%",
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={10}
                          xs={10}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",

                            color: "white",
                            textAlign: "left",
                            paddingTop: 8,
                            paddingLeft: 0,
                            paddingRight: 0,
                            width: 113,
                          }}
                        >
                          Profile Of <br /> Mario Kempes
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </SwiperSlide>
                <SwiperSlide style={{ padding: 5 }}>
                  <Row style={{ textAlign: "center", marginLeft: 10 }}>
                    <Col>
                      <Row>
                        <Image
                          src="./images/chep2/swiper03.png"
                          style={{
                            width: 267.35,
                            height: 150.48,
                            paddingRight: 0,
                          }}
                        />
                      </Row>
                      <Row style={{ marginTop: 8 }}>
                        {" "}
                        <Image
                          fluid
                          src="./images/chep1/upArrow.svg"
                          style={{
                            width: 26.96,
                            height: 17.41,
                            padding: 0,
                            marginTop: 15,
                            marginLeft: 3,
                          }}
                        />
                      </Row>
                      <Row>
                        {" "}
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "14px",
                            marginBottom: "5px",
                          }}
                        >
                          Daniel PAssarella
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "14px",
                            marginBottom: 0,
                            width: 279,
                          }}
                        >
                          Is an Argentine former professional footballer who
                          played as a centre back, and former manager of the
                          Argentina and Uruguay national football teams. He was
                          captain of the Argentina team that won the 1978 World
                          Cup. He was president of the River Plate sports club
                          for four years after winning the elections by a very
                          close margin in December 2009.
                        </p>
                      </Row>

                      <Row
                        style={{
                          paddingLeft: 0,
                          marginTop: 5,
                        }}
                      >
                        <Col
                          sm={2}
                          xs={2}
                          style={{
                            width: 50,
                            // paddingLeft: 0,
                            textAlign: "left",
                          }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: "100%",
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={10}
                          xs={10}
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 12,
                            float: "left",

                            color: "white",
                            textAlign: "left",
                            paddingTop: 8,
                            paddingLeft: 0,
                            paddingRight: 0,
                            width: 113,
                          }}
                        >
                          Profile Of <br />
                          Daniel Passarella
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </div>
        {/* -----------------------------card-3=----------------------------------------- */}
        <div className="chepTwoCardTHree">
          <div className="cardThreeHeaderImage">
            <Container style={{ padding: 0 }}>
              <Row
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
              >
                <p
                  className="chepTwoCardOneIndex"
                  style={{ marginTop: 11, marginLeft: 34 }}
                >
                  01/03
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{
                    height: "5px",
                    width: 38,
                    padding: 0,
                    marginLeft: 34,
                  }}
                ></Image>
              </Row>
            </Container>
            <div className="textHolderChepTwo">
              <Row
                style={{
                  paddingLeft: 0,
                  marginRight: 0,
                }}
              >
                <p className="chepTwoCardOneTitle">
                  La Albiceleste <br /> AND THE REST <br /> OF GROUP A
                </p>
              </Row>

              <Row
                style={{
                  width: 159.21,
                  height: 9.21,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Image
                  src="./images/verticalDivider.png"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  fluid
                />
              </Row>
            </div>
          </div>
          <div className="chepTwoCardThreeDesc">
            <p>
              In the first group stage (Group A), Argentina was placed with
              Italy, France and Hungary.
            </p>
            <p>
              La Albiceleste, the host nation, got off to a sluggish start with
              a close 2–1 victory over Hungary in their opening game. Argentines
              had a more attacking (2–1) victory over the French, but with a
              dubious awarded penalty for hand ball. They were up against the
              solid Italian team and lost that game convincingly 1–0 to the
              Azurri.
            </p>
            <p>
              Italy won the group comprehensively. Argentina, with the tension
              in the country, came in a lackluster second. Both teams
              automatically qualified for the second group stage.
            </p>
          </div>
          <div className="container" style={{ margin: "0px 10px 0px 20px" }}>
            <Row style={{ marginTop: 8 }}>
              <Image
                fluid
                src="./images/chep1/upArrow.svg"
                style={{
                  width: 26.96,
                  height: 17.41,
                  padding: 0,
                  marginTop: 15,
                  marginLeft: 3,
                }}
              />
            </Row>
            <Row>
              <p
                style={{
                  textAlign: "left",
                  marginTop: 2,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "white",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                NOTE:
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "#20C5F7",
                  fontSize: "14px",
                  width: "279px",
                  marginBottom: 0,
                }}
              >
                La Albiceleste is the nickname of the Argentina national team.
                It refers to the colors of the team’s home jersey, the White and
                Sky Blues.
              </p>
            </Row>
            <Row>
              <p
                style={{
                  textAlign: "left",
                  marginTop: 2,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "white",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                IMAGE:
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "#20C5F7",
                  fontSize: "14px",
                  width: "279px",
                  marginBottom: 0,
                }}
              >
                Oscar Ortiz of Argentina during the World Cup 1978 match between
                Argentina and Italy at Monumental Stadium, Buenos Aires,
                Argentina, on June 10, 1978.
              </p>
            </Row>
            <Row
              style={{
                paddingLeft: 0,
                marginTop: 5,
              }}
            >
              <Col
                sm={2}
                xs={2}
                style={{
                  width: 50,
                  // paddingLeft: 0,
                  textAlign: "left",
                }}
              >
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      // paddingLeft: 0,
                      marginTop: 11,
                      width: "100%",
                    }}
                    fluid
                  />
                </a>
              </Col>
              <Col
                sm={10}
                xs={10}
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  float: "left",

                  color: "white",
                  textAlign: "left",
                  paddingTop: 8,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Learn More <br /> Group 1 Results And Statistics
              </Col>
            </Row>
          </div>
        </div>
        {/*-----------------stripe------------------------------  */}

        {/* ------------------------------------ad------------------------------- */}
        <div className="chepTwoAdHeader1" style={{ paddingTop: "5px" }}>
          <p style={{ width: 230, margin: 0 }}>78 WC: GROUP B NATIONAL KITS</p>
        </div>
        <div className="chepTwoAdContainer">
          <div className="row" style={{ margin: 0, padding: 29 }}>
            <div sm={4} xs={4} className="col" style={{ textAlign: "center" }}>
              <Image src="./images/chep2/tShirtOne.png" />
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row"></div>
              <div className="row">
                <p>
                  MEN’S ARGENTINA <br /> HOME JERSEY <br /> White / Clear Blue
                </p>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
        <div className="chepTwoAdHeader2" style={{ padding: "15px" }}></div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwoMobCard;
