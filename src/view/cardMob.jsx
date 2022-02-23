import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import chepData from "../chepter.json";
import { useNavigate } from "react-router-dom";

const CardComponent = () => {
  const navigate = useNavigate();
  console.log(chepData);

  const cardMobView = chepData.map((data, index) => {
    return (
      <div
        className="cardBannerContainer1"
        key={index}
        style={{ marginTop: 15 }}
        onClick={() => {
          navigate("/chepOne");
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
              <h1
                style={{
                  fontFamily: "StardosBold",
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",

                  background: "#20B5F7",
                  width: 76,
                  paddingTop: 2,
                  height: 17,
                }}
              >
                {data.ChepMob}
              </h1>
              <small
                style={{
                  fontFamily: "StardosBold",
                  lineHeight: 1,

                  fontSize: "28px",
                  textAlign: "justify",
                }}
              >
                {data.chepTitleFirstHalf} <br /> {data.chepTitleSecondHalf}{" "}
                <br></br>
              </small>

              <Image
                src="./images/verticalDivider.png"
                style={{ paddingBottom: 18, width: 171 }}
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