import React, { useState } from "react";
import { Row, Image, Col, Container, Button } from "react-bootstrap";
import "./chep3MobView.css";
import Chep3MobCard from "../component/chep3Mobcard";
import { useNavigate, useLocation } from "react-router-dom";
const Chep3MobView = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="chepThreeHolder">
        <div>
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
              3: SCORE FOUR OR ELSE
            </Col>
            <Col
              lg={4}
              sm={4}
              md={4}
              xs={4}
              style={{ paddingRight: 0, paddingLeft: 0, textAlign: "right" }}
              onClickCapture={() => {
                setOpcity((prev) => !prev);
                console.log(opcity);
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
                  class="dropdown-menu dropdown-menu-right right-0 dropDown"
                  style={{
                    paddingTop: 2,
                    paddingBottom: 0,
                    width: "98vw",
                  }}
                >
                  <div
                    className={
                      location.pathname == "/"
                        ? "dropDownMobHeader1"
                        : "dropDownMobHeader "
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

                    <div style={{ marginRight: 26 }}>
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

                    <div style={{ marginRight: 26 }}>
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

                    <div style={{ marginRight: 26 }}>
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

                    <div style={{ marginRight: 26 }}>
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

                    <div style={{ marginRight: 26 }}>
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

                    <div style={{ marginRight: 26 }}>
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
        <div className={`mobBannerThree ${opcity && `opcity`}`}>
          <Container>
            <div className="textHolderThree">
              {/* <button className="bannerButtonThree">CHAPTER 3</button> */}
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
              >
                CHAPTER 3
              </h1>
              <h1 className="bannerTitleThree">
                SCORE <br /> FOUR <br /> OR ELSE
              </h1>
              <p className="bannerTextThree">
                There were countless rumors of match fixing by the Argentine
                Junta. However, it takes more than one player to make a
                conspiracy.
              </p>
            </div>
          </Container>
          <div className="gettyImageThree">
            <Image
              src="./images/gettyimages.png"
              width={"100%"}
              style={{ width: 104, height: 25 }}
            />
          </div>
          <div className="stripBannermainThree">
            <Image
              src="./images/chep2/vertical_stripeForBanner.png"
              style={{ width: 16, height: 413 }}
            />
          </div>
        </div>
        <div className={`journalistBannerThree ${opcity && `opcity`}`}>
          <Row style={{ margin: "0px auto" }}>
            {/* image column */}
            <Col
              xs={5}
              sm={5}
              style={{ marginLeft: 36, paddingLeft: 0, paddingRight: 0 }}
            >
              <Image
                src="./images/chep3/luque.png"
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
              <Row style={{ width: 164 }}>
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
                  Leopoldo Jacinto Luque
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
                >
                  (3 May 1949 – 15 February 2021 With Argentina he was 1978
                  World Champion, scoring four goals in the tournament.
                </p>
              </Row>
            </Col>
          </Row>
          {/* description Text */}
          <div style={{ paddingLeft: 0, margin: "30px  36px" }}>
            <h4 className="descTextJournalistThree">
              “With what I know now, I can’t say I am proud of my victory. We
              just played football.{" "}
              <span style={{ color: "#20C5F7" }}>
                We were just proud to represent our country
              </span>{" "}
              and we wanted to win for each other. But I didn’t realize, most of
              us didn’t that there was so much scandal and controversy.
              <br />
              <span
                style={{
                  color: "#20C5F7",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                - Leopoldo Luque, Argentine striker
              </span>
            </h4>
          </div>
        </div>

        {/* -----------------------cards Chapter Two------------------------ */}
        <Chep3MobCard opcity={opcity} />
      </div>
    </React.Fragment>
  );
};

export default Chep3MobView;
