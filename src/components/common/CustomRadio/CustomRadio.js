import React from 'react'

const CustomRadio= () => {
  return (
    <div className="icheck-primary d-inline">
      <input type="radio" id="radioPrimary1" name="r1" defaultChecked />
      <label htmlFor="radioPrimary1">
        Primary radio one
      </label>
    </div> 
  )
}

export default CustomRadio