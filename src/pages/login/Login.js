import React from 'react'
import CustomInput from '../../components/common/CustomInput/CustomInput'
import logo from '../../assets/images/logo.png'

const Login = () => {
   return (
      <div className="login-form d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
         <div className="container text-center">
            <div className="card card-primary position-relative" style={{ width: '35rem', margin: 'auto' }}>
               <div className="text-center position-absolute" style={{top:'-50px', left: '50%', transform: 'translate(-50%)'}}>
                  <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8', width: '80px' }} />
                  <h3 className='pt-3'>Login</h3>
               </div>
               <form>
                  <div className="card-body mt-5 pt-5">
                     <div className="form-group text-left">
                        <CustomInput label="Enter Name" id="#userName" inputType="text" placeholder="Enter User Name" />
                     </div>
                     <div className="form-group text-left">
                        <CustomInput label="Enter Password" name="password" id="#password" inputType="password" placeholder="Enter Password" />
                     </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-center">
                     <button type="button" className="btn btn-info btn-lg px-5">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>

   )
}

export default Login
