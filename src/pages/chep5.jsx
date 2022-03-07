import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChepThreeCard from "../component/chep3Card";
import ChepFiveCard from "../component/chep5Card";
import "./chep5.css";
const ChapterFive = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="holderFive">
        <div className="chepFiveBanner">
          <Button
            style={{
              background: "#20C5F7",
              border: "2px solid #20C5F7",
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
              fontFamily: "StardosBold",
              paddingLeft: 10,
              width: 167,
              paddingTop: 0,
              fontSize: 16,
              height: 27,
              right: 59,
              top: 0,
              position: "absolute",
            }}
            onClick={() => {
              navigate("/dropDown");
            }}
          >
            CHAPTERS 1-5
            <Image
              src="./images/chep1/arrow.svg"
              style={{ marginLeft: 8, paddingBottom: 4 }}
            />
          </Button>
          <Container>
            <h1 className="bannerHeaderFive">
              “WE
              <br /> ARGENTINES <br /> ARE RIGHT <br />
              AND HUMAN”
            </h1>
            <p className="bannerDescFive">
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
        </div>
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
              <p className="descTextFive">
                “It’s estimated that a total of 30,000 people were killed in its
                seven-year reign, with 5,000 abducted and held captive at the
                Navy Petty-Officers School of Mechanics and an unknown number
                going “missing” even as the tournament was played out.”
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
        {/*---------------------------------- cards-- -------------------------------------*/}
        <ChepFiveCard />
      </div>
    </React.Fragment>
  );
};

export default ChapterFive;