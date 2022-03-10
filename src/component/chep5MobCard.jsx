import React from "react";
import { Container, Image } from "react-bootstrap";
import "./chep5MobCard.css";
const ChepFiveMobCard = () => {
  return (
    <React.Fragment>
      <div className="chepFiveMobcardHolder">
        {/* --------------cardOne----------------------- */}
        <Container style={{ paddingLeft: 36 }}>
          <div className="cardOneChepFive">
            <Container style={{ padding: 0 }}>
              <div
                className="row"
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
              >
                <p className="chepFiveCardOneIndex">01/01</p>

                <Image
                  src="./images/chep1/divider.png"
                  fluid
                  style={{
                    height: "5px",
                    width: 38,
                    padding: 0,
                    marginLeft: 0,
                  }}
                ></Image>
              </div>
            </Container>

            <div
              className="chepFiveCardOne"
              style={{
                marginRight: 2,
                padding: 5,
                marginLeft: 0,
                marginTop: 0,
                paddingLeft: 0,
              }}
            >
              <div className="row" style={{ padding: 0 }}>
                <Image
                  src="./images/forwardArrowBlack.svg"
                  style={{
                    width: 20,
                    marginLeft: 0,
                    padding: 0,
                    marginTop: 180,
                  }}
                />{" "}
              </div>
              <div className="row">
                <div className="row" style={{ padding: 0, width: 146 }}>
                  <p
                    style={{
                      marginLeft: 0,
                      lineHeight: "13px",
                      padding: 0,
                      color: "white",
                      marginTop: 4,
                      marginBottom: 0,
                      fontSize: 12,
                      fontFamily: "HelveticaNeue-CondensedBold",
                    }}
                  >
                    IMAGE:
                  </p>{" "}
                  <p className="chepFiveCardOneImgDesc">
                    Argentina goalkeeper Ubaldo Fillol (r) <br /> celebrates 3-1
                    victory with teammate.
                    <br />
                    <span style={{ color: "white" }}>
                      {" "}
                      SOURCE: GETTY IMAGES
                    </span>
                  </p>{" "}
                </div>
              </div>
              <div
                className="row"
                style={{
                  marginTop: 15.4,
                  marginLeft: 0,
                  marginRight: 0,

                  paddingRight: 0,
                  paddingLeft: 0,
                }}
              >
                <div
                  className="row"
                  style={{
                    paddingLeft: 0,
                    marginRight: 0,
                    marginTop: 20,
                  }}
                >
                  <p className="chepFiveCardOneTitle">
                    EXTRA TIME <br /> CHAMPIONS
                  </p>
                </div>

                <div
                  className="row"
                  style={{ width: 165.21, height: 9.21, paddingLeft: 0 }}
                >
                  <Image
                    src="./images/verticalDivider.png"
                    style={{ paddingLeft: 0, width: "100%", paddingRight: 0 }}
                    fluid
                  />
                </div>
                <div
                  className="row"
                  style={{
                    padding: 0,
                    marginTop: 10,
                    width: 254.87,
                    height: 212,
                  }}
                >
                  <p className="chepFiveCardOneDescText">
                    1–1 after 90 minutes; Argentina won in extra time 3–1.
                  </p>{" "}
                  <p
                    className="chepFiveCardOneDescText"
                    style={{ marginTop: 10 }}
                  >
                    The start of the final was mired in some controversy. The
                    Dutch accused the Argentines of using stalling tactics to
                    delay the match, which allowed tension to build in front of
                    a hostile Buenos Aires crowd.
                  </p>
                  <p
                    className="chepFiveCardOneDescText"
                    style={{ marginTop: 10 }}
                  >
                    The Netherlands refused to attend the post-match ceremonies.
                  </p>
                </div>
                <div className="row" style={{ paddingLeft: 0 }}>
                  <div className="col-1" style={{ padding: 0, marginRight: 5 }}>
                    <a role="button">
                      <Image
                        src="./images/btnImage.svg"
                        style={{
                          paddingLeft: 0,
                          marginLeft: 0,
                          width: 31.21,
                          height: 31.21,
                        }}
                        fluid
                      />
                    </a>
                  </div>
                  <div
                    className="col-10"
                    style={{
                      paddingLeft: 0,
                      marginLeft: 0,
                      color: "white",
                      textAlign: "left",
                      marginTop: 8,
                      fontFamily: "HelveticaNeue-Bold",
                      fontSize: 12,

                      paddingRight: 0,
                    }}
                  >
                    1978 FIFA World Cup Final
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="./images/chep5/vertical_stripe.png"
              style={{
                width: 17,
                height: 413,
                position: "absolute",
                top: 1556,
                right: 0,
              }}
            />
          </div>
        </Container>
      </div>
      {/* -----------------------cardTwo------------------------------------------------ */}
      <div className="cardTwoChepFive">
        <Image
          src="./images/chep5/dividerVertical.png"
          style={{
            width: "100%",
            position: "absolute",
            bottom: 556,
            height: 14.07,
            margin: 0,
            left: 0,
          }}
        />
        <Container style={{ padding: 0 }}>
          <div
            className="row"
            style={{
              width: 56,
              padding: "25px 0px 0px 0px",
              margin: "16.2px 0px 0px 36px",
            }}
          >
            <p className="chepTwoCardOneIndex" style={{ marginTop: 10 }}>
              01/02
            </p>
            <Image
              src="./images/chep1/divider.png"
              fluid
              style={{
                height: "5px",
                width: 46,
                padding: 0,
                marginLeft: 0,
              }}
            ></Image>
          </div>
        </Container>
        <div className="textLogoHolder">
          <div className="row" style={{ padding: 0, margin: 0 }}>
            {/* <div className="col" style={{ padding: 0 }}>
                <Image
                  className="cardTwoImageo1"
                  src="./images/chep5/cardThreeLogo01.png"
                  fluid
                />
              </div>
              <div className="col" style={{ padding: 0 }}>
                <Image
                  className="cardTwoImageo2"
                  src="./images/chep5/dutch_logo.png"
                  style={{ padding: 0 }}
                  fluid
                />
              </div> */}
          </div>
          <p className="logoName">
            1978 FIFA WORLD CUP FINAL <br /> ARGENTINA v. HOLLAND
          </p>
          {/* <Image
              className="cardTwoyoutbe"
              src="./images/chep1/YoutubeCard.svg"
              style={{ padding: 0 }}
              fluid
            />
            <Image
              className="cardTwoyoutbeName"
              src="./images/chep1/youtube.svg"
              style={{ padding: 0 }}
              fluid
            /> */}
        </div>
      </div>
      <Image
        src="./images/chep5/dividerVertical.png"
        style={{
          width: "-webkit-fill-available",

          height: 26,
          // position: "absolute",
          // top: 589,
          margin: 0,
          left: 0,
        }}
      />
      {/* ------------------------cardThree--------------------------- */}
      <div className="chepFiveCardThree">
        <div className="chep5cardThreeHeaderImage">
          {/* <Container style={{ padding: 0 }}>
              <div
                className="row"
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
              >
              </div>
            </Container> */}
          <div className="textHolderChepFive">
            <div
              className="row"
              style={{
                paddingLeft: 0,
                marginRight: 0,
              }}
            >
              <p className="chepFiveCardOneIndex">01/03</p>
              <Image
                src="./images/chep1/divider.png"
                fluid
                style={{
                  height: "5px",
                  width: 38,
                  padding: 0,
                  marginBottom: 5,
                }}
              ></Image>
              <p className="chepFiveCardOneTitle">
                “TOTAL FOOTBALL” <br /> GENERATION COMES <br /> TO AN END
              </p>
            </div>

            <div
              className="row"
              style={{
                width: 159.21,
                height: 9.21,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Image
                src="./images/verticalDivider.png"
                style={{ paddingLeft: 0, paddingRight: 0 }}
                fluid
              />
            </div>
          </div>
          <div
            className="gettyImageForCardFour"
            style={{ position: "absolute", right: 0, bottom: 0 }}
          >
            {/* <Image src="./images/chep5/gettyImage.png" /> */}
          </div>
        </div>
        <div className="chepFiveCardThreeDesc">
          <div className="row" style={{ marginTop: 8, marginRight: 0 }}>
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                width: 26.96,
                height: 20,
                padding: 0,
                marginTop: 11.2,
                marginLeft: 3,
              }}
            />
          </div>

          <div className="row" style={{ marginTop: 5, width: 207 }}>
            <p
              style={{
                textAlign: "left",
                marginTop: 2,
                fontFamily: "HelveticaNeue-CondensedBold",
                color: "white",
                fontSize: "14px",
                marginBottom: 0,
                paddingBottom: 0,
              }}
            >
              IMAGE:
            </p>
            <p className="chepFiveCardThreeDescimgDesc">
              With three lost finals (including World Cup 2010), the Dutch are
              World Cup history’s greatest nearly-men.
            </p>
          </div>
          <div className="chepFiveDesc">
            <p>
              Total Football – a style of play where any outfield player can
              take over the role of any other player in a team – was a Dutch
              invention that captured the imagination of the football world. It
              requires players to be comfortable in multiple positions; hence,
              it requires intelligent and technically diverse players.
            </p>
            <p>
              This was manifested beautifully by the great Johan Cruyff and the
              Dutch team at the 1974 World Cup in West Germany.
            </p>
            <p>
              The same style of football was played by the Dutch team in
              Argentina. Again they reached the final, and again they lost to
              the host nation.
            </p>
            <p>It truly was the end of a romantic era in European football.</p>
          </div>
        </div>
        <div
          className="container"
          style={{ margin: "0px 10px 0px 20px", width: "auto" }}
        >
          <div
            className="row"
            style={{
              paddingLeft: 0,
              marginTop: 0,
              marginBottom: 45.2,
            }}
          >
            <div
              className="col-1"
              style={{
                // paddingLeft: 0,
                width: 31.21,
                height: 31.21,
                padding: 0,
                marginLeft: 10,
                textAlign: "left",
              }}
            >
              <a role="button">
                <Image
                  src="./images/btnImage.svg"
                  style={{
                    // paddingLeft: 0,
                    marginTop: 0,
                    width: 31.21,
                    height: 31.21,
                  }}
                  fluid
                />
              </a>
            </div>
            <div
              className="col-10"
              style={{
                fontFamily: "HelveticaNeue-Bold",
                fontSize: 12,
                float: "left",

                color: "white",
                textAlign: "left",
                paddingTop: 7,
                paddingLeft: 5,
                paddingRight: 0,
              }}
            >
              Learn More About Total Football
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------cardFour---------------------------------- */}
      <div className="chepFiveCardFour">
        <div className="chep5cardFourHeaderImage">
          {/* <Container style={{ padding: 0 }}>
              <div
                className="row"
                style={{
                  width: 56,
                  padding: 0,
                  margin: 0,
                  marginTop: 10,
                }}
              >
              </div>
            </Container> */}
          <div className="textHolderChepFive">
            <div
              className="row"
              style={{
                paddingLeft: 0,
                marginRight: 0,
              }}
            >
              <p className="chepFiveCardOneIndex">01/04</p>
              <Image
                src="./images/chep1/divider.png"
                fluid
                style={{
                  height: "5px",
                  width: 38,
                  padding: 0,
                  marginBottom: 5,
                }}
              ></Image>
              <p className="chepFiveCardOneTitle">
                THE MALVINAS: <br /> THE BEGINNING <br /> OF THE END
              </p>
            </div>

            <div
              className="row"
              style={{
                width: 159.21,
                height: 9.21,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Image
                src="./images/verticalDivider.png"
                style={{ paddingLeft: 0, paddingRight: 0 }}
                fluid
              />
            </div>
          </div>
          <div
            className="gettyImageForCardFour"
            style={{ position: "absolute", right: 0, bottom: 0 }}
          >
            {/* <Image src="./images/chep5/gettyImage.png" /> */}
          </div>
        </div>
        <div className="chepFiveCardFourDesc">
          <div className="row" style={{ marginTop: 8 }}>
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                width: 26.96,
                height: 20,
                padding: 0,
                marginTop: 11.2,
                marginLeft: 3,
              }}
            />
          </div>

          <div className="row" style={{ marginTop: 5, width: 260 }}>
            <p
              style={{
                textAlign: "left",
                marginTop: 2,
                fontFamily: "HelveticaNeue-CondensedBold",
                color: "white",
                fontSize: "11px",
                marginBottom: 0,
                paddingBottom: 0,
              }}
            >
              IMAGE:
            </p>
            <p className="chepFiveCardFourDescimgDesc">
              Milva Lezcano, sister of soldier Angel Gonzalez, whose remains
              were recently identified by the Red Cross and rest at Darwin
              Cemetery in the Falkland Islands, attends a ceremony honoring the
              fallen in the South Atlantic conflict, on the thirty-sixth
              anniversary of the 1982 Falklands (Malvinas) War between Great
              Britain and Argentina, in Buenos Aires, on April 2, 2018.
            </p>
          </div>
          <div className="chepFiveDescCardFour">
            <p>
              On April 2, 1982 Argentine forces mounted amphibious landings,
              known as Operation Rosario, on the Falkland (Malvinas) Islands.
              This was disputed territory between Argentina and Great Britain.
            </p>
            <p>
              The British government dispatched a naval task force to engage the
              Argentine Navy and Air Force before making an amphibious assault
              on the islands.
            </p>
            <p>
              The conflict lasted 74 days and ended with an Argentine surrender
              on June 14, when the islands were returned to British control. The
              occupation was popular with the people of Argentina, but that
              support disappeared after the military defeat. It was the
              beginning of the end for the Junta.
            </p>
            <div
              className="row"
              style={{
                paddingLeft: 0,
                marginTop: 10,
              }}
            >
              <div
                className="col-1"
                style={{
                  width: 31.21,
                  height: 31.21,
                  padding: 0,
                  marginLeft: 10, // paddingLeft: 0,
                  textAlign: "left",
                }}
              >
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      // paddingLeft: 0,
                      marginTop: 0,
                      width: 31.21,
                      height: 31.21,
                    }}
                    fluid
                  />
                </a>
              </div>
              <div
                className="col-10"
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,
                  float: "left",

                  color: "white",
                  textAlign: "left",
                  paddingTop: 6,
                  paddingLeft: 5,
                  paddingRight: 0,
                }}
              >
                Learn More About The Falklands War
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------cardFive------------------------------- */}
      <div className="chepFiveCardFive">
        <div className="chep5cardFiveHeaderImage">
          <div className="textHolderChepFive">
            <div
              className="row"
              style={{
                paddingLeft: 0,
                marginRight: 0,
              }}
            >
              <p className="chepFiveCardOneIndex">01/05</p>
              <Image
                src="./images/chep1/divider.png"
                fluid
                style={{
                  height: "5px",
                  width: 38,
                  padding: 0,
                  marginBottom: 5,
                }}
              ></Image>
              <p className="chepFiveCardOneTitle">
                AND JUSTICE <br />
                FOR ALL
              </p>
            </div>

            <div
              className="row"
              style={{
                width: 159.21,
                height: 9.21,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Image
                src="./images/verticalDivider.png"
                style={{ paddingLeft: 0, paddingRight: 0 }}
                fluid
              />
            </div>
          </div>
          <div
            className="gettyImageForCardFive"
            style={{ position: "absolute", right: 0, bottom: 0 }}
          >
            {/* <Image src="./images/chep5/gettyImage.png" /> */}
          </div>
          {/* ------------------vertical Divider---------------------- */}
          <Image
            src="./images/chep5/dividerVertical.png"
            style={{
              position: "absolute",
              top: 631,
              width: "100%",
              height: 16,
            }}
          />
        </div>
        <div className="chepFiveCardFiveDesc">
          <div className="row" style={{ marginTop: 8 }}>
            <Image
              fluid
              src="./images/chep1/upArrow.svg"
              style={{
                width: 26.96,
                height: 20,
                padding: 0,
                marginTop: 11.2,
                marginLeft: 3,
              }}
            />
          </div>

          <div className="row" style={{ marginTop: 5, width: 242 }}>
            <p
              style={{
                textAlign: "left",
                marginTop: 2,
                fontFamily: "HelveticaNeue-CondensedBold",
                color: "white",
                fontSize: "11px",
                marginBottom: 0,
                paddingBottom: 0,
              }}
            >
              IMAGE:
            </p>
            <p className="chepFiveCardFiveDescimgDesc">
              Former Argentine dictator Jorge Videla (center) is escorted by
              police into the San Isidro court building in Buenos Aires, June
              11. On May 17, 2013, Videla was reported as having died of natural
              causes in his sleep while serving his sentence at Marcos Paz
              prison.
            </p>
          </div>
          <div className="chepFiveDescCardFive">
            <p>
              Former Argentine dictator Jorge Videla (center) is escorted by
              police into the San Isidro court building in Buenos Aires, June
              11.
            </p>
            <p>
              Videla was convicted of numerous homicides, kidnapping, torture,
              and many other crimes. He was sentenced to life imprisonment and
              was discharged from the military in 1985.
            </p>
          </div>
        </div>
        <Image
          src="./images/chep5/dividerVertical.png"
          style={{ width: "100%", height: 16 }}
        />
      </div>

      {/* ----------------------last-card------------------- */}

      <div className="chepFiveLastCard">
        <Container style={{ padding: 0 }}>
          <div
            className="row"
            style={{
              width: 56,
              padding: 0,
              margin: 0,
            }}
          >
            <p
              className="chepFiveCardLastIndex"
              style={{
                margin: "60.2px 34px 0px 36px",
              }}
            >
              01/06
            </p>
            <Image
              src="./images/chep1/divider.png"
              fluid
              style={{
                height: 5,
                width: 38,
                padding: 0,
                marginLeft: 36,
                marginBottom: 10,
              }}
            ></Image>
          </div>
        </Container>

        <div
          className="lastCardTitleHolder"
          style={{ marginLeft: 36, padding: 1 }}
        >
          <div
            className="row"
            style={{
              paddingLeft: 0,
              marginRight: 0,
            }}
          >
            <p
              className="chepFiveLastTitle"
              style={{ paddingLeft: 11, textTransform: "uppercase" }}
            >
              The Victims IN <br /> THEIR OWN WORDS
            </p>
          </div>

          <div
            className="row"
            style={{
              paddingLeft: 0,
              marginLeft: 0,
              marginTop: 5,
              marginRight: 0,
            }}
          >
            <Image
              src="./images/verticalDivider.png"
              style={{
                paddingLeft: 0,
                width: 231,
                height: 14,
                paddingRight: 0,
              }}
              fluid
            />
          </div>
          <p
            style={{
              color: "white",
              fontFamily: "StardosBold",
              fontSize: 14,
              width: 301,
              textAlign: "left",
              lineHeight: "23px",
            }}
          >
            “
            <span style={{ color: "#20c5f7" }}>
              When You Hear The Words ‘World Cup’
            </span>
            , It Reminds You Of What Happened.
            <span style={{ color: "#20c5f7" }}>
              It Reminds You Of The Disappeared, Of The Kidnappings, Of The
              Murders.
            </span>
            Everything Comes Together.”
            <span
              style={{
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 14,
              }}
            >
              <br /> – Taty Almeida, Mother Of The Missing
            </span>
          </p>
        </div>
        <div className="chepFiveLastCardDesc">
          <Image
            fluid
            src="./images/chep1/upArrow.svg"
            style={{
              height: 17.41,
              padding: 0,
              marginTop: 15,
            }}
          />

          <div className="chepFiveLastCardText" style={{ width: "auto" }}>
            <p
              style={{
                marginLeft: 0,
                padding: 0,
                color: "white",
                marginTop: 4,
                marginBottom: 0,
                fontSize: 12,
                fontFamily: "HelveticaNeue-CondensedBold",
              }}
            >
              IMAGE:
            </p>
            <p className="chepFivelastCardFirst">
              Taty Almeida said her son, Alejandro, had left on a Tuesday to
              take an exam and he never come home. Every Thursday, she went
              downtown to the Plaza de Mayo, which sits outside the presidential
              palace in the center of Buenos Aires, and protested in silence
              with other mothers of the disappeared.
            </p>
            <div
              className="row"
              style={{
                // paddingLeft: 0,
                margin: 0,
              }}
            >
              <div
                className="col-1"
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  textAlign: "left",
                  marginRight: 5,
                }}
              >
                <a role="button">
                  <Image
                    src="./images/btnImage.svg"
                    style={{
                      // paddingLeft: 0,
                      marginTop: 0,
                      width: 31.21,
                      height: 31.21,
                    }}
                    fluid
                  />
                </a>
              </div>
              <div
                className="col-10"
                style={{
                  fontFamily: "HelveticaNeue-Bold",
                  fontSize: 12,

                  color: "white",
                  textAlign: "left",
                  paddingTop: 7,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Hear The Victims In Their Own Words
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------verticalDivider---------------- */}

      <Image
        src="./images/chep5/dividerVertical.png"
        style={{ width: "100%", height: 16 }}
      />
    </React.Fragment>
  );
};

export default ChepFiveMobCard;
