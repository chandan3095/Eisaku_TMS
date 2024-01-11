import React from "react";

const CustomDatePicker = (props) => {
  const{label, id, onChange, name,value, disabled} = props 
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>} 
      <input type="date" className="form-control" disabled={disabled} name={name} onChange={onChange} id={id} value={value}/>
    </div>
  );
}

export default CustomDatePicker;
