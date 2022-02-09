import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homePageBannerContainer">
      <div className="homePageBannerImage">
        <Image
          src="homePageBanner.png"
          width={"100%"}
          alt="homePageBanner"
          fluid
        />
      </div>
      <div className="homePageBannerStripe" style={{ top: "96px" }}>
        <Image src="vertical_stripe.png" fluid />
      </div>
      <Container>
        <div
          className="homePageBannerText"
          style={{ top: "196px", left: "140px" }}
        >
          <h1
            style={{
              wordBreak: "break-all",
              fontSize: "74px",
              fontFamily: "Arial",
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
            civilians and the military junta’s ambitions cast a long shadow over
            the 1978 World Cup.
          </p>
        </div>
      </Container>
      <div className="tableHeader">
        <Container>
          <b style={{ paddingLeft: 10 }}>TABLE CONTENTS</b>
        </Container>
      </div>
      <div className="tableContainer"></div>
    </div>
  );
};

export default HomePage;
