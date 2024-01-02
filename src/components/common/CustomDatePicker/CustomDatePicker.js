import React from "react";

const CustomDatePicker = (props) => {
  const{label, id} = props 
  return (
    <div class="form-group">
      {label && <label>{label}</label>} 
      <input type="date" className="form-control"/>
    </div>
  );
}

export default CustomDatePicker;
