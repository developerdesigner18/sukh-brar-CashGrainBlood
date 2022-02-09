import "./App.css";
import HomePage from "./pages/homepage";
import Navbar_title from "./component/navbar";
import Card from "./component/card";
import Card_component from "./component/card";
function App() {
  return (
    <div>
      <Navbar_title />
      <HomePage />
      <Card_component />
      {/* <Card /> */}
    </div>
  );
}

export default App;
