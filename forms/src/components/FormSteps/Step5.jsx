function Step5({ formData, updateFormData }) {
  return (
    <div className="step">
      <h2 className="section_title">Directions of Use</h2>

      <div className="form-group add_top_30">
        <label htmlFor="directionsOfUse">State how your product is used</label>
        <input
          type="text"
          name="directionsOfUse"
          id="directionsOfUse"
          className="form-control required"
          value={formData.directionsOfUse || ''}
          onChange={(e) => updateFormData('directionsOfUse', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <h3>Storage Instructions & Precautions</h3>
        <label htmlFor="storageInstructions">
          State how to safely store your product and precautions when using your product
        </label>
        <input
          type="text"
          name="storageInstructions"
          id="storageInstructions"
          className="form-control required"
          value={formData.storageInstructions || ''}
          onChange={(e) => updateFormData('storageInstructions', e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default Step5;
