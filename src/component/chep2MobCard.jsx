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
                          fluid
                          src="./images/chep1/cardThreeOne.jpg"
                          style={{
                            width: 267.35,
                            height: 150.48,
                            paddingRight: 0,
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
                          JORGE RAFAEL VIDELA
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
                          (August 2, 1925–May 17, 2013) was a General Commander
                          of the Army, member of the military junta, and
                          dictator of Argentina from 1976 to 1981. On December
                          22, 2010, Videla was sentenced to life in a civilian
                          prison for the deaths of 31 prisoners following his
                          coup.
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
                          Profile Of <br /> Jorge Rafael Videla
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
                          fluid
                          src="./images/chep1/cardThreeTwo.jpg"
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
                          EMILIO EDUARDO MASSERA
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
                          (October 19, 1925–November 8, 2010) was a General
                          Commander of the Army, member of the military junta,
                          and dictator of Argentina from 1976 to 1981. On
                          December 22, 2010, Videla was sentenced to life in a
                          civilian prison for the deaths of 31 prisoners
                          following his coup.
                        </p>
                      </Row>

                      <Row
                        style={{
                          marginTop: 7,
                          paddingLeft: 0,
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
                            width: 160,
                          }}
                        >
                          Profile Of <br /> Emilio Eduardo Massera
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
                          fluid
                          src="./images/chep1/chapterThreeThree.png"
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
                          ORLANDO RAMON AGOSTI
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
                          (August 22, 1924–October 6, 1997) was an Argentine
                          general, and Commander-in-Chief of the Argentine Air
                          Force from 1976 to 1979. With General Jorge Rafael
                          Videla, he ruled Argentina as part of the military
                          junta between 1976 and 1981.
                        </p>
                      </Row>

                      <Row
                        style={{
                          paddingLeft: 0,
                          marginTop: 7,
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
                            width: 160,
                          }}
                        >
                          Profile Of <br /> Orlando Ramón Agosti
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwoMobCard;
