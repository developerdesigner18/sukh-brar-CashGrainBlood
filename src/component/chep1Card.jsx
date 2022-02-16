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
import "./chep1Card.css";
const ChepOneCard = () => {
  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="container">
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
                <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 18,
                      fontWeight: "bold",
                      width: 60,
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
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
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                    }}
                  >
                    ARGENTINA YOU GET
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                      fontWeight: "bold",
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
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
                <Col lg={6}>
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
                        fontWeight: "bold",
                        paddingLeft: 10,
                        fontFamily: "Helvetica Neue",

                        paddingLeft: 10,
                      }}
                    >
                      <Row style={{}}>
                        In 1964, at FIFA’s Tokyo congress, Argentina was awarded
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
                              src="./images/btnImage.svg"
                              style={{ paddingLeft: 0, width: "100%" }}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          lg={8}
                          style={{
                            fontFamily: "Helvetica Neue",
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
                      fontFamily: "Stardos Stencil",
                      fontSize: 18,
                      width: 56,
                      fontWeight: "bold",
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                  >
                    02/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                    ></Image>
                  </Row>

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                    }}
                  >
                    The National
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                      lineHeight: 0.8,
                      fontWeight: "bold",
                      paddingBottom: 15,
                    }}
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
                  >
                    Men and women seen as hostile to the regime were
                    “disappearing”. Citizens were taken from their place of work
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
                        fontWeight: "bold",
                        fontFamily: "Helvetica Neue",
                        // letterSpacing: "0.5px",
                        paddingLeft: 10,
                      }}
                    >
                      <Row style={{}}>
                        Controversy followed the 1978 World Cup when, in March
                        1976, a military junta overthrew the government of
                        Isabel Peron. The Junta established a “National
                        Re-organization Process”, a rule of eliminating the
                        “decadence” of Peronism, supported by many of the
                        Argentine people.
                      </Row>

                      <Row style={{ paddingLeft: 0, marginTop: 15 }}>
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a href="#" role="button">
                            <Image
                              src="./images/btnImage.svg"
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
                            fontFamily: "Helvetica Neue",
                            fontSize: 15,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 5,
                          }}
                        >
                          Learn More About <br />
                          1976 Argentine coup d’état
                        </Col>
                      </Row>
                      <Row
                        style={{ paddingLeft: 0, marginTop: 15, width: 550 }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
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
                            fontFamily: "Helvetica Neue",
                            fontSize: 15,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 5,
                          }}
                        >
                          Learn More About <br />
                          The National Reorganization Process
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
                      fontFamily: "Stardos Stencil",
                      fontSize: 18,
                      width: 56,
                      fontWeight: "bold",
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                  >
                    03/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                    ></Image>
                  </Row>

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                    }}
                  >
                    THE MILITARY
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
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

                {/* carsoul */}
                <Carousel indicators={false} nextIcon={false} prevIcon={false}>
                  <Carousel.Item>
                    {/* first */}

                    <Row style={{ textAlign: "center", marginLeft: 10 }}>
                      <Col>
                        <Row>
                          <Image fluid src="./images/chep1/cardThreeOne.png" />
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
                              marginTop: 10,
                              fontFamily: "HelveticaNeue-CondensedBold",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "14px",
                              marginBottom: "5px",
                            }}
                          >
                            Jorge Rafael Videla
                          </p>
                          <p
                            style={{
                              textAlign: "left",
                              fontFamily: "HelveticaNeue-CondensedBold",
                              color: "#20C5F7",
                              fontSize: "14px",
                            }}
                          >
                            (August 2, 1925–May 17, 2013) was a General
                            Commander of the <br />
                            Army, member of the military junta, and dictator of
                            Argentina from <br /> 1976 to 1981. <br /> On
                            December 22, 2010, Videla was sentenced to life in a
                            civilian <br /> prison for the deaths of 31
                            prisoners following his coup.
                          </p>
                        </Row>
                        <Row
                          style={{
                            paddingLeft: 0,

                            paddingTop: 10,
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
                            <a role="button">
                              <Image
                                src="./images/btnImage.svg"
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
                              fontFamily: "Helvetica Neue",
                              fontSize: 15,
                              float: "left",
                              color: "white",
                              textAlign: "left",
                              paddingTop: 8,
                              paddingLeft: 0,
                            }}
                          >
                            Learn More About Jorge Rafael Videla
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Image fluid src="./images/chep1/cardThreeTwo.png" />
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
                              marginTop: 10,
                              fontFamily: "HelveticaNeue-CondensedBold",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "14px",
                              marginBottom: "5px",
                            }}
                          >
                            Emilio Eduardo Massera.
                          </p>
                          <p
                            style={{
                              textAlign: "left",
                              fontFamily: "HelveticaNeue-CondensedBold",
                              color: "#20C5F7",
                              fontSize: "14px",
                            }}
                          >
                            (October 19, 1925–November 8, 2010) was a General
                            Commander of
                            <br /> the Army, member of the military junta, and
                            dictator of Argentina from <br /> 1976 to 1981.{" "}
                            <br /> On December 22, 2010, Videla was sentenced to
                            life in a civilian <br />
                            prison for <br />
                            the deaths of 31 prisoners following his coup.
                          </p>
                        </Row>
                        <Row style={{ marginTop: 5 }}>
                          {" "}
                          <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                            <a role="button">
                              <Image
                                src="./images/btnImage.svg"
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
                              fontFamily: "Helvetica Neue",
                              fontSize: 15,
                              float: "left",
                              color: "white",
                              textAlign: "left",
                              paddingTop: 5,
                              paddingLeft: 0,
                            }}
                          >
                            Learn More About Emilio Eduardo Massera
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>{/* scecond */}</Carousel.Item>
                  <Carousel.Item>{/* third */}</Carousel.Item>
                </Carousel>
                {/* end */}
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
                      fontFamily: "Stardos Stencil",
                      fontSize: 18,
                      width: 56,
                      fontWeight: "bold",
                      paddingRight: 0,
                      marginBottom: 15,
                    }}
                  >
                    04/06
                    <Image
                      src="./images/chep1/divider.png"
                      fluid
                      style={{ height: "5px", padding: 0 }}
                    ></Image>
                  </Row>

                  <Row
                    style={{
                      color: "white",
                      fontFamily: "Stardos Stencil",
                      textTransform: "upperCase",
                      fontSize: 40,
                    }}
                  >
                    Operation Condor,
                  </Row>
                  <Row
                    style={{
                      color: "white",
                      textTransform: "upperCase",
                      fontFamily: "Stardos Stencil",
                      fontSize: 40,
                      lineHeight: 0.8,
                      paddingBottom: 15,
                    }}
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
                        fontFamily: "Helvetica Neue",
                        // letterSpacing: "0.5px",
                        paddingLeft: 10,
                      }}
                    >
                      <Row style={{}}>
                        The Junta declared a so-called “Dirty War” against this
                        enemy from within. The full extent of the atrocities
                        committed between 1976 and 1983 is not certain.
                      </Row>
                      <Row style={{ paddingTop: 15 }}>
                        The figure generally quoted, however, is that an
                        estimated 30,000 people were “disappeared,” with many
                        others illegally imprisoned or going into exile.
                      </Row>

                      <Row
                        style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                      >
                        <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
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
                            fontFamily: "Helvetica Neue",
                            fontSize: 15,
                            float: "left",
                            paddingLeft: 5,
                            paddingTop: 5,
                          }}
                        >
                          LEARN About The Dirty War
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
                  <Image src="./images/chep1/Book1.png" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "Helvetica Neue",
                      fontSize: 16,
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
                          lg={3}
                          style={{ textAlign: "left", paddingLeft: 0 }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{}}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          style={{
                            fontFamily: "Helvetica Neue",
                            fontSize: 16,
                            fontWeight: "bold",
                            float: "left",
                            color: "white",
                            textAlign: "left",
                            paddingTop: 5,
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
                  <Image src="./images/chep1/Book2.png" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "Helvetica Neue",
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingTop: "20px",
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
                          lg={3}
                          style={{ textAlign: "left", paddingLeft: 0 }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{}}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          style={{
                            fontFamily: "Helvetica Neue",
                            fontSize: 16,
                            fontWeight: "bold",
                            float: "left",
                            color: "white",
                            textAlign: "left",
                            paddingTop: 5,
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
                  <Image src="./images/chep1/Book3.png" fluid />
                </Col>
                <Col style={{ padding: "0px", marginTop: 25 }}>
                  <Row
                    style={{
                      color: "White",
                      textAlign: "left",
                      fontFamily: "Helvetica Neue",
                      fontSize: 16,
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
                          lg={3}
                          style={{ textAlign: "left", paddingLeft: 0 }}
                        >
                          <a role="button">
                            <Image
                              src="./images/btnImage.svg"
                              style={{}}
                              fluid
                            />
                          </a>
                        </Col>
                        <Col
                          style={{
                            fontFamily: "Helvetica Neue",
                            fontSize: 16,
                            fontWeight: "bold",
                            float: "left",
                            color: "white",
                            textAlign: "left",
                            paddingTop: 5,
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
                    fontFamily: "Stardos Stencil",
                    fontSize: 18,
                    width: 56,
                    paddingRight: 0,
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  05/06
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0 }}
                  ></Image>
                </Row>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 40,
                  }}
                >
                  CALLS FOR
                </Row>
                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 40,
                    lineHeight: 0.8,
                    paddingBottom: 15,
                  }}
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
                      fontWeight: "bold",
                      paddingLeft: 10,
                      fontFamily: "Helvetica Neue",

                      paddingLeft: 10,
                    }}
                  >
                    <Row>
                      In late 1977, a group of French journalists and
                      intellectuals formed the Organizing Committee for the
                      Boycott of the Argentina World Cup, known for its French
                      acronym, COBA.
                    </Row>
                    <Row style={{ paddingTop: 15 }}>
                      They planned an organized campaign designed to persuade
                      the French national team, led by the curly-haired goal
                      scorer Michel Platini, to skip the tournament altogether.
                    </Row>

                    <Row
                      style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                    >
                      <Col lg={4} style={{ width: 60, textAlign: "right" }}>
                        <a role="button">
                          <Image
                            src="./images/btnImage.svg"
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
                          fontFamily: "Helvetica Neue",
                          fontSize: 15,
                          float: "left",
                          paddingLeft: 5,
                          paddingTop: 5,
                        }}
                      >
                        LEARN About The Dirty War
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

      {/* -----------------------------------card-6------------------------------------- */}
      <div className="card6">
        <Container style={{ padding: "35px" }}>
          <div className="cardHeader">
            <Row style={{ paddingLeft: 10, paddingBottom: 15 }}>
              <Row
                style={{
                  color: "white",
                  fontFamily: "Stardos Stencil",
                  fontSize: 18,
                  width: 56,
                  fontWeight: "bold",
                  paddingRight: 0,
                  marginBottom: 15,
                }}
              >
                06/06
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0 }}
                ></Image>
              </Row>
              <Col
                style={{
                  textAlign: "right",
                  paddingRight: 0,
                }}
              >
                <a role="button">
                  <img src="./images/chep1/youtube.svg" alt="" />
                </a>
              </Col>

              <Row
                style={{
                  color: "white",
                  fontFamily: "Stardos Stencil",
                  fontSize: 40,
                  lineHeight: 0.9,
                  paddingBottom: 5,
                }}
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
                <img src="./images/chep1/YoutubeCard.svg" alt="" />
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
                      fontWeight: "bold",
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    IMAGE:
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-CondensedBolde",
                      color: "#20C5F7",
                      fontSize: "12px",
                    }}
                  >
                    Buenos Aires, Argentina: <br /> “Madres de Plaza de Mayo”{" "}
                    <br /> remain upright on the flooding <br /> square in front
                    of the <br /> Presidential Palace, claiming <br /> their
                    missing sons and <br /> daughters, circa 1982 in <br />{" "}
                    Buenos Aires.
                  </p>
                </Row>
              </Col>

              <Col lg={8}>
                {" "}
                <Row>
                  <p
                    style={{
                      textAlign: "left",
                      marginTop: 10,
                      fontFamily: "HelveticaNeue-medium",
                      color: "white",

                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    On April 30, 1977, Azucena Villaflor de De Vincenti and a
                    dozen other mothers <br /> walked to the Plaza de Mayo in
                    Argentina’s capital city. These women shared <br /> the
                    experience of each having had at least one child who had
                    been taken by <br /> the military government.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-medium",
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "12px",
                    }}
                  >
                    At great risk to themselves, the mothers made the simple
                    protest of walking to <br /> the Plaza De Mayo with pictures
                    of their missing adult children.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "HelveticaNeue-medium",
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "12px",
                    }}
                  >
                    The mothers created a simple visual sign of their solidarity
                    by each wearing a <br /> headscarf with the name of their
                    “disappeared” loved one.
                  </p>
                </Row>
                <Row style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}>
                  <Col lg={2} style={{ width: 60, textAlign: "right" }}>
                    <a href="#" role="button">
                      <Image
                        src="./images/btnImage.svg"
                        style={{
                          padding: 0,
                          width: "100%",
                          hieght: 10,
                        }}
                        fluid
                      />
                    </a>
                  </Col>
                  <Col
                    lg={10}
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontSize: 14,
                      fontWeight: "bold",
                      textAlign: "left",
                      paddingLeft: 0,
                      // paddingTop: 5,
                      color: "white",
                    }}
                  >
                    Learn More About The
                    <br />
                    Mothers Of The Plaza De Mayo
                  </Col>
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
            lg={11}
            style={{
              textAlign: "right",
              padding: 12,
              color: "white",
              fontFamily: "Stardos Stencil",
              fontSize: "24px",
            }}
          >
            {" "}
            <h3
              style={{
                marginBottom: 0,
              }}
            >
              CHAPTER TWO: MATTERS ON THE PITCH
            </h3>{" "}
          </Col>
          <Col
            lg={1}
            style={{ textAlign: "center", padding: "6px 6px 6px 0px" }}
          >
            <a role="button">
              <img src="./images/chep1/forwardArrow.svg" alt="" />
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
          top: 2251,
          right: 0,
        }}
      />
      <Image
        fluid
        src="./images/chep1/vertical_stripe.svg"
        style={{
          height: "600px",
          position: "absolute",
          top: 3314,
          right: 0,
        }}
      />
    </div>
  );
};

export default ChepOneCard;
