import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Chep1 from "./pages/chep1";
function App() {
  return (
    <div
      style={{ backgroundColor: "black", maxWidth: "100%", margin: "0px auto" }}
    >
      <Navbar_title />
      {/* <HomePage /> */}
      <Chep1 />
    </div>
  );
}

export default App;
