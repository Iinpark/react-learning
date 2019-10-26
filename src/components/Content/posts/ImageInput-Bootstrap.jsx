import React from "react";

const ImageInput = props => {
  return (
    <div>
      <div className="form-group">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile">
            Upload image
          </label>
        </div>
      </div>
      <div className="py-4"></div>
    </div>
  );
};

export default ImageInput;
