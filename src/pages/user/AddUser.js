import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput/CustomInput'
import CustomDropdown from '../../components/common/CustomDropdown/CustomDropdown'

function AddUser() {
   const [selectedOption, setSelectedOption] = useState(null)
   const [showManagerDropdown, setShowManagerDropdown] = useState(null)
   const [showManagementDropdown, setShowManagementDropdown] = useState(null)

   const handleRolesDropdown = (value) => {
      setSelectedOption(value)
      console.log(value);
      setShowManagerDropdown(null)
      setShowManagementDropdown(null)
   }
   const handlemanagerDropdown = (value) => {
      setShowManagerDropdown(value)
   }
   const handlemanagementDropdown = (value) => {
      setShowManagementDropdown(value)
   }
   return (
      <>
         <div className='addUser-form d-flex align-items-center' style={{ height: '100vh' }}>
            <div className="container">
               <div className="card card-primary ">
                  <div className="card-header">
                     <h3 className="card-title text-center">Add User</h3>
                  </div>
                  <form>
                     <div className="card-body">
                        <div className="form-group">
                           <CustomInput label="Enter Name" name="userName" id="#userName" inputType='text' placeholder='Enter User Name' />
                        </div>

                        <div className="form-group">
                           <CustomInput label="Enter Mobile No." name="mobile" id="#mobile" inputType='text' placeholder='Enter Mobile No.' />
                        </div>

                        <div className="form-group">
                           <label class="text-bold">User Type</label>
                           <CustomDropdown selected='' optionData={['Select', 'supervisor', 'corporate admin', 'management', 'manager']}
                              onChange={(e) => handleRolesDropdown(e.target.value)} />
                        </div>

                        {selectedOption === 'supervisor' && (
                           <div className="form-group">
                              <label class="text-bold">Reporting Manager</label>
                              <CustomDropdown value={showManagerDropdown} optionData={['supervisor', 'corporate admin', 'management', 'manager']} onChange={(e) => handlemanagerDropdown(e.target.value)} />
                           </div>
                        )}

                        {selectedOption === 'manager' && (
                           <div className="form-group">
                              <label class="text-bold">Management</label>
                              <CustomDropdown value={showManagementDropdown} optionData={['supervisor', 'corporate admin', 'management', 'manager']} onChange={(e) => handlemanagementDropdown(e.target.value)} />
                           </div>
                        )}
                     </div>
                     <div className="card-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Add User</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default AddUser