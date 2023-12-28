import React from 'react'

function CustomInput() {
  return (
    <div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
        </div>
    </div>
  )
}

export default CustomInput