import React from "react";

const CustomMonthYear = (props) => {
  const{label, id, placeholder} = props
  return (
    <div className="form-group">
      {label && <label className="text-capitalize" htmlFor={id}>{label}</label>}  
      <input
        type="month"
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomMonthYear;
