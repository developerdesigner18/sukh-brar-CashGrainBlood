import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
const Navbar_title = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        style={{
          padding: "5px 0px 0px 0px",
          height: "48px",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
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
                      whiteSpace: "pre-line",
                    }}
                  >
                    VISITOR’S End
                  </small>
                </Row>
              </Col>
            </Row>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar_title;