import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllLaneAsync,
  fetchAllLocationAsync,
  fetchLaneMasterDetailsAsync,
  fetchSingleVendorMasterAsync,
  updateVendorAsync,
} from "../../../redux/features/vendorMaster";

import { useParams, useNavigate } from "react-router-dom";
import EditContactPerson from "./EditContactPerson";
import EditLaneDetails from "./EditLaneDetails";

const VendorMasterEdit = () => {
  const vendorMaster = useSelector((state) => state.vendorMaster);
  const singleVendorMaster = vendorMaster.singleVendorMaster;
  // For lane dropdown

  // For location dropdown
  const locationData = vendorMaster.locationData.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  const [formData, setFormData] = useState({
    id: "",
    vendorName: "",
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolderName: "",
    bankDocument: "",
    gstNumber: "",
    gstDocument: "",
    location: "",
    address: "",
    agreementStartDate: "",
    agreementEndDate: "",
    agreementDocument: "",
  });

  const dispatch = useDispatch();
  const { id: vendorId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleVendorMasterAsync(vendorId));
    dispatch(fetchAllLocationAsync());
    dispatch(fetchAllLaneAsync());
    dispatch(fetchLaneMasterDetailsAsync(vendorId));
  }, []);

  useEffect(() => {
    if (singleVendorMaster) {
      setFormData((prev) => ({
        ...prev,
        id: singleVendorMaster.id,
        vendorName: singleVendorMaster?.name,
        accountNumber: singleVendorMaster?.account_number,
        bankName: singleVendorMaster?.bank_name,
        ifscCode: singleVendorMaster?.ifsc_code,
        accountHolderName: singleVendorMaster?.account_holder_name,
        bankDocument: singleVendorMaster?.bank_document,
        gstNumber: singleVendorMaster?.gst_number,
        gstDocument: singleVendorMaster?.gst_document,
        location: singleVendorMaster?.location_master?.id,
        address: singleVendorMaster?.address,
        agreementStartDate: singleVendorMaster?.agreement_start_date,
        agreementEndDate: singleVendorMaster?.agreement_end_date,
        agreementDocument: singleVendorMaster?.agreement_document,
      }));
    }
  }, [singleVendorMaster]);

  // Change handler for simple forms
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

  const updateHandler = (e) => {
    e.preventDefault();
    const data = {
      id: formData.id,
      name: formData.vendorName,
      account_number: formData.accountNumber,
      bank_name: formData.bankName,
      ifsc_code: formData.ifscCode,
      account_holder_name: formData.accountHolderName,
      bank_document: formData.bankDocument,
      gst_number: formData.gstNumber,
      gst_document: formData.gstDocument,
      location_master_id: formData.location,
      address: formData.address,

      agreement_start_date: formData.agreementStartDate,
      agreement_end_date: formData.agreementEndDate,
      agreement_document: formData.agreementDocument,
      _method: "PATCH",
      model_id: 7,
      action_id: 1,
    };

    const newData = new FormData();
    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });

    console.log("==>", formData);
    dispatch(updateVendorAsync(newData));
  };

  return (
    <div>
      <BodyHeader title="Edit Vendor Master" className="p-3 shadow-lg" />
      <form>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Vendor Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <CustomInput
                      require={require}
                      label="Vendor Name"
                      id="#vendorName"
                      placeholder="Enter Vendor Name"
                      name="vendorName"
                      value={formData.vendorName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="Account Number"
                      id="AccountNumber"
                      placeholder="Enter Account Number"
                      name={"accountNumber"}
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
                      name={"bankName"}
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="IFSC Code"
                      id="ifscCode"
                      placeholder="Enter IFSC Code"
                      name={"ifscCode"}
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
                      name={"accountHolderName"}
                      value={formData.accountHolderName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">
                      Bank Document
                      <span className="text-danger">*</span>
                    </label>
                    <CustomFileUpload
                      label="Bank Details"
                      id="bankDetails"
                      name={"bankDocument"}
                      value={formData.bankDocument}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="GST Number"
                      id="gstNumber"
                      placeholder="Enter GST Number"
                      name={"gstNumber"}
                      value={formData.gstNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">
                      GST Document
                      <span className="text-danger">*</span>
                    </label>
                    <CustomFileUpload
                      label="GST Details"
                      id="gst"
                      name={"gstDocument"}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-4">
                    <CustomDropdown
                      require={require}
                      label="location"
                      optionData={locationData}
                      onChange={(values) =>
                        setFormData((prev) => ({
                          ...prev,
                          location: values[0].value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-lg-12">
                    <CustomTextArea
                      label="Address"
                      value={formData.address}
                      name={"address"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Agreement Details</h3>
              </div>
              <div className="card-body row">
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Agreement Start Date"
                    placeholder="Enter Agreement Start Date"
                    name={"agreementStartDate"}
                    value={formData.agreementStartDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Agreement End Date"
                    placeholder="Enter Agreement End Date"
                    name={"agreementEndDate"}
                    value={formData.agreementEndDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">
                    Bank Document
                    <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    label="Agreement Document"
                    name={"agreementDocument"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 text-center">
          <button
            className="btn btn-primary px-4 py-3"
            type="button"
            onClick={updateHandler}
          >
            <h6 className="mb-0 text-uppercase">Update</h6>
          </button>
        </div>
      </form>

      <div className="row my-2">
        <div className="col-lg-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Contact Person Details</h3>
            </div>
            <EditContactPerson
              data={singleVendorMaster?.contact_personal_details}
            />
            <EditContactPerson vendorId={vendorId} mode="add" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Lane Details</h3>
            </div>
            <EditLaneDetails data={singleVendorMaster?.lane} />
            <EditLaneDetails vendorId={vendorId} mode="add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMasterEdit;
