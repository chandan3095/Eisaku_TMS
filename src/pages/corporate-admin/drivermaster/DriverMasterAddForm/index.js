import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import { useDispatch } from "react-redux";
import { addDriveMaster } from "../../../../reducer/DriveMasterReducer";
import { useNavigate } from "react-router-dom";

function FleetMasterAddForm() {
   // const [payRollType, setpayRollType] = useState("Eisaku Pay roll");

   const [selectedFile,setSelectedFile] = useState(null)

   const [formData, setFormData] = useState({
      Name: '',
      dob: '',
      joiningDate: '',
      exitDate: '',
      expofyears: '',
      address: '',
      drivingLicense: '',
      licenseExp: '',
      aadharCard: '',
      panCard: '',
      payRollType: '',
      dlUpload: '',
      contractorName: '',
      monthlyCommAmount: '',
      accountNumber: '',
      bankName:'',
      ifscCode:'',
      accountHolderName:'',
      monthlyAmount: '',
   })

   const dispatch = useDispatch()
   const navigate = useNavigate()
   console.log(formData);

   const handleChange = (e) => {
      const { name, value,type } = e.target;

      if(type === 'file'){
         const file = e.target.files[0]
         console.log(name, file);
      }else{
         setFormData({
            ...formData,
            [name]: value
         });
      }
   }



   const handleFormData = () => {
      dispatch(addDriveMaster(formData))
      navigate('/driver-master/view')
   }

   return (
      <div>
         <BodyHeader title="Add Driver Master" />
         <form className="p-5 shadow-lg">
            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Personal Details</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-4">
                        <CustomInput
                           label="Name"
                           id="driverName"
                           placeholder="Enter Name"
                           value={formData.Name}
                           onChange={handleChange}
                           name="Name"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomDatePicker
                           label="DOB"
                           name="dob"
                           id="dob"
                           placeholder="Select DOB"
                           value={formData.dob}
                           onChange={handleChange} />
                     </div>

                     {/* Date of Joining */}
                     <div className="col-lg-4">
                        <CustomDatePicker
                           label="Date of Joining"
                           placeholder="Select Date of Joining"
                           id="joiningDate"
                           name="joiningDate"
                           value={formData.joiningDate}
                           onChange={handleChange}
                        />
                     </div>

                     {/* Date of Exit */}
                     <div className="col-lg-4">
                        <CustomDatePicker
                           label="Date of Exit"
                           placeholder="Select Date of Exit"
                           id="exitDate"
                           name="exitDate"
                           value={formData.exitDate}
                           onChange={handleChange}
                        />
                     </div>

                     {/* Expierence (Years) */}
                     <div className="col-lg-4">
                        <CustomDatePicker
                           label="Expierence (Years)"
                           placeholder="Select Expierence (Years)"
                           id="expofyears"
                           name="expofyears"
                           value={formData.expofyears}
                           onChange={handleChange}
                        />
                     </div>

                     <div className="col-lg-12">
                        <CustomTextArea
                           label="Address"
                           id="address"
                           name="address"
                           placeholder="Enter Address"
                           value={formData.address}
                           onChange={handleChange} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Driver License</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     {/* Driver License */}
                     <div className="col-lg-4">
                        <CustomInput
                           label="Driver License"
                           id="driverLicense"
                           placeholder="Enter Driver License"
                           value={formData.drivingLicense}
                           onChange={handleChange}
                           name="drivingLicense"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomDatePicker
                           label="License Expiry details"
                           placeholder="Select Expiry details"
                           id="licenseExp"
                           name="licenseExp"
                           value={formData.licenseExp}
                           onChange={handleChange}
                        />
                     </div>

                     <div className="col-lg-4">
                        <label className="text-bold">DL Document</label>
                        <CustomFileUpload
                           label="DL Document"
                           id="dlUpload"
                           name="dlUpload"
                           onChange={handleChange} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Identification Documents</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-6">
                        <CustomInput
                           label="Aadhar Card"
                           id="aadharCard"
                           placeholder="Enter Aadhar Card"
                           value={formData.aadharCard}
                           onChange={handleChange}
                           name="aadharCard"
                        />
                     </div>

                     <div className="col-lg-6">
                        <label className="text-bold">Aadhar card</label>
                        <CustomFileUpload
                           label="Aadhar card"
                           name="adharCard"
                           onChange={handleChange} />
                     </div>

                     <div className="col-lg-6">
                        <CustomInput
                           label="Pan Card"
                           id="panCard"
                           placeholder="Enter Pan Card"
                           value={formData.panCard}
                           onChange={handleChange}
                           name="panCard"
                        />
                     </div>

                     <div className="col-lg-6">
                        <label className="text-bold">Pan Card</label>
                        <CustomFileUpload label="Pan Card" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Pay roll Sec */}
            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Pay roll</h3>
               </div>

               <div className="card-body">
                  <div className="form-group">
                     <CustomRadio
                        label="Eisaku Pay roll"
                        id="eisakuPayRoll"
                        value="Eisaku Pay roll"
                        name="payRollType"
                        defaultChecked={formData.payRollType === "Eisaku Pay roll"}
                        checked={formData.payRollType === "Eisaku Pay roll"}
                        onChange={(event) => setFormData((prev) => ({
                           ...prev,
                           payRollType: event.target.value
                        }))}
                     />
                     <CustomRadio
                        label="Contractor"
                        id="contractor"
                        value="Contractor"
                        name="payRollType"
                        checked={formData.payRollType === "Contractor"}
                        onChange={(event) => setFormData((prev) => ({
                           ...prev,
                           payRollType: event.target.value
                        }))}
                     />
                  </div>
                  {formData.payRollType === "Contractor" && (
                     <div className="row">
                        <div className="col-lg-6">
                           <CustomInput
                              label="Contractor Name"
                              id="contractorName"
                              placeholder="Enter contractor Name"
                              value={formData.contractorName}
                              onChange={handleChange}
                              name="contractorName"
                           />
                        </div>
                        <div className="col-lg-6">
                           <CustomInput
                              label="Monthly Salary & Commission Amount"
                              id="monthlyCommAmount"
                              placeholder="Enter monthly commission amount"
                              value={formData.monthlyCommAmount}
                              onChange={handleChange}
                              name="monthlyCommAmount"
                           />
                        </div>
                     </div>
                  )}

                  {formData.payRollType === "Eisaku Pay roll" && (
                     <div className="row">
                        <div className="col-lg-4">
                           <CustomInput
                              label="Account Number"
                              id="accountNumber"
                              placeholder="Enter Account Number"
                              value={formData.accountNumber}
                              onChange={handleChange}
                              name="accountNumber"
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              label="Bank name"
                              id="bankName"
                              placeholder="Enter Bank Name"
                              value={formData.bankName}
                              onChange={handleChange}
                              name="bankName"
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              label="IFSC Code"
                              id="ifscCode"
                              placeholder="Enter IFSC Code"
                              value={formData.ifscCode}
                              onChange={handleChange}
                              name="ifscCode"
                           />
                        </div>

                        <div className="col-lg-4">
                           <CustomInput
                              label="Account Holder Name"
                              id="accountHolderName"
                              placeholder="Enter Account Holder name"
                              value={formData.accountHolderName}
                              onChange={handleChange}
                              name="accountHolderName"
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              label="Monthly salary amount"
                              id="monthlyAmount"
                              placeholder="Enter Monthly salary amount"
                              value={formData.monthlyAmount}
                              onChange={handleChange}
                              name="monthlyAmount"
                           />
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <div className="col-12 mt-4 text-center">
               <button className="btn btn-primary px-4 py-3" type="button" onClick={handleFormData}>
                  <h6 className="mb-0 text-uppercase">Submit</h6>
               </button>
               <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                  <h6 className="mb-0 text-uppercase">reset</h6>
               </button>
            </div>

         </form>
      </div>
   );
}

export default FleetMasterAddForm;
