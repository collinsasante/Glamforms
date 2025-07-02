function PersonalInfoStep({ formData, updateFormData }) {
  return (
    <div className="step">
      <h2 className="section_title">Design Information</h2>
      <h6 className="main_question">Please Complete the form below to help give us a thorough understanding of your label design idea.</h6>

      <div className="form-group add_top_30">
        <label htmlFor="productName">Name of Product</label>
        <h6 className="main_question">State full name of your product.</h6>
        <input
          type="text"
          name="productName"
          id="productName"
          className="form-control required"
          value={formData.productName}
          onChange={(e) => updateFormData('productName', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="preferredColors">Preferred Colors</label>
        <h6 className="main_question">State the colors required for your label design (Maximum 3 Colors)</h6>
        <input
          type="text"
          name="preferredColors"
          id="preferredColors"
          className="form-control required"
          value={formData.preferredColors}
          onChange={(e) => updateFormData('preferredColors', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productWeight">Product Weight / Volume</label>
        <h6 className="main_question">State Your Overall Product Weight (Grams) or Volume (ML)</h6>
        <input
          type="text"
          name="productWeight"
          id="productWeight"
          className="form-control required"
          value={formData.productWeight}
          onChange={(e) => updateFormData('productWeight', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfoStep;
