import React from "react";

const CustomDatePicker = (props) => {
  const{label, id} = props 
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>} 
      <input type="date" className="form-control"/>
    </div>
  );
}

export default CustomDatePicker;
