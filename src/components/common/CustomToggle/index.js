import React from "react";

function CustomToggleSwitch(props) {
    const {checked, onChange, id} = props
   console.log(checked, "component");
  return (
    <span className="form-group">
      <div className="custom-control custom-switch d-inline-block ml-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <label className="custom-control-label" htmlFor={id}>
          {/* Toggle this custom switch element */}
        </label>
      </div>
    </span>
  );
}

export default CustomToggleSwitch;
