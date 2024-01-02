import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";

function FleetMasterAddForm() {
  const [payRollType, setpayRollType] = useState('Eisaku Pay roll');
  return (
    <div>
      <form className="p-5 shadow-lg">
        <h1 className="mb-4 text-center">Add Driver Master</h1>
        <div className="row">          
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Name</h3>
              </div>
              <div className="card-body">
                <CustomInput
                label="Name"
                id="driverName"
                placeholder="Enter Name"
              />
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">DOB</h3>
              </div>
              <div className="card-body">
                <CustomDatePicker
                  label="DOB"
                  placeholder="Select DOB"
                />
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>

          {/* Date of Joining */}
          <div className="col-lg-4">
                <CustomDatePicker
                  label="Date of Joining"
                  placeholder="Select Date of Joining"
                />
          
          {/* Date of Exit */}
                <CustomDatePicker
                  label="Date of Exit"
                  placeholder="Select Date of Exit"
                />
          </div>
          {/* Expierence (Years) */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Expierence (Years)</h3>
              </div>
              <div className="card-body">
              <CustomDatePicker
                  label="Expierence (Years)"
                  placeholder="Select Expierence (Years)"
                />
                <label className="text-bold">DL</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          {/* Driver License */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Driver License</h3>
              </div>
              <div className="card-body">
              <CustomDatePicker
                  label="Driver License"
                  placeholder="Select Driver License"
                />
                <label className="text-bold">DL</label>
                <CustomFileUpload />  
                <CustomDatePicker
                  label="Expiry details"
                  placeholder="Select Expiry details"
                />              
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Address</h3>
              </div>
              <div className="card-body">
              <CustomTextArea label="Address" id="" placeholder="Enter Address"/>                
                
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Aadhar Card</h3>
              </div>
              <div className="card-body">
              <CustomInput
                label="Aadhar Card"
                id="aadharCard"
                placeholder="Enter Aadhar Card"
              />
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Pan Card</h3>
              </div>
              <div className="card-body">
              <CustomInput
                label="Pan Card"
                id="panCard"
                placeholder="Enter Pan Card"
              />
                <label className="text-bold">Pan Card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>

          
          {/* Tyre Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Eisaku Pay roll / Contractor</h3>
              </div>

              <div className="card-body">
              <div className="form-group">
                  <CustomRadio
                    label="Eisaku Pay roll"
                    id="eisakuPayRoll"
                    value="Eisaku Pay roll"
                    name="payRollType"
                    defaultChecked={payRollType=='Eisaku Pay roll'}
                    onChange={(event) => setpayRollType(event.target.value)}
                  />
                  <CustomRadio
                    label="Contractor"
                    id="contractor"
                    value="Contractor"
                    name="payRollType"
                    onChange={(event) => setpayRollType(event.target.value)}
                  />
                </div>
                { payRollType == 'Contractor' && 
                <div>
                <CustomInput
                  label="Contractor Name"
                  id="contractorName"
                  placeholder="Enter contractor Name"
                />
                <CustomInput
                label="Monthly Commission Amount"
                id="monthlyCommAmount"
                placeholder="Enter monthly commission amount"
              />
              </div>
                 }
                
                { payRollType == 'Eisaku Pay roll' && 
                  <div>
                    <CustomInput
                  label="Bank name"
                  id="bankName"
                  placeholder="Enter Bank Name"
                />
                <CustomInput
                  label="IFSC Code"
                  id="ifscCode"
                  placeholder="Enter IFSC Code"
                />
                <CustomInput
                  label="Account Number"
                  id="AccountNumber"
                  placeholder="Enter Account Number"
                />
                <CustomInput
                  label="Account Holder Name"
                  id="accountHolderName"
                  placeholder="Enter Account Holder name"
                />
                <CustomInput
                  label="Monthly salary amount"
                  id="monthlyAmount"
                  placeholder="Enter Monthly salary amount"
                />
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="col-12 mt-3 text-center">
            <button className="btn btn-primary px-4 py-3" type="submit">
              <h5 className="mb-0 text-uppercase">Submit</h5>
            </button>
            <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
              <h5 className="mb-0 text-uppercase">reset</h5>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
