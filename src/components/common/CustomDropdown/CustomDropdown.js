import React from "react";

const CustomDropdown= (props) => {
  const{label, selected, optionData, onChange} = props

  return (
    <div class="form-group">
      {label && <label>{label}</label>}  
        <select class="form-control select2" style={{ width: '100%' }} value={selected} onChange={onChange}>        
      {optionData.map((item, index) => <option key={index} selected={selected === item} value={item.value}>{item}</option>
      )}
      </select>
    </div>
  );
}

export default CustomDropdown;
