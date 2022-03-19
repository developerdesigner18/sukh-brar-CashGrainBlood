import React from "react";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./chep2MobCard.css";
import { useNavigate } from "react-router-dom";

const ChepTwoMobCard = ({ opcity }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className={`${opcity && `opcity`}`}>
        <div className={`chepTwoMobcardHolder`} data-aos="fade-in">
          <Container
            style={{
              marginLeft: 36,
              paddingLeft: 0,
              marginRight: 0,
              width: 338,
            }}
          >
            {/* --------------------------------cardOne-------------------------------- */}
            <div className="cardOneChepTwo">
              <Row
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
                data-aos="fade-up"
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

              <Row
                className="chepTwoCardOne"
                style={{
                  marginRight: 2,

                  marginLeft: 0,
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
                    data-aos="fade-up"
                  />{" "}
                </Row>
                <Row>
                  <Row style={{ padding: 0, lineHeight: "14px" }}>
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
                      data-aos="fade-up"
                    >
                      IMAGE:
                    </p>{" "}
                    <p className="chepTwoCardOneImgDesc" data-aos="fade-up">
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
                      marginTop: 20,
                    }}
                    data-aos="fade-up"
                  >
                    <p className="chepTwoCardOneTitle">
                      THE MANAGER <br /> “EL FLACO”
                    </p>
                  </Row>

                  <Row
                    style={{ width: 165.21, height: 9.21, paddingLeft: 0 }}
                    data-aos="fade-up"
                  >
                    <Image
                      src="./images/verticalDivider.png"
                      style={{ paddingLeft: 0, width: "100%", paddingRight: 0 }}
                      fluid
                    />
                  </Row>
                  <Row
                    style={{ padding: 0, marginTop: 10, width: 295.33 }}
                    data-aos="fade-up"
                  >
                    <p className="chepTwoCardOneDescText">
                      The Argentinian manager was a tall, skinny, chain-smoking
                      39-year-old, Cesar Luis Menotti. In the tense political
                      climate, it seemed very peculiar that a left-wing
                      intellectual, a former Communist, would be selected to
                      manage the national team.
                    </p>
                  </Row>
                  <Row
                    style={{ padding: 0, marginTop: 10, width: 219.43 }}
                    data-aos="fade-up"
                  >
                    <p
                      className="chepTwoCardOneDescText"
                      style={{
                        fontFamily: "HelveticaNeue-CondensedBold",
                        color: "#20C5F7",
                      }}
                      data-aos="fade-up"
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
                      data-aos="fade-up"
                    >
                      - CESAR MENOTTI
                    </p>
                  </Row>
                  <Row style={{ paddingLeft: 0 }} data-aos="fade-up">
                    <Col sm={1} xs={1} style={{ padding: 0 }}>
                      <a
                        role="button"
                        href="https://www.coachesvoice.com/angel-cappa-cesar-luis-menotti-maradona-ronaldo-messi/"
                        target="_blank"
                      >
                        <Image
                          src="./images/btnImage.svg"
                          style={{
                            paddingLeft: 0,
                            marginLeft: 0,
                            width: 31.21,
                            height: 31.21,
                          }}
                          fluid
                        />
                      </a>
                    </Col>
                    <Col
                      xs={10}
                      sm={10}
                      style={{
                        paddingLeft: 5,
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
                      Learn More <br />
                      About Cesar Menotti
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
                data-aos="fade-up"
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
            <Card.Body style={{ padding: "16px 0px" }}>
              <Card.Title>
                <Row style={{ marginRight: 0 }}>
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
                    data-aos="fade-up"
                  >
                    <p
                      style={{
                        paddingLeft: 48,
                        marginBottom: 0,
                        fontSize: 15,
                        fontFamily: "HelveticaNeue-Bold",
                        width: 100,
                      }}
                    >
                      01/02
                    </p>
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{
                        height: "5px",
                        padding: 0,
                        marginLeft: 48,
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
                      paddingLeft: 48,
                    }}
                    data-aos="fade-up"
                  >
                    KEY ARGENTINE PLAYERS
                  </h6>
                </Row>
              </Card.Title>
              <Swiper
                className="mobile"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1.5}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
              >
                <SwiperSlide style={{ padding: 5, width: 279 }}>
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
                          data-aos="fade-in"
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
                            marginLeft: 15,
                          }}
                          data-aos="fade-up"
                        />
                      </Row>
                      <Row style={{ width: 211 }} data-aos="fade-up">
                        {" "}
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "12px",
                            marginBottom: "5px",
                            marginLeft: 12,
                          }}
                        >
                          OSVALDO ARDILES
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "12px",
                            marginBottom: 0,
                            marginLeft: 12,

                            paddingRight: 0,
                          }}
                        >
                          Osvaldo, “Ossie” Ardiles - Midfield: Going into the
                          tournament, Ardiles was hardly the popular choice. The
                          press wasn’t too keen on Ardiles selection; there were
                          other midfielders that seemed the natural choice.
                          Ardiles had a vital characteristic that tipped things
                          in his balance. He was the more dynamic player – and
                          that is what Menotti was seeking.
                        </p>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: 0,
                          marginTop: 5,
                        }}
                        data-aos="fade-up"
                      >
                        <Col
                          sm={3}
                          xs={3}
                          style={{
                            padding: 0,
                            textAlign: "center",
                          }}
                        >
                          <a
                            role="button"
                            href="https://en.wikipedia.org/wiki/Osvaldo_Ardiles"
                            target="_blank"
                          >
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: 31.21,
                                marginLeft: 18,

                                height: 31.21,
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={9}
                          xs={9}
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
                <SwiperSlide style={{ padding: 5, width: 279 }}>
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
                          data-aos="fade-in"
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
                            marginLeft: 15,
                          }}
                          data-aos="fade-up"
                        />
                      </Row>
                      <Row style={{ width: 211 }} data-aos="fade-up">
                        {" "}
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "12px",
                            marginBottom: "5px",
                            marginLeft: 12,
                          }}
                        >
                          MARIO KEMPES
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "12px",
                            marginBottom: 0,

                            paddingRight: 0,
                            marginLeft: 12,
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
                          marginTop: 3,
                        }}
                        data-aos="fade-up"
                      >
                        <Col
                          sm={3}
                          xs={3}
                          style={{
                            padding: 0,
                            textAlign: "center",
                          }}
                        >
                          <a
                            role="button"
                            href="https://en.wikipedia.org/wiki/Mario_Kempes"
                            target="_blank"
                          >
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: 31.21,
                                height: 31.21,
                                marginLeft: 16,
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={9}
                          xs={9}
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
                <SwiperSlide style={{ padding: 5, width: 279 }}>
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
                          data-aos="fade-in"
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
                            marginLeft: 15,
                          }}
                        />
                      </Row>
                      <Row style={{ width: 211 }} data-aos="fade-up">
                        {" "}
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 2,
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "white",
                            fontSize: "12px",
                            marginBottom: "5px",
                            marginLeft: 12,
                          }}
                        >
                          Daniel PAssarella
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            fontFamily: "HelveticaNeue-CondensedBold",
                            color: "#20C5F7",
                            fontSize: "12px",
                            marginBottom: 0,
                            marginLeft: 12,

                            paddingRight: 0,
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
                        data-aos="fade-up"
                      >
                        <Col
                          sm={3}
                          xs={3}
                          style={{
                            padding: 0,
                            textAlign: "center",
                          }}
                        >
                          <a
                            role="button"
                            href="https://en.wikipedia.org/wiki/Daniel_Passarella"
                            target="_blank"
                          >
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 11,
                                width: 31.21,
                                height: 31.21,
                                marginLeft: 16,
                              }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          sm={9}
                          xs={9}
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
                            marginRight: 10,
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
          <div className="cardThreeHeaderImage" data-aos="fade-in">
            <Container style={{ padding: 0 }}>
              <Row
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
                data-aos="fade-up"
              >
                <p
                  className="chepTwoCardOneIndex"
                  style={{ marginTop: 11, marginLeft: 36 }}
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
                    marginLeft: 36,
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
            <p data-aos="fade-up">
              In the first group stage (Group A), Argentina was placed with
              Italy, France and Hungary.
            </p>
            <p data-aos="fade-up">
              La Albiceleste, the host nation, got off to a sluggish start with
              a close 2–1 victory over Hungary in their opening game. Argentines
              had a more attacking (2–1) victory over the French, but with a
              dubious awarded penalty for hand ball. They were up against the
              solid Italian team and lost that game convincingly 1–0 to the
              Azurri.
            </p>
            <p data-aos="fade-up">
              Italy won the group comprehensively. Argentina, with the tension
              in the country, came in a lackluster second. Both teams
              automatically qualified for the second group stage.
            </p>
          </div>
          <div
            className="container"
            style={{ margin: "0px 10px 70px 36px", width: "auto", padding: 0 }}
          >
            <Row style={{ marginTop: 8, marginRight: 0 }}>
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
                data-aos="fade-up"
              />
            </Row>
            <Row style={{ marginTop: 5, width: 254 }}>
              <p
                style={{
                  textAlign: "left",
                  marginTop: 2,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "white",
                  fontSize: "14px",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
                data-aos="fade-up"
              >
                NOTE:
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "#20C5F7",
                  fontSize: "14px",
                  width: "auto",
                  marginBottom: 0,
                }}
                data-aos="fade-up"
              >
                La Albiceleste is the nickname of the Argentina national team.
                It refers to the colors of the team’s home jersey, the White and
                Sky Blues.
              </p>
            </Row>
            <Row style={{ marginTop: 15, width: 254 }}>
              <p
                style={{
                  textAlign: "left",
                  marginTop: 2,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "white",
                  fontSize: "14px",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
                data-aos="fade-up"
              >
                IMAGE:
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  color: "#20C5F7",
                  fontSize: "14px",
                  width: "auto",
                  marginBottom: 0,
                }}
                data-aos="fade-up"
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
                marginRight: 0,
              }}
              data-aos="fade-up"
            >
              <Col
                sm={1}
                xs={1}
                style={{
                  width: 50,
                  // paddingLeft: 0,
                  textAlign: "left",
                }}
              >
                <a
                  role="button"
                  href="https://en.wikipedia.org/wiki/1978_FIFA_World_Cup"
                  target="_blank"
                >
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      // paddingLeft: 0,
                      marginTop: 13,

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
                  marginLeft: -5,
                }}
              >
                Learn More <br /> Group 1 Results And Statistics
              </Col>
            </Row>
          </div>
        </div>
        {/*-----------------stripe------------------------------  */}

        {/* ------------------------------------ad------------------------------- */}
        <div className="chepTwoAdHeader1">
          <Container
            style={{
              marginLeft: 25,
              paddingLeft: 0,
              paddingRight: 0,
              width: "auto",
            }}
          >
            <p>
              <Image
                src="./images/chep2/adidasLogo.png"
                style={{ padding: 0, width: 36.49 }}
              />
              {"  "} ADIDAS ARGENTINA KIT
            </p>
          </Container>
        </div>
        <div className="chepTwoAdContainer" data-aos="fade-in">
          <div className="addTitleChepTwo" data-aos="fade-up">
            <p>Official collection of the current Argentine national kit.</p>
          </div>
          {/* ------------------tshirt-One----------------------- */}
          <div className="row" style={{ margin: 0, padding: 36 }}>
            <div
              sm={4}
              xs={4}
              className="col"
              style={{ textAlign: "center", paddingLeft: 0 }}
              data-aos="fade-in"
            >
              <a
                href="https://www.adidas.com/us/argentina-home-jersey/GE5478.html"
                target="_blank"
              >
                <Image src="./images/chep2/tshirtOne.png" />
              </a>
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepTwoadDesc">
                  MEN’S ARGENTINA <br /> HOME JERSEY <br /> White / Clear Blue
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a
                  href="https://www.adidas.com/us/argentina-home-jersey/GE5478.html"
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="./images/btnImage.svg"
                    width={31.21}
                    height={31.21}
                  />
                  <span
                    style={{
                      paddingLeft: 5,
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 12,
                      color: "white",
                    }}
                  >
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* ------------------tshirt-Two----------------------- */}
          <div className="row" style={{ margin: 0, padding: 36 }}>
            <div
              sm={4}
              xs={4}
              className="col"
              style={{ textAlign: "center", paddingLeft: 0 }}
              data-aos="fade-in"
            >
              <a
                href="https://www.adidas.com/us/argentina-away-jersey/GE5477.html"
                target="_blank"
              >
                <Image src="./images/chep2/tshirtTwo.png" />
              </a>
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepTwoadDesc">
                  MEN’S ARGENTINA <br /> AWAY JERSEY
                  <br /> Midnight
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a
                  href="https://www.adidas.com/us/argentina-away-jersey/GE5477.html"
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="./images/btnImage.svg"
                    width={31.21}
                    height={31.21}
                  />
                  <span
                    style={{
                      paddingLeft: 5,
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 12,
                      color: "white",
                    }}
                  >
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* ------------------------tshirtThreeee-------------------------------- */}
          <div className="row" style={{ margin: 0, padding: 36 }}>
            <div
              sm={4}
              xs={4}
              className="col"
              style={{ textAlign: "center", paddingLeft: 0 }}
              data-aos="fade-in"
            >
              <a
                href="https://www.buyarrive.com/product/argentina-2021-pre-match-training-jersey-by-adidas/"
                target="_blank"
              >
                <Image src="./images/chep2/tshirtThree.png" />
              </a>
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepTwoadDesc">
                  MEN’S ARGENTINA <br /> WARM-UP JERSEY <br /> Marble Blue
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a
                  href="https://www.buyarrive.com/product/argentina-2021-pre-match-training-jersey-by-adidas/"
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="./images/btnImage.svg"
                    width={31.21}
                    height={31.21}
                  />
                  <span
                    style={{
                      paddingLeft: 5,
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 12,
                      color: "white",
                    }}
                  >
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="chepTwoAdHeader2" style={{ padding: "10px" }}></div>
        {/* ----------------------------lastCard---------------------------- */}
        <div className="chep2LastCard" data-aos="fade-in">
          <Container style={{ padding: 0 }}>
            <Row
              style={{
                width: 56,
                padding: 0,
                margin: 0,
              }}
              data-aos="fade-up"
            >
              <p
                className="chepTwoCardLastIndex"
                style={{ marginTop: 34, marginLeft: 36 }}
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
                  marginLeft: 36,
                }}
              ></Image>
            </Row>
          </Container>
          <div className="row" style={{ width: "fit-content" }}>
            <p
              style={{
                color: "white",
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 11,
                marginLeft: 36,
                marginTop: 5,
                marginBottom: 3,
                width: "auto",
              }}
              data-aos="fade-up"
            >
              SIDE STORY
            </p>
          </div>
          <div
            className="lastCardTitleHolder"
            style={{ marginLeft: 36, padding: 1 }}
          >
            <Row
              style={{
                paddingLeft: 0,
                marginRight: 0,
              }}
            >
              <p className="chepTwoLastTitle" data-aos="fade-up">
                WHEN LES <br /> BLEUS HAD TO <br /> WEAR GREEN <br /> AND WHITE
              </p>
            </Row>

            <Row
              style={{
                paddingLeft: 0,
                marginLeft: 0,
                marginTop: 5,
                marginRight: 0,
              }}
            >
              <Image
                src="./images/verticalDivider.png"
                style={{
                  paddingLeft: 0,
                  width: 231,
                  height: 14,
                  paddingRight: 0,
                }}
                data-aos="fade-up"
                fluid
              />
            </Row>
          </div>
          <div className="chepTwoLastCardDesc">
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                height: 17.41,
                padding: 0,
                marginTop: 15,
              }}
              data-aos="fade-up"
            />

            <div className="chepTwoLastCardText">
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
                data-aos="fade-up"
              >
                IMAGE:
              </p>
              <p className="lastCardFirst" data-aos="fade-up">
                French midfielder Michel Platini wearing an Atletico Kimberley
                club jersey at the 1978 World Cup football match between France
                and Hungary, on June 10, 1978, in Mar del Plata.
              </p>
              <div className="lastCardSecond" data-aos="fade-up">
                <p style={{ marginBottom: 15 }}>
                  TV broadcasts were still mainly black and white, so FIFA tried
                  to ensure viewing audiences weren’t baffled by getting France
                  to wear white and Hungary to wear red. <br />
                </p>
                <p style={{ marginBottom: 15 }} data-aos="fade-up">
                  Then FIFA changed their mind, with France instructed to wear
                  blue and Hungary white, but the reasoning was still the same.
                  However, someone forgot to pass on the memo, and France wore
                  white. A request was made to the nearest club, Atletico
                  Kimberley, whose colors of white and green were perfect for TV
                  audiences.
                  <br />
                </p>
                <p data-aos="fade-up">
                  France ended up winning the game 3–1. Atletico Kimberley went
                  “global” for 90 minutes.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="./images/chep2/vertical_stripe.png"
            fluid
            style={{
              position: "absolute",
              top: 72.5,
              right: 0,
              height: 602,
              width: 12,
            }}
            data-aos="fade-up"
          />
        </div>
        {/* --------------------------Fotter------------------------- */}
        <div className="chepTwoFooter" data-aos="fade-up">
          <div className="row" style={{ padding: 0, margin: 0, width: 214 }}>
            <div
              className="col-10"
              style={{ padding: 0, margin: 0, textAlign: "left" }}
            >
              <h1
                className="footerText"
                onClick={() => {
                  navigate("/chepThree");
                }}
              >
                CHAPTER THREE: <br /> SCORE FOUR OR ELSE
              </h1>
            </div>
            <div
              className="col-2"
              style={{ padding: 0, margin: 0, textAlign: "center" }}
            >
              <a role="button">
                <Image
                  src="./images/chep1/forwardArrow.svg"
                  alt=""
                  style={{ width: 31.21, height: 31.21 }}
                  onClick={() => {
                    navigate("/chepThree");
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwoMobCard;
