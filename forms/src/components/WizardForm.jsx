// WizardForm.jsx
import React, { useState } from "react";

import PersonalInfoStep from "./FormSteps/PersonalInfoStep";
import Step2 from "./FormSteps/Step2";
import Step4 from "./FormSteps/Step4";
import Step5 from "./FormSteps/Step5";
import Step6 from "./FormSteps/Step6";
import Step7 from "./FormSteps/Step7";
import Step8 from "./FormSteps/Step8";
import SummaryStep from "./FormSteps/SummaryStep";

function WizardForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    productName: "",
    preferredColors: "",
    productWeight: "",
    ingredients: "",
    manufacturingDate: "",
    expiryDate: "",
    batchNumber: "",
    countryOfOrigin: "",
    manufacturerAddress: "",
    directionsOfUse: "",
    storageInstructions: "",
    businessLogo: null,
    itemPhotos: [],
    referencePhotos: [],
    labelDimensions: "",
    specialConsiderations: "",
    customerName: "",
    customerPhone: "",
    terms: false,
  });

  const totalSteps = 8;

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    const data = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "itemPhotos" || key === "referencePhotos") return; // We'll handle below
      if (key === "businessLogo") return;
      data.append(key, value);
    });

    // Append business logo
    if (formData.businessLogo) {
      data.append("businessLogo", formData.businessLogo);
    }

    // Append itemPhotos
    formData.itemPhotos.forEach((file) => {
      data.append("itemPhotos", file);
    });

    // Append referencePhotos
    formData.referencePhotos.forEach((file) => {
      data.append("referencePhotos", file);
    });

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/send-email", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Form submitted and email sent successfully.");
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.message || "Unknown error."}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <Step2 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step4 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step5 formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step6 formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step7 formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step8 formData={formData} updateFormData={updateFormData} />;
      case 7:
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
    }
  };

  const progressWidth = ((currentStep / (totalSteps - 1)) * 100).toFixed(0);

  return (
    <div id="wizard_container">
      <div id="top-wizard">
        <span id="location">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <div id="progressbar" style={{ width: `${progressWidth}%` }}></div>
      </div>

      <form id="wrapped" onSubmit={handleSubmit}>
        <input
          id="website"
          name="website"
          type="text"
          value=""
          style={{ display: "none" }}
          onChange={() => {}}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
        />

        <div id="middle-wizard">{renderStep()}</div>

        <div id="bottom-wizard">
          {currentStep > 0 && (
            <button type="button" name="backward" className="backward" onClick={handlePrev}>
              Prev
            </button>
          )}
          {currentStep < totalSteps - 1 && (
            <button type="button" name="forward" className="forward" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === totalSteps - 1 && (
            <button type="submit" name="process" className="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default WizardForm;
