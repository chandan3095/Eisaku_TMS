import React, { useState, useEffect } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDateTimePicker from "../../../components/common/CustomDateTimePicker/CustomDateTimePicker";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import selectOptionData, {
  destinationData,
  originData,
} from "../../../constansts/LocalData";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useFormik } from "formik";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomModal from "../../../components/common/Modal";

const CreateTrip = () => {
  const setFormData = {
    customerName: ["test"],
  };
  const formik = useFormik({
    initialValues: {
      vehicleNo: ["123654"],
      driverName: ["test"],
      driverNo: ["6413"],
      customerName: setFormData.customerName,
      laneName: "lane one",
      origin: "fgg",
      destination: "test",
      EWayBillNo: "#123654",
      EWayExpiry: "25-05-2025",
      invoiceNo: "123654",
      invoiceDate: "11-01-2024",
      invoiceValue: "258",
      customer_eisakuLRNo: "EISAKU123",
      vehicleReportedDate: "",
      vehicleDispatchDate: "",
      actualDiselProvided: "500",
      actualAdblueProvided: "400",
      actualDriverTripAdvance: "856200",
      actualMiscExpence: "500",
      actualMiscExpenceRemarks:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      destinationReportedTime: "",
      destinationUnloadingTime: "",
      pod: "",
      podRemarks:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    onSubmit: (values) => {
      // Handle form submission
      // console.log(values);
    },
  });
  console.log(formik.values.customerName, "555");

  // useEffect(() => {
  //   const defaultValue = 'test'; // Set your default value here
  //   formik.setFieldValue('customerName', defaultValue);
  //   console.log(defaultValue);
  // }, [formik.setFieldValue]);

  const [isDisabled, setIsdisabled] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <BodyHeader title="Add Trip Request" />
      <form className="p-3 shadow-lg" onSubmit={formik.handleSubmit}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">General Details</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <label className="text-bold">Customer name</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  name="customerName"
                  values={formik.values.customerName}
                  onChange={(value) => {
                    formik.setFieldValue("customerName", value);
                  }}
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Vehicle No.</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  name="vehicleNo"
                  values={formik.values.vehicleNo}
                  onChange={(value) => {
                    formik.setFieldValue("vehicleNo", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Driver name</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  values={formik.values.driverName}
                  name="driverName"
                  onChange={(value) => {
                    formik.setFieldValue("driverName", value);
                  }}
                />
              </div>

              {/* Driver number */}
              <div className="col-lg-4">
                <label className="text-bold">Driver No.</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  values={formik.values.driverNo}
                  name="driverNo"
                  onChange={(value) => {
                    formik.setFieldValue("driverNo", value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Lane Details</h3>
          </div>
          <div className="card-body">
            <div className="row">
              {/* lane name */}
              <div className="col-lg-4">
                <label className="text-bold">Lane Name</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  value={formik.values.laneName}
                  name="laneName"
                  onChange={(value) => {
                    formik.setFieldValue("laneName", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Origin</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={originData}
                  value={formik.values.origin}
                  name="origin"
                  onChange={(value) => {
                    formik.setFieldValue("origin", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Destination</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={destinationData}
                  value={formik.values.destination}
                  name="destination"
                  onChange={(value) => {
                    formik.setFieldValue("destination", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="E waybill No."
                  id="EWayBillNo"
                  placeholder="E waybill No."
                  value={formik.values.EWayBillNo}
                  name="EWayBillNo"
                  onChange={(value) => {
                    formik.setFieldValue("EWayBillNo", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDateTimePicker
                  disabled={isDisabled}
                  label="E Waybill Expiry Date & Time"
                  name="EWayExpiry"
                  id="EWayExpiry"
                  value={formik.values.EWayExpiry}
                  onChange={(value) => {
                    formik.setFieldValue("EWayExpiry", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Invoice No."
                  id="invoiceNo"
                  placeholder="Invoice No."
                  value={formik.values.invoiceNo}
                  name="invoiceNo"
                  onChange={(value) => {
                    formik.setFieldValue("invoiceNo", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Invoice Date"
                  name="invoiceDate"
                  id="invoiceDate"
                  value={formik.values.invoiceDate}
                  onChange={(value) => {
                    formik.setFieldValue("invoiceDate", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Invoice value"
                  id="invoiceValue"
                  placeholder="Invoice value"
                  value={formik.values.invoiceValue}
                  name="invoiceValue"
                  onChange={(value) => {
                    formik.setFieldValue("invoiceValue", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Customer / Eisaku LR no."
                  id="customer_eisakuLRNo"
                  placeholder="Customer / Eisaku LR no."
                  value={formik.values.customer_eisakuLRNo}
                  name="customer_eisakuLRNo"
                  onChange={(value) => {
                    formik.setFieldValue("invoiceValue", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDateTimePicker
                  disabled={isDisabled}
                  label="Vehicle reported date time"
                  name="vehicleReportedDate"
                  id="vehicleReportedDate"
                  value={formik.values.vehicleReportedDate}
                  onChange={(value) => {
                    formik.setFieldValue("vehicleReportedDate", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDateTimePicker
                  disabled={isDisabled}
                  label="Vehicle disptch date time"
                  name="vehicleDispatchDate"
                  id="vehicleDispatchDate"
                  value={formik.values.vehicleDispatchDate}
                  onChange={(value) => {
                    formik.setFieldValue("vehicleDispatchDate", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Actual Diesel provided"
                  id="actualDiselProvided"
                  inputType="number"
                  placeholder="E.g 100 Ltr."
                  value={formik.values.actualDiselProvided}
                  onChange={(value) => {
                    formik.setFieldValue("actualDiselProvided", value);
                  }}
                  name="actualDiselProvided"
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Actual Adblue provided"
                  id="actualAdblueProvided"
                  inputType="number"
                  placeholder="E.g 100 Ltr."
                  value={formik.values.actualAdblueProvided}
                  onChange={(value) => {
                    formik.setFieldValue("actualAdblueProvided", value);
                  }}
                  name="actualAdblueProvided"
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Actual driver trip advance"
                  id="actualDriverTripAdvance"
                  placeholder="E.g 100Rs"
                  inputType="number"
                  value={formik.values.actualDriverTripAdvance}
                  onChange={(value) => {
                    formik.setFieldValue("actualDriverTripAdvance", value);
                  }}
                  name="actualDriverTripAdvance"
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Actual miscellaneous expense "
                  id="actualMiscExpence"
                  placeholder="E.g 100Rs"
                  inputType="number"
                  value={formik.values.actualMiscExpence}
                  onChange={(value) => {
                    formik.setFieldValue("actualMiscExpence", value);
                  }}
                  name="actualMiscExpence"
                />
              </div>

              <div className="col-lg-12">
                <CustomTextArea
                  disabled={isDisabled}
                  label="Miscellaneous Expense Remarks"
                  id="actualMiscExpenceRemarks"
                  name="actualMiscExpenceRemarks"
                  placeholder="Remarks"
                  value={formik.values.actualMiscExpenceRemarks}
                  onChange={(value) => {
                    formik.setFieldValue("actualMiscExpenceRemarks", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDateTimePicker
                  disabled={isDisabled}
                  label="Destination Reported date time"
                  name="destinationReportedTime"
                  id="destinationReportedTime"
                  value={formik.values.destinationReportedTime}
                  onChange={(value) => {
                    formik.setFieldValue("destinationReportedTime", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <CustomDateTimePicker
                  disabled={isDisabled}
                  label="Destination Unloading date time"
                  name="destinationUnloadingTime"
                  id="destinationUnloadingTime"
                  value={formik.values.destinationUnloadingTime}
                  onChange={(value) => {
                    formik.setFieldValue("destinationUnloadingTime", value);
                  }}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">POD</label>
                <CustomFileUpload
                  label="DL Document"
                  id="pod"
                  name="pod"
                  onChange={(value) => {
                    formik.setFieldValue("pod", value);
                  }}
                />
              </div>

              <div className="col-lg-12">
                <CustomTextArea
                  disabled={isDisabled}
                  label="POD(Remarks)"
                  id="podRemarks"
                  name="podRemarks"
                  placeholder="Remarks"
                  value={formik.values.podRemarks}
                  onChange={(value) => {
                    formik.setFieldValue("podRemarks", value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card card-primary">
              <div className="card-header">
                 <h3 className="card-title">Identification Documents</h3>
              </div>
              <div className="card-body">
                 <div className="row">
                    <div className="col-lg-6">
                       <CustomInput
                        disabled={isDisabled}
                          label="Aadhar Card"
                          id="aadharCard"
                          placeholder="Enter Aadhar Card"
                          value={''}
                          onChange={''}
                          name="aadharCard"
                       />
                    </div>

                    <div className="col-lg-6">
                       <CustomInput
                        disabled={isDisabled}
                          label="Pan Card"
                          id="panCard"
                          placeholder="Enter Pan Card"
                          value={''}
                          onChange={''}
                          name="panCard"
                       />
                    </div>

                 </div>
              </div>
           </div> */}

        <div className="col-12 mt-4 text-center">
          <button
            className="btn btn-success px-4 py-3"
            type="button"
            onClick={""}
          >
            <h6 className="mb-0 text-uppercase">Approve</h6>
          </button>
          <button
            className="btn btn-danger ml-3 px-4 py-3"
            type="button"
            onClick={handleShowModal}
          >
            <h6 className="mb-0 text-uppercase">Reject</h6>
          </button>
        </div>
        <CustomModal
          showModal={isModalVisible}
          handleCloseModal={handleCloseModal}
          child={<CustomTextArea />}
        />
      </form>
    </div>
  );
};

export default CreateTrip;
