import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import selectOptionData from "../../../../constansts/LocalData";

function FleetMasterAddForm() {
  const [fuelType, setFuelType] = useState("Diesel");
  const [tyreType, setTyreType] = useState("");
  const [makeSelect, setMake] = useState("");
  const [tonnageSelect, setTonnage] = useState("");
  const [vehicleSelect, setVehicleCategory] = useState("");
  const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
  const [serviceBillAdd, setServiceBillAdd] = useState([
    { selectedBillFile: "", serviceRecord: "" },
  ]);
  const [maintenanceBudget, setMaintenanceBudget] = useState([{}]);

  const maintenanceBudgetAdd = () => {
    setMaintenanceBudget([
      ...maintenanceBudget,
      { selectedBillFile: "", serviceRecord: "" },
    ]);
  };
  const maintenanceBudgetDelete = () => {
    if (maintenanceBudget.length > 1) {
      const updatedMaintenanceBudget = maintenanceBudget.slice(0, -1); // Removes the last element
      setMaintenanceBudget(updatedMaintenanceBudget);
    }
  };

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
      <BodyHeader title="Add Fleet Master" />
      <form className="">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary card-outline card-tabs">
              <div className="card-header p-0 pt-1 border-bottom-0">
                <ul
                  className="nav nav-tabs"
                  id="custom-tabs-three-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="custom-tabs-three-home-tab"
                      data-toggle="pill"
                      href="#custom-tabs-three-home"
                      role="tab"
                      aria-controls="custom-tabs-three-home"
                      aria-selected="true"
                    >
                      Vehicle Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-tabs-three-profile-tab"
                      data-toggle="pill"
                      href="#custom-tabs-three-profile"
                      role="tab"
                      aria-controls="custom-tabs-three-profile"
                      aria-selected="false"
                    >
                      EMI
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-tabs-three-messages-tab"
                      data-toggle="pill"
                      href="#custom-tabs-three-messages"
                      role="tab"
                      aria-controls="custom-tabs-three-messages"
                      aria-selected="false"
                    >
                      Service Record
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-tabs-three-settings-tab"
                      data-toggle="pill"
                      href="#custom-tabs-three-settings"
                      role="tab"
                      aria-controls="custom-tabs-three-settings"
                      aria-selected="false"
                    >
                      Tyre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-tabs-four-settings-tab"
                      data-toggle="pill"
                      href="#custom-tabs-four-settings"
                      role="tab"
                      aria-controls="custom-tabs-four-settings"
                      aria-selected="false"
                    >
                      Monthly Maintenance Budget
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-three-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="custom-tabs-three-home"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-three-home-tab"
                  >
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">Vehicle Details</h3>
                      </div>

                      <div className="row card-body">
                        {/* Vehicle No Sec */}
                        <div className="col-lg-4">
                          <CustomInput
                            label="Vehicle No"
                            id="vehicleNo"
                            placeholder="Enter Vehicle No"
                          />
                        </div>
                        <div className="col-lg-4">
                          {/* Vehicle No Sec */}
                          <CustomInput
                            label="Chasis No"
                            id="chasisNo"
                            placeholder="Enter Chasis No"
                          />
                        </div>
                        <div className="col-lg-4">
                          {/* Vehicle No Sec */}
                          <CustomInput
                            label="Engine No"
                            id="engineNo"
                            placeholder="Enter Engine No"
                          />
                        </div>

                        <div className="col-lg-4">
                          <CustomInput
                            label="Vehicle owner name"
                            id="#vehicleOwner"
                            placeholder="Enter vehicle owner name"
                          />
                        </div>

                        {/* Dimension  */}
                        <div className="col-lg-4">
                          <CustomInput
                            label="Dimension(L B H (ft))"
                            id="#dimension"
                            placeholder="Enter L B H (ft)"
                          />
                        </div>
                       

                        {/* Fastag bank name Sec */}
                        <div className="col-lg-4">
                          <CustomInput
                            label="Fastag bank name"
                            id="fitnessAmount"
                            placeholder="Enter Fastag bank name"
                          />
                        </div>
                        {/* Vehicle Category Sec */}
                        <div className="col-lg-4">
                          <label className="text-bold">Vehicle Category</label>
                          <CustomDropdown
                            optionData={selectOptionData}
                            value={vehicleSelect}
                            // onChange={(event) =>
                            //   setVehicleCategory(event.target.value)
                            // }
                          />
                        </div>
                        {/* Tonnage Sec */}
                        <div className="col-lg-4">
                          <label className="text-bold">Tonnage</label>
                          <CustomDropdown
                            optionData={selectOptionData}
                            value={tonnageSelect}
                            // onChange={(event) => setTonnage(event.target.value)}
                          />
                        </div>

                        <div className="col-lg-4">
                          <label className="text-bold">Fuel Type</label>
                          <div className="form-group mt-2">
                            <CustomRadio
                              label="Diesel"
                              id="diesel"
                              value="Diesel"
                              name="fuelType"
                              defaultChecked={fuelType}
                              onChange={(event) =>
                                setFuelType(event.target.value)
                              }
                            />

                            <CustomRadio
                              label="CNG"
                              id="cng"
                              value="CNG"
                              name="fuelType"
                              onChange={(event) =>
                                setFuelType(event.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <label className="text-bold">Make</label>
                          <CustomDropdown
                            optionData={selectOptionData}
                            value={makeSelect}
                            // onChange={(event) => setMake(event.target.value)}
                          />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">Model(Month Year)</label>
                          <CustomMonthYear />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">
                            Registration Certificate{" "}
                          </label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                            <CustomDatePicker
                              label="Insurance Expiry Date"
                              placeholder="Enter Insurance Expiry Date"
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="Insurance Amount"
                              id="fitnessAmount"
                              placeholder="Enter Insurance Amount"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Insurance Certificate
                            </label>
                            <CustomFileUpload />
                          </div>
                        <div className="col-lg-4">
                          <CustomDatePicker
                            label="Fitness Expiry Date"
                            placeholder="Enter Fitness Expiry Date"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="Fitness Amount"
                            id="fitnessAmount"
                            placeholder="Enter Fitness Amount"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">
                            Fitness Certificate
                          </label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                          <CustomDatePicker
                            label="Local Permit Expiry Date"
                            placeholder="Enter Local Permit Expiry Date"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="Local Permit Amount"
                            id="fitnessAmount"
                            placeholder="Enter Local Permit Amount"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">
                            Local Permit Document
                          </label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                          <CustomDatePicker
                            label="National Permit Expiry Date"
                            placeholder="Enter National Permit Expiry Date"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="National Permit Amount"
                            id="fitnessAmount"
                            placeholder="Enter National Permit Amount"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">
                            National Permit Document
                          </label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                          <CustomDatePicker
                            label="PUC Expiry Date"
                            placeholder="Enter PUC Expiry Date"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="PUC Amount"
                            id="fitnessAmount"
                            placeholder="Enter PUC Amount"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">PUC Document</label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                          <label className="text-bold">MV Tax</label>
                          <CustomFileUpload />
                        </div>
                        <div className="col-lg-4">
                          <CustomDatePicker
                            label="MV Tax Expiry Date"
                            placeholder="Enter MV Tax Expiry Date"
                          />
                        </div>
                        <div className="col-lg-4">
                          <CustomInput
                            label="MV Tax Amount"
                            id="fitnessAmount"
                            placeholder="Enter MV Tax Amount"
                          />
                        </div>
                        <div className="col-lg-6">
                          <CustomInput
                            label="GPS Provider Name"
                            id="#gpsProvider"
                            placeholder="Enter GPS Provider Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <CustomInput
                            label="GPS Amount"
                            id="fitnessAmount"
                            placeholder="Enter GPS Amount"
                          />
                        </div>
                        <div className="col-lg-6">
                          <CustomInput
                            label="Fabricator Name"
                            id="fitnessAmount"
                            placeholder="Enter Fabricator Name"
                          />
                        </div>

                        <div className="col-lg-6">
                          <CustomInput
                            label="Fabricator Location"
                            id="fitnessAmount"
                            placeholder="Enter Fabricator Location"
                          />
                        </div>
                        <div className="col-12 mt-3 text-right">
                          <button
                            className="btn btn-primary px-4 py-3"
                            type="submit"
                          >
                            <h6 className="mb-0 text-uppercase">Next</h6>
                          </button>
                          <button
                            className="btn btn-danger ml-3 px-4 py-3"
                            type="submit"
                          >
                            <h6 className="mb-0 text-uppercase">reset</h6>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-three-profile"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-three-profile-tab"
                  >
                    <div className="col-lg-12">
                      <div className="card card-primary">
                        <div className="card-header">
                          <h3 className="card-title">EMI</h3>
                        </div>

                        {/* Emi Sec */}
                        <div className="row card-body">
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="EMI Start date"
                              placeholder="Enter vehicle owner name"
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="EMI End date"
                              placeholder="Enter vehicle owner name"
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="EMI Amount"
                              id="emiAmount"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              EMI Certificate{" "}
                            </label>
                            <CustomFileUpload />
                          </div>
                           {/* Financed by sec */}
                        <div className="col-lg-4">
                          <CustomInput
                            label="Financed by"
                            id="#financedBy"
                            placeholder="Enter name"
                          />
                        </div>
                          <div className="col-12 mt-3 text-right">
                            <button
                              className="btn btn-primary px-4 py-3"
                              type="submit"
                            >
                              <h6 className="mb-0 text-uppercase">Next</h6>
                            </button>
                            <button
                              className="btn btn-danger ml-3 px-4 py-3"
                              type="submit"
                            >
                              <h6 className="mb-0 text-uppercase">reset</h6>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-three-messages"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-three-messages-tab"
                  >
                    {/* Service Record Sec */}
                    <div className="col-lg-12">
                      <div className="card card-primary">
                        <div className="card-header">
                          <h3 className="card-title">Service Record</h3>
                        </div>

                        <div className="card-body">
                          {serviceBillAdd.map((items, index) => (
                            <div
                              className={
                                index < serviceBillAdd.length - 1 &&
                                serviceBillAdd.length > 1
                                  ? "row border-bottom mb-4 pb-3"
                                  : "row"
                              }
                            >
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Odometer reading"
                                  id="odometerReeding"
                                  placeholder="Enter Amount"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomDatePicker
                                  label="Service Date"
                                  id="serviceDate"
                                  placeholder="Select Service Date"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Service Amount"
                                  id="serviceAmount"
                                  placeholder="Enter Service Amount"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Service Station Name"
                                  id="serviceStationName"
                                  placeholder="Enter Service Station Name"
                                />
                              </div>
                              <div className="col-lg-4">
                                <label className="text-bold">
                                  Service bill upload
                                </label>
                                <CustomFileUpload />
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
                              {serviceBillAdd.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger float-left ml-3"
                                  onClick={handleServiceBillDelete}
                                >
                                  <i className="fas fa-trash"></i> Delete item
                                </button>
                              )}
                            </div>
                            <div className="col-6 mt-3 text-right">
                              <button
                                className="btn btn-primary px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">Next</h6>
                              </button>
                              <button
                                className="btn btn-danger ml-3 px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">reset</h6>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-three-settings"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-three-settings-tab"
                  >
                    {/* Tyre Sec */}
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
                                  label="Odometer reading"
                                  id="odometerReading"
                                  placeholder="Enter Odometer reading"
                                />
                              </div>
                              <div className="col-lg-4">
                                <label className="text-bold">Tyre Type</label>
                                <CustomDropdown
                                  optionData={selectOptionData}
                                  value={tyreType}
                                  // onChange={(event) =>
                                  //   setTyreType(event.target.value)
                                  // }
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomDatePicker
                                  label="Tyre Change Date"
                                  id="tyreChangeDate"
                                  placeholder="Select Tyre Change Date"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Tyre Amount"
                                  id="tyreAmount"
                                  placeholder="Enter Tyre Amount"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Tyre Station Name"
                                  id="tyreStationName"
                                  placeholder="Enter Tyre Station Name"
                                />
                              </div>

                              <div className="col-lg-4">
                                <label className="text-bold">
                                  Bill upload along with warranty status
                                </label>
                                <CustomFileUpload />
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
                              {tyreAdd.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger float-left ml-3"
                                  onClick={handleTyreDelete}
                                >
                                  <i className="fas fa-trash"></i> Delete item
                                </button>
                              )}
                            </div>
                            <div className="col-6 mt-3 text-right">
                              <button
                                className="btn btn-primary px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">Next</h6>
                              </button>
                              <button
                                className="btn btn-danger ml-3 px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">reset</h6>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-four-settings"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-settings-tab"
                  >
                    {/* Monthly budget Sec */}
                    <div className="col-lg-12">
                      <div className="card card-primary">
                        <div className="card-header">
                          <h3 className="card-title">
                            Monthly Maintenance Budget
                          </h3>
                        </div>

                        <div className="card-body">
                          {maintenanceBudget.map((item, index) => (
                            <div
                              className={
                                index < maintenanceBudget.length - 1 &&
                                maintenanceBudget.length > 1
                                  ? "row border-bottom mb-4 pb-3"
                                  : "row"
                              }
                            >
                              <div className="col-lg-4">
                                <CustomInput
                                  label="Amount"
                                  id="fitnessAmount"
                                  placeholder="Enter Amount"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomDatePicker
                                  label="To Date"
                                  id="serviceDate"
                                  placeholder="Select To Date"
                                />
                              </div>
                              <div className="col-lg-4">
                                <CustomDatePicker
                                  label="From Date"
                                  id="serviceDate"
                                  placeholder="Select From Date"
                                />
                              </div>
                            </div>
                          ))}
                          <div className="row">
                            <div className="col-lg-6">
                              <button
                                type="button"
                                className="btn btn-primary float-left"
                                onClick={maintenanceBudgetAdd}
                              >
                                <i className="fas fa-plus"></i> Add More
                              </button>
                              {maintenanceBudget.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger float-left ml-3"
                                  onClick={maintenanceBudgetDelete}
                                >
                                  <i className="fas fa-trash"></i> Delete item
                                </button>
                              )}
                            </div>
                            <div className="col-6 mt-3 text-right">
                              <button
                                className="btn btn-primary px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">Submit</h6>
                              </button>
                              <button
                                className="btn btn-danger ml-3 px-4 py-3"
                                type="submit"
                              >
                                <h6 className="mb-0 text-uppercase">reset</h6>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
