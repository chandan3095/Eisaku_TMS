import React from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";

function Tyre({
  tyreAdd,
  handleFileChange,
  handleTyreDelete,
  handleTyreAdd,
  formik,
  selectOptionData,
  tyreType
}) {
  return (
    <div
      className="tab-pane fade show active"
      id="3"
      role="tabpanel"
      aria-labelledby="3"
    >
      <div className="col-lg-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Tyre</h3>
          </div>
          <div className="card-body">
            {tyreAdd.map((item, index) => (
              <div
                className={
                  index < tyreAdd.length - 1 && tyreAdd.length > 1
                    ? "row border-bottom mb-4 pb-3"
                    : "row"
                }
              >
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Odometer reading"
                    id="odometerReading"
                    placeholder="Enter Odometer reading"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDropdown
                    label="Tyre Type"
                    optionData={selectOptionData}
                    value={tyreType}
                    // onChange={(event) =>
                    //   setTyreType(event.target.value)
                    // }
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Tyre Change Date"
                    id="tyreChangeDate"
                    placeholder="Select Tyre Change Date"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Tyre Amount"
                    id="tyreAmount"
                    placeholder="Enter Tyre Amount"
                  />
                </div>
                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Tyre Station Name"
                    id="tyreStationName"
                    placeholder="Enter Tyre Station Name"
                  />
                </div>

                <div className="col-lg-4">
                  <label className="text-bold">
                    Bill upload along with warranty status
                    <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event)}
                    errors={formik.errors.insuranceAmount}
                    message={formik.errors.insuranceAmount}
                  />
                </div>
                <div className="col-12 mb-3">
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger float-left"
                      onClick={handleTyreDelete}
                    >
                      <i className="fas fa-trash"></i> Delete item
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-lg-6">
                <button
                  type="button"
                  className="btn btn-primary float-left"
                  onClick={handleTyreAdd}
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

export default Tyre;
