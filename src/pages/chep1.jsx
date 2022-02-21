import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ChepOneCard from "../component/chep1Card";
import "./chep1.css";
const Chep1 = () => {
  return (
    <React.Fragment>
      <div className="chepOnePageBannerContainer">
        <div className="bannerContainer">
          <div className="chepOneBannerImage">
            <Image src="./images/gettyimages.png" className="gettyImage" />
          </div>
          <div
            className="chepOneBannerStripe"
            style={{ top: "96px", bottom: "65px" }}
          >
            <Image src="vertical_stripe.png" fluid />
          </div>
          <Container>
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
                  width: 443,
                  height: 192,
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "Helvetica Neue",
                }}
              >
                Before a ball was kicked, domestic politics, the repression of
                civilians and the military junta’s ambitions cast a long shadow
                over the 1978 World Cup
              </p>
            </div>
          </Container>
        </div>
        <div className="chepOnetableHeader">
          <Container>
            <p
              style={{
                paddingLeft: 10,
                marginBottom: 0,
                fontWeight: "bold",
                fontSize: 18,
                fontFamily: "Stardos Stencil",
              }}
            >
              CHAPTER 2: FROM HOST TO JUNTA 1-6
            </p>
          </Container>
        </div>
        <div className="chepOneBodyBackImage">
          <Row
            style={{
              color: "white",
              width: 800,

              margin: "0px auto",
              padding: "30px 0px",
            }}
          >
            <Col>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  fontFamily: "Stardos Stencil",
                  textAlign: "justify",
                  lineHeight: 1.5,
                  marginBottom: 0,
                }}
              >
                “Holding the tournament will show the world that Argentina is a
                trustworthy country, capable of carrying out huge projects; and
                will help push back against the criticism that is raining on us
                from around the world”
                <span
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontSize: 18,
                    textTransform: "uppercase",
                    color: "#20C5F7",
                  }}
                >
                  -Admiral Emilio Massera, MEMBER OF THE MILITARY JUNTA
                </span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="chepOneCardHolder">
          <ChepOneCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chep1;
