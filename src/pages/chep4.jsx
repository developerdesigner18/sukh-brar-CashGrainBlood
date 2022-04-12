import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChepThreeCard from "../component/chep3Card";
import ChepFourCard from "../component/chep4Card";
import "./chep4.css";
const ChapterFour = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="holderFour">
        <div
          className="chepFourBanner"
          data-aos="fade-out"
          data-aos-anchor-placement="center-bottom"
        >
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
          <Container>
            <h1
              className="bannerHeaderFour"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              IT TAKES <br /> TWO TO <br /> CONSPIRE
            </h1>
            <p
              className="bannerDescFour"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              There were countless rumors of match fixing by the Argentine
              Junta. However, it takes more than one player to make a
              conspiracy. Leading journalists and politicians came forward to
              implicate both the Argentine and Peruvian governments.
            </p>
          </Container>
          <Image
            className="bannerStripeFour"
            src="./images/chep2/vertical_stripe.png"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
        <div
          className="tableHeaderFour"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Container>
            <p
              className="tableHeaderTextFour"
              style={{
                paddingLeft: 10,
                marginBottom: 0,
                fontSize: 18,
                fontFamily: "StardosBold",
              }}
            >
              CHAPTER FOUR: IT TAKES TWO TO CONSPIRE
            </p>
          </Container>
        </div>
        <div
          className="chepDescFour"
          data-aos="fade-out"
          data-aos-anchor-placement="center-bottom"
        >
          <Row
            style={{
              padding: "30px 0px",
              width: 800,
              marginRight: 0,
              marginLeft: 118,
            }}
          >
            <Col>
              <p
                className="descTextFour"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                “A severe authoritarian with cold staring eyes, Videla was not a
                fan of soccer, which he found dull and pedestrian and
                interesting only as a “symbol of popular transcendence.” But he
                also understood how immensely popular it was, a source of
                passion for millions of Argentines.”
                <span
                  style={{
                    fontFamily: "HelveticaNeue-CondensedBold",
                    fontSize: 18,
                    textTransform: "uppercase",
                    color: "#20C5F7",
                  }}
                >
                  — DAVID YALLOP,
                  <br /> JOURNALIST
                </span>
              </p>
            </Col>
          </Row>
        </div>
        {/*---------------------------------- cards-- -------------------------------------*/}
        <ChepFourCard />
      </div>
    </React.Fragment>
  );
};

export default ChapterFour;
