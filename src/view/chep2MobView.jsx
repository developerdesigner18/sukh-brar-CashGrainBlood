import React from "react";
import { Container } from "react-bootstrap";
import "./chep2MobView.css";
const ChepTwo = () => {
  return (
    <React.Fragment>
      <div className="chepTwoHolder">
        <div className="mobBanner">
          <Container>
            <div className="textHolder">
              <button className="bannerButton">CHAPTER 2</button>
              <h1 className="bannerTitle">
                MATTERS <br /> ON THE <br /> PITCH
              </h1>
              <p className="bannerText">
                When the tournament kicked off in June 1978, Argentina was in
                the thick of its bloody military dictatorship. However, there
                were players and coaches who just wanted to play the game and
                represent the country they loved.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChepTwo;
