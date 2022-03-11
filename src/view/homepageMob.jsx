import { Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import MobCard from "./cardMob";

import "./homepageMobile.css";
import { useNavigate, useLocation } from "react-router-dom";
import DropDownForMobile from "../component/dropDownForMobile";
import { AOS } from "aos";

const HomePageMob = ({ prevLocation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [opcity, setOpcity] = useState(false);
  // AOS.init({
  //   offset: 200, // offset (in px) from the original trigger point
  //   delay: 0, // values from 0 to 3000, with step 50ms
  //   easing: "ease", // default easing for AOS animations
  //   duration: 500, // values from 0 to 3000, with step 50ms
  //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   once: true, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  //   animatedClassName: "aos-animate", // class applied on animation
  //   initClassName: "aos-init", // class applied after initialization
  //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  // });
  // AOS.init();
  return (
    <div>
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
      <div className={`homePageBannerContainer1 ${opcity && `opcity`}`}>
        <div className="bannerContainer1">
          <div className="homePageBannerImage1" data-aos="fade-in"></div>
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
              data-aos={`${!opcity} && fade-up`}
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
                <Image src="./images/Group 514.svg" data-aos="fade-up"></Image>
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
