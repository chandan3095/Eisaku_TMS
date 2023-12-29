import React from "react";

const CustomFileUpload = () => {
  return (
    <div class="btn-group w-100">
      <span class="btn btn-success col fileinput-button">
        <i class="fas fa-plus"></i>
        <span>Add files</span>
      </span>
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
