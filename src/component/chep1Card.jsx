import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
const ChepOneCard = () => {
  return (
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
                    width: 56,
                  }}
                >
                  01/06
                  <hr
                    style={{
                      height: 5,
                      width: "56px",
                      backgroundColor: "#20C5F7",
                    }}
                  />
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
                    lineHeight: 0.8,
                    paddingBottom: 15,
                  }}
                >
                  TO HOST A WORLD CUP!
                </Row>
                <Row style={{ width: 256, height: 15 }}>
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
                    fontFamily: "Helvetica Neue",
                    fontSize: 20,
                    letterSpacing: "1px",
                  }}
                >
                  NOTE:
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontSize: 20,
                    letterSpacing: "1px",
                    fontFamily: "Helvetica Neue",
                  }}
                ></Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 15,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  Argentina was officially chosen as the host nation by FIFA on
                  July 6, 1966 in London, England. Mexico withdrew from the
                  bidding process after having been awarded the 1970 competition
                  two years earlier.
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
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      In 1964, at FIFA’s Tokyo congress, Argentina was awarded
                      the hosting rights to the 1978 World Cup. To host the
                      football tournament was the highest honor in all of
                      sports.
                    </Row>

                    <Row
                      style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                    >
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
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
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
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
                  }}
                >
                  02/06
                  <hr
                    style={{
                      height: 5,
                      width: "56px",
                      backgroundColor: "#20C5F7",
                    }}
                  />
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
                    paddingBottom: 15,
                  }}
                >
                  Reorganization Process
                </Row>
                <Row style={{ width: 256, height: 15 }}>
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
                    style={{ width: "100%", paddingLeft: 10, paddingRight: 0 }}
                    alt="Arrow"
                  />
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontFamily: "Helvetica Neue",
                    fontSize: 20,
                    letterSpacing: "1px",
                  }}
                >
                  IMAGE:
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontSize: 15,
                    letterSpacing: "1px",
                    fontFamily: "Helvetica Neue",
                  }}
                ></Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 15,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    marginBottom: "20px",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  Men and women seen as hostile to the regime were
                  “disappearing”. Citizens were taken from their place of work
                  and homes, in broad daylight, in front of colleagues and loved
                  ones.
                </Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 15,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    marginBottom: "10px",
                    fontFamily: "Helvetica Neue",
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
                      fontFamily: "Helvetica Neue",
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      Controversy followed the 1978 World Cup when, in March
                      1976, a military junta overthrew the government of Isabel
                      Peron. The Junta established a “National Re-organization
                      Process”, a rule of eliminating the “decadence” of
                      Peronism, supported by many of the Argentine people.
                    </Row>

                    <Row style={{ paddingLeft: 0, marginTop: 5 }}>
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
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
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
                          paddingTop: 5,
                        }}
                      >
                        Learn More About <br />
                        1976 Argentine coup d’état
                      </Col>
                    </Row>
                    <Row style={{ paddingLeft: 0, marginTop: 5 }}>
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
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
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
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
                  }}
                >
                  03/06
                  <hr
                    style={{
                      height: 5,
                      width: "56px",
                      backgroundColor: "#20C5F7",
                    }}
                  />
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
                <Row style={{ width: 256, height: 15 }}>
                  <Image
                    src="./images/verticalDivider.png"
                    style={{ paddingLeft: "5px", width: "100%" }}
                    fluid
                  />
                </Row>
              </Row>
            </Card.Title>
            <Row style={{ textAlign: "center", border: "1px solid white" }}>
              <Col>For 3.0.1</Col>
              <Col>for 3.0.2</Col>
            </Row>
            {/* 
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
                    style={{ width: "100%", paddingLeft: 10, paddingRight: 0 }}
                    alt="Arrow"
                  />
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontFamily: "Helvetica Neue",
                    fontSize: 20,
                    letterSpacing: "1px",
                  }}
                >
                  IMAGE:
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontSize: 15,
                    letterSpacing: "1px",
                    fontFamily: "Helvetica Neue",
                  }}
                ></Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 15,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    marginBottom: "20px",
                    fontFamily: "Helvetica Neue",
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
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      The Junta declared a so-called “Dirty War” against this
                      enemy from within. The full extent of the atrocities
                      committed between 1976 and 1983 is not certain.
                    </Row>
                    <Row style={{ paddingTop: 15 }}>
                      The figure generally quoted, however, is that an estimated
                      30,000 people were “disappeared,” with many others
                      illegally imprisoned or going into exile.
                    </Row>

                    <Row
                      style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                    >
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
                        <a href="#" role="button">
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
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
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
            </Card.Text> */}
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
                  }}
                >
                  04/06
                  <hr
                    style={{
                      height: 5,
                      width: "56px",
                      backgroundColor: "#20C5F7",
                    }}
                  />
                </Row>

                <Row
                  style={{
                    color: "white",
                    fontFamily: "Stardos Stencil",
                    fontSize: 40,
                  }}
                >
                  Operation Condor
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
                  The Dirty War
                </Row>
                <Row style={{ width: 256, height: 15 }}>
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
                    style={{ width: "100%", paddingLeft: 10, paddingRight: 0 }}
                    alt="Arrow"
                  />
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontFamily: "Helvetica Neue",
                    fontSize: 20,
                    letterSpacing: "1px",
                  }}
                >
                  IMAGE:
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    color: "white",
                    paddingLeft: 10,
                    fontSize: 15,
                    letterSpacing: "1px",
                    fontFamily: "Helvetica Neue",
                  }}
                ></Row>
                <Row
                  style={{
                    // textAlign: "left",
                    color: "#20C5F7",
                    float: "left",
                    fontSize: 15,
                    letterSpacing: "1px",
                    paddingLeft: 10,
                    width: "100%",
                    marginBottom: "20px",
                    fontFamily: "Helvetica Neue",
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
                      letterSpacing: "0.5px",
                      paddingLeft: 10,
                    }}
                  >
                    <Row style={{ letterSpacing: 1 }}>
                      The Junta declared a so-called “Dirty War” against this
                      enemy from within. The full extent of the atrocities
                      committed between 1976 and 1983 is not certain.
                    </Row>
                    <Row style={{ paddingTop: 15 }}>
                      The figure generally quoted, however, is that an estimated
                      30,000 people were “disappeared,” with many others
                      illegally imprisoned or going into exile.
                    </Row>

                    <Row
                      style={{ paddingLeft: 0, paddingTop: 10, marginTop: 5 }}
                    >
                      <Col lg={4} style={{ width: 50, textAlign: "right" }}>
                        <a href="#" role="button">
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
                          fontSize: 12,
                          float: "left",
                          paddingLeft: 10,
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
    </div>
  );
};

export default ChepOneCard;
