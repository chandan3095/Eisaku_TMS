import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomRadio from "../../../components/common/CustomRadio/CustomRadio";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import { editDriveMaster } from "../../../reducer/DriveMasterReducer";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDriverMasterAsync,
  fetchAllContractorsAsync,
  fetchSingleDriveMasterAsync,
  updateDriverMasterAsync,
} from "../../../redux/features/driverMaster";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";

const DriverMasterEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const driverMaster = useSelector((state) => state.driverMaster);
  const singleDriverMaster = driverMaster?.singleDriverMaster;
  const contractorsData = driverMaster?.contractors?.map?.((item) => ({
    label: item?.name,
    value: item?.id,
  }));
  console.log({ driverMaster });

  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    joiningDate: "",
    exitDate: "",
    expofyears: "",
    driverImage: null,
    address: "",

    drivingLicense: "",
    licenseExp: "",
    dlUpload: "",

    aadharCard: "",
    aadharCardImg: null,
    panCard: "",
    panCardImg: null,

    payRollType: "Eisaku Pay Roll",

    contractorName: "",
    contractorId: 1,
    monthlyCommAmount: 10,

    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolderName: "",
    monthlyAmount: "",
  });

  console.log(formData);

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

  const handleUpdateDriver = () => {
    const data = {
      id: params?.id,
      contractor_master_id: formData.contractorId,

      name: formData.name,
      dob: formData.dob,
      doj: formData.joiningDate,
      doe: formData.exitDate,
      experience: formData.expofyears,
      driver_image: formData.driverImage,
      address: formData.address,

      driver_license: formData.drivingLicense,
      license_expiry_date: formData.licenseExp,
      dl_document: formData.dlUpload,

      aadhar_card: formData.aadharCard,
      aadhar_card_doc: formData.aadharCardImg,

      pan_card: formData.panCard,
      pan_card_doc: formData.panCardImg,

      payroll: formData.payRollType,

      account_number: formData.accountNumber,
      bank_name: formData.bankName,
      ifsc_code: formData.ifscCode,
      account_holder_name: formData.accountHolderName,
      monthly_salary_amount: formData.monthlyAmount,

      contractor: formData.contractorName,
      monthly_salary_commission_amount: formData.monthlyCommAmount,
      // is_deleted: "0",
      // is_active: "1",
      // created_by: 3,
      // updated_by: 3,
      // created_at: "2024-01-23T08:48:13.000000Z",
      // updated_at: "2024-01-23T08:48:13.000000Z",
      model_id: 4,
      action_id: 2,
      _method: "PATCH",
    };

    if (data.payroll === "Eisaku Pay Roll") {
      // delete data.contractor_master_id;
      delete data.contractor;
      // delete data.monthly_salary_commission_amount;
    }
    if (data.payroll === "Contractor") {
      delete data.account_number;
      delete data.bank_name;
      delete data.ifsc_code;
      delete data.account_holder_name;
      delete data.monthly_salary_amount;
    }
    if (!data.pan_card) {
      delete data.pan_card;
      delete data.pan_card_doc;
    }
    if (!data.aadhar_card) {
      delete data.aadhar_card;
      delete data.aadhar_card_doc;
    }

    const newData = new FormData();
    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });

    dispatch(updateDriverMasterAsync(newData));

    // navigate("/driver-master/view");
  };

  useEffect(() => {
    setFormData({
      name: singleDriverMaster?.name,
      dob: singleDriverMaster?.dob,
      joiningDate: singleDriverMaster?.doj,
      exitDate: singleDriverMaster?.doe,
      expofyears: singleDriverMaster?.experience,
      driverImage: singleDriverMaster?.driver_image,
      address: singleDriverMaster?.address,

      drivingLicense: singleDriverMaster?.driver_license,
      licenseExp: singleDriverMaster?.license_expiry_date,
      dlUpload: singleDriverMaster?.dl_document,

      aadharCard: singleDriverMaster?.aadhar_card,
      aadharCardImg: singleDriverMaster?.aadhar_card_doc,
      panCard: singleDriverMaster?.pan_card,
      panCardImg: singleDriverMaster?.pan_card_doc,

      payRollType: singleDriverMaster?.payroll,

      contractorName: singleDriverMaster?.contractor,
      contractorId: singleDriverMaster?.contractor_master_id,
      monthlyCommAmount: singleDriverMaster?.monthly_salary_commission_amount,

      accountNumber: singleDriverMaster?.account_number,
      bankName: singleDriverMaster?.bank_name,
      ifscCode: singleDriverMaster?.ifsc_code,
      accountHolderName: singleDriverMaster?.account_holder_name,
      monthlyAmount: singleDriverMaster?.monthly_salary_amount,
    });
  }, [singleDriverMaster]);

  useEffect(() => {
    dispatch(fetchAllContractorsAsync());
    dispatch(fetchSingleDriveMasterAsync(params.id));
  }, []);

  return (
    <div>
      <BodyHeader title="Edit Driver Master" />
      <form className="p-3 shadow-lg">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Personal Details</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <CustomInput
                  require={require}
                  label="Name"
                  id="driverName"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  require={require}
                  label="DOB"
                  name="dob"
                  id="dob"
                  placeholder="Select DOB"
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
                <CustomDropdown
                  require={require}
                  optionData={[...Array.from(Array(20).keys())].map((item) => ({
                    label: `${item + 1} ${item + 1 === 1 ? "Year" : "Years"}`,
                    value: item + 1,
                  }))}
                  label="Expierence (Years)"
                  placeholder="Select Expierence (Years)"
                  id="expofyears"
                  name="expofyears"
                  value={formData.expofyears}
                  onChange={(values) => {
                    setFormData((prev) => ({
                      ...prev,
                      expofyears: values?.[0]?.value,
                    }));
                  }}
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">
                  Driver Image
                  <span className="text-danger">*</span>
                </label>
                <CustomFileUpload
                  label="Driver Image"
                  id="driverImage"
                  name="driverImage"
                  onChange={(e) => {
                    console.log({ e });
                    handleChange(e);
                  }}
                />
              </div>

              <div className="col-lg-12">
                <CustomTextArea
                  label="Address"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                />
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
                  require={require}
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
                  require={require}
                  label="License Expiry details"
                  placeholder="Select Expiry details"
                  id="licenseExp"
                  name="licenseExp"
                  value={formData.licenseExp}
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">
                  DL Document<span className="text-danger">*</span>
                </label>
                <CustomFileUpload
                  label="DL Document"
                  id="dlUpload"
                  name="dlUpload"
                  onChange={handleChange}
                />
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
                  require={require}
                  label="Aadhar Card"
                  id="aadharCard"
                  placeholder="Enter Aadhar Card"
                  value={formData.aadharCard}
                  onChange={handleChange}
                  name="aadharCard"
                />
              </div>

              <div className="col-lg-6">
                <label className="text-bold">
                  Aadhar card<span className="text-danger">*</span>
                </label>
                <CustomFileUpload
                  label="Aadhar card"
                  name="aadharCardImg"
                  onChange={handleChange}
                />
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
                <CustomFileUpload
                  label="Pan Card"
                  name="panCardImg"
                  onChange={handleChange}
                />
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
                checked={formData.payRollType === "Eisaku Pay Roll"}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    payRollType: event.target.value,
                  }))
                }
              />
              <CustomRadio
                label="Contractor"
                id="contractor"
                value="Contractor"
                name="payRollType"
                checked={formData.payRollType === "Contractor"}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    payRollType: event.target.value,
                  }))
                }
              />
            </div>
            {formData.payRollType === "Contractor" && (
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

            {formData.payRollType === "Eisaku Pay Roll" && (
              <div className="row">
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
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
                    require={require}
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
                    require={require}
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
                    require={require}
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
                    require={require}
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
          <button
            className="btn btn-primary px-4 py-3"
            type="button"
            onClick={handleUpdateDriver}
          >
            <h6 className="mb-0 text-uppercase">Submit</h6>
          </button>
          <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">reset</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriverMasterEdit;
