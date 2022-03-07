import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

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
import "./chep1MobView.css";
import { useNavigate } from "react-router-dom";
const ChepOneCardMobView = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
          <Col
            lg={8}
            sm={8}
            md={8}
            xs={8}
            style={{
              background: "#20C5F7",
              paddingLeft: 35,
              paddingTop: 7,
              height: 34,
              paddingBottom: 5,
              fontFamily: "StardosBold",

              fontSize: 16,
              color: "white",
            }}
          >
            1: FROM HOST TO JUNTA{" "}
          </Col>
          <Col
            lg={4}
            sm={4}
            md={4}
            xs={4}
            style={{ paddingRight: 0, paddingLeft: 0, textAlign: "right" }}
          >
            <Button
              style={{
                background: "#F78320",
                border: "2px solid #F78320",
                borderBottomLeftRadius: 9,
                fontFamily: "HelveticaNeue-CondensedBold",
                paddingLeft: 10,
                width: 124,
                fontSize: 14,
                paddingTop: 5,
                height: 34,
              }}
              onClick={() => {
                navigate("/dropDown");
              }}
            >
              CHAPTERS
              <Image src="./images/chep1/arrow.svg" style={{ marginLeft: 5 }} />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="chep1BannerContainer">
        <div className="bannerContainer">
          <div className="chep1BannerImage"></div>
          <div
            className="chep1BannerStripe"
            style={{ top: "278px", left: "0px" }}
          >
            <Image
              src="vertical_stripe.png"
              style={{ height: "413px", marginLeft: -9 }}
            />
          </div>
          <Container>
            <div
              className="chep1BannerText"
              style={{
                top: "490px",
                left: "36px",
                textAlign: "left",
                height: 200,
              }}
            >
              <h1
                style={{
                  fontFamily: "StardosBold",

                  fontSize: "12px",
                  textAlign: "center",
                  border: "1px solid #20B5F7",
                  background: "#20B5F7",

                  width: 76,
                  paddingTop: 2,
                  height: 17,
                }}
              >
                CHAPTER 1
              </h1>
              <small
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.1,
                  fontSize: "40px",
                  textAlign: "justify",
                }}
              >
                FROM HOST <br /> TO JUNTA <br></br>
              </small>

              <p
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                }}
              >
                Before a ball was kicked, domestic<br></br> politics, the
                repression of civilians and <br></br>
                the military junta’s ambitions cast a long <br></br> shadow over
                the 1978 World Cup.
              </p>
            </div>
          </Container>
        </div>
      </div>
      <Row
        className="chepOneCardOne"
        style={{ paddingLeft: 5, marginRight: 0 }}
      >
        <Row style={{ margin: "0px auto", marginTop: 40 }}>
          <Col xs={5} sm={5} style={{ textAlign: "right" }}>
            <Image
              src="./images/chep1/admiral.png"
              fluid
              width={"100%"}
              style={{ marginTop: -22 }}
            />
          </Col>
          <Col>
            <Row xs={6} sm={6}>
              <Image
                src="./images/imgArrow.svg"
                style={{
                  width: 20.75,
                  height: 13.14,
                  padding: 0,
                }}
                fluid
              />
            </Row>
            <Row>
              <p
                style={{
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: 12,
                  textAlign: "left",
                  padding: 0,
                  textTransform: "uppercase",
                  color: "white",
                  marginBottom: 0,
                }}
              >
                Emilio Eduardo Massera
              </p>
            </Row>
            <Row>
              <p
                style={{
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: 12,
                  color: "#20C5F7",
                  textAlign: "left",
                  padding: 0,
                  letterSpacing: 0,
                  width: 197,
                }}
              >
                (19 October 1925 – 8 November 2010) Argentine Naval military
                officer, and <br />a leading participant in the Argentine coup
                d’état of 1976.
              </p>
            </Row>
          </Col>
        </Row>
        <div style={{ paddingLeft: 0, marginRight: 0 }}>
          <h4
            style={{
              fontSize: 26,
              fontFamily: "StardosBold",
              width: 332,
              textAlign: "left",
              paddingLeft: 36,
              lineHeight: 1.5,
              color: "white",
            }}
          >
            “Holding the tournament will show the world that{" "}
            <span style={{ color: "#20C5F7" }}>
              Argentina is a trustworthy country
            </span>
            , capable of carrying out huge projects; and will help push back
            against the criticism that is raining on us from around the world”{" "}
            <br />
            <span
              style={{
                color: "#20C5F7",
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: "16px",
                textTransform: "uppercase",
              }}
            >
              - Admiral Emilio Massera
            </span>
          </h4>
        </div>
      </Row>
      <Row
        className="chepOneCardTwo"
        style={{
          marginRight: 2,
          padding: 5,
          marginLeft: 3,
          marginTop: 17,
        }}
      >
        <Row
          style={{
            color: "white",
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 15,
            width: 56,
            paddingRight: 0,
            marginBottom: 15,
            marginTop: 19.5,
          }}
        >
          <p style={{ marginBottom: 0, paddingLeft: 20 }}>01/06</p>
          <Image
            src="./images/chep1/divider.png"
            fluid
            style={{ height: "5px", padding: 0, marginLeft: 20 }}
          ></Image>
        </Row>
        <Row>
          <Image
            src="./images/forwardArrowBlack.svg"
            style={{ width: 28, marginLeft: 20, padding: 0, marginTop: 200 }}
          />{" "}
        </Row>
        <Row>
          <Row>
            <p
              style={{
                marginLeft: 20,
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
          <Row>
            <p
              style={{
                marginLeft: 20,
                padding: 0,
                color: "#20C5F7",
                marginTop: 3,
                marginBottom: 0,
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 12,
              }}
            >
              Joao Havelange, president of <br />
              FIFA and Hermann Neuberger,
              <br />
              president of German Federation <br />
            </p>{" "}
          </Row>
          <Row>
            <p
              style={{
                marginLeft: 20,
                padding: 0,
                color: "White",
                marginTop: 4,
                marginBottom: 0,
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 12,
              }}
            >
              SOURCE: GETTY IMAGES
            </p>
          </Row>
        </Row>
        <Row
          style={{
            marginTop: 15.4,
            marginLeft: 20,
            marginRight: 0,
            width: "85%",
          }}
        >
          <Row
            style={{
              color: "white",
              width: "85%",
              fontFamily: "StardosBold",
              fontSize: 20,

              paddingLeft: 0,
              lineHeight: 1,
              marginRight: 0,
            }}
          >
            ARGENTINA <br /> YOU GET TO HOST <br />A WORLD CUP!
          </Row>

          <Row style={{ width: 165.21, height: 9.21, paddingLeft: 0 }}>
            <Image
              src="./images/verticalDivider.png"
              style={{ paddingLeft: 0, width: "100%", paddingRight: 0 }}
              fluid
            />
          </Row>
          <Row style={{ padding: 0, marginTop: 16 }}>
            <p
              style={{
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 12,

                textAlign: "left",
                color: "white",
                marginBottom: 0,
                paddingLeft: 0,
                width: 295.33,
              }}
            >
              In 1964, at FIFA’s Tokyo congress, Argentina was awarded the
              hosting rights to the 1978 World Cup. To host the football
              tournament was the highest honor in all of sports.
            </p>
          </Row>
          <Row style={{ padding: 0, marginTop: 5 }}>
            <p
              style={{
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 12,
                textAlign: "left",
                color: "white",
                marginBottom: 0,
                paddingLeft: 0,
              }}
            >
              NOTE:
            </p>
            <p
              style={{
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 12,
                textAlign: "left",
                color: "#20C5F7",
                marginBottom: 15,
                paddingLeft: 0,
              }}
            >
              Argentina was officially chosen as the host nation by FIFA on 6
              July 1966 in London, England. Mexico withdrew from the bidding
              process after having been awarded the 1970 competition two years
              earlier.
            </p>
          </Row>
        </Row>
      </Row>
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "413px",
          paddingLeft: "10px",
          position: "absolute",
          top: 1684,
          right: 0,
        }}
      />
      {/* ----------------------------------------card-3----------------------------------------------- */}
      <div className="chep1part3Container">
        <div className="forPosition" style={{ position: "relative" }}>
          <div className="chep1part3Image"></div>
          <Container>
            <div
              className="chep1part3Text"
              style={{
                top: "100px",
                textAlign: "left",
                height: 200,
              }}
            >
              <Row
                style={{
                  color: "white",
                  fontFamily: "HelveticaNeue-Bold",

                  fontSize: 18,
                  width: 43,
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
                  }}
                >
                  02/06
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.1,
                  fontSize: "18px",
                  textAlign: "justify",
                  marginBottom: 0,
                  marginLeft: 25,
                }}
              >
                THE NATIONAL <br></br>REORGANIZATION<br></br> PROCESS
              </h6>
              <Image
                src="./horizontal_stripe.png"
                style={{
                  width: 171,
                  height: 10.14,
                  marginLeft: 25,
                  marginTop: -10,
                }}
              />
            </div>
          </Container>
        </div>
        {/* <div
            className="chep1part3Stripe"
            style={{ top: "55px", left: "-23px" }}
          >
          <Image src="vertical_stripe.png" style={{ height: "400px" }} />
          </div> */}
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <p
              style={{
                color: "white",
                paddingLeft: 30,

                paddingTop: 22.8,
                paddingBottom: 15,
                marginBottom: 0,
                fontSize: 12,
                fontFamily: "HelveticaNeue-Bold",

                textAlign: "left",
              }}
            >
              Controversy followed the 1978 World Cup when in March <br /> of
              1976 a military Junta overthrew the government of Isabel <br />{" "}
              Peron. The Junta established a “National Re-organization <br />
              Process”. A rule of eliminating the “decadence” of <br /> Peronism
              and supported by many of the Argentine people.
            </p>
          </div>
          <div>
            <div
              style={{
                textAlign: "left",
                paddingLeft: 30,
                paddingBottom: 5,
              }}
            >
              <Image src="./images/chep1/upArrow.svg" />
            </div>
            <p
              style={{
                color: "white",
                paddingLeft: 30,

                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",

                textAlign: "left",
                color: "#20C5F7",
              }}
            >
              Men and women seen as hostile to the <br />
              regime were “disappearing”. Citizens were <br /> taken from their
              place of work and homes,
              <br /> in broad daylight, in front of colleagues and <br />
              loved ones.{" "}
            </p>{" "}
            <p
              style={{
                color: "white",
                paddingLeft: 30,

                paddingBottom: 30,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",

                textAlign: "left",
                color: "#20C5F7",
              }}
            >
              Some were placed in large venues such as
              <br /> sports stadiums, where they were held until <br /> the
              Junta decided their fate.
            </p>
          </div>
          <Row style={{ marginRight: 0 }}>
            <Row>
              <Col sm={4} xs={4} style={{ width: 50, textAlign: "right" }}>
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      paddingLeft: 0,
                      marginLeft: 25,
                    }}
                    fluid
                  />
                </a>
              </Col>
              <Col
                sm={8}
                xs={8}
                style={{
                  paddingLeft: 0,
                  marginLeft: 25,
                  color: "white",
                  textAlign: "left",
                  marginTop: -5,
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  paddingBottom: 15,
                }}
              >
                Learn More About <br />
                1976 Argentine coup d’état
              </Col>
            </Row>
            <Row>
              <Col sm={4} xs={4} style={{ width: 50, textAlign: "right" }}>
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      paddingLeft: 0,
                      marginLeft: 25,
                    }}
                    fluid
                  />
                </a>
              </Col>
              <Col
                sm={8}
                xs={8}
                style={{
                  paddingLeft: 0,
                  marginLeft: 25,
                  marginTop: -5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  paddingBottom: 76,
                }}
              >
                Learn More About <br />
                The National Reorganization Process
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      {/* -----------------------------------card-4--------------------------------------- */}
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
                      style={{ width: 267.35, height: 150.48, paddingRight: 0 }}
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
                      (August 2, 1925–May 17, 2013) was a General Commander of
                      the Army, member of the military junta, and dictator of
                      Argentina from 1976 to 1981. On December 22, 2010, Videla
                      was sentenced to life in a civilian prison for the deaths
                      of 31 prisoners following his coup.
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
                      style={{ width: 267.35, height: 150.48, paddingRight: 0 }}
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
                      Commander of the Army, member of the military junta, and
                      dictator of Argentina from 1976 to 1981. On December 22,
                      2010, Videla was sentenced to life in a civilian prison
                      for the deaths of 31 prisoners following his coup.
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
                      style={{ width: 267.35, height: 150.48, paddingRight: 0 }}
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
                      general, and Commander-in-Chief of the Argentine Air Force
                      from 1976 to 1979. With General Jorge Rafael Videla, he
                      ruled Argentina as part of the military junta between 1976
                      and 1981.
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

      {/* -------------------------------------card-Five---------------------------- */}
      <div className="imgeHolder"></div>
      <div className="chep1part5Container">
        <div className="forPosition2" style={{ position: "relative" }}>
          <div className="chep1part5Image"></div>
          <Container>
            <div
              className="chep1part5Text"
              style={{
                top: "100px",
                textAlign: "left",
                height: 200,
              }}
            >
              <Row
                style={{
                  color: "white",
                  fontFamily: "HelveticaNeue-Bold",

                  fontSize: 18,
                  width: 43,
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
                  }}
                >
                  04/06
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.1,
                  fontSize: "20px",
                  textAlign: "justify",
                  marginBottom: 0,
                  marginLeft: 18,
                }}
              >
                OPERATION <br></br>
                CONDOR,<br></br> THE DIRTY WAR
              </h6>
              <Image
                src="./horizontal_stripe.png"
                style={{
                  width: 166,
                  height: 9.47,
                  marginLeft: 18,
                  marginTop: -10,
                }}
              />
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  paddingTop: 10,
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",
                  textAlign: "left",
                }}
              >
                The junta declared a so-called “Dirty War” against <br />
                this enemy from within. The full extent of the <br /> atrocities
                committed between 1976 and 1983
                <br /> is not certain.{" "}
              </p>
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  paddingBottom: 30,
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",

                  textAlign: "left",
                }}
              >
                The figure generally quoted however is that an <br></br>{" "}
                estimated 30,000 people were disappeared, with <br />
                many others illegally imprisoned or going into exile.
              </p>
              <div>
                <div
                  style={{
                    textAlign: "left",
                    paddingLeft: 20,
                  }}
                >
                  <Image src="./images/chep1/upArrow.svg" />
                </div>
                <p
                  style={{
                    color: "white",
                    paddingLeft: 20,
                    paddingRight: 31.7,
                    fontSize: 12,
                    marginBottom: 0,
                    fontFamily: "HelveticaNeue-CondensedBold",

                    textAlign: "left",
                    color: "white",
                  }}
                >
                  BACKGROUND IMAGE
                </p>
                <p
                  style={{
                    color: "white",
                    paddingLeft: 20,
                    fontSize: 12,
                    fontFamily: "HelveticaNeue-CondensedBold",

                    textAlign: "left",
                    color: "#20C5F7",
                  }}
                >
                  Collections of photos from families whose <br />
                  children and grandchildren had
                  <br /> disappeared. Human rights organizations
                  <br />
                  estimate that over 30,000 people were <br />
                  disappeared.
                </p>
              </div>
              <Row>
                <Col sm={4} xs={4} style={{ width: 50, textAlign: "right" }}>
                  <a role="button">
                    <Image
                      src="./images/btnImage.svg"
                      style={{
                        paddingLeft: 0,
                        marginLeft: 19,
                      }}
                      fluid
                    />
                  </a>
                </Col>
                <Col
                  style={{
                    paddingLeft: 0,
                    marginLeft: 19,
                    color: "white",
                    textAlign: "left",
                    marginTop: 5,
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 12,
                  }}
                >
                  The History Of The Dirty War
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>

      <Row style={{ marginRight: 0 }}>
        {/* <Col>
              {" "}
              <p
                style={{
                  paddingLeft: 10,
                  marginBottom: 3,
                  float: "left",
                  textAlign: "left",
                  lineHeight: 2,
                  marginBottom: 0,
                }}
              >
                BOOK <br /> RECOMMENDATIONS
              </p>
            </Col> */}

        <Image
          src="./images/chep1/amazon.jpg"
          fluid
          style={{ paddingRight: 0 }}
        />

        <Row
          style={{ marginRight: 0, marginLeft: 0 }}
          className="productContainer"
        >
          <Row style={{ maxWidth: "100%", margin: "0px auto" }}>
            <p
              style={{
                paddingLeft: 10,
                marginBottom: 3,
                fontSize: 12,
                textAlign: "left",
                lineHeight: 1.5,
                marginBottom: 26,
                paddingLeft: 19,
                color: "white",
                fontFamily: "HelveticaNeue-Bold",
                marginTop: 26,
                width: "280px",
              }}
            >
              A collection of books that are informative and personal that shed
              light on the cause and effects of the Junta’s policies.
            </p>
          </Row>
          <Row>
            {" "}
            <Row style={{ marginLeft: 19, marginBottom: 30 }}>
              <Col style={{ width: "100%", padding: "0px" }}>
                <Image src="./images/chep1/Book2.jpg" fluid />
              </Col>
              <Col style={{ padding: "0px", marginTop: 60, marginLeft: -45 }}>
                <Row
                  style={{
                    color: "White",
                    textAlign: "left",
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 11,
                    paddingTop: 0,
                  }}
                >
                  The Ideological Origins
                  <br /> Of The Dirty War
                  <br /> By Federico Finchelstein
                </Row>
                <Row>
                  <a role={"button"} style={{ marginTop: 10 }}>
                    <Row>
                      <Col
                        sm={3}
                        xs={3}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        <a role="button">
                          <Image src="./images/btnImage.svg" fluid />
                        </a>
                      </Col>
                      <Col
                        sm={9}
                        xs={9}
                        style={{
                          fontFamily: "HelveticaNeue-Bold",
                          fontSize: 11,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 12,
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
          </Row>
          <Row>
            {" "}
            <Row style={{ marginLeft: 19, marginBottom: 30 }}>
              <Col style={{ width: "100%", padding: "0px" }}>
                <Image src="./images/chep1/Book1.jpg" fluid />
              </Col>
              <Col style={{ padding: "0px", marginTop: 45, marginLeft: -45 }}>
                <Row
                  style={{
                    color: "White",
                    textAlign: "left",
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 11,
                    paddingTop: 0,
                  }}
                >
                  Argentina Betrayed <br /> Memory, Mourning, <br /> and
                  Accountability <br /> Antonius C. G. M. Robben
                </Row>
                <Row>
                  <a role={"button"} style={{ marginTop: 10 }}>
                    <Row>
                      <Col
                        sm={3}
                        xs={3}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        <a role="button">
                          <Image src="./images/btnImage.svg" style={{}} fluid />
                        </a>
                      </Col>
                      <Col
                        sm={9}
                        xs={9}
                        style={{
                          fontFamily: "HelveticaNeue-Bold ",
                          fontSize: 11,
                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 12,
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
          </Row>
          <Row>
            <Row style={{ marginLeft: 19, marginBottom: 77 }}>
              <Col style={{ width: "100%", padding: "0px" }}>
                <Image src="./images/chep1/Book3.jpg" fluid />
              </Col>
              <Col style={{ padding: "0px", marginTop: 45, marginLeft: -45 }}>
                <Row
                  style={{
                    color: "White",
                    textAlign: "left",
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 11,
                    paddingTop: "20px",
                  }}
                >
                  The Ideological Origins
                  <br />
                  Of The Dirty War
                  <br /> By David Cox
                </Row>
                <Row>
                  <a role={"button"} style={{ marginTop: 10 }}>
                    <Row>
                      <Col
                        sm={3}
                        xs={3}
                        style={{ textAlign: "left", paddingLeft: 0 }}
                      >
                        <a role="button">
                          <Image src="./images/btnImage.svg" style={{}} fluid />
                        </a>
                      </Col>
                      <Col
                        sm={9}
                        xs={9}
                        style={{
                          fontFamily: "HelveticaNeue-Bold",
                          fontSize: 11,

                          float: "left",
                          color: "white",
                          textAlign: "left",
                          paddingTop: 12,
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
          </Row>
        </Row>
        <div className="chepOneAdHeader2" style={{ padding: "15px" }}></div>
      </Row>
      <div className="chep1part6Container">
        <div className="forPosition3" style={{ position: "relative" }}>
          <div className="chep1part6Image"></div>
          <Container>
            <div
              className="chep1part6Text"
              style={{
                top: "100px",
                textAlign: "left",
                height: 200,
              }}
            >
              <Row
                style={{
                  color: "white",
                  fontFamily: "HelveticaNeue-Bold",

                  fontSize: 18,
                  width: 43,
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
                  }}
                >
                  05/06
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.1,
                  fontSize: "18px",
                  textAlign: "justify",
                  marginBottom: 0,
                  marginLeft: 18,
                }}
              >
                CALLS <br></br>FOR A BOYCOTT
              </h6>
              <Image
                src="./horizontal_stripe.png"
                style={{
                  width: 171,
                  height: 10.14,
                  marginLeft: 18,
                  marginTop: -10,
                }}
              />
            </div>
          </Container>
        </div>
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <div
              style={{
                textAlign: "left",
                paddingLeft: 30,
                paddingBottom: 5,
              }}
            >
              <Image src="./images/chep1/upArrow.svg" />
            </div>
            <h5
              style={{
                color: "white",
                textAlign: "left",
                paddingLeft: 30,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",
                marginBottom: 0,
              }}
            >
              IMAGE:
            </h5>
            <p
              style={{
                color: "white",
                paddingLeft: 30,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",
                textAlign: "left",
                color: "#20C5F7",
                marginBottom: 0,
              }}
            >
              Flyers papered on walls around Paris <br />
              took the official logo of the World Cup, a pair
            </p>
            <p
              style={{
                color: "white",
                paddingLeft: 30,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",
                textAlign: "left",
                color: "#20C5F7",
                marginBottom: 11.2,
              }}
            >
              of stylized upraised arms framing a <br />
              soccer ball, and added grim-looking barbed wire.
            </p>{" "}
          </div>
          <div>
            <p
              style={{
                color: "white",
                paddingLeft: 30,
                marginBottom: 10,
                fontSize: 12,
                fontFamily: "HelveticaNeue-Bold",
                textAlign: "left",
              }}
            >
              The Junta declared a so-called “Dirty War” against <br />
              this enemy from within. The full extent of the atrocities
              <br /> committed between 1976 and 1983 is not certain.
            </p>
            <p
              style={{
                color: "white",
                paddingLeft: 30,
                paddingBottom: 20,
                fontSize: 12,
                fontFamily: "HelveticaNeue-Bold",
                marginBottom: 0,
                textAlign: "left",
              }}
            >
              {" "}
              The figure generally quoted, however, is that an <br /> estimated
              30,000 people were “disappeared,” with
              <br /> many others illegally imprisoned or going into exile.
            </p>
          </div>
          <Row style={{ margin: 0 }}>
            <Col sm={4} xs={4} style={{ width: 50, textAlign: "right" }}>
              <a role="button">
                <Image
                  src="./images/btnImage.svg"
                  style={{
                    paddingLeft: 0,
                    marginLeft: 25,
                  }}
                  fluid
                />
              </a>
            </Col>
            <Col
              sm={8}
              xs={8}
              style={{
                paddingLeft: 0,
                marginLeft: 25,
                color: "white",
                textAlign: "left",
                marginTop: 5,
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 12,
                paddingBottom: 15,
              }}
            >
              Learn More About
            </Col>
          </Row>
        </Container>
      </div>
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "413px",

          position: "absolute",
          top: 5215,
          left: -6,
        }}
      />
      {/* ----------------------dfjfkjgncl;vnl;vbn;lkvbmgn */}
      <div className="chep1part7Container">
        <div className="forPosition4" style={{ position: "relative" }}>
          <div className="chep1part7Image"></div>
          <Container>
            <div
              className="chep1part7Text"
              style={{
                top: "32.5px",
                textAlign: "left",
                height: 200,
              }}
            >
              <Row
                style={{
                  paddingBottom: 15,
                  marginLeft: 30,
                  marginRight: 0,
                }}
              >
                <Row
                  style={{
                    color: "white",
                    fontFamily: "HelveticaNeue-Bold",

                    fontSize: 14,
                    width: 56,
                    paddingRight: 0,
                    marginBottom: 15,
                  }}
                >
                  06/06
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0, width: 35 }}
                  ></Image>
                </Row>
                {/* <Col
                  style={{
                    textAlign: "right",
                    paddingRight: 0,
                  }}
                >
                  <a role="button">
                    <img
                      src="./images/chep1/youtube.svg"
                      alt=""
                      style={{ width: "35%" }}
                    />
                  </a>
                </Col> */}

                <Row
                  style={{
                    color: "white",
                    fontFamily: "StardosBold",
                    fontSize: 30,
                    lineHeight: 0.9,
                    paddingBottom: 5,
                  }}
                >
                  MOTHERS <br />
                  OF THE <br />
                  PLAZA DE MAYO
                </Row>
                <Row style={{ width: 231, height: 14 }}>
                  <Image
                    src="./images/verticalDivider.png"
                    style={{ paddingLeft: "3px", width: "100%" }}
                    fluid
                  />
                </Row>
              </Row>
              <div className="cardBody">
                <Row
                  style={{
                    padding: "56.4px 0px 112.8px 0px",
                    textAlign: "center",
                    margin: "auto 0px",
                  }}
                >
                  <a role="button">
                    <img
                      src="./images/chep1/YoutubeCard.svg"
                      alt=""
                      style={{ width: "22%" }}
                    />
                  </a>
                </Row>
              </div>
              <div>
                <div
                  style={{
                    textAlign: "left",
                    paddingLeft: 20,
                  }}
                >
                  <Image src="./images/chep1/upArrow.svg" />
                </div>
                <p
                  style={{
                    color: "white",
                    paddingLeft: 20,
                    paddingRight: 31.7,
                    fontSize: 12,
                    marginBottom: 0,
                    fontFamily: "HelveticaNeue-CondensedBold",

                    textAlign: "left",
                    color: "white",
                  }}
                >
                  IMAGE:
                </p>
                <p
                  style={{
                    color: "white",
                    paddingLeft: 20,
                    marginBottom: 0,
                    fontSize: 12,
                    fontFamily: "HelveticaNeue-CondensedBold",
                    width: 290,
                    paddingBottom: 12,

                    textAlign: "left",
                    color: "#20C5F7",
                  }}
                >
                  Buenos Aires, Argentina: “Madres de Plaza de Mayo” remain
                  upright on the flooding square in front of the Presidential
                  Palace, claiming their missing sons and daughters, circa 1982
                  in Buenos Aires.
                </p>
              </div>
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  fontSize: 12,
                  width: 342,
                  fontFamily: "HelveticaNeue-Bold",

                  textAlign: "left",
                }}
              >
                On April 30, 1977, Azucena Villaflor de De Vincenti and a dozen
                other mothers walked to the Plaza de Mayo in Argentina’s capital
                city. These women shared the experience of each having had at
                least one child who had been taken by the military government.
              </p>
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",

                  width: 342,
                  textAlign: "left",
                }}
              >
                At great risk to themselves, the mothers made the simple protest
                of walking to the Plaza De Mayo with pictures of their missing
                adult children.
              </p>
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  paddingBottom: 10,
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",

                  textAlign: "left",
                  width: 342,
                  marginBottom: 0,
                }}
              >
                The mothers created a simple visual sign of their solidarity by
                each wearing a headscarf with the name of their “disappeared”
                loved one.
              </p>
              <Row style={{ margin: "auto" }}>
                <Col sm={4} xs={4} style={{ width: 60, textAlign: "right" }}>
                  <a role="button">
                    <Image
                      src="./images/btnImage.svg"
                      style={{
                        paddingLeft: 0,
                        marginLeft: 8,
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
                    marginLeft: 8,
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
            </div>
          </Container>
        </div>
        <Image
          fluid
          src="./images/chep1/vertical_stripe.svg"
          style={{
            height: "400px",
            // paddingLeft: "10px",
            position: "absolute",
            top: 6000,
            right: 0,
          }}
        />
      </div>
      {/* ----------------Footer------------------------------ */}
      {/* <div className="chepFooter1">
        <Row
          style={{ marginRight: 0, marginLeft: 5, padding: "5px", height: 77 }}
        >
          <Col
            sm={10}
            xs={10}
            style={{
              textAlign: "right",
              padding: " 0px",
              color: "white",
              fontFamily: "Stardos Stencil",

              marginTop: 21,
            }}
          >
            {" "}
            <h3
              style={{
                textAlign: "left",
                marginBottom: 0,
                marginLeft: "155px",
                fontSize: 14,
              }}
            >
              CHAPTER TWO: <br /> MATTERS ON THE PITCH
            </h3>{" "}
          </Col>
          <Col
            sm={2}
            xs={2}
            style={{
              textAlign: "left",
              padding: "0px",
              marginTop: 20,
            }}
          >
            <a role="button">
              <Image
                src="./images/chep1/forwardArrow.svg"
                style={{ width: 31.21, height: 31.21, marginLeft: 8 }}
                alt=""
              />
            </a>
          </Col>
        </Row>
      </div> */}
      <Image
        src="./images/chep1/01_mattersonpitch.jpg"
        onClick={() => {
          navigate("/chepTwo");
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ChepOneCardMobView;
