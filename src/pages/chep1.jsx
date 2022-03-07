import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import ChepOneCard from "../component/chep1Card";
import "./chep1.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Chep1 = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <div className="chepOnePageBannerContainer">
        <div className="bannerContainer">
          <div className="chepOneBannerImage">
            <Image src="./images/gettyimages.png" className="gettyImage" />
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
              <h1 className="chepOneTitleText" style={{}}>
                FROM HOST
                <br /> TO JUNTA
              </h1>
              <p className="chepOneSubTitleText">
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
              className="animationText"
              style={{
                paddingLeft: 10,
                marginBottom: 0,
                fontSize: 18,
                fontFamily: "StardosBold",
              }}
            >
              CHAPTER 2: FROM HOST TO JUNTA 1-6
            </p>
          </Container>
        </div>
        <div className="chepOneBodyBackImage animationImage">
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
                className="animationText"
                style={{
                  fontSize: 24,
                  fontFamily: "StardosBold",
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
                    fontFamily: "HelveticaNeue-CondensedBold",
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
