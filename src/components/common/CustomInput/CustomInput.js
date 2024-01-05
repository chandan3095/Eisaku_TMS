import React from "react";

const CustomInput = ({ label, id, inputType, placeholder, onChange, errors, message,name }) => {
   // const { label, id, inputType, placeholder, onChange, errors, message } = props
  return (
    <div className="form-group">
      {label && <label className="text-capitalize" htmlFor={id}>{label}</label>}  
      <input
        type={`${inputType}`}
        className="form-control "
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
       {errors && 
           <div className="text-danger" style={{fontSize:'.8rem'}}>
              {message}
           </div>
       }
    </div>
  );
}

export default CustomInput;
