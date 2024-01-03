import React from "react";

const CustomFileUpload = (props) => {
   const {id, name, label}= props
  return (
    <div class="form-group w-100">
      <label htmlFor={id}>{label}</label>
      <input type="file" id={id} name={name} className="form-control h-auto" />
      {/* <button type="submit" class="btn btn-primary col start">
        <i class="fas fa-upload"></i>
        <span>Start upload</span>
      </button>
      <button type="reset" class="btn btn-warning col cancel">
        <i class="fas fa-times-circle"></i>
        <span>Cancel upload</span>
      </button> */}
    </div>
  );
}

export default CustomFileUpload;
