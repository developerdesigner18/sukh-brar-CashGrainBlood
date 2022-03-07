import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ChepOneCard from "../component/chep1Card";
import "./dropDownForDesktop.css";
const DropDownForDesktop = ({
  selectChepOne,
  selectMainPage,
  setSelectChepOne,
  setSelectMainPage,
  prevLocation,
  setSelectChepTwo,
  selectChepTwo,
  setSelectChepThree,
  selectChepThree,
  setSelectChepFour,
  selectChepFour,
  setSelectChepFive,
  selectChepFive,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <React.Fragment>
      <div
        className="dropDownDeskContainer"
        style={{ height: 533, width: 517, margin: "0px auto" }}
      >
        <div className="bannerContainer" style={{ height: 533, width: 517 }}>
          <div className="dropDownDeskImage">
            <Container>
              <div
                className="dropDownDeskText"
                style={{ top: "0px", left: "0px", right: 179, width: "517px" }}
              >
                <div
                  className="dropDownDeskHeader"
                  style={{
                    marginBottom: 38,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                      CHAPTERS 1-5
                    </p>
                  </div>

                  <div style={{ marginRight: 26 }}>
                    <Image
                      src="./images/closeArrowForMob.png "
                      style={{ marginBottom: 2.5 }}
                      onClick={() => {
                        prevLocation.pathname === "/dropDown" &&
                        location.pathname === "/dropDown"
                          ? navigate("/")
                          : navigate(prevLocation.pathname);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={
                    selectMainPage ||
                    (prevLocation.pathname == "/" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/");
                    setSelectMainPage(true);
                    setSelectChepOne(false);
                    setSelectChepTwo(false);
                    setSelectChepThree(false);
                    setSelectChepFive(false);
                    setSelectChepFour(false);
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
                    selectChepOne ||
                    (prevLocation.pathname == "/chepOne" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepOne");
                    setSelectChepOne(true);
                    setSelectMainPage(false);
                    setSelectChepTwo(false);
                    setSelectChepThree(false);
                    setSelectChepFive(false);
                    setSelectChepFour(false);
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
                      • FROM HOST TO JUNTA
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
                    selectChepTwo ||
                    (prevLocation.pathname == "/chepTwo" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepTwo");
                    setSelectChepTwo(true);
                    setSelectChepOne(false);
                    setSelectMainPage(false);
                    setSelectChepThree(false);
                    setSelectChepFive(false);
                    setSelectChepFour(false);
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
                      • MATTERS ON THE PITCH
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
                    selectChepThree ||
                    (prevLocation.pathname == "/chepThree" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  onClick={() => {
                    navigate("/chepThree");
                    setSelectChepTwo(false);
                    setSelectChepOne(false);
                    setSelectMainPage(false);
                    setSelectChepThree(true);
                    setSelectChepFive(false);
                    setSelectChepFour(false);
                  }}
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                      • SCORE FOUR ELSE
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
                    selectChepFour ||
                    (prevLocation.pathname == "/chepFour" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  onClick={() => {
                    navigate("/chepFour");
                    setSelectChepTwo(false);
                    setSelectChepOne(false);
                    setSelectMainPage(false);
                    setSelectChepThree(false);
                    setSelectChepFive(false);
                    setSelectChepFour(true);
                  }}
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                      • IT TAKES TWO TO CONSPIRE
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
                    selectChepFive ||
                    (prevLocation.pathname == "/chepFive" &&
                      location.pathname == "/dropDown")
                      ? "dropDownMobHeader1"
                      : "dropDownMobHeader"
                  }
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/chepFive");
                    setSelectChepTwo(false);
                    setSelectChepOne(false);
                    setSelectMainPage(false);
                    setSelectChepThree(false);
                    setSelectChepFive(true);
                    setSelectChepFour(false);
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
                      • WE ARE ARGENTINES ARE RIGHT AND HUMAN
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
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DropDownForDesktop;
