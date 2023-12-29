import React from "react";

function CustomInput(props) {
  const{label, inputType, placeholder} = props
  return (
    <div className="form-group">
      {label && <label htmlFor="exampleInputEmail1">{label}</label>}  
      <input
        type={`${inputType}`}
        className="form-control"
        id="exampleInputEmail1"
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
