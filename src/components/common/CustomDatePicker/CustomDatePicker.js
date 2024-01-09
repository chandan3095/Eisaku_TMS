import React from "react";

const CustomDatePicker = (props) => {
  const{label, id, onChange, name,value} = props 
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>} 
      <input type="datetime-local" className="form-control" name={name} onChange={onChange} id={id} value={value}/>
    </div>
  );
}

export default CustomDatePicker;
