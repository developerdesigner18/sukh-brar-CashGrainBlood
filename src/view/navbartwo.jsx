import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

const Navbar_title = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        style={{
          padding: "5px 0px 0px 15px",
          height: "48px",
        }}
      >
        <Navbar.Brand href="/">
          {" "}
          <Row>
            <Col style={{ paddingRight: 0 }}>
              <img
                alt=""
                src="navbarLogo.png"
                width="44.83"
                height="35"
                className="d-inline-block align-top"
                //   style={{ paddingTop: 9.9 }}
              />
            </Col>
            <Col>
              <Row>
                <small
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontSize: 14,
                    lineHeight: 0.8,
                    paddingTop: 12,
                    paddingLeft: 0,
                    width: 74,
                    fontWeight: 13,
                    color: "#989395",
                    whiteSpace: "pre-line",
                  }}
                >
                  VISITOR’S End
                </small>
              </Row>
            </Col>
          </Row>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navbar_title;
