import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import BodyHeader from "../../../../components/common/CommonBodyHeader";

function FleetMasterAddForm() {
  const [payRollType, setpayRollType] = useState("Eisaku Pay roll");
  return (
    <div>
      <BodyHeader title="Add Helper Master" />
      <form className="p-5 shadow-lg">
        <div className="row">
         <div className="col-lg-12">
         <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Personal Details</h3>
            </div>
            <div className="card-body row">
              <div className="col-lg-4">
                <CustomInput
                  label="Name"
                  id="driverName"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-lg-4">
                <CustomDatePicker label="DOB" placeholder="Select DOB" />
              </div>

              {/* Date of Joining */}
              <div className="col-lg-4">
                <CustomDatePicker
                  label="Date of Joining"
                  placeholder="Select Date of Joining"
                />
              </div>
              {/* Date of Exit */}
              <div className="col-lg-4">
                <CustomDatePicker
                  label="Date of Exit"
                  placeholder="Select Date of Exit"
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  label="Aadhar Card"
                  id="aadharCard"
                  placeholder="Enter Aadhar Card"
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Aadhar Document</label>
                <CustomFileUpload />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  label="Pan Card"
                  id="panCard"
                  placeholder="Enter Pan Card"
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Pan Card Document</label>
                <CustomFileUpload />
              </div>
              <div className="col-lg-12">
                <CustomTextArea
                  label="Address"
                  id=""
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
         </div>
        </div>

            {/* Tyre Sec */}
            <div className="row">
              <div className="col-lg-12">
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
                        defaultChecked={payRollType === "Eisaku Pay roll"}
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
                    {payRollType === "Contractor" && (
                      <div className="row">
                        <div className="col-lg-6">
                          <CustomInput
                            label="Contractor Name"
                            id="contractorName"
                            placeholder="Enter contractor Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <CustomInput
                            label="Monthly salary & Commission Amount"
                            id="monthlyCommAmount"
                            placeholder="Enter monthly commission amount"
                          />
                        </div>
                      </div>
                    )}

                    {payRollType === "Eisaku Pay roll" && (
                      <div className="row">
                        <div className="col-lg-4">
                          <CustomInput
                            label="Account Number"
                            id="AccountNumber"
                            placeholder="Enter Account Number"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="Bank name"
                            id="bankName"
                            placeholder="Enter Bank Name"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="IFSC Code"
                            id="ifscCode"
                            placeholder="Enter IFSC Code"
                          />
                        </div>
                        
                        <div className="col-lg-4">
                          <CustomInput
                            label="Account Holder Name"
                            id="accountHolderName"
                            placeholder="Enter Account Holder name"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="Monthly salary amount"
                            id="monthlyAmount"
                            placeholder="Enter Monthly salary amount"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3 text-center">
                <button className="btn btn-primary px-4 py-3" type="submit">
                  <h6 className="mb-0 text-uppercase">Submit</h6>
                </button>
                <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                  <h6 className="mb-0 text-uppercase">reset</h6>
                </button>
              </div>
            </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
