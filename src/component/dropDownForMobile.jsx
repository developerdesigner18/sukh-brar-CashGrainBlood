import React from "react";
import { Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import "./dropDownForMobile.css";
import { AOS } from "aos";

const DropDownForMobile = ({ prevLocation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  AOS.init({
    duration: 1000,
    delay: 200,
  });
  return (
    <React.Fragment>
      <div className="dropDownMobContainer">
        <div className="bannerContainer">
          <div className="dropDownMobImage"></div>

          <div
            className="dropDownMobText"
            style={{ top: "48px", left: "0px", right: 179 }}
          >
            <div
              className="dropDownMobHeader"
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
            {console.log(prevLocation.pathname)}
            <div
              className={
                prevLocation.pathname == "/"
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

              <div style={{ marginRight: 26 }}>
                <Image
                  src="./images/forwardArrowBlack.svg "
                  style={{ marginBottom: 5 }}
                />
              </div>
            </div>

            <div
              className={
                prevLocation.pathname == "/chepOne"
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
                prevLocation.pathname == "/chepTwo"
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
                prevLocation.pathname == "/chepThree"
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
                prevLocation.pathname == "/chepFour"
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
                prevLocation.pathname == "/chepFive"
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
      </div>
    </React.Fragment>
  );
};
export default DropDownForMobile;
