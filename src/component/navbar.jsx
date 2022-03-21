import React from "react";
import { Navbar, Container, Row, Col, Image } from "react-bootstrap";
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
        <Navbar.Brand href="/">
          {" "}
          <Image
            alt=""
            src="./images/navLogo.png"
            style={{ width: 110, height: 35, marginLeft: 140 }}
            className="d-inline-block align-top"
            //   style={{ paddingTop: 9.9 }}
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navbar_title;
