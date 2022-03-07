import React from "react";
import { Container, Col, Image, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./chep2card.css";
const ChepTwoCard = () => {
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
                              fontSize: 12,
                              float: "left",
                              paddingLeft: 5,
                              paddingTop: 10,
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
                          fontSize: 12,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 10,
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
                          fontSize: 12,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 10,
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
                          fontSize: 12,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 10,
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
            {/* ----------------------------------card three -----------------------------------*/}
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
                    >
                      <p className="cardIndexText">03/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row style={{}}>
                      <p className="cardTitleText" style={{ lineHeight: 1 }}>
                        La Albiceleste AND <br /> THE REST OF GROUP A
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
                        fluid
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep2/chepTwoThree.png"
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
                      <p className="imgDesc" style={{ letterSpacing: 1.5 }}>
                        La Albiceleste is the nickname of the Argentina national
                        team. It refers to the colors of the team’s home jersey,
                        the White and Sky Blues.
                      </p>
                    </Row>
                    <Row
                      style={{
                        width: 204,
                        marginTop: 20,
                      }}
                    >
                      <p className="imgDesc" style={{ letterSpacing: 1.5 }}>
                        Oscar Ortiz of Argentina during the World Cup 1978 match
                        between Argentina and Italy at Monumental Stadium,
                        Buenos Aires, Argentina, on June 10, 1978.
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
                          <p className="cardDesc">
                            In the first group stage (Group A), Argentina was
                            placed with Italy, France and Hungary. La
                            Albiceleste, the host nation, got off to a sluggish
                            start with a close 2–1 victory over Hungary in their
                            opening game. Argentines had a more attacking (2–1)
                            victory over the French, but with a dubious awarded
                            penalty for hand ball. They were up against the
                            solid Italian team and lost that game convincingly
                            1–0 to the Azurri.{" "}
                          </p>
                        </Row>
                        <Row
                          style={{ width: 450, paddingRight: 0, marginTop: 25 }}
                        >
                          <p className="cardDesc">
                            Italy won the group comprehensively. Argentina, with
                            the tension in the country, came in a lackluster
                            second. Both teams automatically qualified for the
                            second group stage.
                          </p>
                        </Row>

                        <Row
                          style={{
                            paddingLeft: 0,
                            paddingTop: 20,
                            marginTop: 5,
                            marginBottom: 92,
                          }}
                        >
                          <Col lg={2} style={{ width: 60, textAlign: "right" }}>
                            <a href="#" role="button">
                              <Image
                                src="./images/btnImage.png"
                                style={{ paddingLeft: 0, width: "100%" }}
                                fluid
                              />
                            </a>
                          </Col>
                          <Col
                            lg={10}
                            style={{
                              fontFamily: "HelveticaNeue-Bold",
                              fontSize: 12,
                              float: "left",
                              paddingLeft: 5,
                              paddingTop: 10,
                              color: "white",
                            }}
                          >
                            Learn More About The Group 1 Results And Statistics
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
          {/* Add Container */}
        </div>
        <div className="adcontainer">
          <div className="adHeaderTop">
            <Container style={{ marginLeft: 25, paddingLeft: 0 }}>
              <p>
                <Image
                  src="./images/chep2/adidasLogo.png"
                  style={{ paddingRight: 15 }}
                />
                {"  "} ADIDAS ARGENTINA KIT
              </p>
            </Container>
          </div>
          <div className="tshirtContainer">
            <div style={{ textAlign: "center" }}>
              <Row style={{ margin: "auto 0px" }}>
                <Col lg={4} style={{ padding: 35 }}>
                  <Row>
                    <Col style={{ width: "100%", padding: "0px" }}>
                      <Image src="./images/chep2/tshirtOne.png" fluid />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row style={{ marginTop: 20 }}>
                        <p className="adText1">
                          MEN’S ARGENTINA <br /> HOME JERSEY <br /> White /
                          Clear Blue
                        </p>
                      </Row>
                      <Row>
                        <a role={"button"} style={{ marginTop: 10 }}>
                          <Row>
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
                              Learn More
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
                      <Image src="./images/chep2/tshirtTwo.png" fluid />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row style={{ marginTop: 20 }}>
                        <p className="adText1">
                          MEN’S ARGENTINA <br /> AWAY JERSEY <br /> Midnight
                        </p>
                      </Row>
                      <Row>
                        <a role={"button"} style={{ marginTop: 10 }}>
                          <Row>
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
                              Learn More
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
                      <Image src="./images/chep2/tshirtThree.png" fluid />
                    </Col>
                    <Col style={{ padding: "0px", marginTop: 25 }}>
                      <Row style={{ marginTop: 20 }}>
                        <p className="adText1" style={{ width: "auto" }}>
                          MEN’S ARGENTINA <br /> WARM-UP JERSEY <br /> Marble
                        </p>
                      </Row>
                      <Row>
                        <a role={"button"} style={{ marginTop: 10 }}>
                          <Row>
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
                              Learn More
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
          <div className="adHeaderTop"></div>
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
                    >
                      <p className="cardIndexText">04/04</p>
                      <Image
                        src="./images/chep1/divider.png"
                        fluid
                        style={{ height: "5px", padding: 0 }}
                      ></Image>
                    </Row>

                    <Row style={{}}>
                      <p className="cardTitleText" style={{ lineHeight: 1 }}>
                        WHEN LES BLEUSHAD TO <br /> WEAR GREEN AND WHITE{" "}
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
                        fluid
                      />
                    </Row>
                  </Row>
                </Card.Title>
                <Row>
                  <Col lg={6} style={{ width: "460px", height: "300px" }}>
                    <Card.Img
                      src="./images/chep2/chepTwoFour.png"
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
                      <p className="image-note">IMAGE:</p>
                    </Row>
                    <Row
                      style={{
                        width: 204,
                      }}
                    >
                      <p className="imgDesc" style={{ letterSpacing: 1.5 }}>
                        French midfielder Michel Platini wearing an Atletico
                        Kimberley club jersey at the 1978 World Cup football
                        match between France and Hungary, on June 10, 1978, in
                        Mar del Plata.
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
                          <p className="cardDesc">
                            In the first group stage (Group A), Argentina was
                            placed with Italy, France and Hungary. La
                            Albiceleste, the host nation, got off to a sluggish
                            start with a close 2–1 victory over Hungary in their
                            opening game. Argentines had a more attacking (2–1)
                            victory over the French, but with a dubious awarded
                            penalty for hand ball. They were up against the
                            solid Italian team and lost that game convincingly
                            1–0 to the Azurri.{" "}
                          </p>
                        </Row>
                        <Row
                          style={{ width: 450, paddingRight: 0, marginTop: 25 }}
                        >
                          <p className="cardDesc">
                            Italy won the group comprehensively. Argentina, with
                            the tension in the country, came in a lackluster
                            second. Both teams automatically qualified for the
                            second group stage.
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
                              fontSize: 12,
                              float: "left",
                              paddingLeft: 5,
                              paddingTop: 10,
                              color: "white",
                            }}
                          >
                            Learn More About
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
        </div>
        <div className="footer">
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
                  textAlign: "right",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/chepThree");
                }}
              >
                CHAPTER THREE: SCORE FOUR OR ELSE
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
                    navigate("/chepThree");
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
              width: 37,
              height: 848,
              position: "absolute",
              top: 1074,
              right: 0,
            }}
          />
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 37,
              height: 902,
              position: "absolute",
              top: 2570,
              right: 0,
            }}
          />
        </div>
        <div className="stripeOne">
          <Image
            src="./images/vertical_stripe.png"
            style={{
              width: 37,
              height: 784,
              position: "absolute",
              top: 3870,
              right: 0,
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwoCard;
