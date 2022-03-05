import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ChepOneCard from "../component/chep1Card";
import "./dropDownForDesktop.css";
const DropDownForDesktop = () => {
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
                <div className="dropDownDeskHeader">
                  <Container>
                    <p
                      style={{
                        paddingLeft: 10,
                        marginBottom: 36,
                        fontSize: 18,
                        fontFamily: "StardosBold",
                      }}
                    >
                      CHAPTERS 1-5
                    </p>
                  </Container>
                </div>
                <div
                  className="dropDownDeskHeader"
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
                  className="dropDownDeskHeader"
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
                  className="dropDownDeskHeader"
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
                  className="dropDownDeskHeader"
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
                  className="dropDownDeskHeader"
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
                  className="dropDownDeskHeader"
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
