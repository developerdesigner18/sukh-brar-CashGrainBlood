import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Navbartwo from "./view/navbartwo";
import Chep1 from "./pages/chep1";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePageMob from "./view/homepageMob";
import Chep1MobView from "./view/chep1Mobview";
import ScrollToTop from "./ScrollTop";
import { useEffect } from "react";
import ChapterTwo from "./pages/chep2";
import ChepTwo from "./view/chep2MobView";
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

            <ScrollToTop>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="chepOne" element={<Chep1 />} />
                <Route path="chepTwo" element={<ChapterTwo />} />
              </Routes>
            </ScrollToTop>
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
              <Route path="chepTwo" element={<ChepTwo />} />
            </Routes>
          </div>
        )
        // null
      }
    </>
  );
}

export default App;
