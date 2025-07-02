function Step6({ formData, updateFormData }) {
  return (
    <div className="step">
      <div className="form-group add_bottom_30 add_top_20">
        <label>
          Business Logo
          <br />
          <small>Upload your business logo if any. Upload 1 supported file. Max 100MB.</small>
        </label>
        <div className="fileupload">
          <input
            type="file"
            name="businessLogo"
            accept="image/*,.pdf"
            className="required"
            onChange={(e) => updateFormData('businessLogo', e.target.files[0])}
          />
        </div>
      </div>

      <div className="form-group add_bottom_30 add_top_20">
        <label>
          Photo of Item To Be Labelled
          <br />
          <small>Upload photos of the container or package your label will be applied on. Upload up to 10 supported files. Max 10 MB per file.</small>
        </label>
        <div className="fileupload">
          <input
            type="file"
            name="itemPhotos"
            accept="image/*,.pdf"
            multiple
            className="required"
            onChange={(e) => updateFormData('itemPhotos', Array.from(e.target.files))}
          />
        </div>
      </div>

      <div className="form-group add_bottom_30 add_top_20">
        <label>
          Photo of Reference Design (if Any)
          <br />
          <small>Upload photos of similar designs you would want as a reference. Upload up to 10 supported files. Max 10 MB per file.</small>
        </label>
        <div className="fileupload">
          <input
            type="file"
            name="referencePhotos"
            accept="image/*,.pdf"
            multiple
            className="required"
            onChange={(e) => updateFormData('referencePhotos', Array.from(e.target.files))}
          />
        </div>
      </div>
    </div>
  );
}

export default Step6;
