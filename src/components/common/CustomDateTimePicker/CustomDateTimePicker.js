import React from "react";

const CustomDateTimePicker = (props) => {
  const{label, id, onChange, name,value, disabled} = props 
  console.log(value);
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>} 
      <input type="datetime-local" className="form-control" disabled={disabled} name={name} onChange={onChange} id={id} value={value}/>
    </div>
  );
}

export default CustomDateTimePicker;
