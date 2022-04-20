import React, { useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ChepFiveCard from "../component/chep5Card";
import "./chep5.css";
const ChapterFive = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const location = useLocation();
  const [checkOp, setCheckOp] = useState(false);
  return (
    <React.Fragment>
      <div className="holderFive">
        <div className={`chepFiveBanner  ${opcity && `opcity`} `}></div>
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
            document.getElementsByClassName("dropdown-menu")[0].style.display =
              "block";
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
                src="./images/forwardArrowBlack.svg "
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
                src="./images/forwardArrowBlack.svg "
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
                src="./images/forwardArrowBlack.svg "
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
                src="./images/forwardArrowBlack.svg "
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
                src="./images/forwardArrowBlack.svg "
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
                src="./images/forwardArrowBlack.svg "
                style={{ marginBottom: 5 }}
              />
            </div>
          </div>
        </div>
        <div className={` ${opcity && `opcity`}`}>
          <Container>
            <h1
              className="bannerHeaderFive"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              “WE
              <br /> ARGENTINES <br /> ARE RIGHT <br />
              AND HUMAN”
            </h1>
            <p
              className="bannerDescFive"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              A quote from Osvaldo Ardiles when questioned about his knowledge
              of the Argentine Junta’s atrocities against the people of
              Argentina. Some were more “human” than others as time and the
              truth revealed itself.
            </p>
          </Container>
          <Image
            className="bannerStripeFive"
            src="./images/chep2/vertical_stripe.png"
          />

          <div className="tableHeaderFive">
            <Container>
              <p
                className="tableHeaderTextFive"
                style={{
                  paddingLeft: 0,
                  marginBottom: 0,
                  fontSize: 18,
                  fontFamily: "StardosBold",
                }}
              >
                WE ARE ARGENTINES ARE RIGHT AND HUMAN: CHAPTER FIVE 1-4
              </p>
            </Container>
          </div>
          <div className="chepDescFive">
            <Row
              style={{
                padding: "30px 0px",
                width: 800,
                marginRight: 0,
                marginLeft: 118,
              }}
            >
              <Col>
                <p
                  className="descTextFive"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  “It’s estimated that a total of 30,000 people were killed in
                  its seven-year reign, with 5,000 abducted and held captive at
                  the Navy Petty-Officers School of Mechanics and an unknown
                  number going “missing” even as the tournament was played out.”
                  <span
                    style={{
                      fontFamily: "HelveticaNeue-CondensedBold",
                      fontSize: 18,
                      textTransform: "uppercase",
                      color: "#20C5F7",
                    }}
                  >
                    — DAVID YALLOP, JOURNALIST
                  </span>
                </p>
              </Col>
            </Row>
          </div>
        </div>
        {/*----0------------------------------ cards-- -------------------------------------*/}
        <div className={` ${opcity && `opcity`}`}>
          <ChepFiveCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChapterFive;
