import React from "react";

const CustomDropdown= (props) => {
  const{label, selected, optionData} = props

  return (
    <div class="form-group">
      {label && <label>{label}</label>}  
      <select class="form-control select2" style={{width: '100%'}}>        
      {optionData.map((item, index) => <option selected={selected === item}>{item}</option>
      )}
      </select>
    </div>
  );
}

export default CustomDropdown;
