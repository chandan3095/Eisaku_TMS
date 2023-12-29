import React from 'react'
import CustomInput from '../../components/common/CustomInput/CustomInput'

const Login = () => {
   return (
      <div className="login-form d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
         {/* <div className="container"> */}
         <div className="card card-primary ">
            <div className="card-header">
               <h3 className="card-title text-center">Login Form</h3>
            </div>
            <form>
               <div className="card-body">
                  <div className="form-group">
                     <CustomInput label="Enter Name" id="#userName" inputType='text' placeholder='Enter User Name' />
                  </div>
                  <div className="form-group">
                     <CustomInput label="Enter Password" name="password" id="#password" inputType='password' placeholder='Enter Password' />
                  </div>
               </div>
               <div className="card-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
               </div>
            </form>
         </div>
         {/* </div> */}
      </div>
   )
}

export default Login
