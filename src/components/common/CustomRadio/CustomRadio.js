import React from 'react'

const CustomRadio= (props) => {
  const{label, id, defaultChecked} = props

  return (
    <div className="icheck-primary d-inline">
      <input type="radio" id={id} name="r1" defaultChecked />
      {label && <label htmlFor={id}>{label}</label>}
    </div> 
  )
}

export default CustomRadio