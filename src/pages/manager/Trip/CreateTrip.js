import React, { useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import selectOptionData, {
  destinationData,
  originData,
} from "../../../constansts/LocalData";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useFormik } from "formik";

const CreateTrip = () => {
  const formik =  useFormik({
   initialValues: {
    vehicleNo: ['123654'],
    driverName: "",
    driverNo: "",
    customerName: ['Ram'],
    laneName: "",
    origin: "",
    destination: "",
    EWayBillNo: "",
    EWayExpiry: "",
    invoiceNo: "123654",
    invoiceDate: "11/01/2024",
    invoiceValue: "",
    customer_eisakuLRNo: "",
    vehicleReportedDate: "",
    vehicleDispatchDate: "",
    actualDiselProvided: "",
    actualAdblueProvided: "",
    actualDriverTripAdvance: "",
    actualMiscExpence: "",
    actualMiscExpenceRemarks: "",
    destinationReportedTime: "",
    destinationUnloadingTime: "",
    pod: "",
    podRemarks: "",
  }});
 
  const [isDisabled, setIsdisabled] = useState(true);
  return (
    <div>
      <BodyHeader title="Add Trip Request" />
      <form className="p-5 shadow-lg">
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
                  values={formik.values.destination}
                  onChange={(value) => {
                    formik.setFieldValue("destination", value);
                  }}
                />
              </div>
              <div className="col-lg-4">
                <label className="text-bold">Vehicle No.</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  name="vehicleNo"
                  value={formik.values.vehicleNo}
                  
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Driver name</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  value={formik.values.driverName}
                  
                />
              </div>

              {/* Driver number */}
              <div className="col-lg-4">
                <label className="text-bold">Driver No.</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={selectOptionData}
                  value={formik.values.driverNo}
                  
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
                  
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Origin</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={originData}
                  value={formik.values.origin}
                  
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">Destination</label>
                <CustomDropdown
                  disabled={isDisabled}
                  optionData={destinationData}
                  value={formik.values.destination}
                  
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="E waybill No."
                  id="EWayBillNo"
                  placeholder="E waybill No."
                  value={formik.values.EWayBillNo}
                  onChange={() => {}}
                  name="EWayBillNo"
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="E Waybill Expiry Date & Time"
                  name="EWayExpiry"
                  id="EWayExpiry"
                  value={formik.values.EWayExpiry}
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Invoice No."
                  id="invoiceNo"
                  placeholder="Invoice No."
                  value={formik.values.invoiceNo}
                  onChange={() => {}}
                  name="invoiceNo"
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Invoice Date"
                  name="invoiceDate"
                  id="invoiceDate"
                  value={formik.values.invoiceDate}
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Invoice value"
                  id="invoiceValue"
                  placeholder="Invoice value"
                  value={formik.values.invoiceValue}
                  onChange={() => {}}
                  name="invoiceValue"
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  disabled={isDisabled}
                  label="Customer / Eisaku LR no."
                  id="customer_eisakuLRNo"
                  placeholder="Customer / Eisaku LR no."
                  value={formik.values.customer_eisakuLRNo}
                  onChange={() => {}}
                  name="customer_eisakuLRNo"
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Vehicle reported date time"
                  name="vehicleReportedDate"
                  id="vehicleReportedDate"
                  value={formik.values.vehicleReportedDate}
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Vehicle disptch date time"
                  name="vehicleDispatchDate"
                  id="vehicleDispatchDate"
                  value={formik.values.vehicleDispatchDate}
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Destination Reported date time"
                  name="destinationReportedTime"
                  id="destinationReportedTime"
                  value={formik.values.destinationReportedTime}
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <CustomDatePicker
                  disabled={isDisabled}
                  label="Destination Unloading date time"
                  name="destinationUnloadingTime"
                  id="destinationUnloadingTime"
                  value={formik.values.destinationUnloadingTime}
                  onChange={() => {}}
                />
              </div>

              <div className="col-lg-4">
                <label className="text-bold">POD</label>
                <CustomFileUpload
                  label="DL Document"
                  id="pod"
                  name="pod"
                  onChange={() => {}}
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
                  onChange={() => {}}
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
          <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">Reject</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTrip;
