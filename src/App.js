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
const images = [
  "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
];
const employeeData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    details:
      "John Doe is a skilled software engineer with expertise in web development and problem-solving.",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    details:
      "John Doe is a skilled software engineer with expertise in web development and problem-solving.",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    details:
      "John Doe is a skilled software engineer with expertise in web development and problem-solving.",
  },

  // Add more employee data as needed
];
function App() {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  // const toogleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });
  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmission = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    console.log(formData);
  };
  return (
    <div className="wrap">
      <div className="container">
        {/* <PanelGalary /> */}
        {/* <ProgressBar /> */}
        {/* <div className={`container ${isNavOpen && "show-nav"}`}>
        <Circle isNavOpen={isNavOpen} toogleNav={toogleNav} />
        <Content />
      </div>
      <NavBar isNavOpen={isNavOpen} /> */}
        {/* <SearchInput /> */}
        {/* <BluryLoading /> */}
        {/* {images.map((image, index) => (
          <Panel
            key={index}
            image={image}
            title={`Title ${index + 1}`}
            isActive={index === activeIndex}
            onClick={() => handleClick(index)}
          />
        ))} */}
        {/* 
        {employeeData.map((employee, index) => (
          <EmployeeCard key={index} {...employee} /> 
        ))}*/}

        <ProgressIndicator currentStep={currentStep} steps={steps} />
        <StepForm
          currentStep={currentStep}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <div>
          {currentStep === steps.length - 1 && (
            <button className="btnsub" onClick={handleFormSubmission}>
              Submite
            </button>
          )}
          <div>
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="btn"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
