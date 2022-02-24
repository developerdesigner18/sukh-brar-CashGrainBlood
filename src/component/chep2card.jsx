import React from "react";
import { Container, Col, Image, Row, Card } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./chep2card.css";
const ChepTwoCard = () => {
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
                      <p className="cardIndexText">01/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row style={{}}>
                      <p className="cardTitleText">THE MANAGER “EL FLACO”</p>
                    </Row>

                    <Row style={{ width: 332, height: 15, marginLeft: 48 }}>
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
                      src="./images/chep2/chapTwoOne.png"
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
                      <p className="image-note">NOTE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 204,
                      }}
                    >
                      <p className="imgDesc">
                        “Humanity changes, but people still fall in love the
                        same way. in football, as in love, the essence never
                        changes”
                        <span style={{ color: "white" }}>- Cesar Menotti </span>
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
                        <Row style={{}}>
                          <p className="cardDesc">
                            The Argentinian manager was a tall, skinny,
                            chain-smoking 39-year-old, Cesar Luis Menotti. In
                            the tense political climate, it seemed very peculiar
                            that a left-wing intellectual, a former Communist,
                            would be selected to manage the national team.
                          </p>
                        </Row>

                        <Row
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
                              fontSize: 15,
                              float: "left",
                              paddingLeft: 5,
                              paddingTop: 5,
                              color: "white",
                            }}
                          >
                            Learn More About Cesar Luis Menotti
                          </Col>
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
                      <p className="cardIndexText">02/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row style={{}}>
                      <p className="cardTitleText">
                        KEY ARGENTINE <br /> PLAYERS{" "}
                      </p>
                    </Row>

                    <Row
                      style={{
                        width: 332,
                        height: 15,
                        marginLeft: 0,
                        paddingLeft: 0,
                      }}
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
                        src="./images/chep2/swiper01.png"
                        style={{ width: 460, height: 300 }}
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
                      />
                    </Row>
                    <Row style={{ width: 435 }}>
                      <p className="swiperImageTextTitle">
                        Osvaldo, “Ossie” Ardiles: Midfield
                      </p>
                      <p className="swiperImageText">
                        Osvaldo, “Ossie” Ardiles – Midfield: Going into the
                        tournament, Ardiles was hardly a popular choice. The
                        press wasn’t too keen on Ardiles’ selection; there were
                        other midfielders that seemed a more natural choice.
                        Ardiles had a vital characteristic that tipped things in
                        his balance. He was the more dynamic player – and that
                        is what Menotti was seeking.
                      </p>
                    </Row>
                    <Row
                      style={{
                        paddingLeft: 0,
                        marginTop: 6,
                      }}
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
                          fontSize: 15,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 8,
                          paddingLeft: 0,
                        }}
                      >
                        Learn More About Osvaldo Ardiles
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep2/swiper02.png"
                        style={{ width: 460, height: 300 }}
                      />
                    </Row>
                    <Row>
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
                    <Row style={{ width: 435 }}>
                      {" "}
                      <p className="swiperImageTextTitle">
                        MARIO KEMPES: CENTER FORWARD
                      </p>
                      <p className="swiperImageText">
                        Kempes was a rare Argentine in the fact that he played
                        for the Spanish team Valencia. He was prolific goal
                        scorer in La Liga, with 28 goals in 34 matches. The
                        quality and profile of Kempes led coach Menotti to
                        abandon his policy of selecting only domestic-based
                        players for the home-soil tournament.
                      </p>
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                      {" "}
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
                          fontSize: 15,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 5,
                          paddingLeft: 0,
                        }}
                      >
                        Learn More About EMario Kempes{" "}
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep2/swiper03.png"
                        style={{ width: 460, height: 300 }}
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
                      />
                    </Row>
                    <Row>
                      {" "}
                      <p className="swiperImageTextTitle">
                        Daniel Alberto Passarella - Center Back
                      </p>
                      <p className="swiperImageText">
                        Is an Argentine former professional footballer who
                        played as a centre back, and former manager of the
                        Argentina and Uruguay national football teams. <br />
                        He was captain of the Argentina team that won the 1978
                        World Cup. He was president of the River Plate sports
                        club for four years after winning the elections by a
                        very close margin in December 2009.
                      </p>
                    </Row>

                    <Row style={{ marginTop: 1 }}>
                      {" "}
                      <Col lg={4} style={{ width: 60, textAlign: "right" }}>
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
                          fontSize: 15,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 5,
                          paddingLeft: 0,
                        }}
                      >
                        Learn More About Daniel Alberto Passarella{" "}
                      </Col>
                    </Row>
                  </SwiperSlide>
                  {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>{" "}
                {/* swiper end */}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwoCard;
