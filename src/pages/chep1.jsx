import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import ChepOneCard from "../component/chep1Card";
import "./chep1.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Chep1 = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const location = useLocation();
  const [checkOp, setCheckOp] = useState(false);
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <div className="chepOnePageBannerContainer">
        <div className={`bannerContainer `}>
          <div
            className={`chepOneBannerImage w3-animate-opacity  ${
              opcity && `opcity`
            }`}
          ></div>

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
              className="chepOneBannerStripe"
              style={{ top: "96px", bottom: "65px" }}
            >
              <Image
                src="vertical_stripe.png"
                fluid
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              />
            </div>
            <Container>
              <div
                className="chepOneBannerText"
                style={{ top: "237px", left: "140px", right: 179 }}
              >
                <h1
                  className="chepOneTitleText"
                  style={{}}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  FROM HOST
                  <br /> TO JUNTA
                </h1>
                <p
                  className="chepOneSubTitleText"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Before a ball was kicked, domestic politics, the repression of
                  civilians and the military junta’s ambitions cast a long
                  shadow over the 1978 World Cup
                </p>
              </div>
            </Container>
            <div
              className="chepOnetableHeader"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Container>
                <p
                  style={{
                    paddingLeft: 10,
                    marginBottom: 0,
                    fontSize: 18,
                    fontFamily: "StardosBold",
                  }}
                >
                  CHAPTER 2: FROM HOST TO JUNTA 1-6
                </p>
              </Container>
            </div>
            <div
              className="chepOneBodyBackImage "
              data-aos="fade-out"
              data-aos-anchor-placement="center-bottom"
            >
              <Row
                style={{
                  color: "white",
                  width: 800,
                  margin: "0px auto",
                  padding: "30px 0px",
                }}
              >
                <Col>
                  <p
                    className="animationText"
                    style={{
                      fontSize: 24,
                      fontFamily: "StardosBold",
                      textAlign: "justify",
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    “Holding the tournament will show the world that Argentina
                    is a trustworthy country, capable of carrying out huge
                    projects; and will help push back against the criticism that
                    is raining on us from around the world”
                    <span
                      style={{
                        fontFamily: "HelveticaNeue-CondensedBold",
                        fontSize: 18,
                        textTransform: "uppercase",
                        color: "#20C5F7",
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      -Admiral Emilio Massera, MEMBER OF THE MILITARY JUNTA
                    </span>
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className={`chepOneCardHolder ${opcity && `opcity`}`}>
            <ChepOneCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chep1;
