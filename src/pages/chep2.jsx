import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import ChepTwoCard from "../component/chep2card";
import "./chep2.css";
const ChapterTwo = () => {
  return (
    <React.Fragment>
      <div className="holder">
        <div className="chepTwoBanner">
          <Container>
            <h1 className="bannerHeader">
              MATTERS <br /> ON THE PITCH
            </h1>
            <p className="bannerDesc">
              When the tournament kicked off in June 1978, Argentina was in the
              thick of its bloody military dictatorship. However, there were
              players and coaches who just wanted to play the game and represent
              the country they loved.
            </p>
          </Container>
          <Image
            className="bannerStripe"
            src="./images/chep2/vertical_stripe.png"
          />
        </div>
        <div className="tableHeader">
          <Container>
            <p
              className="tableHeaderText"
              style={{
                paddingLeft: 10,
                marginBottom: 0,
                fontSize: 18,
                fontFamily: "StardosBold",
              }}
            >
              CHAPTER 2: FROM HOST TO JUNTA 1-4
            </p>
          </Container>
        </div>
        <div className="chepDesc">
          <Row
            style={{
              padding: "30px 0px",
              width: 800,
              marginRight: 0,
              marginLeft: 118,
            }}
          >
            <Col>
              <p className="descText">
                “It was a cold but sunny day, and as the doves flapped up and
                out of the stadium, they could be seen from the infamous Navy
                Superior Mechanics School, or ESMA, a cluster of buildings less
                than a mile away where thousands of people were being tortured.”
                <br />
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
        {/*---------------------------------- cards-- -------------------------------------*/}
        <ChepTwoCard />
      </div>
    </React.Fragment>
  );
};

export default ChapterTwo;
