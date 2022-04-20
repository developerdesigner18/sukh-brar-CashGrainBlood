import React, { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ChepFiveMobCard from "../component/chep5MobCard";
import "./chep5MobView.css";
const Chep5MobView = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const [checkOp, setCheckOp] = useState(false);
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="chepFiveHolder">
        <div
          style={{ position: "fixed", top: 48, zIndex: 1000, width: "100%" }}
        >
          <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
            <Col
              lg={8}
              sm={8}
              md={8}
              xs={8}
              style={{
                background: "#20C5F7",
                padding: "7px 0px 5px 34px",
                height: 34,

                fontFamily: "StardosBold",

                fontSize: 17,
                color: "white",
              }}
            >
              5: WE ARGENTINES ARE…
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
        <div className={` ${opcity && `opcity`}`}>
          <div className="mobBannerFive">
            <Image
              src="./images/gettyimages.png"
              width={"100%"}
              style={{
                width: 104,
                height: 25,
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            />
          </div>
          <Container>
            <div className="textHolderFive">
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
                  color: "white",
                }}
                data-aos="fade-up"
              >
                CHAPTER 5
              </h1>
              <h1 className="bannerTitleFive" data-aos="fade-up">
                “WE ARGENTINES <br /> ARE RIGHT <br />
                AND HUMAN”{" "}
                <span
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    color: "#20c5f7",
                    fontSize: 11,
                    textAlign: "left",
                    wordSpacing: 0,
                  }}
                >
                  - OSVALDO {"    "}ARDILES
                </span>
              </h1>
              <p className="bannerTextFive" data-aos="fade-up">
                A quote from Osvaldo Ardiles when questioned about his knowledge
                of the Argentine Junta’s atrocities against the people of
                Argentina. Some were more “human” than others as time and the
                truth revealed itself.
              </p>
            </div>
          </Container>

          <div className="stripBannermainFive">
            <Image
              src="./images/chep2/vertical_stripeForBanner.png"
              style={{ width: 16, height: 413 }}
            />
          </div>
        </div>
        <div className={`journalistBannerFive  ${opcity && `opcity`}`}>
          <Row style={{ margin: "0px auto" }}>
            {/* image column */}
            <Col
              xs={5}
              sm={5}
              style={{ marginLeft: 36, paddingLeft: 0, paddingRight: 0 }}
            >
              <Image
                src="./images/chep5/will_hersey.png"
                fluid
                style={{ width: 120, height: 120 }}
                // style={{ marginTop: 40 }}
              />
            </Col>
            {/* text-column */}
            <Col xs={4} sm={4} style={{ padding: 0, marginTop: 8 }}>
              <Row xs={6} sm={6} style={{ marginBottom: 2 }}>
                <Image
                  src="./images/imgArrow.svg"
                  style={{ width: 20.75, height: 13.14, padding: 0 }}
                  fluid
                />
              </Row>
              <Row style={{ width: 184 }}>
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
                  WILL HERSEY
                </p>
                <p
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 12,
                    color: "#20C5F7",
                    textAlign: "left",
                    padding: 0,
                    letterSpacing: 0,
                  }}
                  data-aos="fade-up"
                >
                  @willhersey <br /> Content Director — Esquire (UK) Esquire
                  (UK), MSN South Africa, MSN UK, Yahoo News Malaysia, Esquire.
                </p>
              </Row>
            </Col>
          </Row>
          {/* description Text */}
          <div
            style={{ paddingLeft: 0, padding: "30px  36px" }}
            data-aos="fade-up"
          >
            <h4 className="descTextJournalistFive" data-aos="fade-up">
              It’s estimated that a total of{" "}
              <span style={{ color: "#20C5F7" }}>
                30,000 people were killed in its seven-year reign,
              </span>{" "}
              with 5,000 abducted and held captive at the Navy Petty-Officers
              School of Mechanics and an unknown number going “missing” even as
              the tournament was played out.
              <br />
              <span
                style={{
                  color: "#20C5F7",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                - WILL HERSEY, CONTENT DIRECTOR,
                {/* <span style={{ marginLeft: 10, lineHeight: "14px" }}> */}
                ESQUIRE UK
                {/* </span> */}
              </span>
            </h4>
          </div>
        </div>
        {/* -----------------------cards Chapter Two------------------------ */}
        <ChepFiveMobCard opcity={opcity} />
      </div>
    </React.Fragment>
  );
};

export default Chep5MobView;
