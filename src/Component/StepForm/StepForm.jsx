import React from "react";
import Step1 from "../../Widget/Steps/step1";
import Step2 from "../../Widget/Steps/step2";
import Step3 from "../../Widget/Steps/step3";
import Step4 from "../../Widget/Steps/step4";
const StepForm = ({ currentStep, onInputChange, formData }) => {
  switch (currentStep) {
    case 1:
      return <Step1 formData={formData} onInputChange={onInputChange} />;
    case 2:
      return <Step2 formData={formData} onInputChange={onInputChange} />;
    case 3:
      return <Step3 formData={formData} onInputChange={onInputChange} />;
    default:
      return <Step4 formData={formData} />;
  }
};

export default StepForm;
