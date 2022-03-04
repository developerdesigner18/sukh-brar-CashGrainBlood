import React from "react";
import { Navbar, Image } from "react-bootstrap";

const Navbar_title = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        style={{
          height: "48px",
        }}
      >
        <Navbar.Brand href="/">
          {" "}
          <Image
            alt=""
            src="./images/navbarLogo.png"
            style={{ width: 110, height: 35, marginLeft: 17 }}
            className="d-inline-block align-top"
            //   style={{ paddingTop: 9.9 }}
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navbar_title;
