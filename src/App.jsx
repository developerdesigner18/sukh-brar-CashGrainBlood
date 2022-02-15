import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Navbartwo from "./view/navbartwo";
import Chep1 from "./pages/chep1";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePageMob from "./view/homepageMob";
import Chep1MobView from "./view/chep1Mobview";
import { useEffect } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  function handleResize() {
    setWidth(window.innerWidth);
  }
  return (
    <>
      {
        width > 768 ? (
          <div
            style={{
              backgroundColor: "black",
              maxWidth: "100%",
              margin: "0px auto",
            }}
          >
            <Navbar_title />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="chepOne" element={<Chep1 />} />
            </Routes>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "black",
              maxWidth: "100%",
              margin: "0px auto",
            }}
          >
            <Navbartwo />

            <Routes>
              <Route path="/" element={<HomePageMob />} />
              <Route path="chepOne" element={<Chep1MobView />} />
            </Routes>
          </div>
        )
        // null
      }
    </>
  );
}

export default App;
