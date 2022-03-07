import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ChepThreeCard from "../component/chep3Card";
import "./chep3.css";
const ChapterThree = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="holderThree">
        <div className="chepThreeBanner">
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
            <h1 className="bannerHeaderThree">
              SCOPE <br /> FOUR <br /> OR ELSE
            </h1>
            <p className="bannerDescThree">
              With a lackluster performance in the second group stage, Argentina
              needed a massive result against the in-form Peru.
            </p>
          </Container>
          <Image
            className="bannerStripeThree"
            src="./images/chep2/vertical_stripe.png"
          />
        </div>
        <div className="tableHeaderThree">
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
        <div className="chepDescThree">
          <Row
            style={{
              padding: "30px 0px",
              width: 800,
              marginRight: 0,
              marginLeft: 118,
            }}
          >
            <Col>
              <p className="descTextThree">
                “If a team could kick it’s way to a World Cup then I would pick
                just such a side, but it’s no longer possible. Such methods are
                obsolete. The emphasis must be on skill.”
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
        {/*---------------------------------- cards-- -------------------------------------*/}
        <ChepThreeCard />
      </div>
    </React.Fragment>
  );
};

export default ChapterThree;
