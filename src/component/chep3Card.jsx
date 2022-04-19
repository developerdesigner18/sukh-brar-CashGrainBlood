import React from "react";
import { Container, Col, Image, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./chep3Card.css";
const ChepThreeCard = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="cardHolder">
        <div className="container">
          <Container>
            {/*  --------------------------------------First-Card ---------------------------------------*/}
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 25,
                marginTop: 88.2,
              }}
            >
              <Card.Body>
                <Card.Title>
                  <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                    <Row
                      style={{
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                    >
                      <p
                        className="cardIndexTextThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        01/04
                      </p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextThree">
                        GROUP B STAGE <br /> “SEMI-FINALS”
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15, marginLeft: 48 }}>
                      <Image
                        src="./images/verticalDivider.png"
                        style={{ paddingLeft: "5px", width: "100%" }}
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
                      src="./images/chep3/chepThreeOne.png"
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
                        width: 288,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="imgDescThree">
                        Oscar of Brazil and Mario Kempes of Argentina during the
                        FIFA World cup match between Argentina and Brazil on
                        June 18, 1978 in Gigante de Arroyito stadium, Rosario,
                        Argentina. (photo by Michel Barrault / Onze / Icon Sport
                        via Getty Images)
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={5} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 10,
                        }}
                      >
                        <Row className="cardDescThree" style={{}}>
                          <p
                            style={{ paddingBottom: 3 }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            In the ʼ78 World Cup, there was a second group stage
                            where the winner of the group would go on to the
                            World Cup Final. Argentina staggered into the group
                            and their main rival was Brazil, with Peru and
                            Poland being the other teams.
                          </p>
                          <br />
                          <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The two teams had already played out a goalless
                            draw. Was it just a happy accident that the hosts
                            knew exactly what they needed to do following
                            Brazil’s 3–1 win against Poland? With a 4–0 win
                            against Peru, they were in the final.
                          </p>
                        </Row>
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* -------------------------------------card-2--------------------------------- */}
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
                        width: 60,
                        paddingRight: 0,
                        marginBottom: 15,
                      }}
                    >
                      <p
                        className="cardIndexTextThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        02/04
                      </p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      ></Image>
                    </Row>

                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="cardTitleTextThree">
                        GROUP B
                        <br /> MATCH SUMMARIES
                      </p>
                    </Row>

                    <Row
                      style={{
                        width: 332,
                        height: 15,
                        marginLeft: 27,
                        paddingLeft: 0,
                      }}
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
                <Swiper
                  className="desktop"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  slidesPerView={2}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide style={{ padding: 10 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep3/swiper01.png"
                        style={{ width: 460, height: 300 }}
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                      />
                    </Row>
                    <Row>
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
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                    <Row style={{ width: 435 }}>
                      <p
                        className="swiperImageTextTitleThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        ARGENTINA 2 - POLAND 0
                      </p>
                      <p
                        className="swiperImageTextThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Argentina dominated the game through ball possession.
                        Mario Kempes scored early, in the sixteenth minute.
                        Argentina gained confidence and went on to seek a second
                        goal, and Kempes scored again in the seventy-second
                        minute. You couldn’t ask for a better start for the host
                        country.
                      </p>
                    </Row>
                    <Row
                      style={{
                        paddingLeft: 0,
                        marginTop: 6,
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <Col
                        lg={4}
                        style={{
                          width: 50,
                          paddingLeft: 0,
                          marginLeft: 4,
                          textAlign: "right",
                        }}
                      >
                        <a role="button">
                          <Image
                            src="./images/btnImage.png"
                            style={{
                              paddingLeft: 5,
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
                          fontSize: 12,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 10,
                          paddingLeft: 0,
                        }}
                      >
                        Watch Argentina v Poland
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep3/swiper02.png"
                        style={{ width: 460, height: 300 }}
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                      />
                    </Row>
                    <Row>
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
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                    <Row style={{ width: 435 }}>
                      {" "}
                      <p
                        className="swiperImageTextTitleThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        ARGENTINA 0 - BRAZIL 0
                      </p>
                      <p
                        className="swiperImageTextThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        In a tight but ultimately lackluster game, the two South
                        American giants had few opportunities on goal but had
                        plenty of fouls and (five) yellow cards. Both teams knew
                        that whoever won the game would go to the finals. That
                        would be decided by their next games.
                      </p>
                    </Row>
                    <Row
                      style={{ marginTop: 10 }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <Col
                        lg={4}
                        style={{ width: 60, textAlign: "right", marginLeft: 0 }}
                      >
                        <a role="button">
                          <Image
                            src="./images/btnImage.png"
                            style={{
                              paddingLeft: 3,
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
                          fontSize: 12,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 10,
                          paddingLeft: 0,
                        }}
                      >
                        Watch Argentina v Brazil
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep3/swiper03.png"
                        style={{ width: 460, height: 300 }}
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                      />
                    </Row>
                    <Row style={{ marginBottom: 10 }}>
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
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </Row>
                    <Row>
                      {" "}
                      <p
                        className="swiperImageTextTitleThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        ARGENTINA - Peru
                      </p>
                      <p
                        className="swiperImageTextThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Brazil beat Peru by three goal to nil. Argentina knew
                        they had to beat the Peruvians by four goals to go
                        through to the final. Argentina’s form up to that point
                        had been lackluster and defensive; they would have to
                        change the very nature of their style of football.
                      </p>
                      <p
                        style={{ color: "#F78320" }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        We’ve left the result blank as we would like you to
                        watch the video below. <br /> Please scroll down and
                        view the YouTube highlights and goals of the match.
                      </p>
                    </Row>
                  </SwiperSlide>
                  {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>{" "}
                {/* swiper end */}
              </Card.Body>
            </Card>
          </Container>
        </div>

        {/* ----------------------------------card three -----------------------------------*/}

        <div
          className="cardThree"
          data-aos="fade-out"
          data-aos-anchor-placement="center-bottom"
        >
          <Container style={{ padding: "35px" }}>
            <div className="cardHeader">
              <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
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
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  ></Image>
                </Row>
                <Col
                  style={{
                    textAlign: "right",
                    paddingRight: 0,
                  }}
                ></Col>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 40,
                    lineHeight: 0.9,
                    paddingBottom: 2,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  ARGENTINA <br />
                  V. PERU
                </Row>
                <Row style={{ width: 332, height: 15 }}>
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "3px",
                      width: 215,
                      fontSize: 14,
                      paddingRight: 0,
                      fontFamily: "HelveticaNeue-Bold",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Argentina knew they had to beat the Peruvians by four goals
                    to go through to the final.
                    <br />
                  </p>
                  <Row>
                    <Image
                      src="./images/chep3/aregntina.png"
                      style={{
                        paddingLeft: "3px",
                        width: 59,
                        height: 83,
                        paddingRight: 0,
                      }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                      fluid
                    />
                    <Image
                      src="./images/chep3/cardThreeLogo02.png"
                      style={{
                        paddingLeft: "5px",
                        width: 58,
                        height: 68,
                        paddingRight: 0,
                        marginLeft: 14,
                        marginTop: 17,
                      }}
                      data-aos="fade-out"
                      data-aos-anchor-placement="center-bottom"
                      fluid
                    />
                  </Row>
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
                    data-aos="fade-out"
                    data-aos-anchor-placement="center-bottom"
                    alt=""
                  />
                </a>
              </Row>
            </div>
            <div style={{ position: "absolute", right: 57.2, bottom: 33.9 }}>
              <a role="button">
                <img src="./images/chep1/youtube.svg" alt="" />
              </a>
            </div>
          </Container>
        </div>

        {/* Add Container */}
        <div className="adcontainer">
          <div className="adHeaderTopThree">
            <Container style={{ marginLeft: 25, paddingLeft: 0 }}>
              <p>{"  "}GROUP B NATIONAL KITS</p>
            </Container>
          </div>
          <div
            className="tshirtContainerThree"
            data-aos="fade-out"
            data-aos-anchor-placement="center-bottom"
          >
            <div style={{ textAlign: "center" }}>
              <Row style={{ margin: "auto 0px" }}>
                <Col lg={4} style={{ padding: 35 }}>
                  <Row>
                    <Col style={{ width: "100%", padding: "0px" }}>
                      <Image
                        src="./images/chep3/tshirtOne.png"
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                        fluid
                      />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row
                        style={{ marginTop: 20 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <p className="adText1Three">
                          MEN’S ARGENTINA <br /> HOME JERSEY <br /> White /
                          Clear Blue
                        </p>
                      </Row>
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <a
                          role={"button"}
                          href="https://www.adidas.com/us/argentina-home-jersey/GE5478.html"
                          target="_blank"
                          style={{ marginTop: 10 }}
                        >
                          <Row style={{ marginTop: 30 }}>
                            <Col
                              lg={2}
                              style={{
                                textAlign: "left",
                                paddingLeft: 0,
                                paddingRight: 0,
                              }}
                            >
                              <a role="button">
                                <Image
                                  src="./images/btnImage.png"
                                  style={{ width: 30, height: 30 }}
                                  fluid
                                />
                              </a>
                            </Col>
                            <Col
                              lg={10}
                              style={{
                                fontFamily: "HelveticaNeue-Bold",
                                fontSize: 16,
                                float: "left",
                                color: "white",
                                textAlign: "left",
                                paddingTop: 0,

                                paddingLeft: 0,
                              }}
                            >
                              Buy Now
                            </Col>
                          </Row>
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} style={{ padding: 35 }}>
                  <Row>
                    <Col style={{ width: "100%", padding: "0px" }}>
                      <Image
                        src="./images/chep3/tshirtTwo.png"
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                        fluid
                      />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row
                        style={{ marginTop: 20 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <p className="adText1Three">
                          MEN’S Brazil <br /> Home JERSEY <br /> Canary Yellow
                        </p>
                      </Row>
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <a
                          role={"button"}
                          href="https://www.nike.com/t/brasil-2020-stadium-home-big-kids-soccer-jersey-j69WKH/CD1024-749"
                          target="_blank"
                          style={{ marginTop: 10 }}
                        >
                          <Row style={{ marginTop: 30 }}>
                            <Col
                              lg={2}
                              style={{
                                textAlign: "left",
                                paddingLeft: 0,
                                paddingRight: 0,
                              }}
                            >
                              <a role="button">
                                <Image
                                  src="./images/btnImage.png"
                                  style={{ width: 30 }}
                                  fluid
                                />
                              </a>
                            </Col>
                            <Col
                              lg={10}
                              style={{
                                fontFamily: "HelveticaNeue-Bold",
                                fontSize: 16,
                                float: "left",
                                color: "white",
                                textAlign: "left",
                                paddingTop: 0,
                                paddingLeft: 0,
                              }}
                            >
                              Buy Now
                            </Col>
                          </Row>
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} style={{ padding: 35 }}>
                  <Row>
                    <Col style={{ width: "100%", padding: "0px" }}>
                      <Image
                        src="./images/chep3/tshirtThree.png"
                        data-aos="fade-out"
                        data-aos-anchor-placement="center-bottom"
                        fluid
                      />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row
                        style={{ marginTop: 20 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <p className="adText1Three" style={{ width: "auto" }}>
                          MEN’S Peru <br /> Home JERSEY <br /> White And Red
                        </p>
                      </Row>
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <a
                          role={"button"}
                          href="https://www.soccer.com/shop/details/men-s-replica-marathon-peru-home-jersey-2021_A1058458"
                          target="_blank"
                          style={{ marginTop: 10 }}
                        >
                          <Row style={{ marginTop: 30 }}>
                            <Col
                              lg={2}
                              style={{
                                textAlign: "left",
                                paddingLeft: 0,
                                paddingRight: 0,
                              }}
                            >
                              <a role="button">
                                <Image
                                  src="./images/btnImage.png"
                                  style={{ width: 30 }}
                                  fluid
                                />
                              </a>
                            </Col>
                            <Col
                              lg={10}
                              style={{
                                fontFamily: "HelveticaNeue-Bold",
                                fontSize: 16,
                                float: "left",
                                color: "white",
                                textAlign: "left",
                                paddingTop: 0,
                                paddingLeft: 0,
                              }}
                            >
                              Buy Now
                            </Col>
                          </Row>
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <Container>
            <Card
              style={{
                width: "100%",
                backgroundColor: "black",
                paddingBottom: 25,
                marginTop: 41.9,
              }}
            >
              <Card.Body>
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
                      <p className="cardIndexTextThree">04/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row style={{}}>
                      <p
                        className="cardTitleTextThree"
                        style={{ lineHeight: 1 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        THE HOSTS REACH THE <br />
                        FINAL AND THE RUMORS BEGIN{" "}
                      </p>
                    </Row>

                    <Row style={{ width: 332, height: 15, marginLeft: 20 }}>
                      <Image
                        src="./images/verticalDivider.png"
                        style={{
                          paddingLeft: "5px",
                          paddingRight: 0,
                          width: "100%",
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        fluid
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep3/chepThreeFour.png"
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
                        className="image-noteThree"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        IMAGE:
                      </p>
                    </Row>
                    <Row
                      style={{
                        width: 203,
                      }}
                    >
                      <p
                        className="imgDescThree"
                        style={{ letterSpacing: 1.5 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        The Argentina national team at the Estadio Monumental
                        stadium on June 25, 1978. The Argentines kept the Dutch
                        waiting for over 20 minutes before coming onto the
                        pitch.
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Card.Text>
                  <Row>
                    <Col lg={5} sm={12} md={8}>
                      <Row
                        style={{
                          paddingLeft: 10,
                        }}
                      >
                        <Row style={{ width: 450, paddingRight: 0 }}>
                          <p
                            className="cardDescThree"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The Argentines meet the Dutch, runners up of the
                            1974 World Cup. Rumors had already swirled about the
                            legitimacy of the Argentine qualification game with
                            Peru.
                          </p>
                        </Row>
                        <Row
                          style={{ width: 450, paddingRight: 0, marginTop: 25 }}
                        >
                          <p
                            className="cardDescThree"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                          >
                            The rumors were so rampant that many Dutch players
                            felt that they should boycott the final. Cooler
                            heads prevailed, and the final went ahead.
                          </p>
                        </Row>

                        {/* <Row
                          style={{
                            paddingLeft: 0,
                            paddingTop: 10,
                            marginTop: 5,
                          }}
                        >
                          <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                            <a href="#" role="button">
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
                            Learn More About
                          </Col>
                        </Row> */}
                      </Row>
                    </Col>
                    <Col lg={7} sm={12} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
        <div className="footerThree">
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
              {" "}
              <h3
                style={{
                  marginBottom: 0,
                  cursor: "pointer",
                  textAlign: "right",
                }}
                onClick={() => {
                  navigate("/chepFour");
                }}
              >
                CHAPTER FOUR: IT TAKES TWO TO CONSPIRE
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
                    navigate("/chepFour");
                  }}
                />
              </a>
            </Col>
          </Row>
        </div>
        {/* ----------------horizontal Stripe----------------------------------- */}
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 19,
              height: 848,
              position: "absolute",
              top: 1165,
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
              width: 19,
              height: 802,
              position: "absolute",
              top: 2670,
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
              width: 18,
              height: 774,
              position: "absolute",
              top: 3826,
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

export default ChepThreeCard;
