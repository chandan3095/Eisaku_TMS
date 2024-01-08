import React from "react";

const CustomFileUpload = (props) => {
   const { id, name, onchange }= props
  return (
    <div class="form-group w-100">
      <input type="file" id={id} name={name} className="form-control h-auto" onChange={onchange} />
      {/* <button type="submit" class="btn btn-primary col start">
        <i class="fas fa-upload"></i>
        <span>Start upload</span>
      </button>
      <button type="reset" className="btn btn-warning col cancel">
        <i className="fas fa-times-circle"></i>
        <span>Cancel upload</span>
      </button> */}
    </div>
  );
}

export default CustomFileUpload;
