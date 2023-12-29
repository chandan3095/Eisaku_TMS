import React from "react";

const CustomDropdown= () => {
  return (
    <div class="form-group">
      <label>Minimal</label>
      <select class="form-control select2" style={{width: '100%'}}>
        <option selected="selected">Alabama</option>
        <option>Alaska</option>
        <option>California</option>
        <option>Delaware</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Washington</option>
      </select>
    </div>
  );
}

export default CustomDropdown;
