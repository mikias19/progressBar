import logo from "./logo.svg";

import "./App.css";
import { useState } from "react";
import ProgressBar from "./Component/Progress/progressBar";
import PanelGalary from "./Component/PanelGalary/PanelGalary";
import Circle from "./Widget/Circle/circle.jsx";
import Content from "./Widget/Content/content";
import NavBar from "./Widget/NavBar/navBar";
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toogleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="wrapperDiv">
      {/* <PanelGalary /> */}
      {/* <ProgressBar /> */}
      <div className={`container ${isNavOpen && "show-nav"}`}>
        <Circle isNavOpen={isNavOpen} toogleNav={toogleNav} />
        <Content />
      </div>
      <NavBar isNavOpen={isNavOpen} />
    </div>
  );
}
export default App;
