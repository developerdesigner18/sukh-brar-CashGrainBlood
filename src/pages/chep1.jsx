import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ChepOneCard from "../component/chep1Card";
import "./chep1.css";
const Chep1 = () => {
  return (
    <React.Fragment>
      <div className="chepOnePageBannerContainer">
        <div className="bannerContainer">
          <div className="chepOneBannerImage"></div>
          <div
            className="chepOneBannerStripe"
            style={{ top: "96px", bottom: "65px" }}
          >
            <Image src="vertical_stripe.png" fluid />
          </div>

          <div
            className="chepOneBannerText"
            style={{ top: "237px", left: "140px", right: 179 }}
          >
            <h1
              style={{
                wordBreak: "break-all",
                fontSize: "74px",
                fontFamily: "Stardos Stencil",
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              FROM HOST
              <br /> TO JUNTA
            </h1>
            <p
              style={{
                textAlign: "left",
                float: "left",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Helvetica Neue",
              }}
            >
              Before a ball was kicked, domestic politics, <br /> the repression
              of civilians and the military <br /> junta’s ambitions cast a long
              shadow over the <br /> 1978 World Cup
            </p>
          </div>
        </div>
        <div className="chepOnetableHeader">
          <Container>
            <b style={{ paddingLeft: 10 }}>CHAPTER 2: FROM HOST TO JUNTA 1-6</b>
          </Container>
        </div>
        <div className="chepOneBodyBackImage">
          <Row style={{ color: "white" }}>
            <Col lg={8} md={10} style={{ paddingLeft: 110 }}>
              <p
                style={{
                  fontFamily: "Stardos Stencil",
                  textAlign: "justify",
                  lineHeight: 2,
                  marginBottom: 0,
                }}
              >
                “Holding the tournament will show the world that Argentina is a
                trustworthy country, capable of carrying out huge projects; and
                will help push back against the criticism that is raining on us
                from around the world”
                <span
                  style={{ fontFamily: "Helvetica Neue", color: "#20C5F7" }}
                >
                  - Admiral Emilio Massera, MEMBER OF THE MILITARY JUNTA
                </span>
              </p>
            </Col>
            <Col lg={2} md={1}></Col>
          </Row>
        </div>
        <div className="chepOneCardHolder">
          <ChepOneCard />
        </div>
        <div className="chepOneAdHeader">
          <Container>
            <b style={{ paddingLeft: 10 }}>
              <Image
                src="./images/chep1/amazon.png"
                fluid
                style={{ marginRight: 5, paddingTop: 10 }}
              />{" "}
              BOOK RECOMMENDATIONS
            </b>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chep1;
