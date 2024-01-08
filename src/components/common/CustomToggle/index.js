import React from "react";

function CustomToggleSwitch(props) {
    const {checked, onChange} = props
  return (
    <span className="form-group">
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          checked={checked}
          onChange={onChange}
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          {/* Toggle this custom switch element */}
        </label>
      </div>
    </span>
  );
}

export default CustomToggleSwitch;
