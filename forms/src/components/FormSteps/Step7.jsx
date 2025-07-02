function Step7({ formData, updateFormData }) {
  return (
    <div className="step">
      <h2 className="section_title">Label Dimensions</h2>

      <div className="form-group add_top_30">
        <label htmlFor="labelDimensions">
          Provide the dimensions of the label you want created if you have an idea of applicable size
        </label>
        <input
          type="text"
          name="labelDimensions"
          id="labelDimensions"
          className="form-control"
          value={formData.labelDimensions || ''}
          onChange={(e) => updateFormData('labelDimensions', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="specialConsiderations">
          Provide any special considerations you would like to be added to your design
        </label>
        <input
          type="text"
          name="specialConsiderations"
          id="specialConsiderations"
          className="form-control"
          value={formData.specialConsiderations || ''}
          onChange={(e) => updateFormData('specialConsiderations', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default Step7;
