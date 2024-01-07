import React from "react";

const CustomDatePicker = (props) => {
  const{label, id, onChange, name} = props 
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>} 
      <input type="date" className="form-control" name={name} onChange={onChange} id={id}/>
    </div>
  );
}

export default CustomDatePicker;
