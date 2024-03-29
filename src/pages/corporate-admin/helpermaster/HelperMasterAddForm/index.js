import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { useSelector, useDispatch } from "react-redux";
import { addHelperMasterAsync } from "../../../../redux/features/helperMaster";
import { fetchAllContractorsAsync } from "../../../../redux/features/driverMaster";

function HelperMasterAddForm() {
  const dispatch = useDispatch();
  const driverMaster = useSelector((state) => state.driverMaster);
  const contractorsData = driverMaster?.contractors?.map?.((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  const [payRollType, setpayRollType] = useState("Eisaku Pay Roll");
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

    contractorId: "",
    contractorName: "",
    monthlySalaryCommissionAmount: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      console.log(name, file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData, 'helper Data');

    const data = {
      name: formData.name,
      dob: formData.dob,
      doj: formData.dateOfJoining,
      doe: formData.dateOfExit,
      helper_image: formData.helperImage,
      address: formData.address,
      aadhar_card: formData.aadharNo,
      aadhar_card_doc: formData.aadharDocument,
      pan_card: formData.panNo,
      pan_card_doc: formData.panDocument,
      payroll: payRollType,
      account_number: formData.accountNumber,
      bank_name: formData.bankName,
      ifsc_code: formData.ifscCode,
      account_holder_name: formData.accountHolderName,
      monthly_salary_amount: formData.monthlySalaryAmount,

      contractor: formData.contractorName,
      contractor_master_id: formData.contractorId,
      monthly_salary_commission_amount: formData.monthlySalaryCommissionAmount,

      model_id: 5,
      action_id: 1,
    };

    if (payRollType === "Eisaku Pay roll") {
      delete data.contractor;
      delete data.contractor_master_id;
      delete data.monthly_salary_commission_amount;
    }

    if (payRollType === "Contractor") {
      delete data.account_number;
      delete data.bank_name;
      delete data.ifsc_code;
      delete data.account_holder_name;
      delete data.monthly_salary_amount;
    }

    const newData = new FormData();
    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });

    dispatch(addHelperMasterAsync(newData));
  };

  useEffect(() => {
    dispatch(fetchAllContractorsAsync());
  }, []);

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
                  <label className="text-bold">
                    Aadhar Document<span className="text-danger">*</span>
                  </label>
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
                  <label className="text-bold">
                    Pan Card Document
                    <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    name="panDocument"
                    value={formData.panDocument}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">
                    Helper Image
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
                    value="Eisaku Pay Roll"
                    name="payRollType"
                    defaultChecked={payRollType === "Eisaku Pay Roll"}
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
                      <CustomDropdown
                        require={require}
                        label="Contractor Name"
                        id="contractorName"
                        optionData={contractorsData}
                        placeholder="Enter contractor Name"
                        value={formData.contractorName}
                        onChange={(values) =>
                          setFormData((prev) => ({
                            ...prev,
                            contractorName: values?.[0]?.label,
                            contractorId: values?.[0]?.value,
                          }))
                        }
                        name="contractorName"
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

                {payRollType === "Eisaku Pay Roll" && (
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

export default HelperMasterAddForm;
