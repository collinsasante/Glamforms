import React from 'react';

function Step8({ formData, updateFormData }) {
  return (
    <div className="step">
      <h2 className="section_title">Customer Details</h2>

      <div className="form-group add_top_30">
        <label htmlFor="customerName">
          Fill in your full name to aid in our correspondence on your project
        </label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          className="form-control"
          value={formData.customerName || ''}
          onChange={(e) => updateFormData('customerName', e.target.value)}
          required
        />
      </div>

      <div className="form-group add_top_30">
        <label htmlFor="customerPhone">Phone Number</label>
        <label>Provide a phone number you can be reached on</label>
        <input
          type="text"
          name="customerPhone"
          id="customerPhone"
          className="form-control"
          value={formData.customerPhone || ''}
          onChange={(e) => updateFormData('customerPhone', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default Step8;
