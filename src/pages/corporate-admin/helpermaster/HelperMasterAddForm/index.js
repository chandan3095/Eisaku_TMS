import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import BodyHeader from "../../../../components/common/CommonBodyHeader";

function FleetMasterAddForm() {
  const [payRollType, setpayRollType] = useState("Eisaku Pay roll");
  console.log(payRollType);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    dateOfJoining: "",
    dateOfExit: "",
    aadharNo: "",
    aadharDocument: "",
    panNo: "",
    panDocument: "",
    helperImage: "",
    address: "",
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolderName: "",
    monthlySalaryAmount: "",
    contractorName: "",
    monthlySalaryCommissionAmount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'helper Data');
  };
  return (
    <div>
      <BodyHeader title="Add Helper Master" />
      <form className="p-3 shadow-lg" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Personal Details</h3>
              </div>
              <div className="card-body row">
                <div className="col-lg-4">
                  <CustomInput
                  require={require}
                    label="Name"
                    id="driverName"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDatePicker 
                  require={require}
                    label="DOB"
                    placeholder="Select DOB" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                {/* Date of Joining */}
                <div className="col-lg-4">
                  <CustomDatePicker
                  require={require}
                    label="Date of Joining"
                    placeholder="Select Date of Joining"
                    name="dateOfJoining"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                  />
                </div>
                {/* Date of Exit */}
                <div className="col-lg-4">
                  <CustomDatePicker
                    label="Date of Exit"
                    placeholder="Select Date of Exit"
                    name="dateOfExit"
                    value={formData.dateOfExit}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                  require={require}
                    label="Aadhar Card"
                    id="aadharCard"
                    placeholder="Enter Aadhar Card"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">Aadhar Document<span className="text-danger">*</span></label>
                  <CustomFileUpload 
                  name="aadharDocument"
                  value={formData.aadharDocument}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <CustomInput
                  require={require}
                    label="Pan Card"
                    id="panCard"
                    placeholder="Enter Pan Card"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">Pan Card Document
                  <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload 
                  name="panDocument"
                  value={formData.panDocument}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">Helper Image
                  <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    label="helper Image"
                    id="helperImage"
                    name="helperImage"
                    value={formData.helperImage}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12">
                  <CustomTextArea
                    label="Address"
                    id=""
                    placeholder="Enter Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
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
                      require={require}
                        label="Contractor Name"
                        id="contractorName"
                        placeholder="Enter contractor Name"
                        name="contractorName"
                    value={formData.contractorName}
                    onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6">
                      <CustomInput
                      require={require}
                        label="Monthly salary & Commission Amount"
                        id="monthlyCommAmount"
                        placeholder="Enter monthly commission amount"
                        name="monthlySalaryCommissionAmount"
                    value={formData.monthlySalaryCommissionAmount}
                    onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {payRollType === "Eisaku Pay roll" && (
                  <div className="row">
                    <div className="col-lg-4">
                      <CustomInput
                      require={require}
                        label="Account Number"
                        id="AccountNumber"
                        placeholder="Enter Account Number"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                      require={require}
                        label="Bank name"
                        id="bankName"
                        placeholder="Enter Bank Name"
                         name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                      require={require}
                        label="IFSC Code"
                        id="ifscCode"
                        placeholder="Enter IFSC Code"
                         name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-4">
                      <CustomInput
                      require={require}
                        label="Account Holder Name"
                        id="accountHolderName"
                        placeholder="Enter Account Holder name"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                      require={require}
                        label="Monthly salary amount"
                        id="monthlyAmount"
                        placeholder="Enter Monthly salary amount"
                        name="monthlySalaryAmount"
                        value={formData.monthlySalaryAmount}
                        onChange={handleChange}
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
