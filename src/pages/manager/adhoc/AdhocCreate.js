import React, { useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
import { Formik, useFormik } from "formik";
import CustomerMasterSchema from "../../../constansts/schema";
import {
  destinationData,
  originData,
  tonnageData,
  vehicleCategoryData,
} from "../../../constansts/LocalData";

const AdhocCreate = () => {
  const [laneAddData, setLaneAddData] = useState();
  const formik = useFormik({
    initialValues: {
      customerName: "",
      agreementDocument: null,
      contactPersonName: "",
      customerMobileNo: "",
      customerEmail: "",
      location: "",
      address: "",
      laneName: "",
      origin: laneAddData ? laneAddData.origin : [],
      destination: [],
      vehicleCategory: [],
      tonnage: [],
      expressModeRateAdditional: "",
      superExpressModeRateAdditional: "",
      detentionRateAdditional: "",
      multipleLoadingLocationRateAdditional: "",
      multipleUnloadingLocationRateAdditional: "",
      loadingCharges: "",
      unloadingCharge: "",
      miscellaneousCharges: "",
      miscellaneousRemarks: "",
    },
    CustomerMasterSchema, // Apply the validation schema
    onSubmit: (values) => {},
  });
  return (
    <div>
      <BodyHeader title="Add AdHoc Lane & Customer " />
      {/* <form className="p-5 shadow-lg" onSubmit={formik.handleSubmit}> */}
      <div className="p-5 shadow-lg">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Customer Documents</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <CustomInput
                  label="Customer Name"
                  id="customerName"
                  placeholder="Enter Customer Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.customerName}
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Origin</label>
                <CustomDropdown
                  optionData={originData}
                  values={formik.values.origin}
                  onChange={(value) => {
                    formik.setFieldValue("origin", value);
                  }}
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Destination</label>
                <CustomDropdown
                  optionData={destinationData}
                  values={formik.values.destination}
                  onChange={(value) => {
                    formik.setFieldValue("destination", value);
                  }}
                />
              </div>

              {/* Contact Person Details  */}
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <CustomInput
                      label="Material customer name (Origin)"
                      id="contactPersonName"
                      placeholder="Enter Contact Person Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contactPersonName}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Contact Person Name"
                      id="contactPersonName"
                      placeholder="Enter Contact Person Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contactPersonName}
                    />
                    {formik.errors.contactPersonName &&
                    formik.touched.contactPersonName ? (
                      <div>{formik.errors.contactPersonName}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Customer Mobile No"
                      id="customerMobileNo"
                      placeholder="Enter Customer Mobile No"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                    {formik.errors.customerMobileNo &&
                    formik.touched.customerMobileNo ? (
                      <div>{formik.errors.customerMobileNo}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Material costomer name (Destination)"
                      id="customerEmailId"
                      placeholder="Enter Material costomer name (Destination)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerEmail}
                    />
                    {formik.errors.customerEmail &&
                    formik.touched.customerEmail ? (
                      <div>{formik.errors.customerEmail}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Contact Person Name"
                      id="contactPersonName"
                      placeholder="Enter Contact Person Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contactPersonName}
                    />
                    {formik.errors.contactPersonName &&
                    formik.touched.contactPersonName ? (
                      <div>{formik.errors.contactPersonName}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Customer Mobile No"
                      id="customerMobileNo"
                      placeholder="Enter Customer Mobile No"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label className="text-bold">
                      Material description details
                    </label>
                    <CustomTextArea />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">Tonnage</label>
                    <CustomDropdown
                      optionData={tonnageData}
                      values={formik.values.tonnage}
                      onChange={(value) => {
                        formik.setFieldValue("tonnage", value);
                      }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Trip Rate"
                      id="customerMobileNo"
                      placeholder="Enter Trip Rate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Brokerage charge"
                      id="customerMobileNo"
                      placeholder="Enter Brokerage charge"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Misc Charge"
                      id="customerMobileNo"
                      placeholder="Enter Misc Charge"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Detention rate"
                      id="customerMobileNo"
                      placeholder="Enter Detention rate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Lane Name"
                      id="customerMobileNo"
                      placeholder="Enter Lane Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Driver Trip Advance"
                      id="customerMobileNo"
                      placeholder="Enter Driver Trip Advance"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Trip Diesel budget (ltr)"
                      id="customerMobileNo"
                      placeholder="Enter Trip Diesel budget (ltr)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Trip Adblue budget (ltr)"
                      id="customerMobileNo"
                      placeholder="Enter Trip Adblue budget (ltr)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="Trip Toll"
                      id="customerMobileNo"
                      placeholder="Enter Trip Toll"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">Vehicle Type</label>
                    <CustomDropdown
                      optionData={vehicleCategoryData}
                      values={formik.values.vehicleCategory}
                      onChange={(value) => {
                        formik.setFieldValue("vehicleCategory", value);
                      }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      label="TAT (in Hrs)"
                      id="customerMobileNo"
                      placeholder="Enter TAT (in Hrs)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.customerMobileNo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Lane Details</h3>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div> */}
        <div className="col-12 mt-3 text-center mt-4">
          <button
            className="btn btn-primary px-4 py-3"
            type="submit"
            onSubmit={formik.handleSubmit}
          >
            <h6 className="mb-0 text-uppercase">Submit</h6>
          </button>
          <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">reset</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdhocCreate;
