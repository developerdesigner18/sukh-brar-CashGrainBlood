import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import Card_component from "../component/card";
import "./homePage.css";
import chepData from "../chepter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const HomePage = () => {
  const navigate = useNavigate();
  console.log(chepData);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="homePageBannerContainer">
        <div className="bannerContainer">
          <div
            className="homePageBannerImage"
            data-aos="fade-out"
            data-aos-anchor-placement="center-bottom"
          >
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
            className="homePageBannerStripe"
            style={{ top: "96px", bottom: "65px" }}
          >
            <Image
              src="vertical_stripe.svg"
              fluid
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            />
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
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                CASH <br /> GRAIN,
                <br /> AND <br /> BLOOD <br /> FOR GOALS
              </h1>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
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
        <div
          className="tableHeader"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
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
