import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import { Container, Image } from "react-bootstrap";
import MobCard from "./cardMob";

import "./homepageMobile.css";
import { useNavigate, useLocation } from "react-router-dom";

const HomePageMob = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
          <Col
            lg={8}
            sm={8}
            md={8}
            xs={8}
            style={{
              background: "#20C5F7",
              paddingLeft: 35,
              paddingTop: 7,
              height: 34,
              paddingBottom: 5,
              fontFamily: "StardosBold",
              fontSize: 17,
              color: "white",
            }}
          >
            MAIN PAGE
          </Col>
          <Col
            lg={4}
            sm={4}
            md={4}
            xs={4}
            style={{ paddingRight: 0, paddingLeft: 0, textAlign: "right" }}
          >
            <Button
              style={{
                background: "#F78320",
                border: "2px solid #F78320",
                borderBottomLeftRadius: 9,
                fontFamily: "Helvetica Neue",
                paddingLeft: 10,
                width: 124,
                fontSize: 14,
                paddingTop: 5,
                height: 34,
              }}
              onClick={() => {
                navigate("/dropDown");
              }}
            >
              CHAPTERS
              <img src="./images/chep1/arrow.svg" />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="homePageBannerContainer1">
        <div className="bannerContainer1">
          <div className="homePageBannerImage1"></div>
          <div
            className="homePageBannerStripe1"
            style={{ top: "235px", left: "-23px" }}
          >
            <Image src="vertical_stripe.png" style={{ height: "400px" }} />
          </div>
          <Container>
            <div
              className="homePageBannerText1"
              style={{ top: "357px", left: "35px" }}
            >
              <h1
                style={{
                  wordBreak: "break-all",
                  fontFamily: "StardosBold",
                  lineHeight: 1,
                  fontSize: "40px",
                  textAlign: "justify",
                }}
              >
                CASH, GRAIN,
                <br /> AND BLOOD <br /> FOR GOALS
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  fontFamily: "HelveticaNeue-Bold",
                  textAlign: "justify",
                }}
              >
                Before a ball was kicked, domestic politics, <br /> the
                repression of civilians and the military <br /> junta’s
                ambitions cast a long shadow over <br></br> the 1978 World Cup.
              </p>
              <a href="#" style={{ textAlign: "left", marginRight: 195 }}>
                <Image src="./images/Group 514.svg"></Image>
              </a>
            </div>
          </Container>
        </div>
      </div>
      <div className="cardContainer" style={{ paddingBottom: 15 }}>
        <MobCard />
      </div>
    </div>
  );
};

export default HomePageMob;
