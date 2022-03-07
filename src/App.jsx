import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Navbartwo from "./view/navbartwo";
import Chep1 from "./pages/chep1";

import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import HomePageMob from "./view/homepageMob";
import Chep1MobView from "./view/chep1Mobview";
import ScrollToTop from "./ScrollTop";
import { useEffect } from "react";
import ChapterTwo from "./pages/chep2";
import ChapterThree from "./pages/chep3";
import ChapterFour from "./pages/chep4";
import ChapterFive from "./pages/chep5";
import ChepTwo from "./view/chep2MobView";
import Chep3MobView from "./view/chep3MobView";
import Chep4MobView from "./view/chep4MobView";
import Chep5MobView from "./view/chep5MobView";
import DropDownForDesktop from "./component/dropDownForDesktop";
import DropDownForMobile from "./component/dropDownForMobile";
function App() {
  const usePrevLocation = (location) => {
    const prevLocRef = useRef(location);

    useEffect(() => {
      prevLocRef.current = location;
    }, [location]);

    return prevLocRef.current;
  };

  // const usePrevToPrecLocation = (prevLocation) => {
  //   const prevToPrevLocationRef = useRef(prevLocation);

  //   useEffect(() => {
  //     prevToPrevLocationRef.current = prevLocation;
  //   }, [prevLocation]);
  //   return prevToPrevLocationRef.current;
  // };
  //THIS IS HOW YOU USE IT

  const location = useLocation();
  const prevLocation = usePrevLocation(location);
  // const prevToPrevLocation = usePrevToPrecLocation(prevLocation);

  console.log(prevLocation, location);

  console.log(location, "🎉🎉🎉");
  const [selectMainPage, setSelectMainPage] = useState(false);
  const [selectChepOne, setSelectChepOne] = useState(false);
  const [selectChepTwo, setSelectChepTwo] = useState(false);
  const [selectChepThree, setSelectChepThree] = useState(false);

  const [selectChepFour, setSelectChepFour] = useState(false);

  const [selectChepFive, setSelectChepFive] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  // if (prevLocation.pathname == "/") setSelectMainPage(true);
  // else if (location.pathname == "/chepOne") {
  //   setSelectChepOne(true);
  // }
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
              backgroundColor: "transparent",
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
                <Route path="chepThree" element={<ChapterThree />} />
                <Route path="chepFour" element={<ChapterFour />} />
                <Route path="chepFive" element={<ChapterFive />} />
                <Route
                  path="dropDown"
                  element={
                    <DropDownForDesktop
                      selectMainPage={selectMainPage}
                      selectChepOne={selectChepOne}
                      setSelectChepOne={setSelectChepOne}
                      setSelectMainPage={setSelectMainPage}
                      prevLocation={prevLocation}
                      selectChepTwo={selectChepTwo}
                      setSelectChepTwo={setSelectChepTwo}
                      selectChepThree={selectChepThree}
                      setSelectChepThree={setSelectChepThree}
                      selectChepFour={selectChepFour}
                      setSelectChepFour={setSelectChepFour}
                      selectChepFive={selectChepFive}
                      setSelectChepFive={setSelectChepFive}
                    />
                  }
                />
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
              <Route path="chepThree" element={<Chep3MobView />} />
              <Route path="chepFour" element={<Chep4MobView />} />
              <Route path="chepFive" element={<Chep5MobView />} />
              <Route
                path="dropDown"
                element={
                  <DropDownForMobile
                    selectMainPage={selectMainPage}
                    selectChepOne={selectChepOne}
                    setSelectChepOne={setSelectChepOne}
                    setSelectMainPage={setSelectMainPage}
                    prevLocation={prevLocation}
                    selectChepTwo={selectChepTwo}
                    setSelectChepTwo={setSelectChepTwo}
                    selectChepThree={selectChepThree}
                    setSelectChepThree={setSelectChepThree}
                    selectChepFour={selectChepFour}
                    setSelectChepFour={setSelectChepFour}
                    selectChepFive={selectChepFive}
                    setSelectChepFive={setSelectChepFive}
                  />
                }
              />
            </Routes>
          </div>
        )
        // null
      }
    </>
  );
}

export default App;
