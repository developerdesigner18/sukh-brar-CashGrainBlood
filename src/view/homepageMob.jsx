import { Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import MobCard from "./cardMob";
// import "./_animation.scss";
import "./homepageMobile.css";
import { useNavigate, useLocation } from "react-router-dom";
import DropDownForMobile from "../component/dropDownForMobile";
import { AOS } from "aos";

const HomePageMob = ({ prevLocation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [opcity, setOpcity] = useState(false);
  const [checkOp, setCheckOp] = useState(false);
  const [arrow, setArrow] = useState(true);

  return (
    <div>
      <div style={{ position: "fixed", top: 48, zIndex: 1000, width: "100%" }}>
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
              fontSize: 17,
              color: "white",
            }}
          >
            MAIN PAGE
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
      <div className={`homePageBannerContainer1 ${opcity && `opcity`}`}>
        <div className="bannerContainer1">
          <div className="homePageBannerImage1"></div>
          <div
            className="homePageBannerStripe1"
            style={{ top: "235px", left: "-23px" }}
          >
            <Image src="vertical_stripe.png" style={{ height: "400px" }} />
          </div>
          <Container>
            <div
              className="homePageBannerText1"
              style={{ top: "357px", left: "35px" }}
            >
              <h1
                style={{
                  wordBreak: "break-all",
                  fontFamily: "StardosBold",
                  lineHeight: 1,
                  fontSize: "40px",
                  textAlign: "justify",
                }}
                data-aos="fade-up"
              >
                CASH, GRAIN,
                <br /> AND BLOOD <br /> FOR GOALS
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",
                  textAlign: "justify",
                }}
                data-aos="fade-up"
              >
                Before a ball was kicked, domestic politics, <br /> the
                repression of civilians and the military <br /> junta’s
                ambitions cast a long shadow over <br></br> the 1978 World Cup.
              </p>

              <a href="#" style={{ textAlign: "left", marginRight: 195 }}>
                <Image src="./images/Group 514.svg"></Image>
              </a>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={`cardContainer ${opcity && `opcity`}`}
        style={{ paddingBottom: 15 }}
      >
        <MobCard opcity={opcity} />
      </div>
    </div>
  );
};

export default HomePageMob;
