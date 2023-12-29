import React from "react";

function CustomDatePicker() {
  return (
    <div class="form-group">
      <label>Date:</label>
      <div
        class="input-group date"
        id="reservationdate"
        data-target-input="nearest"
      >
        <input
          type="text"
          class="form-control datetimepicker-input"
          data-target="#reservationdate"
        />
        <div
          class="input-group-append"
          data-target="#reservationdate"
          data-toggle="datetimepicker"
        >
          <div class="input-group-text">
            <i class="fa fa-calendar"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDatePicker;
