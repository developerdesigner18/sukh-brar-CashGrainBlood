import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChepFiveMobCard from "../component/chep5MobCard";
import "./chep5MobView.css";
const Chep5MobView = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="chepFiveHolder">
        <div>
          <Row style={{ backgroundColor: "#20C5F7", marginRight: 0 }}>
            <Col
              lg={8}
              sm={8}
              md={8}
              xs={8}
              style={{
                background: "#20C5F7",
                padding: "7px 0px 5px 34px",
                height: 34,

                fontFamily: "StardosBold",

                fontSize: 17,
                color: "white",
              }}
            >
              5: WE ARGENTINES ARE…
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
                  fontFamily: "HelveticaNeue-CondensedBold",
                  paddingLeft: 10,
                  width: 124,
                  fontSize: 15,
                  paddingTop: 5,
                  height: 34,
                }}
                onClick={() => {
                  navigate("/dropDown");
                }}
              >
                CHAPTERS
                <Image
                  src="./images/chep1/arrow.svg"
                  style={{ marginLeft: 5 }}
                />
              </Button>
            </Col>
          </Row>
        </div>
        <div className="mobBannerFive">
          <Container>
            <div className="textHolderFive">
              <button className="bannerButtonFive">CHAPTER 5</button>
              <h1 className="bannerTitleFive">
                “WE ARGENTINES <br /> ARE RIGHT <br />
                AND HUMAN”{" "}
                <span
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    color: "#20c5f7",
                    fontSize: 11,
                    textAlign: "left",
                    wordSpacing: 0,
                  }}
                >
                  - OSVALDO {"    "}ARDILES
                </span>
              </h1>
              <p className="bannerTextFive">
                A quote from Osvaldo Ardiles when questioned about his knowledge
                of the Argentine Junta’s atrocities against the people of
                Argentina. Some were more “human” than others as time and the
                truth revealed itself.
              </p>
            </div>
          </Container>
          <div className="gettyImageFive">
            <Image
              src="./images/gettyimages.png"
              width={"100%"}
              style={{ width: 104, height: 25 }}
            />
          </div>
          <div className="stripBannermainFive">
            <Image
              src="./images/chep2/vertical_stripeForBanner.png"
              style={{ width: 16, height: 413 }}
            />
          </div>
        </div>
        <div className="journalistBannerFive">
          <Row style={{ margin: "0px auto" }}>
            {/* image column */}
            <Col
              xs={5}
              sm={5}
              style={{ marginLeft: 30, paddingLeft: 0, paddingRight: 0 }}
            >
              <Image
                src="./images/chep5/will_hersey.png"
                fluid
                style={{ width: 120, height: 120 }}
                // style={{ marginTop: 40 }}
              />
            </Col>
            {/* text-column */}
            <Col xs={4} sm={4} style={{ padding: 0, marginTop: 8 }}>
              <Row xs={6} sm={6} style={{ marginBottom: 2 }}>
                <Image
                  src="./images/imgArrow.svg"
                  style={{ width: 20.75, height: 13.14, padding: 0 }}
                  fluid
                />
              </Row>
              <Row style={{ width: 164 }}>
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
                  WILL HERSEY
                </p>
                <p
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 12,
                    color: "#20C5F7",
                    textAlign: "left",
                    padding: 0,
                    letterSpacing: 0,
                  }}
                >
                  @willhersey <br /> Content Director — Esquire (UK) Esquire
                  (UK), MSN South Africa, MSN UK, Yahoo News Malaysia, Esquire.
                </p>
              </Row>
            </Col>
          </Row>
          {/* description Text */}
          <div style={{ paddingLeft: 0, width: 332, margin: "30px auto 0px" }}>
            <h4 className="descTextJournalistFive">
              It’s estimated that a total of{" "}
              <span style={{ color: "#20C5F7" }}>
                30,000 people were killed in its seven-year reign,
              </span>{" "}
              with 5,000 abducted and held captive at the Navy Petty-Officers
              School of Mechanics and an unknown number going “missing” even as
              the tournament was played out.
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
                - WILL HERSEY, CONTENT DIRECTOR, ESQUIRE UK
              </span>
            </h4>
          </div>
        </div>
        {/* -----------------------cards Chapter Two------------------------ */}
        <ChepFiveMobCard />
      </div>
    </React.Fragment>
  );
};

export default Chep5MobView;
