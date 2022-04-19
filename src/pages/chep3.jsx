import React, { useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import ChepThreeCard from "../component/chep3Card";
import "./chep3.css";
const ChapterThree = () => {
  const navigate = useNavigate();
  const [opcity, setOpcity] = useState(false);
  const location = useLocation();
  const [checkOp, setCheckOp] = useState(false);
  return (
    <React.Fragment>
      <div className="holderThree">
        <div
          className={`chepThreeBanner w3-animate-opacity  ${
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
        <div className={` ${opcity && `opcity`}`}>
          <Container>
            <h1
              className="bannerHeaderThree"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              SCOPE <br /> FOUR <br /> OR ELSE
            </h1>
            <p
              className="bannerDescThree"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              With a lackluster performance in the second group stage, Argentina
              needed a massive result against the in-form Peru.
            </p>
          </Container>
          <Image
            className="bannerStripeThree"
            src="./images/chep2/vertical_stripe.png"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          />

          <div
            className="tableHeaderThree"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Container>
              <p
                className="tableHeaderTextThree"
                style={{
                  paddingLeft: 10,
                  marginBottom: 0,
                  fontSize: 18,
                  fontFamily: "StardosBold",
                }}
              >
                CHAPTER 3: SCORE FOUR OR ELSE 1-4
              </p>
            </Container>
          </div>
          <div
            className="chepDescThree"
            data-aos="fade-out"
            data-aos-anchor-placement="center-bottom"
          >
            <Row
              style={{
                padding: "30px 0px",
                width: 800,
                marginRight: 0,
                marginLeft: 118,
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Col>
                <p className="descTextThree">
                  “If a team could kick it’s way to a World Cup then I would
                  pick just such a side, but it’s no longer possible. Such
                  methods are obsolete. The emphasis must be on skill.”
                  <span
                    style={{
                      fontFamily: "HelveticaNeue-CondensedBold",
                      fontSize: 18,
                      textTransform: "uppercase",
                      color: "#20C5F7",
                    }}
                  >
                    — Cesar Menotti, Argentina Manager
                  </span>
                </p>
              </Col>
            </Row>
          </div>
        </div>

        {/*---------------------------------- cards-- -------------------------------------*/}
        <div className={` ${opcity && `opcity`}`}>
          <ChepThreeCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChapterThree;
