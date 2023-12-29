import React from 'react'

function CustomRadio() {
  return (
    <div className="col-sm-6">
  {/* radio */}
  <div className="form-group clearfix">
    <div className="icheck-primary d-inline">
      <input type="radio" id="radioPrimary1" name="r1" defaultChecked />
      <label htmlFor="radioPrimary1">
        Primary radio one
      </label>
    </div>
    <div className="icheck-primary d-inline">
      <input type="radio" id="radioPrimary2" name="r1" />
      <label htmlFor="radioPrimary2">
        Primary radio two
      </label>
    </div>
    <div className="icheck-primary d-inline">
      <input type="radio" id="radioPrimary3" name="r1" disabled />
      <label htmlFor="radioPrimary3">
        Primary radio
      </label>
    </div>
  </div>
</div>

  )
}

export default CustomRadio