import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Chep1 from "./pages/chep1";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div
      style={{ backgroundColor: "black", maxWidth: "100%", margin: "0px auto" }}
    >
      <Navbar_title />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chepOne" element={<Chep1 />} />
      </Routes>
    </div>
  );
}

export default App;
