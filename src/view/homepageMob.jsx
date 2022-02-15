import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import { Container, Image } from "react-bootstrap";
import MobCard from "./cardMob";

import "./homepageMobile.css";

const HomePageMob = () => {
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
              paddingTop: 6,
              paddingBottom: 5,
              fontFamily: "Stardos Stencil",
              fontWeight: "bold",
              fontSize: 17,
              color: "white",
            }}
          >
            MAIN PAGE
          </Col>
          <Col lg={4} sm={4} md={4} xs={4} style={{ paddingRight: 0 }}>
            <Button
              style={{
                width: "100%",
                background: "#F78320",
                border: "1px solid #F78320",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
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
                  fontFamily: "Stardos Stencil",
                  lineHeight: 1,
                  fontWeight: "bold",
                  fontSize: "40px",
                  textAlign: "justify",
                }}
              >
                CASH GRAIN,
                <br /> AND BLOOD <br /> FOR GOALS
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  fontWeight: "bold",
                  fontFamily: "Helvetica Neue",
                  textAlign: "justify",
                }}
              >
                Before a ball was kicked, domestic politics, <br /> the
                repression of civilians and the military <br /> junta’s
                ambitions cast a long shadow over
              </p>
            </div>
          </Container>
        </div>
      </div>
      <MobCard />
    </div>
  );
};

export default HomePageMob;
