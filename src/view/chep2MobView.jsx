import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import ChepTwoMobCard from "../component/chep2MobCard";
import "./chep2MobView.css";
const ChepTwo = () => {
  return (
    <React.Fragment>
      <div className="chepTwoHolder">
        <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
          <Col lg={8} sm={8} md={8} xs={8}>
            <p className="headingBannerText">2: MATTERS ON THE PITCH</p>
          </Col>
          <Col
            lg={4}
            sm={4}
            md={4}
            xs={4}
            style={{ paddingRight: 0, paddingLeft: 0, textAlign: "right" }}
          >
            <button
              className="headingBannerBtn"
              // style={{ background: "#f78320", border: "2px solid #F78320" }}
            >
              CHAPTERS
              <img src="./images/chep1/arrow.svg" />
            </button>
          </Col>
        </Row>
        <div className="mobBanner">
          <Container>
            <div className="textHolder">
              <button className="bannerButton">CHAPTER 2</button>
              <h1 className="bannerTitle">
                MATTERS <br /> ON THE <br /> PITCH
              </h1>
              <p className="bannerText">
                When the tournament kicked off in June 1978, Argentina was in
                the thick of its bloody military dictatorship. However, there
                were players and coaches who just wanted to play the game and
                represent the country they loved.
              </p>
            </div>
          </Container>
          <div className="gettyImage">
            <Image
              src="./images/gettyimages.png"
              width={"100%"}
              style={{ width: 104, height: 25 }}
            />
          </div>
          <div className="stripBannermain">
            <Image
              src="./images/chep2/vertical_stripeForBanner.png"
              style={{ width: 16, height: 413 }}
            />
          </div>
        </div>
        <div className="journalistBanner">
          <Row style={{ margin: "0px auto" }}>
            {/* image column */}
            <Col
              xs={5}
              sm={5}
              style={{ marginLeft: 30, paddingLeft: 0, paddingRight: 0 }}
            >
              <Image
                src="./images/chep2/emsa.png"
                fluid
                style={{ width: 120, height: 120 }}
                // style={{ marginTop: 40 }}
              />
            </Col>
            {/* text-column */}
            <Col xs={4} sm={4} style={{ padding: 0, marginTop: 8 }}>
              <Row xs={6} sm={6}>
                <Image
                  src="./images/imgArrow.svg"
                  style={{ width: 20.75, height: 13.14, padding: 0 }}
                  fluid
                />
              </Row>
              <Row>
                <p
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 12,
                    textAlign: "left",
                    padding: 0,
                    textTransform: "uppercase",
                    color: "white",
                    marginBottom: 0,
                  }}
                >
                  ESMA OF THE NAVY
                </p>
              </Row>
              <Row style={{ width: 174 }}>
                <p
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 12,
                    color: "#20C5F7",
                    textAlign: "left",
                    padding: 0,
                    letterSpacing: 0,
                    width: 197,
                  }}
                >
                  The Higher School of Mechanics of the Navy. It was used as an
                  illegal, secret detention center during the Dirty War of
                  military dictatorship.
                </p>
              </Row>
            </Col>
          </Row>
          {/* description Text */}
          <div style={{ paddingLeft: 0, width: 332, margin: "30px auto 0px" }}>
            <h4 className="descTextJournalist">
              “It was a cold but sunny day, and as the doves flapped up and out
              of the stadium, they could be seen from the infamous Navy Superior
              Mechanics School, or ESMA, a cluster of buildings less than{" "}
              <span style={{ color: "#20C5F7" }}>
                a mile away where thousands of people
              </span>{" "}
              were being tortured.”
              <br />
              <span
                style={{
                  color: "#20C5F7",
                  fontFamily: "HelveticaNeue-CondensedBold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                - KEN BESINGER, JOURNALIST
              </span>
            </h4>
          </div>
        </div>

        {/* -----------------------cards Chapter Two------------------------ */}
        <ChepTwoMobCard />
      </div>
    </React.Fragment>
  );
};

export default ChepTwo;
