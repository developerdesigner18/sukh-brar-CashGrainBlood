import React, { useState } from "react";
import { Row, Col, Image, Button, Container, Card } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./chep3Mobcard.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FsLightbox from "fslightbox-react";
import { useNavigate } from "react-router-dom";
const ChepThreeMobCard = ({ opcity }) => {
  const navigate = useNavigate();
  const [toggler, setToggler] = useState(false);

  return (
    <React.Fragment>
      <div className={`${opcity && `opcity`}`}>
        <div className="chepThreeMobcardHolder">
          <Container style={{ marginLeft: 36, paddingLeft: 0, width: 300 }}>
            {/* --------------------------------cardOne-------------------------------- */}
            <div className="cardOneChepThree" data-aos="fade-in">
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
                  <p className="chepThreeCardOneIndex">01/01</p>

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

              <div
                className="chepThreeCardOne"
                style={{
                  marginRight: 2,
                  padding: "5px 5px 5px 0px",
                  marginLeft: 0,
                  marginTop: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "StardosBold",
                    fontSize: 13,
                    padding: 0,
                    marginTop: 15.9,
                    marginLeft: 0,
                    marginBottom: 0,
                    color: "white",
                  }}
                  data-aos="fade-up"
                >
                  GROUP B TEAMS
                </p>
                <Row style={{ padding: 0 }}>
                  <Image
                    src="./images/forwardArrowBlack.svg"
                    style={{
                      width: 20,
                      marginLeft: 0,
                      padding: 0,
                      marginTop: 180,
                    }}
                    data-aos="fade-up"
                  />{" "}
                </Row>
                <Row>
                  <Row style={{ padding: 0, width: 146 }}>
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
                    <p
                      className="chepThreeCardOneImgDesc"
                      style={{ lineHeight: "12px" }}
                      data-aos="fade-up"
                    >
                      Mario Kempes <br /> Argentine Striker
                    </p>{" "}
                    <p
                      className="chepThreeCardOneImgDesc"
                      style={{ color: "white", lineHeight: "20px" }}
                      data-aos="fade-up"
                    >
                      {" "}
                      SOURCE: GETTY IMAGES
                    </p>
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
                      marginBottom: 5,
                    }}
                    data-aos="fade-up"
                  >
                    <p className="chepThreeCardOneTitle">
                      GROUP B STAGE <br />
                      “SEMI-FINALS”
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
                    style={{
                      padding: 0,
                      marginTop: 10,
                      width: 295.33,
                      height: 228,
                    }}
                  >
                    <p className="chepThreeCardOneDescText" data-aos="fade-up">
                      In the ʼ78 World Cup, there was a second group stage where
                      the winner of the group would go on to the World Cup
                      Final. Argentina staggered into the group and their main
                      rival was Brazil, with Peru and Poland being the other
                      teams.{" "}
                    </p>{" "}
                    <p
                      className="chepThreeCardOneDescText"
                      style={{ marginTop: 10 }}
                      data-aos="fade-up"
                    >
                      The two teams had already played out a goalless draw. Was
                      it just a happy accident that the hosts knew exactly what
                      they needed to do following Brazil’s 3–1 win against
                      Poland? With a 4–0 win against Peru, they were in the
                      final.
                    </p>
                  </Row>
                  <Row style={{ paddingLeft: 0 }} data-aos="fade-up">
                    <Col sm={1} xs={1} style={{ padding: 0, marginRight: 5 }}>
                      <a role="button">
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
                        paddingLeft: 0,
                        marginLeft: 0,
                        color: "white",
                        textAlign: "left",
                        marginTop: 8,
                        fontFamily: "HelveticaNeue-Bold",
                        fontSize: 12,

                        paddingRight: 0,
                      }}
                    >
                      1978 FIFA World Cup Group B
                    </Col>
                  </Row>
                </Row>
              </div>
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
                        marginBottom: 0,
                        paddingLeft: 48,
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
                data-aos="fade-up"
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
                          src="./images/chep3/swiper01.png"
                          style={{
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
                          ARGENTINA 2 - POLND 0
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
                          Argentina dominated the game through ball possession.
                          Mario Kempes scored early, in the sixteenth minute.
                          Argentina gained confidence and went on to seek a
                          second goal and Kempes scored again in the
                          seventy-second minute. You couldn’t ask for a better
                          start for the host country.
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
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 9,
                                width: 31.21,
                                height: 31.21,
                                marginLeft: 18,
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
                            paddingTop: 17,
                            paddingLeft: 0,
                            paddingRight: 0,
                          }}
                        >
                          Watch Argentina v. Poland
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
                          src="./images/chep3/swiper02.png"
                          style={{
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
                          ARGENTINA 0 - BRAZIL 0
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
                          In a tight but ultimately a lackluster game the two
                          South American giants had few opportunities on goal
                          but had plenty of fouls and yellow (five) cards. Both
                          teams knew that whoever would win the game would go to
                          the finals. That would be decided by their next games.
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
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 9,
                                width: 31.21,
                                height: 31.21,
                                marginLeft: 18,
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
                            paddingTop: 17,
                            paddingLeft: 0,
                            paddingRight: 0,
                          }}
                        >
                          Watch Argentina v. Poland
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
                          src="./images/chep3/swiper03.png"
                          style={{
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
                          ARGENTINA - PERU
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
                          Brazil beat Peru by three goal to nil. Argentina knew
                          they had to beat the Peruvians by four goals to go
                          through to the final. Argentina’s form up to that
                          point had been lackluster and defensive; they would
                          have to change the very nature of their style of
                          football.
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
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{
                                // paddingLeft: 0,
                                marginTop: 9,
                                width: 31.21,
                                height: 31.21,
                                marginLeft: 18,
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
                            paddingTop: 17,
                            paddingLeft: 0,
                            paddingRight: 0,
                          }}
                        >
                          Watch Argentina v. Poland
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
        <div
          className="cardThreeChepThree"
          data-aos="fade-in"
          onClick={() => setToggler(!toggler)}
        >
          <FsLightbox
            toggler={toggler}
            sources={["https://www.youtube.com/watch?v=qIoGqzFQ5-E"]}
          />
          <Image
            src="./images/chep3/dividerVertical.png"
            style={{
              width: "100%",
              position: "absolute",
              bottom: 554,
              height: 15,
              margin: 0,
              left: 0,
            }}
            data-aos="fade-up"
          />
          <Container style={{ padding: 0 }}>
            <Row
              style={{
                width: 56,
                padding: 0,
                margin: 0,
                marginTop: 16.2,
                marginLeft: 36,
              }}
              data-aos="fade-up"
            >
              <p className="chepThreeCardOneIndex" style={{ marginTop: 10 }}>
                01/03
              </p>
              <Image
                src="./images/chep1/divider.png"
                fluid
                style={{
                  height: "5px",
                  width: 46,
                  padding: 0,
                  marginLeft: 0,
                }}
              ></Image>
            </Row>
          </Container>
          <div className="textLogoHolder">
            {/* <Row style={{ padding: 0, margin: 0 }}>
              <Col style={{ padding: 0 }}>
                <Image
                  className="cardThreeImageo1"
                  src="./images/chep3/cardThreeLogo01.png"
                  fluid
                />
              </Col>
              <Col style={{ padding: 0 }}>
                <Image
                  className="cardThreeImageo2"
                  src="./images/chep3/cardThreeLogo02.png"
                  style={{ padding: 0 }}
                  fluid
                />
              </Col>
            </Row> */}
            <p className="logoName1" data-aos="fade-up">
              ARGENTINA <br /> v. PERU
            </p>
            {/* <Image
            className="cardThreeyoutbe"
            src="./images/chep1/YoutubeCard.svg"
            style={{ padding: 0 }}
            fluid
          /> */}
            {/* <Image
              className="cardThreeyoutbeName"
              src="./images/chep1/youtube.svg"
              style={{ padding: 0 }}
              fluid
            /> */}
            <Image
              src="./images/chep3/dividerVertical.png"
              style={{
                width: "100%",
                height: 15,
                position: "absolute",
                top: 554,
                margin: 0,
                left: 0,
              }}
              data-aos="fade-up"
            />
          </div>
        </div>

        {/* ------------------------------------ad------------------------------- */}
        <div className="chepThreeAdHeader1" style={{ marginTop: 13 }}>
          <Container
            style={{
              marginLeft: 26,
              paddingLeft: 0,
              paddingRight: 0,
              width: "auto",
            }}
          >
            <p>78 WC: GROUP B NATIONAL KITS</p>
          </Container>
        </div>
        <div className="chepThreeAdContainer" data-aos="fade-in">
          {/* ------------------tshirt-One----------------------- */}
          <div className="row" style={{ margin: 0, padding: 36 }}>
            <div
              sm={4}
              xs={4}
              className="col"
              style={{ textAlign: "center", paddingLeft: 0 }}
            >
              <Image src="./images/chep3/tshirtOne.png" data-aos="fade-in" />
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepThreeadDesc">
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
            >
              <Image
                src="./images/chep3/brazil_home_jersey.png"
                data-aos="fade-in"
              />
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepThreeadDesc">
                  MEN’S Brazil <br /> Home JERSEY <br /> Canary Yellow
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a href="www.google.com" target="_blank">
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
            >
              <Image src="./images/chep3/tshirtThree.png" data-aos="fade-in" />
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepThreeadDesc">
                  Peru National <br /> Home JERSEY <br /> White/Red Stripe
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a
                  href="https://www.soccer.com/shop/details/men-s-replica-marathon-peru-home-jersey-2021_A1058458"
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
          {/* ----------------------------thisrt-4-------------------- */}
          <div className="row" style={{ margin: 0, padding: 36 }}>
            <div
              sm={4}
              xs={4}
              className="col"
              style={{ textAlign: "center", paddingLeft: 0 }}
            >
              <Image
                src="./images/chep3/poland_jersey.png"
                data-aos="fade-in"
              />
            </div>
            <div sm={8} xs={8} className="col" style={{ textAlign: "left" }}>
              <div className="row" style={{ marginLeft: 0 }} data-aos="fade-up">
                <p className="chepThreeadDesc">
                  Poland National
                  <br /> Home JERSEY <br /> Ruby Red
                </p>
              </div>
              <div
                className="row"
                style={{ marginTop: 16.6 }}
                data-aos="fade-up"
              >
                <a href="www.google.com" target="_blank">
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
          <div
            className="chepTwoAdHeader2"
            style={{ padding: "10px" }}
            data-aos="fade-up"
          ></div>
        </div>
        {/* ----------------------------lastCard---------------------------- */}
        <div className="chep3LastCard" data-aos="fade-in">
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
                className="chepThreeCardLastIndex"
                style={{
                  margin: "40px 36px 0px 36px",
                }}
              >
                01/04
              </p>
              <Image
                src="./images/chep1/divider.png"
                fluid
                style={{
                  height: "5px",
                  width: 38,
                  padding: 0,
                  marginLeft: 36,
                  marginBottom: 10,
                }}
              ></Image>
            </Row>
          </Container>

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
              <p className="chepThreeLastTitle" data-aos="fade-up">
                THE HOSTS <br /> REACH THE <br /> FINAL AND THE <br /> RUMORS
                BEGIN
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
          <div className="chepThreeLastCardDesc">
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                height: 17.41,
                padding: 0,
                marginTop: 15,
                marginLeft: 0,
              }}
              data-aos="fade-up"
            />

            <div className="chepThreeLastCardText" style={{ width: "auto" }}>
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
              <p className="chep3lastCardFirst" data-aos="fade-up">
                The Argentina national team at the Estadio Monumental stadium on
                June 25, 1978. The Argentines kept the Dutch waiting for over 20
                minutes before coming onto the pitch.
              </p>
              <div className="chep3lastCardSecond" data-aos="fade-up">
                <p style={{ marginBottom: 15 }}>
                  The Argentines meet the Dutch, runners up of the 1974 World
                  Cup. Rumors had already swirled about the legitimacy of the
                  Argentine qualification game with Peru.
                  <br />
                </p>
                <p style={{ marginBottom: 15 }} data-aos="fade-up">
                  The rumors were so rampant that many Dutch players felt that
                  they should boycott the final. Cooler heads prevailed, and the
                  final went ahead.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <Image
            src="./images/chep3/vertical_stripe.png"
            fluid
            style={{
              position: "absolute",
              top: 96.5,
              right: 0,
              height: 602,
              width: 12,
            }}
            data-aos="fade-up"
          />
          <Image
            src="./images/chep3/vertical_stripe.png"
            fluid
            style={{
              position: "absolute",
              top: 362.4,
              left: 0,
              height: 403,
              width: 11.5,
            }}
            data-aos="fade-up"
          />
        </div>
        {/* --------------------------Fotter------------------------- */}
        <div className="chepThreeFooter" data-aos="fade-up">
          <a role="button">
            <Image
              src="./images/chep3/MobFooter.png"
              alt=""
              style={{ width: "100%" }}
              onClick={() => {
                navigate("/chepFour");
              }}
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepThreeMobCard;
