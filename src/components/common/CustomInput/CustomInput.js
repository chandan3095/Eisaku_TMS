import React from "react";

const CustomInput = ({ label, id, inputType, placeholder, onChange, errors, message }) => {
   // const { label, id, inputType, placeholder, onChange, errors, message } = props
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}  
      <input
        type={`${inputType}`}
        className="form-control "
        id={id}
        placeholder={placeholder}
        onChange={onChange}
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
