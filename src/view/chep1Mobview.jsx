import React from "react";
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
const ChepOneCardMobView = () => {
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
              fontFamily: "Stardos Stencil",
              fontWeight: "bold",
              fontSize: 17,
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
                fontFamily: "Helvetica Neue",
                paddingLeft: 10,
                width: 124,
                fontSize: 14,
                paddingTop: 5,
                height: 34,
              }}
            >
              CHAPTERS
              <img src="./images/chep1/arrow.svg" />
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
                  fontFamily: "Stardos Stencil",
                  color: "white",
                  fontWeight: "bold",
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
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1.1,
                  fontWeight: "bold",
                  fontSize: "40px",
                  textAlign: "justify",
                }}
              >
                FROM HOST <br /> TO JUNTA <br></br>
              </small>

              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: 12,
                  fontWeight: "bold",
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
                style={{ width: 20.75, height: 13.14, padding: 0 }}
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
              fontSize: 25,
              fontFamily: "Stardos Stencil",
              fontWeight: "bold",
              textAlign: "left",
              paddingLeft: 36,
              lineHeight: 1.5,
              color: "white",
            }}
          >
            “Holding the tournament <br /> will show the world <br />
            that{" "}
            <span style={{ color: "#20C5F7" }}>
              {" "}
              Argentina is a <br /> trustworthy country
            </span>
            , <br /> capable of carrying out <br /> huge projects; and will{" "}
            <br />
            help push back against the <br />
            criticism that is raining on
            <br /> us from around the world” <br />
            <span
              style={{
                color: "#20C5F7",
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: "16px",
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
            fontFamily: "HelveticaNeue",
            fontWeight: "bold",
            fontSize: 15,
            width: 56,
            paddingRight: 0,
            marginBottom: 15,
            marginTop: 19.5,
          }}
        >
          <p style={{ marginBottom: 0, paddingLeft: 20 }}>01/01</p>
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
              fontFamily: "Stardos Stencil",
              fontSize: 20,
              fontWeight: "bold",
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
                fontFamily: "Helvetica Neue",
                fontSize: 12,
                fontWeight: "bold",
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
                marginBottom: 0,
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
                  fontFamily: "HelveticaNeue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  01/02
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1.1,
                  fontWeight: "bold",
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
          <div
            style={{
              background: "#2E2A2A",
              width: 103,
              height: 20.88,
              textAlign: "center",
              paddingTop: 5,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <h6
              style={{
                fontSize: 8,
                fontWeight: "bold",
                fontFamily: "Helvetica Neue",
                color: "white",
              }}
            >
              IMAGO/ACTIONPLUS
            </h6>
          </div>
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
                fontFamily: "HelveticaNeue-CondensedBolde",

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
                  fontFamily: "Helvetica Neue",
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
                  fontFamily: "Helvetica Neue",
                  fontSize: 12,
                  paddingBottom: 80,
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
          paddingBottom: 25,
          // display: "block",
        }}
      >
        <Card.Body>
          <Card.Title>
            <Row>
              <Row
                style={{
                  color: "white",
                  fontFamily: "HelveticaNeue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                    width: 100,
                  }}
                >
                  01/03
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
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1.1,
                  fontWeight: "bold",
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
          <Carousel indicators={false} nextIcon={false} prevIcon={false}>
            <Carousel.Item>
              {/* first */}

              <Row style={{ textAlign: "center", marginLeft: 10 }}>
                <Col>
                  <Row>
                    <Image fluid src="./images/chep1/cardThreeOne.jpg" />
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
                  <Row>
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: 2,
                        fontFamily: "HelveticaNeue-CondensedBold",
                        color: "white",
                        fontWeight: "bold",
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
                        fontFamily: "Helvetica Neue",
                        fontSize: 12,
                        float: "left",
                        fontWeight: "bold",
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
            </Carousel.Item>
            <Carousel.Item>
              <Row style={{ textAlign: "center", marginLeft: 10 }}>
                <Col>
                  <Row>
                    <Image fluid src="./images/chep1/cardThreeTwo.jpg" />
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
                  <Row>
                    {" "}
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: 2,
                        fontFamily: "HelveticaNeue-CondensedBold",
                        color: "white",
                        fontWeight: "bold",
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
                      paddingLeft: 0,

                      paddingTop: 0,
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
                        fontFamily: "Helvetica Neue",
                        fontSize: 12,
                        float: "left",
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "left",
                        paddingTop: 8,
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      Profile Of
                      <br /> Emilio Eduardo Massera
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            {/* <Carousel.Item>third</Carousel.Item> */}
            <Carousel.Item>
              <Row style={{ textAlign: "center", marginLeft: 10 }}>
                <Col>
                  <Row>
                    <Image
                      fluid
                      src="./images/chep1/chapterThreeThree.png"
                      style={{ height: 239 }}
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
                  <Row>
                    {" "}
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: 2,
                        fontFamily: "HelveticaNeue-CondensedBold",
                        color: "white",
                        fontWeight: "bold",
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

                      paddingTop: 0,
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
                        fontFamily: "Helvetica Neue",
                        fontSize: 12,
                        float: "left",
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "left",
                        paddingTop: 8,
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      Profile Of
                      <br /> Orlando Ramón Agosti
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
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
                  fontFamily: "HelveticaNeue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  01/04
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1.1,
                  fontWeight: "bold",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: "bold",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
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
                fontFamily: "Helvetica Neue",
                marginTop: 26,
              }}
            >
              A collection of books that are informative and <br /> personal
              that shed light on the cause and effects <br /> of the Junta’s
              policies.
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
                    fontFamily: "Helvetica Neue",
                    fontSize: 11,
                    paddingTop: 0,
                    fontWeight: "bold",
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
                          fontFamily: "Helvetica Neue",
                          fontSize: 11,
                          fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                    fontSize: 11,
                    paddingTop: 0,
                    fontWeight: "bold",
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
                          fontFamily: "Helvetica Neue",
                          fontSize: 11,
                          fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                    fontSize: 11,
                    fontWeight: "bold",
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
                          fontFamily: "Helvetica Neue",
                          fontSize: 11,
                          fontWeight: "bold",
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
                  fontFamily: "HelveticaNeue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  01/05
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 34.8 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1.1,
                  fontWeight: "bold",
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
                fontWeight: "bold",
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
                fontWeight: "bold",
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
                fontWeight: "bold",
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
                fontFamily: "HelveticaNeue-CondensedBold",
                fontWeight: "bold",
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
                paddingBottom: 30,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {" "}
              The figure generally quoted, however, is that an <br /> estimated
              30,000 people were “disappeared,” with
              <br /> many others illegally imprisoned or going into exile.
            </p>
          </div>
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
                    fontFamily: "Stardos Stencil",
                    fontWeight: "bold",
                    fontSize: 14,
                    width: 56,
                    paddingRight: 0,
                    marginBottom: 15,
                  }}
                >
                  0/06
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0, width: 35 }}
                  ></Image>
                </Row>
                <Col
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
                </Col>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 30,
                    fontWeight: "bold",
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
                    padding: "112.8px 0px",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                On April 30, 1977, Azucena Villaflor de De Vincenti and <br />a
                dozen other mothers walked to the Plaza de Mayo in <br />
                Argentina’s capital city. These women shared the
                <br /> experience of each having had at least one child who had{" "}
                been taken by the military government.
              </p>
              <p
                style={{
                  color: "white",
                  paddingLeft: 20,
                  fontSize: 12,
                  fontFamily: "Helvetica Neue",
                  fontWeight: "bold",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: "bold",
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
                    fontFamily: "Helvetica Neue",
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
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ChepOneCardMobView;
