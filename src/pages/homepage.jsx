import React from "react";
import { Container, Image } from "react-bootstrap";
import Card_component from "../component/card";
import "./homePage.css";
import chepData from "../chepter";

const HomePage = () => {
  console.log(chepData);
  return (
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
                fontFamily: "Stardos Stencil",
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              CASH <br /> GRAIN,
              <br /> AND <br /> BLOOD <br /> FOR GOALS
            </h1>
            <p
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Helvetica Neue",
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
  );
};

export default HomePage;
