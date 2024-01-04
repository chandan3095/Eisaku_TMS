import React from "react";

const CustomDropdown= (props) => {
   const { label, selected, optionData, onChange,name, value } = props

  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>}  
        <select className="form-control select2" style={{ width: '100%' }} onChange={onChange} name={name} value={value}> 
       { !value && <option aria-readonly={true}>Select</option> }   
      {optionData.map((item, index) => <option key={index} value={item}>{item}</option>
      )}
      </select>
    </div>
  );
}

export default CustomDropdown;
