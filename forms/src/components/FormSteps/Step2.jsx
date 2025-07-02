function AvailabilityStep({ formData, updateFormData }) {
  return (
    <div className="step" data-state="branchtype">
      <h2 className="section_title">Design Information</h2>
      <h6 className="main_question">
        Please Complete the form below to help give us a thorough understanding of your label design idea.
      </h6>
      <br />

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <h6 className="main_question">List All Ingredients Used in Your Product</h6>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          className="form-control required"
          value={formData.ingredients}
          onChange={(e) => updateFormData('ingredients', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="manufacturingDate">Manufacturing Date</label>
        <h6 className="main_question">State the proposed date for which the product will be manufactured</h6>
        <input
          type="date"
          name="manufacturingDate"
          id="manufacturingDate"
          className="form-control required"
          value={formData.manufacturingDate}
          onChange={(e) => updateFormData('manufacturingDate', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <h6 className="main_question">State the date for expiry of your product</h6>
        <input
          type="date"
          name="expiryDate"
          id="expiryDate"
          className="form-control required"
          value={formData.expiryDate}
          onChange={(e) => updateFormData('expiryDate', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default AvailabilityStep;
