import React from "react";

const CustomInput = (props) => {
   const { label, id, inputType, placeholder, onChange } = props
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}  
      <input
        type={`${inputType}`}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;
