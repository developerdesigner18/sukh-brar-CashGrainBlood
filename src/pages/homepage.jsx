import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import Card_component from "../component/card";
import "./homePage.css";
import chepData from "../chepter";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const HomePage = () => {
  const [opcity, setOpcity] = useState(false);
  const location = useLocation();
  const [checkOp, setCheckOp] = useState(false);
  const navigate = useNavigate();
  console.log(chepData);
  return (
    <>
      <div className="homePageBannerContainer">
        <div className="bannerContainer">
          <div
            className={`homePageBannerImage  ${
              opcity && `opcity`
            } w3-animate-opacity`}
          ></div>

          {/* <Image src="./images/gettyimages.png" className="gettyImage" /> */}
          <Button
            style={{
              background: "#20c5f7",
              border: "2px solid #20c5f7",
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
              fontFamily: "StardosBold",
              paddingLeft: 10,
              width: 167,
              paddingTop: 0,
              fontSize: 16,
              height: 27,
              right: 246,
              top: 48,
              position: "absolute",
              boxShadow: "none",
            }}
            onClickCapture={() => {
              if (opcity) {
                setTimeout(() => {
                  setOpcity((prev) => !prev);
                  document.getElementsByClassName(
                    "dropdown-menu"
                  )[0].style.display = "none";
                }, 300);
              } else setOpcity((prev) => !prev);
              setCheckOp(!checkOp);
              document.getElementsByClassName(
                "dropdown-menu"
              )[0].style.display = "block";
            }}
          >
            CHAPTERS 1-5
            <Image
              src="./images/chep1/arrow.svg"
              style={{
                marginLeft: 5,
                paddingBottom: 0,
                width: 20.66,
                height: 17.73,
              }}
            />
          </Button>
          <div
            class="dropdown-menu dropdown-menu-right dropDown "
            style={{
              paddingTop: 2,
              paddingBottom: 0,
              width: "63.5vw",
              position: "absolute",
              top: 76,
              left: 233,
            }}
            id={checkOp ? "fade2" : "fadesample2"}
          >
            <div
              className={"dropDownDeskHeader"}
              style={{
                marginBottom: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ marginLeft: 36 }}>
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
              <div
                style={{ marginRight: 30, cursor: "pointer" }}
                onClickCapture={() => {
                  if (opcity) {
                    setTimeout(() => {
                      setOpcity((prev) => !prev);
                      document.getElementsByClassName(
                        "dropdown-menu"
                      )[0].style.display = "none";
                    }, 300);
                  } else setOpcity((prev) => !prev);
                  setCheckOp(!checkOp);
                  document.getElementsByClassName(
                    "dropdown-menu"
                  )[0].style.display = "block";
                }}
              >
                X
              </div>
            </div>
            {console.log("=-=-=-=-=-opcity", opcity)}
            <div
              className={
                location.pathname === "/"
                  ? `dropDownDeskHeader1`
                  : "dropDownDeskHeader"
              }
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "uppercase",
                  }}
                >
                  • MAIN PAGE
                </p>
              </div>

              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/" ? "arrowNotDisplay" : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>
            <div
              className={
                location.pathname === "/chepOne"
                  ? "dropDownDeskHeader1"
                  : "dropDownDeskHeader"
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "capitalize",
                  }}
                >
                  • FROM HOST TO JUNTA
                </p>
              </div>

              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/chepOne"
                    ? "arrowNotDisplay"
                    : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>
            <div
              className={
                location.pathname === "/chepTwo"
                  ? "dropDownDeskHeader1"
                  : "dropDownDeskHeader"
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "capitalize",
                  }}
                >
                  • MATTERS ON THE PITCH
                </p>
              </div>
              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/chepTwo"
                    ? "arrowNotDisplay"
                    : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>
            <div
              className={
                location.pathname === "/chepThree"
                  ? "dropDownDeskHeader1"
                  : "dropDownDeskHeader"
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "capitalize",
                  }}
                >
                  • SCORE FOUR ELSE
                </p>
              </div>

              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/chepThree"
                    ? "arrowNotDisplay"
                    : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>
            <div
              className={
                location.pathname === "/chepFour"
                  ? "dropDownDeskHeader1"
                  : "dropDownDeskHeader"
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "capitalize",
                  }}
                >
                  • IT TAKES TWO TO CONSPIRE
                </p>
              </div>

              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/chepFour"
                    ? "arrowNotDisplay"
                    : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>{" "}
            <div
              className={
                location.pathname === "/chepFive"
                  ? "dropDownDeskHeader1"
                  : "dropDownDeskHeader"
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
              <div style={{ marginLeft: 36 }}>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                    textTransform: "capitalize",
                  }}
                >
                  • WE ARE ARGENTINES ARE RIGHT AND HUMAN
                </p>
              </div>

              <div
                style={{ marginRight: 26 }}
                className={
                  location.pathname === "/chepFive"
                    ? "arrowNotDisplay"
                    : "arrowDisplay"
                }
              >
                <Image
                  src="./Images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>
          </div>
          <div className={`${opcity && `opcity`}`}>
            <div
              className="homePageBannerStripe"
              style={{ top: "96px", bottom: "65px" }}
            >
              <Image
                src="vertical_stripe.svg"
                fluid
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              />
            </div>
            <Container>
              <div
                className="homePageBannerText"
                style={{ top: "196px", left: "140px", right: 179 }}
              >
                <h1
                  style={{
                    wordBreak: "break-all",
                    fontSize: "74px",
                    fontFamily: "StardosBold",
                    lineHeight: 1,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  CASH <br /> GRAIN,
                  <br /> AND <br /> BLOOD <br /> FOR GOALS
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  style={{
                    textAlign: "left",
                    fontSize: 20,
                    fontFamily: "HelveticaNeue-Bold",
                    width: 443,
                    height: 192,
                  }}
                >
                  Before a ball was kicked, domestic politics, the repression of
                  civilians and the military junta’s ambitions cast a long
                  shadow over the 1978 World Cup.
                </p>
              </div>
            </Container>
          </div>
          <div
            className={`tableHeader`}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Container>
              <b style={{ paddingLeft: 10 }}>TABLE CONTENTS</b>
            </Container>
          </div>
          <div className={`tableContainer ${opcity && `opcity`}`}>
            <Card_component chepData={chepData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
