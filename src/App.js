import logo from "./logo.svg";

import "./App.css";
import ProgressIndicator from "./Component/NewProgress/index.jsx";
import { useState } from "react";
import SearchInput from "./Widget/ExpandedSearch/search.jsx";
import ProgressBar from "./Component/Progress/progressBar";
import PanelGalary from "./Component/PanelGalary/PanelGalary";
import Circle from "./Widget/Circle/circle.jsx";
import Content from "./Widget/Content/content";
import NavBar from "./Widget/NavBar/navBar";
import BluryLoading from "./Widget/BluryLoading/bluryLoading.jsx";
import Panel from "./Component/Panel/index.jsx";
import EmployeeCard from "./Component/Panel/employee.jsx";
import StepForm from "./Component/StepForm/StepForm.jsx";
import CircleContaoner from "./Component/CircleConatainer/index.jsx";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div>
      <CircleContaoner
        isNavOpen={isNavOpen}
        handleToggleNav={handleToggleNav}
      />
    </div>
  );
}
export default App;
