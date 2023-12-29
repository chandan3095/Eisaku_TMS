import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput/CustomInput';
import CustomDropdown from '../../components/common/CustomDropdown/CustomDropdown';

const SignUp = () => {
   const [selectedOption, setSelectedOption] = useState('')
   const [showManagerDropdown, setShowManagerDropdown] = useState(false)


   const handleManagerDropdown = (value) => {
      setSelectedOption(value)
      console.log(value);
      if (value === 'supervisor') {
         setShowManagerDropdown(true)
      } else {
         setShowManagerDropdown(false)
      }
   }

   return (
      <div className="login-form d-flex justify-content-center align-items-center">
         <div className="card card-primary ">
            <div className="card-header">
               <h3 className="card-title text-center">Registration Form</h3>
            </div>
            <form>
               <div className="card-body">
                  <div className="form-group">
                     <CustomInput label="Enter Name" name="userName" id="#userName" inputType='text' placeholder='Enter User Name' />
                  </div>
                  <div className="form-group">
                     <CustomInput label="Enter Password" name="password" id="#password" inputType='password' placeholder='Enter Password' />
                  </div>
                  <div className="form-group">
                     <CustomInput label="Enter Mobile No." name="mobile" id="#mobile" inputType='text' placeholder='Enter Mobile No.' />
                  </div>
                  <div className="form-group">
                     <label htmlFor="address">Enter Address</label>
                     <textarea name="address" id="address" cols="30" rows="2" className='form-control' placeholder='Enter Address'></textarea>
                  </div>
                  <div className="form-group">
                     <label class="text-bold">Vehicle Category</label>
                     <CustomDropdown selected='' optionData={['Select', 'supervisor', 'corporate admin', 'management', 'manager']}
                        onSelect={handleManagerDropdown} />
                  </div>
                  {showManagerDropdown &&
                     <div className="form-group">
                        <label class="text-bold">Reporting Manager</label>
                        <CustomDropdown selected='' optionData={['supervisor', 'corporate admin', 'management', 'manager']} />
                     </div>
                  }
               </div>
               <div className="card-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default SignUp
