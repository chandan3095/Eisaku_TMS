import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";

function FleetMasterAddForm() {
  const [fuelType, setFuelType] = useState('Diesel');
  const [tyreSelect, setTyreSelected] = useState("");
  const [makeSelect, setMake] = useState("");
  const [tonnageSelect, setTonnage] = useState("");
  const [vehicleSelect, setVehicleCategory] = useState("");
  const [serviceSelect, setServiceRecord] = useState("");

  const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
  const [serviceBillAdd, setServiceBillAdd] = useState([
    { selectedBillFile: "", serviceRecord: "" },
  ]);

  const handleServiceBill = () => {
    setServiceBillAdd([
      ...serviceBillAdd,
      { selectedBillFile: "", serviceRecord: "" },
    ]);
  };
  const handleServiceBillDelete = () => {
    if (serviceBillAdd.length > 1) {
      const updatedServiceBill = serviceBillAdd.slice(0, -1); // Removes the last element
      setServiceBillAdd(updatedServiceBill);
    }
  };
  const handleTyreAdd = () => {
    setTyreAdd([...tyreAdd, { selectedFile: "", tyreType: "" }]);
  };
  const handleTyreDelete = () => {
    if (tyreAdd.length > 1) {
      const updatedTyreAdd = tyreAdd.slice(0, -1); // Removes the last element
      setTyreAdd(updatedTyreAdd);
    }
  };

  return (
    <div>
      <form className="p-5 shadow-lg">
        <h1 className="mb-4 text-center">Add Fleet Master</h1>
        <div className="row">
          <div className="col-lg-4">
            <CustomInput
              label="Vehicle owner name"
              id="#vehicleOwner"
              placeholder="Enter vehicle owner name"
            />

            {/* Dimension  */}
            <CustomInput
              label="Dimension(L B H (ft))"
              id="#dimension"
              placeholder="Enter L B H (ft)"
            />

            {/* Financed by sec */}
            <CustomInput
              label="Financed by"
              id="#financedBy"
              placeholder="Enter name"
            />
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">EMI</h3>
              </div>

              <div className="card-body">
                {/* Emi Sec */}
                <label className="text-bold">EMI Schedule</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Start date"
                  placeholder="Enter vehicle owner name"
                />
                <CustomDatePicker
                  label="End date"
                  placeholder="Enter vehicle owner name"
                />
                <CustomInput
                  label="Amount"
                  id="emiAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* Fitness Certificate Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Fitness</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">Fitness Certificate</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* Insurance Certificate Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Insurance</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">Insurance Certificate</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* Local Permit Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Local Permit</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">Local Permit</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* National Permit Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">National Permit</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">National Permit</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* PUC Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">PUC</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">PUC</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>

          {/* Vehicle No Sec */}
          <div className="col-lg-4">
            <label className="text-bold">Vehicle No</label>
            <CustomFileUpload />

            {/* Vehicle No Sec */}
            <label className="text-bold">Chasis No</label>
            <CustomFileUpload />

            {/* Vehicle No Sec */}
            <label className="text-bold">Engine No</label>
            <CustomFileUpload />
          </div>

          {/* Make Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Make</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">Make</label>
                <CustomFileUpload />
                <CustomDropdown
                  optionData={["Tata", "Eicher", "Ashok leyland"]}
                  value={makeSelect}
                  onChange={(event) => setMake(event.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Model Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Model</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">RC</label>
                <CustomFileUpload />
                <label className="text-bold">Month Year</label>
                <CustomMonthYear />
              </div>
            </div>
          </div>
          {/* Fuel Type Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Fuel Type</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">Fuel Type</label>
                <CustomFileUpload />
                <div className="form-group mt-3">
                  <CustomRadio
                    label="Diesel"
                    id="diesel"
                    value="Diesel"
                    name="fuelType"
                    defaultChecked={fuelType}                    
                    onChange={(event) => setFuelType(event.target.value)}
                  />
                  <CustomRadio
                    label="CNG"
                    id="cng"
                    value="CNG"
                    name="fuelType"
                    onChange={(event) => setFuelType(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Fuel Type Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">MV Tax</h3>
              </div>

              <div className="card-body">
                <label className="text-bold">MV Tax</label>
                <CustomFileUpload />
                <CustomDatePicker
                  label="Expiry Date"
                  placeholder="Enter Expiry Date"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          {/* GPS Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">GPS</h3>
              </div>

              <div className="card-body">
                <CustomInput
                  label="GPS Provider Name"
                  id="#gpsProvider"
                  placeholder="Enter GPS Provider Name"
                />
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>

          {/* Body Maker Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Fabricator</h3>
              </div>

              <div className="card-body">
                <CustomInput
                  label="Fabricator Name"
                  id="fitnessAmount"
                  placeholder="Enter Fabricator Name"
                />
                <CustomInput
                  label="Fabricator Location"
                  id="fitnessAmount"
                  placeholder="Enter Fabricator Location"
                />
              </div>
            </div>
          </div>
          {/* Fastag bank name Sec */}
          <div className="col-lg-4">
            <CustomInput
              label="Fastag bank name"
              id="fitnessAmount"
              placeholder="Enter Fastag bank name"
            />
            {/* Vehicle Category Sec */}
            <label className="text-bold">Vehicle Category</label>
            <CustomDropdown
              optionData={[
                "20ft",
                "22ft",
                "24ft",
                "32ft SXL",
                "32ft MXL",
                "Any Other",
              ]}
              value={vehicleSelect}
              onChange={(event) => setVehicleCategory(event.target.value)}
            />
            {/* Tonnage Sec */}
            <label className="text-bold">Tonnage</label>
            <CustomDropdown
              optionData={[
                "20ft",
                "22ft",
                "24ft",
                "32ft SXL",
                "32ft MXL",
                "Any Other",
              ]}
              value={tonnageSelect}
              onChange={(event) => setTonnage(event.target.value)}
            />
          </div>

          {/* Service Record Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Service Record</h3>
              </div>

              <div className="card-body">
                {serviceBillAdd.map(() => (
                  <div>
                    <label className="text-bold">Service Record</label>
                    <CustomDropdown
                      optionData={[
                        "Odometer reeding",
                        "Service date",
                        "Service Amount",
                        "Service Station Name",
                      ]}
                      value={serviceSelect}
                      onChange={(event) => setServiceRecord(event.target.value)}
                    />
                    <label className="text-bold">Service bill upload</label>
                    <CustomFileUpload />
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={handleServiceBill}
                >
                  <i className="fas fa-plus"></i> Add item
                </button>
                {serviceBillAdd.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger float-right mr-3"
                    onClick={handleServiceBillDelete}
                  >
                    <i className="fas fa-trash"></i> Delete item
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Tyre Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Tyre</h3>
              </div>
              <div className="card-body">
                {tyreAdd.map(() => (
                  <div>
                    <label className="text-bold">Tyre</label>
                    <CustomDropdown
                      optionData={[
                        "Odometer reading",
                        "Tyre Type (New/Remold) Nylon/Radial",
                        "Tyre Change date",
                        "Tyre Amount",
                        "Tyre Station Name",
                      ]}
                      value={tyreSelect}
                      onChange={(event) => setTyreSelected(event.target.value)}
                    />
                    <label className="text-bold">
                      Bill upload along with warranty status
                    </label>
                    <CustomFileUpload />
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={handleTyreAdd}
                >
                  <i className="fas fa-plus"></i> Add item
                </button>
                {tyreAdd.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger float-right mr-3"
                    onClick={handleTyreDelete}
                  >
                    <i className="fas fa-trash"></i> Delete item
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Tyre Sec */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Monthly Maintenance Budget</h3>
              </div>

              <div className="card-body">
                
                <CustomInput
                  label="Amount"
                  id="fitnessAmount"
                  placeholder="Enter Amount"
                />
                <label className="text-bold">
                  Bill upload along with warranty status
                </label>
                <CustomFileUpload />
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
