import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ChepOneCard from "./chep1Card";
import "./dropDownForMobile.css";
const DropDownForMobile = () => {
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
                />
              </div>
            </div>
            <div
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
              className="dropDownMobHeader"
              style={{
                marginBottom: 4,
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
                  • WE ARE ARGENTINES ARE...
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
