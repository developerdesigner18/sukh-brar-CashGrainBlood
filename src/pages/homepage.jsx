import React from "react";
import { Container, Image } from "react-bootstrap";
import Card_component from "../component/card";
import "./homePage.css";
import chepData from "../chepter";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const HomePage = () => {
  console.log(chepData);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="homePageBannerContainer">
        <div className="bannerContainer">
          <div className="homePageBannerImage">
            <Image src="./images/gettyimages.png" className="gettyImage" />
          </div>
          <div
            className="homePageBannerStripe"
            style={{ top: "96px", bottom: "65px" }}
          >
            <Image src="vertical_stripe.svg" fluid />
          </div>
          <Container>
            <div
              className="homePageBannerText"
              style={{ top: "196px", left: "140px", right: 179 }}
            >
              <h1
                style={{
                  wordBreak: "break-all",
                  fontSize: "74px",
                  fontFamily: "StardosBold",
                  lineHeight: 1,
                }}
              >
                CASH <br /> GRAIN,
                <br /> AND <br /> BLOOD <br /> FOR GOALS
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: 20,
                  fontFamily: "HelveticaNeue-Bold",
                  width: 443,
                  height: 192,
                }}
              >
                Before a ball was kicked, domestic politics, the repression of
                civilians and the military junta’s ambitions cast a long shadow
                over the 1978 World Cup.
              </p>
            </div>
          </Container>
        </div>
        <div className="tableHeader">
          <Container>
            <b style={{ paddingLeft: 10 }}>TABLE CONTENTS</b>
          </Container>
        </div>
        <div className="tableContainer">
          <Card_component chepData={chepData} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
