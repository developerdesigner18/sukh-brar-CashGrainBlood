import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import chepData from "../chepter.json";
import { useNavigate } from "react-router-dom";
import { AOS } from "aos";
const CardComponent = ({ opcity }) => {
  // AOS.startEvent;
  // AOS.refresh();
  // AOS.init();
  const navigate = useNavigate();
  console.log(chepData);

  const cardMobView = chepData.map((data, index) => {
    return (
      <div
        className="cardBannerContainer1"
        data-aos="fade-in"
        key={index}
        style={{ marginTop: 15 }}
        onClick={() => {
          navigate(`/${data.routing}`);
        }}
      >
        <div className="bannerContainer1">
          <div className="cardBannerImage1">
            <Image src={data.chepImage} style={{ width: "100%" }} />
          </div>
          <Container>
            <div
              className="cardBannerText1"
              style={{ top: "134px", left: "35px", textAlign: "left" }}
            >
              <p
                style={{
                  fontFamily: "StardosBold",
                  color: "white",
                  fontSize: "12px",

                  paddingTop: 1,
                  background: "#20B5F7",
                  width: 76,
                  textAlign: "center",
                  height: 17,
                  marginBottom: 8,
                }}
                data-aos="fade-up"
              >
                {data.ChepMob}
              </p>

              <p
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1,

                  fontSize: "28px",
                  textAlign: "justify",
                  marginBottom: 0,
                }}
                data-aos="fade-up"
              >
                {data.chepTitleFirstHalf} <br /> {data.chepTitleSecondHalf}{" "}
                <br></br>
              </p>

              <Image
                src="./images/verticalDivider.png"
                style={{ paddingBottom: 18, width: 171 }}
                data-aos="fade-up"
              />
            </div>
          </Container>
        </div>
      </div>
    );
  });
  return <React.Fragment>{cardMobView}</React.Fragment>;
};

export default CardComponent;
