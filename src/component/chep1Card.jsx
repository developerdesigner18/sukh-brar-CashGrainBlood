import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import handleViewport from "react-in-viewport";
import { Swiper, SwiperSlide } from "swiper/react";
import FsLightbox from "fslightbox-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Image,
  Carousel,
} from "react-bootstrap";
import "./chep1Card.css";
import { useNavigate } from "react-router-dom";
const ChepOneCard = () => {
  const navigate = useNavigate();
  const [toggler, setToggler] = useState(false);
  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="container">
        <Container>
          <Card
            style={{
              width: "100%",
              backgroundColor: "black",
              paddingBottom: 25,
            }}
          >
            <Card.Body>
              <Card.Title>
                <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 18,
                      width: 60,
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    01/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                    ></Image>
                  </Row>

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                      // className: "animationText",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    ARGENTINA YOU GET
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,

                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    TO HOST A WORLD CUP!
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
                    src="./images/chep1/chepOneCardOne.png"
                    style={{ width: "100%", paddingLeft: 0 }}
                  />
                </Col>
                <Col
                  lg={6}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <Row style={{ paddingBottom: 15 }}></Row>
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
                    NOTE:
                  </Row>
                  <Row
                    style={{
                      // textAlign: "left",

                      color: "#20C5F7",
                      float: "left",
                      fontSize: 12,
                      letterSpacing: "1px",
                      paddingLeft: 10,
                      width: 288,
                      fontFamily: "HelveticaNeue-CondensedBold",
                    }}
                  >
                    Argentina was officially chosen as the host nation by FIFA
                    on July 6, 1966 in London, England. Mexico withdrew from the
                    bidding process after having been awarded the 1970
                    competition two years earlier.
                  </Row>
                </Col>
              </Row>
              <Card.Text>
                <Row>
                  <Col lg={5} sm={12} md={8}>
                    <Row
                      style={{
                        color: "white",
                        float: "left",
                        fontSize: 14,
                        paddingLeft: 10,
                        fontFamily: "HelveticaNeue-Bold",

                        paddingLeft: 10,
                      }}
                    >
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        In 1964, at FIFA???s Tokyo congress, Argentina was awarded
                        the hosting rights to the 1978 World Cup. To host the
                        football tournament was the highest honor in all of
                        sports.
                      </Row>

                      <Row
                        style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
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
                          }}
                        >
                          LEARN MORE
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col lg={7} sm={12} md={4}></Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* //---------------------------------------second Card --------------------------------------------- */}

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
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 18,
                      width: 56,
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    02/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    ></Image>
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The National
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Reorganization Process
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
                    src="./images/chep1/chepOneCardTwo.png"
                    style={{ width: "100%", paddingLeft: 0 }}
                  />
                </Col>
                <Col lg={6}>
                  <Row style={{ paddingBottom: 15 }}></Row>
                  <Row style={{ width: 29.69, height: 19.1 }}>
                    <Image
                      src="./images/imgArrow.svg"
                      style={{
                        width: "100%",
                        paddingLeft: 10,
                        paddingRight: 0,
                      }}
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
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    IMAGE:
                  </Row>

                  <Row
                    style={{
                      // textAlign: "left",
                      color: "#20C5F7",
                      float: "left",
                      fontSize: 12,
                      letterSpacing: "1px",
                      paddingLeft: 10,
                      width: "288px",
                      marginBottom: "20px",
                      fontFamily: "HelveticaNeue-CondensedBold",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Men and women seen as hostile to the regime were
                    ???disappearing???. Citizens were taken from their place of work
                    and homes, in broad daylight, in front of colleagues and
                    loved ones.
                  </Row>
                  <Row
                    style={{
                      // textAlign: "left",
                      color: "#20C5F7",
                      float: "left",
                      fontSize: 12,
                      letterSpacing: "1px",
                      paddingLeft: 10,
                      width: "288px",
                      marginBottom: "20px",
                      fontFamily: "HelveticaNeue-CondensedBold",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Some were placed in large venues such as sports stadiums,
                    where they were held until the Junta decided their fate
                  </Row>
                </Col>
              </Row>
              <Card.Text>
                <Row>
                  <Col lg={5} sm={12} md={8}>
                    <Row
                      style={{
                        color: "white",
                        float: "left",
                        fontSize: 14,
                        paddingLeft: 10,
                        fontFamily: "HelveticaNeue-Bold",
                        // letterSpacing: "0.5px",
                        paddingLeft: 10,
                      }}
                    >
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Controversy followed the 1978 World Cup when, in March
                        1976, a military junta overthrew the government of
                        Isabel Peron. The Junta established a ???National
                        Re-organization Process???, a rule of eliminating the
                        ???decadence??? of Peronism, supported by many of the
                        Argentine people.
                      </Row>

                      <Row style={{ paddingLeft: 0, marginTop: 15 }}>
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://en.wikipedia.org/wiki/1976_Argentine_coup_d%27%C3%A9tat"
                            target="_blank"
                            role="button"
                          >
                            <Image
                              src="./images/btnImage.png"
                              style={{
                                paddingLeft: 0,
                                width: "100%",
                                paddingTop: "10px",
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
                          }}
                        >
                          <a
                            href="https://en.wikipedia.org/wiki/1976_Argentine_coup_d%27%C3%A9tat"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More About <br />
                            1976 Argentine coup d?????tat
                          </a>
                        </Col>
                      </Row>
                      <Row
                        style={{ paddingLeft: 0, marginTop: 15, width: 550 }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            href="https://en.wikipedia.org/wiki/National_Reorganization_Process"
                            target="_blank"
                            role="button"
                          >
                            <Image
                              src="./images/btnImage.png"
                              style={{
                                paddingLeft: 0,
                                width: "100%",
                                paddingTop: "10px",
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
                          }}
                        >
                          <a
                            href="https://en.wikipedia.org/wiki/National_Reorganization_Process"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More About <br />
                            The National Reorganization Process
                          </a>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col lg={7} sm={12} md={4}></Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* ----------------------------------------card-three---------------------------- */}

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
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 18,
                      width: 56,

                      paddingRight: 0,
                      marginBottom: 15,
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

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    THE MILITARY
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    JUNTA LEADERS
                  </Row>
                  <Row style={{ width: 332, height: 15 }}>
                    <Image
                      src="./images/verticalDivider.png"
                      style={{ paddingLeft: "5px", width: "100%" }}
                      fluid
                    />
                  </Row>
                </Row>
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
                        src="./images/chep1/cardThreeOne.png"
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
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: 10,
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "5px",
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Jorge Rafael Videla
                      </p>
                      <p
                        style={{
                          textAlign: "left",
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "#20C5F7",
                          fontSize: "14px",
                          lineHeight: 1.3,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        (August 2, 1925???May 17, 2013) was a General Commander of
                        the Army, member of the military junta, and dictator of
                        Argentina from 1976 to 1981. <br /> On December 22,
                        2010, Videla was sentenced to life in a civilian prison
                        for the deaths of 31 prisoners following his coup.
                      </p>
                    </Row>
                    <Row
                      style={{
                        paddingLeft: 0,
                        marginTop: 5,
                      }}
                    >
                      <Col
                        lg={4}
                        style={{
                          width: 50,
                          paddingLeft: 0,
                          textAlign: "right",
                        }}
                      >
                        <a
                          role="button"
                          href="https://en.wikipedia.org/wiki/Jorge_Rafael_Videla"
                          target="_blank"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/Jorge_Rafael_Videla"
                          target="_blank"
                          role="button"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Learn More About Jorge Rafael Videla
                        </a>
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep1/cardThreeTwo.png"
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
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: 10,
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "5px",
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Emilio Eduardo Massera.
                      </p>
                      <p
                        style={{
                          textAlign: "left",
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "#20C5F7",
                          fontSize: "14px",
                          lineHeight: 1.3,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        (October 19, 1925???November 8, 2010) was a General
                        Commander of the Army, member of the military junta, and
                        dictator of Argentina from 1976 to 1981. <br /> On
                        December 22, 2010, Videla was sentenced to life in a
                        civilian prison for the deaths of 31 prisoners following
                        his coup.
                      </p>
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                      {" "}
                      <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                        <a
                          role="button"
                          href="https://en.wikipedia.org/wiki/Emilio_Eduardo_Massera"
                          target="_blank"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/Emilio_Eduardo_Massera"
                          target="_blank"
                          role="button"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Learn More About Emilio Eduardo Massera
                        </a>
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide style={{ padding: 5 }}>
                    <Row>
                      <Image
                        fluid
                        src="./images/chep1/chapterThreeThree.png"
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
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: 2,
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "5px",
                          textTransform: "uppercase",
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Orlando Ram??n Agosti
                      </p>
                      <p
                        style={{
                          textAlign: "left",
                          fontFamily: "HelveticaNeue-CondensedBold",
                          color: "#20C5F7",
                          fontSize: "14px",
                          marginBottom: 0,
                          lineHeight: 1.3,
                          width: 435,
                          height: 108,
                        }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        (August 22, 1924???October 6, 1997) was an Argentine
                        general, and Commander-in-Chief of the Argentine Air
                        Force from 1976 to 1979. With General Jorge Rafael
                        Videla, he ruled Argentina as part of the military junta
                        between 1976 and 1981.
                      </p>
                    </Row>

                    <Row style={{ marginTop: 4 }}>
                      {" "}
                      <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                        <a
                          role="button"
                          href="https://en.wikipedia.org/wiki/Orlando_Ram%C3%B3n_Agosti"
                          target="_blank"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/Orlando_Ram%C3%B3n_Agosti"
                          target="_blank"
                          role="button"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Learn More About Orlando Ram??n Agosti
                        </a>
                      </Col>
                    </Row>
                  </SwiperSlide>
                  {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>{" "}
                {/* swiper end */}
              </Card.Title>
            </Card.Body>
          </Card>

          {/* -------------------------------------card-Four------------------------------- */}
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
                      color: "white",
                      fontFamily: "StardosBold",
                      fontSize: 18,
                      width: 56,
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    04/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    ></Image>
                  </Row>

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "StardosBold",
                      textTransform: "upperCase",
                      fontSize: 40,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Operation Condor,
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      textTransform: "upperCase",
                      fontFamily: "StardosBold",
                      fontSize: 40,
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The Dirty War
                  </Row>
                  <Row style={{ width: 332, height: 15, marginLeft: 10 }}>
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
                    src="./images/chep1/chepOneCardFour.png"
                    style={{ width: "100%", paddingLeft: 0 }}
                  />
                </Col>
                <Col lg={6}>
                  <Row style={{ paddingBottom: 15 }}></Row>
                  <Row style={{ width: 29.69, height: 19.1 }}>
                    <Image
                      src="./images/imgArrow.svg"
                      style={{
                        width: "100%",
                        paddingLeft: 10,
                        paddingRight: 0,
                      }}
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
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    IMAGE:
                  </Row>

                  <Row
                    style={{
                      // textAlign: "left",
                      color: "#20C5F7",
                      float: "left",
                      fontSize: 12,
                      letterSpacing: "1px",
                      paddingLeft: 10,
                      width: "100%",
                      marginBottom: "20px",
                      width: "203px",
                      fontFamily: "HelveticaNeue-CondensedBold",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Collections of photos from families whose children and
                    grandchildren had disappeared. Human rights organizations
                    estimate that over 30,000 people were disappeared.
                  </Row>
                </Col>
              </Row>
              <Card.Text>
                <Row>
                  <Col lg={5} sm={12} md={8}>
                    <Row
                      style={{
                        color: "white",
                        float: "left",
                        fontSize: 14,
                        paddingLeft: 10,
                        fontFamily: "HelveticaNeue-Bold",
                        // letterSpacing: "0.5px",
                        paddingLeft: 10,
                      }}
                    >
                      <Row
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        The Junta declared a so-called ???Dirty War??? against this
                        enemy from within. The full extent of the atrocities
                        committed between 1976 and 1983 is not certain.
                      </Row>
                      <Row
                        style={{ paddingTop: 15 }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        The figure generally quoted, however, is that an
                        estimated 30,000 people were ???disappeared,??? with many
                        others illegally imprisoned or going into exile.
                      </Row>

                      <Row
                        style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a
                            role="button"
                            href="https://www.history.com/news/mothers-plaza-de-mayo-disappeared-children-dirty-war-argentina"
                            target="_blank"
                          >
                            <Image
                              src="./images/btnImage.png"
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
                          }}
                        >
                          <a
                            href="https://www.history.com/news/mothers-plaza-de-mayo-disappeared-children-dirty-war-argentina"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn About The Dirty War
                          </a>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col lg={7} sm={12} md={4}></Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* //-------------------------------------------------Add-Container-----------------------
           */}
        </Container>
      </div>
      <div className="chepOneAdHeader">
        <Container>
          <p style={{ paddingLeft: 10, marginBottom: 3 }}>
            <Image
              src="./images/chep1/amazon.png"
              fluid
              style={{ marginRight: 5, paddingTop: 15 }}
            />{" "}
            BOOK RECOMMENDATIONS
          </p>
        </Container>
      </div>
      <div className="bookContainer">
        <div style={{ textAlign: "center" }}>
          <Row style={{ margin: "auto 0px" }}>
            <Col lg={4} style={{ padding: 35 }}>
              <Row>
                <Col style={{ width: "100%", padding: "0px" }}>
                  <Image src="./images/chep1/Book1.jpg" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 16,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Argentina Betrayed <br /> Memory, Mourning, <br /> and
                    Accountability <br /> ANTONIUS C. G. M. ROBBEN
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
                          <a
                            role="button"
                            href="https://www.amazon.com/s?k=Argentina+Betrayed+Memory%2C+Mourning%2C+and+Accountability+Antonius+C.+G.+M.+Robben&ref=nb_sb_noss"
                            target="_blank"
                          >
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
                          <a
                            href="https://www.amazon.com/s?k=Argentina+Betrayed+Memory%2C+Mourning%2C+and+Accountability+Antonius+C.+G.+M.+Robben&ref=nb_sb_noss"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More
                          </a>
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
                  <Image src="./images/chep1/Book2.jpg" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 16,
                      paddingTop: "20px",
                      width: 231,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The Ideological Origins
                    <br /> Of The Dirty War
                    <br />
                    By FEDERICO FINCHELSTEIN
                  </Row>
                  <Row data-aos-anchor-placement="bottom-bottom">
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
                          <a
                            href="https://www.amazon.com/s?k=The+Ideological+Origins+Of+The+Dirty+War+By+Federico+Finchelstein&ref=nb_sb_noss"
                            target="_blank"
                            role="button"
                          >
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
                          <a
                            href="https://www.amazon.com/s?k=The+Ideological+Origins+Of+The+Dirty+War+By+Federico+Finchelstein&ref=nb_sb_noss"
                            target="_blank"
                            role="button"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Learn More
                          </a>
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
                  <Image src="./images/chep1/Book3.jpg" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 16,
                      paddingTop: "20px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The Ideological Origins
                    <br />
                    Of The Dirty War
                    <br /> BY DAVID COX
                  </Row>
                  <Row>
                    <a
                      role={"button"}
                      href="https://www.amazon.com/s?k=Dirty+Secrets%2CDirty+War+By+David+Cox&ref=nb_sb_noss"
                      target="_blank"
                      style={{ marginTop: 10 }}
                    >
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
      {/* ------------------------card-5------------------------------------------------ */}
      <Container>
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
              <Row style={{ paddingLeft: 10 }}>
                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 18,
                    width: 56,
                    paddingRight: 0,
                    marginBottom: 15,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  05/06
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0 }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  ></Image>
                </Row>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 40,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  CALLS FOR
                </Row>
                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 40,
                    lineHeight: 0.8,
                    paddingBottom: 15,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  A BOYCOTT
                </Row>
                <Row style={{ width: 332, height: 15, marginBottom: 36 }}>
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
                  src="./images/chep1/chepOneCardFive.png"
                  style={{ width: "100%", paddingLeft: 0 }}
                />
              </Col>
              <Col lg={6}>
                <Row style={{ paddingBottom: 15 }}></Row>
                <Row style={{ width: 29.69, height: 19.1 }}>
                  <Image
                    src="./images/imgArrow.svg"
                    style={{
                      width: "100%",
                      paddingLeft: 10,
                      paddingRight: 0,
                    }}
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
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  IMAGE:
                </Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 12,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "258px",
                    marginBottom: "20px",
                    fontFamily: "HelveticaNeue-CondensedBold",
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Flyers papered on walls around Paris took the official logo of
                  the World Cup, a pair of stylized upraised arms framing a
                  soccer ball, and added grim-looking barbed wire.
                </Row>
              </Col>
            </Row>
            <Card.Text>
              <Row>
                <Col lg={5} sm={12} md={8}>
                  <Row
                    style={{
                      color: "white",
                      float: "left",
                      fontSize: 14,
                      paddingLeft: 10,
                      fontFamily: "HelveticaNeue-Bold",

                      paddingLeft: 10,
                    }}
                  >
                    <Row
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      In late 1977, a group of French journalists and
                      intellectuals formed the Organizing Committee for the
                      Boycott of the Argentina World Cup, known for its French
                      acronym, COBA.
                    </Row>
                    <Row
                      style={{ paddingTop: 15 }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      They planned an organized campaign designed to persuade
                      the French national team, led by the curly-haired goal
                      scorer Michel Platini, to skip the tournament altogether.
                    </Row>
                  </Row>
                </Col>
                <Col lg={7} sm={12} md={4}></Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* -----------------------------------card-6------------------------------------- */}
      <div className="card6" onClick={() => setToggler(!toggler)}>
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/watch?v=UMTzJXrmwmA"]}
        />
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
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                06/06
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
              >
                <a role="button">
                  <Image src="./images/chep1/youtube.svg" alt="" />
                </a>
              </Col>

              <Row
                style={{
                  color: "white",
                  fontFamily: "StardosBold",
                  fontSize: 40,
                  lineHeight: 0.9,
                  paddingBottom: 5,
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                MOTHERS <br />
                OF THE <br />
                PLAZA DE MAYO
              </Row>
              <Row style={{ width: 332, height: 15 }}>
                <Image
                  src="./images/verticalDivider.png"
                  style={{ paddingLeft: "3px", width: "100%" }}
                  fluid
                />
              </Row>
            </Row>
          </div>
          <div className="cardBody">
            <Row style={{ padding: 50, textAlign: "center" }}>
              <a role="button">
                <Image src="./images/chep1/YoutubeCard.svg" alt="" />
              </a>
            </Row>
          </div>
          <div className="cardFooter">
            <Row style={{ textAlign: "center" }}>
              <Col lg={4}>
                {" "}
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
                <Row>
                  <p
                    style={{
                      textAlign: "left",
                      marginTop: 10,
                      fontFamily: "HelveticaNeue-CondensedBold",
                      color: "white",
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    IMAGE:
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-CondensedBold",
                      color: "#20C5F7",
                      fontSize: "12px",
                      width: 188,
                      height: 289,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Buenos Aires, Argentina: ???Madres de Plaza de Mayo??? remain
                    upright on the flooding square in front of the Presidential
                    Palace, claiming their missing sons and daughters, circa
                    1982 in Buenos Aires.
                  </p>
                </Row>
              </Col>

              <Col lg={8}>
                {" "}
                <Row style={{ width: 492, padding: 20 }}>
                  <p
                    style={{
                      textAlign: "left",
                      marginTop: 10,
                      fontFamily: "HelveticaNeue-Bold",
                      color: "white",

                      fontSize: 12,
                      marginBottom: "10px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    On April 30, 1977, Azucena Villaflor de De Vincenti and a
                    dozen other mothers walked to the Plaza de Mayo in
                    Argentina???s capital city. These women shared the experience
                    of each having had at least one child who had been taken by
                    the military government.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-Bold",
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "12px",
                      marginBottom: "10px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    At great risk to themselves, the mothers made the simple
                    protest of walking to the Plaza De Mayo with pictures of
                    their missing adult children.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-Bold",
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "12px",
                      marginBottom: "10px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    The mothers created a simple visual sign of their solidarity
                    by each wearing a headscarf with the name of their
                    ???disappeared??? loved one.
                  </p>
                  <Row style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}>
                    <Col
                      lg={3}
                      style={{ width: 60, textAlign: "right", marginLeft: 10 }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=UMTzJXrmwmA"
                        target="_blank"
                        role="button"
                      >
                        <Image
                          src="./images/btnImage.png"
                          style={{
                            padding: 0,
                            width: "100%",
                          }}
                          fluid
                        />
                      </a>
                    </Col>
                    <Col
                      lg={9}
                      style={{
                        fontFamily: "HelveticaNeue-Bold",
                        fontSize: 14,
                        textAlign: "left",
                        paddingLeft: 0,
                        // paddingTop: 5,
                        color: "white",
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=UMTzJXrmwmA"
                        target="_blank"
                        role="button"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Learn More About The
                        <br />
                        Mothers Of The Plaza De Mayo
                      </a>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* //------------------------FOOTER OF THE PAGE------------------------- */}
      <div className="chepFooter">
        <Row style={{ marginRight: 0 }}>
          <Col
            lg={10}
            style={{
              textAlign: "right",
              padding: 12,
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
                navigate("/chepTwo");
              }}
            >
              CHAPTER TWO: MATTERS ON THE PITCH
            </h3>{" "}
          </Col>
          <Col lg={2} style={{ textAlign: "left", padding: "6px 6px 6px 0px" }}>
            <a role="button">
              <Image
                src="./images/chep1/forwardArrow.svg"
                alt=""
                onClick={() => {
                  navigate("/chepTwo");
                }}
              />
            </a>
          </Col>
        </Row>
      </div>
      {/*----------------------------------- stripe---------------------------------------------- */}
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "600px",
          position: "absolute",
          top: 347,
          right: 0,
        }}
      />
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "600px",
          position: "absolute",
          top: 2145,
          right: 0,
        }}
      />
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "600px",
          position: "absolute",
          top: 3342,
          right: 0,
        }}
      />
    </div>
  );
};

export default ChepOneCard;
