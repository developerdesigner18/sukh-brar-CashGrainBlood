import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Card from "./component/card";
import Card_component from "./component/card";
function App() {
  return (
    <div
      style={{ backgroundColor: "black", maxWidth: "100%", margin: "0px auto" }}
    >
      <Navbar_title />
      <HomePage />
    </div>
  );
}

export default App;
