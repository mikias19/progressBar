import React from "react";
import FormField from "../FormField/FormField";
const Step1 = ({ formData, onInputChange }) => {
  return (
    <div>
      <h2>step 1:Personal Information</h2>
      <FormField
        type="text"
        id="firstname"
        label="First Name"
        required
        name="firstName"
        value={formData.firstName}
        onChange={(e) => onInputChange("firstName", e.target.value)}
      />
      <FormField
        type="text"
        id="secondname"
        label="Last Name"
        required
        name="lastName"
        value={formData.lastName}
        onChange={(e) => onInputChange("lastName", e.target.value)}
      />
    </div>
  );
};

export default Step1;
