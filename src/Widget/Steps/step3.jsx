import React from "react";
import FormField from "../FormField/FormField";
const Step3 = ({ formData, onInputChange }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>Please review your information before submitting:</p>
      {/* Display the user's entered information from previous steps */}
      <FormField
        label="First Name"
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={(e) => onInputChange("firstName", e.target.value)}
        required
      />
      <FormField
        label="Last Name"
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => onInputChange("lastName", e.target.value)}
        required
      />
      <FormField
        label="Username"
        type="text"
        id="username"
        name="username"
        value={formData.userName}
        onChange={(e) => onInputChange("userName", e.target.value)}
        required
      />
      <FormField
        label="Password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => onInputChange("password", e.target.value)}
        required
      />
    </div>
  );
};

export default Step3;
