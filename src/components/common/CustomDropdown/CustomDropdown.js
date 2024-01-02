import React from "react";

const CustomDropdown= (props) => {
   const { label, selected, optionData, onChange,name, value } = props

  return (
    <div class="form-group">
      {label && <label>{label}</label>}  
        <select class="form-control select2" style={{ width: '100%' }} onChange={onChange} name={name} value={value}>        
      {optionData.map((item, index) => <option key={index} value={item}>{item}</option>
      )}
      </select>
    </div>
  );
}

export default CustomDropdown;
