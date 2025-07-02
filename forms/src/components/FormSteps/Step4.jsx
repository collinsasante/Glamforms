function Step4({ formData, updateFormData }) {
  return (
    <div className="step">
      <h2 className="section_title">Batch Number</h2>
      <div className="form-group add_top_30">
        <label htmlFor="batchNumber">
          Indicate your manufacturing batch number (In industrial terms, the batch number is the designation, in numbers and/or letters, to identify and trace a set of identical products that share certain characteristics of production (production time, production date, identification code, etc.).
        </label>
        <input
          type="text"
          name="batchNumber"
          id="batchNumber"
          className="form-control required"
          value={formData.batchNumber || ''}
          onChange={(e) => updateFormData('batchNumber', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <h5>Country of Origin</h5>
        <label htmlFor="countryOfOrigin">Indicate the country in which your product is manufactured</label>
        <input
          type="text"
          name="countryOfOrigin"
          id="countryOfOrigin"
          className="form-control required"
          value={formData.countryOfOrigin || ''}
          onChange={(e) => updateFormData('countryOfOrigin', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <h5>Name and Complete Address of Manufacturer</h5>
        <label htmlFor="manufacturerAddress">
          Provide Your Business Name, Address, Phone Number(s), Social Media Handles & GPS Address
        </label>
        <input
          type="text"
          name="manufacturerAddress"
          id="manufacturerAddress"
          className="form-control required"
          value={formData.manufacturerAddress || ''}
          onChange={(e) => updateFormData('manufacturerAddress', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default Step4;
