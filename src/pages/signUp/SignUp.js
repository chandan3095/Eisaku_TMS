import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../components/common/CustomDropdown/CustomDropdown";
import selectOptionData from "../../constansts/LocalData";
import logo from '../../assets/images/logo.png'

const SignUp = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   const [showManagerDropdown, setShowManagerDropdown] = useState(null);
   const [showManagementDropdown, setShowManagementDropdown] = useState(null);

   const handleRolesDropdown = (value) => {
      setSelectedOption(value);
      console.log(value);
      setShowManagerDropdown(null);
      setShowManagementDropdown(null);
   };
   const handlemanagerDropdown = (value) => {
      setShowManagerDropdown(value);
   };
   const handlemanagementDropdown = (value) => {
      setShowManagementDropdown(value);
   };
   return (
      <div className="login-form d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
         <div className="card card-primary position-relative" style={{ width: '35rem', margin: 'auto' }}>
            <div className="text-center position-absolute" style={{ top: '-50px', left: '50%', transform: 'translate(-50%)' }}>
               <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{ width: '80px' }} />
               <h3 className='pt-3'>Registration</h3>
            </div>
            <form>
               <div className="card-body mt-5 pt-5">
                  <div className="form-group">
                     <CustomInput
                        label="Enter Name"
                        name="userName"
                        id="#userName"
                        inputType="text"
                        placeholder="Enter User Name"
                     />
                  </div>
                  <div className="form-group">
                     <CustomInput
                        label="Enter Password"
                        name="password"
                        id="#password"
                        inputType="password"
                        placeholder="Enter Password"
                     />
                  </div>
                  <div className="form-group">
                     <CustomInput
                        label="Enter Mobile No."
                        name="mobile"
                        id="#mobile"
                        inputType="text"
                        placeholder="Enter Mobile No."
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="address">Enter Address</label>
                     <textarea
                        name="address"
                        id="address"
                        cols="30"
                        rows="2"
                        className="form-control"
                        placeholder="Enter Address"
                     ></textarea>
                  </div>
                  <div className="form-group">
                     <label className="text-bold">User Type</label>
                     <CustomDropdown
                        selected=""
                        optionData={selectOptionData}
                     // onChange={(e) => handleRolesDropdown(e.target.value)}
                     />
                  </div>

                  {selectedOption === "supervisor" && (
                     <div className="form-group">
                        <label className="text-bold">Reporting Manager</label>
                        <CustomDropdown
                           value={showManagerDropdown}
                           optionData={selectOptionData}
                        // onChange={(e) => handlemanagerDropdown(e.target.value)}
                        />
                     </div>
                  )}

                  {selectedOption === "manager" && (
                     <div className="form-group">
                        <label className="text-bold">Management</label>
                        <CustomDropdown
                           value={showManagementDropdown}
                           optionData={selectOptionData}
                        // onChange={(e) => handlemanagementDropdown(e.target.value)}
                        />
                     </div>
                  )}
               </div>
               <div className="mb-3 d-flex justify-content-center">
                  <button type="button" className="btn btn-info btn-lg px-5">Submit</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignUp;
