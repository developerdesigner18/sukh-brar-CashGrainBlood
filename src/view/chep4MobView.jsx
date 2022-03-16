import React, { useState } from "react";

// Import Swiper styles

import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./chep4MobView.css";
const Chep4MobView = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const [checkOp, setCheckOp] = useState(false);
  const location = useLocation();
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "fixed", top: 48, zIndex: 1000, width: "100%" }}>
        <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
          <Col
            lg={8}
            sm={8}
            md={8}
            xs={8}
            style={{
              background: "#20C5F7",
              padding: "7px 0px 5px 33px",
              height: 34,

              fontFamily: "StardosBold",

              fontSize: 17,
              color: "white",
            }}
          >
            4: TAKES TWO TO CONSPIRE
          </Col>
          <Col
            lg={4}
            sm={4}
            md={4}
            xs={4}
            style={{ paddingRight: 0, paddingLeft: 0, textAlign: "right" }}
            onClickCapture={() => {
              if (opcity) {
                setTimeout(() => {
                  setOpcity((prev) => !prev);
                  document.getElementsByClassName(
                    "dropdown-menu"
                  )[0].style.display = "none";
                }, 300);
              } else setOpcity((prev) => !prev);
              console.log(opcity);
              setCheckOp(!checkOp);
              document.getElementsByClassName(
                "dropdown-menu"
              )[0].style.display = "block";
            }}
          >
            <div class={`btn-group`}>
              <button
                class="btn btn-secondary"
                data-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="true"
                style={{
                  background: "#F78320",
                  border: "2px solid #F78320",
                  borderBottomLeftRadius: 9,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  paddingLeft: 10,
                  width: 124,
                  fontSize: 15,
                  paddingTop: 5,
                  height: 34,
                  boxShadow: "none",
                }}
              >
                CHAPTER 1-5
                <Image
                  src="./images/chep1/arrow.svg"
                  style={{ marginLeft: 5 }}
                />
              </button>
              <div
                class="dropdown-menu dropdown-menu-right dropDown "
                style={{
                  paddingTop: 2,
                  paddingBottom: 0,
                  width: "98vw",
                }}
              >
                <div
                  className={"dropDownMobHeader"}
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      MENU
                    </p>
                  </div>

                  <div style={{ marginRight: 26 }}>X</div>
                </div>
                {console.log("=-=-=-=-=-opcity", opcity)}
                <div
                  className={
                    location.pathname == "/"
                      ? `dropDownMobHeader1`
                      : "dropDownMobHeader"
                  }
                  id={checkOp ? "fade" : "fadesample"}
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      • MAIN PAGE
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>

                <div
                  className={
                    location.pathname == "/chepOne"
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepOne");
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      1. FROM HOST TO JUNTA
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/chepOne"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>
                <div
                  className={
                    location.pathname == "/chepTwo"
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepTwo");
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      2. MATTERS ON THE PITCH
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/chepTwo"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>
                <div
                  className={
                    location.pathname == "/chepThree"
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepThree");
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      3. SCORE FOUR ELSE
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/chepThree"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>
                <div
                  className={
                    location.pathname == "/chepFour"
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepFour");
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      4. IT TAKES TWO TO CONSPIRE
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/chepFour"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>
                <div
                  className={
                    location.pathname == "/chepFive"
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepFive");
                  }}
                  id={checkOp ? "fade" : "fadesample"}
                >
                  <div style={{ marginLeft: 20 }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      5. WE ARE ARGENTINES ARE...
                    </p>
                  </div>

                  <div
                    style={{ marginRight: 26 }}
                    className={
                      location.pathname == "/chepFive"
                        ? "arrowNotDisplay"
                        : "arrowDisplay"
                    }
                  >
                    <Image
                      src="./images/forwardArrowBlack.svg "
                      style={{ marginBottom: 5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`chep4BannerContainer ${opcity && `opcity`}`}>
        <div className="bannerContainer">
          <div className="chep4BannerImage" data-aos="fade-in"></div>
          <div
            className="chep4BannerStripe"
            style={{ top: "278px", left: "0px" }}
            data-aos="fade-up"
          >
            <Image
              src="vertical_stripe.png"
              style={{ height: "413px", marginLeft: -9 }}
            />
          </div>
          <Container>
            <div
              className="chep4BannerText"
              style={{
                top: "455px",
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
                data-aos="fade-up"
              >
                CHAPTER 4
              </h1>
              <small
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.0,
                  fontSize: "38px",
                  textAlign: "justify",
                }}
                data-aos="fade-up"
              >
                IT TAKES <br /> TWO TO <br /> CONSPIRE
              </small>

              <p
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  width: 292,
                }}
                data-aos="fade-up"
              >
                There were countless rumors of match fixing by the Argentine
                Junta. However, it takes more than one player to make a
                conspiracy. Leading journalists, politicians came forward to
                implicate both the Argentine and Peruvian governments.
              </p>
            </div>
            <div className="gettyImageFive">
              <Image
                src="./images/gettyimages.png"
                width={"100%"}
                style={{ width: 104, height: 25 }}
              />
            </div>
          </Container>
        </div>
      </div>
      <div className={`${opcity && `opcity`}`}>
        <Row
          className="chepFourCardOne"
          style={{ paddingLeft: 10, marginRight: 0 }}
          data-aos="fade-in"
        >
          <Row style={{ margin: "0px auto", marginTop: 40 }}>
            <Col xs={5} sm={5} style={{ textAlign: "right" }}>
              <Image
                src="./images/chep4/davidyallop.png"
                fluid
                style={{ marginTop: -10 }}
                data-aos="fade-up"
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
                  data-aos="fade-up"
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
                  data-aos="fade-up"
                >
                  DAVID YALLOP
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
                    width: 184,
                  }}
                  data-aos="fade-up"
                >
                  (27 January 1937 – 23 August 2018) Was a British author who
                  wrote the book “How They Stole the Game” that details
                  corruption in FIFA.
                </p>
              </Row>
            </Col>
          </Row>

          <div style={{ width: 332, margin: "30px 24px" }}>
            <h4 className="descTextJournalist4" data-aos="fade-up">
              A severe authoritarian with cold staring eyes,
              <span style={{ color: "#20C5F7" }}>
                {" "}
                Videla was not a fan of soccer
              </span>
              , which he found dull and pedestrian and interesting only as a
              “symbol of popular transcendence.” But he also understood how
              immensely popular it was, a source of passion for millions of
              Argentines.
              <span
                style={{
                  color: "#20C5F7",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
                data-aos="fade-up"
              >
                - DAVID YALLOP, AUTHOR
              </span>
            </h4>
          </div>
        </Row>
        <div
          className="chepFourCardTwo row"
          style={{
            marginRight: 2,
            padding: 5,
            marginLeft: 3,
            marginTop: 17,
          }}
          data-aos="fade-in"
        >
          <Row
            className=""
            style={{
              color: "white",
              fontFamily: "HelveticaNeue-Bold",
              fontSize: 15,
              width: 56,
              paddingRight: 0,
              marginBottom: 15,
              marginTop: 0,
              paddingLeft: 13,
            }}
            data-aos="fade-up"
          >
            <p style={{ marginBottom: 0, paddingLeft: 24 }}>01/01</p>
            <Image
              src="./images/chep1/divider.png"
              fluid
              style={{ height: "5px", padding: 0, marginLeft: 24 }}
            ></Image>
          </Row>

          <Row style={{ paddingLeft: 13 }}>
            {/* <Image src="./images/chep4/mobCardOne.png" /> */}
            <Image
              src="./images/forwardArrowBlack.svg"
              style={{
                width: 20.75,
                height: 13.4,
                marginLeft: 24,
                padding: 0,
                marginTop: 200,
              }}
              data-aos="fade-up"
            />{" "}
          </Row>
          <Row style={{ paddingLeft: 13, marginTop: -3 }}>
            <Row style={{ width: 121 }}>
              <p
                style={{
                  marginLeft: 24,
                  padding: 0,
                  height: 14,
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
            </Row>
            <Row data-aos="fade-up">
              <p
                style={{
                  marginLeft: 24,
                  padding: 0,
                  color: "#20C5F7",
                  marginTop: 0,
                  marginBottom: 0,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: 12,
                  width: 121,
                  lineHeight: "13px",
                }}
              >
                Peru’s Cubillas runs at the Argentina defence
              </p>{" "}
            </Row>
            <Row>
              <p
                style={{
                  marginLeft: 24,
                  padding: 0,
                  color: "White",
                  marginTop: 0,
                  marginBottom: 10,
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: 12,
                }}
                data-aos="fade-up"
              >
                SOURCE: GETTY IMAGES
              </p>
            </Row>
          </Row>
          <Row
            style={{
              marginTop: 15.4,
              marginLeft: 25,
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
                marginBottom: 5,
                paddingLeft: 0,
                lineHeight: 1,
                marginRight: 0,
              }}
              data-aos="fade-up"
            >
              A MATCH
              <br /> TO REMEMBER
            </Row>

            <Row style={{ width: 165.21, height: 9.21, paddingLeft: 0 }}>
              <Image
                src="./images/verticalDivider.png"
                style={{
                  paddingLeft: 0,
                  width: "165.21px",
                  height: 9.81,
                  paddingRight: 0,
                }}
                data-aos="fade-up"
                fluid
              />
            </Row>
            <Row style={{ padding: 0, marginTop: 20 }}>
              <p
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,

                  textAlign: "left",
                  color: "white",
                  marginBottom: 15,
                  paddingLeft: 0,
                  width: 314.87,
                }}
                data-aos="fade-up"
              >
                The match between Argentina and Peru is one of the most
                commented on, analyzed, scrutinized and criticized match in
                soccer history.
              </p>
            </Row>
            <Row style={{ padding: 0, marginTop: 5 }}>
              <p
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  textAlign: "left",
                  color: "white",
                  marginBottom: 15,
                  paddingLeft: 0,
                }}
                data-aos="fade-up"
              >
                Much has been made about the overall quality of play, the lack
                of energy exhibited by Peru’s side, and the questionable
                refereeing. There were also allegations of bribery and collusion
                between governments.
              </p>
            </Row>
            <Row style={{ paddingLeft: 0 }} data-aos="fade-up">
              <Col
                sm={1}
                xs={1}
                style={{ padding: 0, width: 31.21, height: 31.21 }}
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
                xs={10}
                sm={10}
                style={{
                  paddingLeft: 5,
                  marginLeft: 0,
                  color: "white",
                  textAlign: "left",
                  marginTop: 6,
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  marginBottom: 54.8,
                  paddingRight: 0,
                }}
              >
                1978 FIFA World Cup Group B
              </Col>
            </Row>
          </Row>
        </div>
        <Image
          fluid
          src="./images/chep1/vertical_stripe.svg"
          style={{
            height: "413px",
            paddingLeft: "10px",
            position: "absolute",
            top: 1545,
            right: 0,
            width: 25,
          }}
          data-aos="fade-up"
        />

        {/* ----------------------------------------card-3----------------------------------------------- */}
        <div className="chep4part3Container">
          <div
            className="forPosition"
            style={{ position: "relative" }}
            data-aos="fade-in"
          >
            <div className="chep4part3Image"></div>
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
                  data-aos="fade-up"
                >
                  <p
                    style={{
                      marginBottom: 0,
                      paddingLeft: 36,
                      fontSize: 15,
                      fontFamily: "HelveticaNeue-Bold",
                    }}
                  >
                    01/02
                  </p>
                  <Image
                    src="./images/chep1/divider.png"
                    fluid
                    style={{ height: "5px", padding: 0, marginLeft: 36 }}
                  ></Image>
                </Row>
                <h6
                  style={{
                    fontFamily: "StardosBold",
                    lineHeight: 1.1,
                    fontSize: "20px",
                    textAlign: "justify",
                    marginBottom: 0,
                    marginLeft: 25,
                  }}
                  data-aos="fade-up"
                >
                  “EL GORDO” <br /> THE BRIBER
                </h6>
                <Image
                  src="./horizontal_stripe.png"
                  style={{
                    width: 165.21,
                    height: 9.81,
                    marginLeft: 25,
                    marginTop: -10,
                  }}
                  data-aos="fade-up"
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
          {/* <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <div
              style={{
                textAlign: "left",
                paddingLeft: 25,
                paddingBottom: 5,
              }}
            >
              <Image
                src="./images/chep1/upArrow.svg"
                style={{ width: 20.75, height: 13.4 }}
              />
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
              IMAGE:
            </p>
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
                Process”. A rule of eliminating the “decadence” of <br />{" "}
                Peronism and supported by many of the Argentine people.
              </p>
            </div>
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
        </Container> */}
          <div className="chepFourThreeCardDesc">
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                height: 17.41,
                padding: 0,
                marginTop: 15,
                marginLeft: 0,
                display: "flex",
              }}
              data-aos="fade-up"
            />

            <div className="chepFourLastCardText">
              <p
                style={{
                  marginLeft: 0,
                  padding: 0,
                  color: "white",
                  textAlign: "left",
                  marginTop: 4,
                  marginBottom: 0,
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-CondensedBold",
                }}
                data-aos="fade-up"
              >
                IMAGE: <br />
                Captain Carlos Lacoste:
              </p>
              <p className="ThirdCardOne" data-aos="fade-up">
                His comrades-in-arms nicknamed “El Gordo” the fat framed, 1.85
                cm tall man who used to combine an impeccable dress with
                cigarettes and a taste for pretty women.
              </p>
              <div className="ThirdCardTwo" data-aos="fade-up">
                <p style={{ marginBottom: 15 }}>
                  The order to fix the result came directly from the man then
                  heading the military junta, General Jorge Videla. The man he
                  gave the orders to was Captain Carlos Lacoste.
                  <br />
                </p>
                <p style={{ marginBottom: 15 }} data-aos="fade-up">
                  Who better to turn to than the chairman of the organizing
                  committee for the World Cup?
                  <br />
                </p>
                <p data-aos="fade-up">
                  Captain Carlos Lacoste was president of the nation for 11
                  days, but he never had as much power as he obtained through
                  football during the last dictatorship (1976–1983). He was the
                  chairman of the 1978 World Cup Autarchic Entity.
                </p>
              </div>
            </div>
            <Row
              style={{
                paddingLeft: 0,
                marginTop: 20,
                marginRight: 0,
                marginBottom: 47.5,
              }}
              data-aos="fade-up"
            >
              <Col
                sm={2}
                xs={2}
                style={{
                  width: 31.21,
                  height: 31.21,
                  padding: 0,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      padding: 0,
                      marginTop: 0,
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
                  paddingLeft: 5,
                }}
              >
                Profile of Captain Carlos Lacoste
              </Col>
            </Row>
          </div>
          {/* <Image
          src="./images/chep2/vertical_stripe.png"
          fluid
          style={{
            position: "absolute",
            top: 72.5,
            right: 0,
            height: 602,
            width: 12,
          }}
        /> */}
        </div>
        {/* -----------------------------------card-4--------------------------------------- */}
        <div style={{ paddingTop: 20 }}>
          <Container>
            <div
              className="chep4part4Text"
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
                data-aos="fade-up"
              >
                <p
                  style={{
                    marginBottom: 0,
                    paddingLeft: 36,
                    fontSize: 15,
                    fontFamily: "HelveticaNeue-Bold",
                  }}
                >
                  01/03
                </p>
                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{ height: "5px", padding: 0, marginLeft: 36 }}
                ></Image>
              </Row>
              <h6
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1.1,
                  fontSize: "20px",
                  textAlign: "justify",
                  marginBottom: 0,
                  marginLeft: 25,
                }}
                data-aos="fade-up"
              >
                THE ALLEGED <br /> COST OF THE FIX
              </h6>
              <Image
                src="./horizontal_stripe.png"
                style={{
                  width: 171,
                  height: 10.14,
                  marginLeft: 25,
                  marginTop: -12,
                }}
                data-aos="fade-up"
              />
              <div style={{ marginLeft: 28 }}>
                <div
                  style={{
                    marginRight: 0,
                    marginTop: 0,
                  }}
                >
                  <p
                    className="fourCardFourText"
                    style={{
                      paddingLeft: 0,
                    }}
                    data-aos="fade-up"
                  >
                    Lacoste allegedly carried out a series of detailed
                    negotiations with the Peruvian officials; the bribes took a
                    series of forms.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <div className="row" style={{ margin: 0 }}>
            <div
              sm={6}
              xs={6}
              className="col"
              style={{ textAlign: "left", paddingLeft: 0, paddingRight: 0 }}
            >
              <Image
                src="./images/chep4/mobCardFour.png"
                style={{ height: 395.66, width: 180 }}
                data-aos="fade-in"
              />
            </div>
            <div
              sm={6}
              xs={6}
              className="col"
              style={{ textAlign: "left", paddingLeft: 7 }}
            >
              <div style={{ marginLeft: 0, marginTop: 16 }}>
                <Image
                  src="./images/chep4/mobFourComp1.png"
                  style={{ width: 50.1 }}
                  data-aos="fade-up"
                />
              </div>

              <p
                style={{
                  fontFamily: "StardosBold",
                  fontSize: 30,
                  color: "#20c5f7",
                  marginBottom: 0,
                  height: 36,
                }}
                data-aos="fade-up"
              >
                35,000
              </p>

              <p className="chepFouradDesc" data-aos="fade-up">
                Thirty-five thousand <br /> tons of grain.
              </p>
              <Image
                src="./horizontal_stripe.png"
                style={{
                  width: 140.26,
                  height: 10.14,
                  marginLeft: 0,
                  height: 8.33,
                }}
                data-aos="fade-up"
              />
              <div
                sm={6}
                xs={6}
                className="col"
                style={{ textAlign: "left", paddingLeft: 0, marginTop: 20 }}
              >
                <div style={{ marginLeft: 0 }}>
                  <Image
                    src="./images/chep4/mobFourComp2.png"
                    style={{ width: 22.64 }}
                    data-aos="fade-up"
                  />
                </div>

                <p
                  style={{
                    fontFamily: "StardosBold",
                    fontSize: 30,
                    color: "#20c5f7",
                    marginBottom: 0,
                    height: 36,
                  }}
                  data-aos="fade-up"
                >
                  $50
                </p>

                <p
                  className="chepFouradDesc"
                  style={{ height: 10 }}
                  data-aos="fade-up"
                >
                  Million line of credit.
                </p>
                <Image
                  src="./horizontal_stripe.png"
                  style={{
                    width: 160.5,
                    height: 9.76,
                    marginLeft: 0,
                    height: 8.33,
                    // marginTop: -15,
                  }}
                  data-aos="fade-up"
                />
              </div>
              <div
                sm={6}
                xs={6}
                className="col"
                style={{ textAlign: "left", paddingLeft: 0, marginTop: 20 }}
              >
                <div className="row" style={{ marginLeft: 0, height: 45 }}>
                  <div className="col" xs={1} sm={1} style={{ padding: 0 }}>
                    <Image
                      src="./images/chep4/mobFourComp3.png"
                      style={{ width: 45.2, height: 45.2 }}
                      data-aos="fade-up"
                    />
                  </div>
                  <div
                    className="col"
                    xs={1}
                    sm={1}
                    style={{ marginTop: 11, padding: 0, marginRight: 25 }}
                  >
                    <span
                      style={{
                        fontFamily: "StardosBold",
                        fontSize: 30,
                        color: "#20c5f7",
                        marginTop: 20,
                        height: 36,
                      }}
                      data-aos="fade-up"
                    >
                      13
                    </span>
                  </div>
                  <div className="col" xs={10} sm={10}></div>
                </div>

                <p className="chepFouradDesc" data-aos="fade-up">
                  Peruvian dissidents <br /> imprisoned in Argentina.
                </p>
                <Image
                  src="./horizontal_stripe.png"
                  style={{
                    width: 160.5,
                    height: 9.76,
                    marginLeft: 0,
                    height: 8.33,
                    // marginTop: -15,
                  }}
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div
              className="chepFourCardFourDesc"
              style={{ width: 320, paddingLeft: 0 }}
            >
              <div className="chepFourLastCardText">
                <p
                  style={{
                    marginLeft: 0,
                    padding: 0,
                    color: "white",
                    textAlign: "left",
                    marginTop: 20,
                    marginBottom: 0,
                    fontSize: 14,
                    fontFamily: "HelveticaNeue-CondensedBold",
                  }}
                  data-aos="fade-up"
                >
                  DETAILS OF THE BRIBES
                </p>
                <p className="FourCardText" data-aos="fade-up">
                  • 35,000 tons of Argentinian grain shipped to Peru <br /> •
                  The unfreezing of a $50 million credit line to the{" "}
                  <span style={{ marginLeft: 10 }}>Peruvian government</span>{" "}
                  <br /> • Videla’s regime agreed to receive and imprison 13{" "}
                  <span style={{ marginLeft: 10 }}>
                    Peruvian political dissidents who were vocally{" "}
                    <span style={{ marginLeft: 10 }}>
                      {" "}
                      opposed to the Peruvian regime.
                    </span>
                  </span>
                </p>
              </div>
              <Row
                style={{
                  paddingLeft: 0,
                  marginTop: 20,
                  marginRight: 0,
                  marginBottom: 47.5,
                }}
                data-aos="fade-up"
              >
                <Col
                  sm={3}
                  xs={3}
                  style={{
                    width: 31.21,
                    height: 31.21,
                    padding: 0,
                    marginLeft: 10,
                    // paddingLeft: 0,
                    textAlign: "left",
                  }}
                >
                  <a role="button">
                    <Image
                      src="./images/btnImage.svg"
                      style={{
                        // paddingLeft: 0,
                        marginTop: 0,
                        width: "100%",
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
                    paddingTop: 6,
                    paddingLeft: 4,
                  }}
                >
                  Read More On The Conspiracy
                </Col>
              </Row>
            </div>
          </div>
        </div>
        {/* -------------------------------------card-Five---------------------------- */}
        <div className="chep4LastCard" data-aos="fade-in">
          <Container style={{ padding: "13px 0px 0px 0px" }}>
            <Row
              style={{
                width: 56,
                padding: 0,
                margin: 0,
              }}
              data-aos="fade-up"
            >
              <p
                className="chepFourCardLastIndex"
                style={{ marginTop: 215, marginLeft: 36 }}
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
                marginTop: 5,
              }}
              data-aos="fade-up"
            >
              <p className="chepFourLastTitle">
                THE MOST <br /> INSIDIOUS <br /> ALLEGATION
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
                }}
                data-aos="fade-up"
                fluid
              />
            </Row>
          </div>
          <div className="chepFourLastCardDesc">
            <Image
              fluid
              src="./images/chep4/forwardArrow.png"
              style={{
                width: 20.91,
                height: 13.5,
                padding: 0,
                marginTop: 15,
              }}
              data-aos="fade-up"
            />

            <div className="chepTwoLastCardText">
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
                IMAGE: <br />
                VICTIMS OF THE MILITARY JUNTA
              </p>
              <p className="fourLastCardFirst" data-aos="fade-up">
                Victims of the Navy Petty-Officers School Of Mechanics crossed
                all ages and backgrounds. Graciela Alberti (top), Alberto
                Donadio, (center) and Ida Idad (below) were detained – just some
                of the thousands of the disappeared.
              </p>
              <div className="fourLastCardSecond" data-aos="fade-up">
                <p style={{ marginBottom: 15 }}>
                  Prisoners who were released after the regime had ended would
                  say that the only time there was respite from physical harm
                  was when Argentina played its matches. <br />
                </p>
                <p style={{ marginBottom: 15 }} data-aos="fade-up">
                  The most insidious match-fixing allegation was the Peruvian
                  junta demanding the Argentine dictatorship arrest and detain
                  several Peruvian dissidents in exile in Argentina. Perhaps
                  some were prisoners detained at the ESMA.
                  <br />
                </p>
              </div>
            </div>
            <Row
              style={{
                paddingLeft: 0,
                marginTop: 80,
                marginRight: 0,
              }}
              data-aos="fade-up"
            >
              <Col
                sm={3}
                xs={3}
                style={{
                  width: 31.21,
                  height: 31.21,
                  padding: 0,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      // paddingLeft: 0,
                      marginTop: 0,
                      width: "100%",
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
                  paddingTop: 7,
                  paddingLeft: 5,
                }}
              >
                Learn About The Missing
              </Col>
            </Row>
          </div>
          <Image
            src="./images/chep2/vertical_stripe.png"
            fluid
            style={{
              position: "absolute",
              top: 165,
              right: 0,
              height: 606.36,
              width: 18,
            }}
            data-aos="fade-up"
          />
        </div>
        {/* --------------footer----------------------------- */}
        <Image
          src="./images/chep4/05_righthuman.jpg"
          onClick={() => {
            navigate("/chepFive");
          }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Chep4MobView;
