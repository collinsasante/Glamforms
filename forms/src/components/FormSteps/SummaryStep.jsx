// SummaryStep.jsx
import React from 'react';

function SummaryStep({ formData, updateFormData }) {
  return (
    <div className="submit step" id="end">
      <div className="summary">
        <div className="wrapper">
          <h3>
            Thank you for your time<br />
            <span id="name_field">{formData.customerName}</span>!
          </h3>
          <p>
            We will contact you shortly at the following phone number:{" "}
            <strong id="phone_field">{formData.customerPhone}</strong>
          </p>

          <h4>Your Details:</h4>
          <ul>
            <li><strong>Name of Product:</strong> {formData.productName}</li>
            <li><strong>Preferred Colors:</strong> {formData.preferredColors}</li>
            <li><strong>Product Weight / Volume:</strong> {formData.productWeight}</li>
            <li><strong>Ingredients:</strong> {formData.ingredients}</li>
            <li><strong>Manufacturing Date:</strong> {formData.manufacturingDate}</li>
            <li><strong>Expiry Date:</strong> {formData.expiryDate}</li>
            <li><strong>Batch Number:</strong> {formData.batchNumber}</li>
            <li><strong>Country of Origin:</strong> {formData.countryOfOrigin}</li>
            <li><strong>Manufacturer Address:</strong> {formData.manufacturerAddress}</li>
            <li><strong>Directions of Use:</strong> {formData.directionsOfUse}</li>
            <li><strong>Storage Instructions & Precautions:</strong> {formData.storageInstructions}</li>
            <li><strong>Label Dimensions:</strong> {formData.labelDimensions}</li>
            <li><strong>Special Considerations:</strong> {formData.specialConsiderations}</li>
          </ul>
        </div>

        <div className="text-center">
          <div className="form-group terms">
            <label className="container_check">
              Please accept our{" "}
              <a href="#" data-bs-toggle="modal" data-bs-target="#terms-txt">
                Terms and Conditions
              </a>{" "}
              before submitting
              <input
                type="checkbox"
                name="terms"
                value="Yes"
                className="required"
                checked={formData.terms || false}
                onChange={(e) => updateFormData('terms', e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryStep;
