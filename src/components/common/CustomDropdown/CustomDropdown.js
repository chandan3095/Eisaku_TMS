import React from "react";

const CustomDropdown= (props) => {
  const{label, selected, optionData, onSelect} = props

  return (
    <div class="form-group">
      {label && <label>{label}</label>}  
        <select class="form-control select2" style={{ width: '100%' }} onChange={(e) => onSelect(e.target.value) }>        
      {optionData.map((item, index) => <option key={index} selected={selected === item} value={item}>{item}</option>
      )}
      </select>
    </div>
  );
}

export default CustomDropdown;
