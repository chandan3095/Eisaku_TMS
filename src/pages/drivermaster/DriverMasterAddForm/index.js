import React, { useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import CustomMonthYear from "../../../components/common/CustomMonthYear/CustomMonthYear";

function FleetMasterAddForm() {
  const [fuelType, setFuelType] = useState(true);
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
        <h1 className="mb-4 text-center">Add Driver Master</h1>
        <div className="row">          
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Name</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">DOB</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>

          {/* Date of Joining */}
          <div className="col-lg-4">
                <CustomDatePicker
                  label="Date of Joining"
                  placeholder="Select Date of Joining"
                />
          
          {/* Date of Exit */}
                <CustomDatePicker
                  label="Date of Exit"
                  placeholder="Select Date of Exit"
                />
          </div>
          {/* Expierence (Years) */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Expierence (Years)</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">DL</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          {/* Driver License */}
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Driver License</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">DL</label>
                <CustomFileUpload />  
                <CustomDatePicker
                  label="Expiry details"
                  placeholder="Select Expiry details"
                />              
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Address</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Aadhar Card</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">Aadhar card</label>
                <CustomFileUpload />                
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Pan Card</h3>
              </div>
              <div className="card-body">
                <label className="text-bold">Pan Card</label>
                <CustomFileUpload />                
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
                <label className="text-bold">
                  Monthly Maintenance Budget (vehicle wise)
                </label>
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
              <h5 className="mb-0 text-uppercase">Submit</h5>
            </button>
            <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
              <h5 className="mb-0 text-uppercase">reset</h5>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
