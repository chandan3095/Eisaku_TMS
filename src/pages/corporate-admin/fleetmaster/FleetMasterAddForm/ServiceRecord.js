import React from "react";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";

function ServiceRecord({
  handleFileChange,
  handleServiceBill,
  handleServiceBillDelete,
  serviceBillAdd,
  formik,
}) {
  return (
    <div
      className="tab-pane fade show active"
      id="2"
      role="tabpanel"
      aria-labelledby="2"
    >
      <div className="col-lg-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Service Record</h3>
          </div>

          <div className="card-body">
            {serviceBillAdd.map((items, index) => (
              <div
                className={
                  index < serviceBillAdd.length - 1 && serviceBillAdd.length > 1
                    ? "row border-bottom mb-4 pb-3"
                    : "row"
                }
              >
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Odometer reading"
                    id="odometerReading"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Service Date"
                    id="serviceDate"
                    placeholder="Select Service Date"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Service Amount"
                    id="serviceAmount"
                    placeholder="Enter Service Amount"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Service Station Name"
                    id="serviceStationName"
                    placeholder="Enter Service Station Name"
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">
                    Service bill upload <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event)}
                    errors={formik.errors.insuranceAmount}
                    message={formik.errors.insuranceAmount}
                  />
                </div>
                <div className="col-lg-4 mt-4 pt-2">
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger float-left ml-3"
                      onClick={handleServiceBillDelete}
                    >
                      <i className="fas fa-trash"></i> Delete item
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-primary float-left"
                  onClick={handleServiceBill}
                >
                  <i className="fas fa-plus"></i> Add More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceRecord;
