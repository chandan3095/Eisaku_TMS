import React, { useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomRadio from "../../../components/common/CustomRadio/CustomRadio";
import CustomMonthYear from "../../../components/common/CustomMonthYear/CustomMonthYear";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import selectOptionData, { fleetMasterFormTitle } from "../../../constansts/LocalData";

const FleetMasterView = () => {

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

   const [currentTabIndex, setCurrentTabIndex] = useState(0);
   console.log(currentTabIndex, 'currentTabIndex');
   const maintenanceBudgetAdd = () => {
      setMaintenanceBudget([
         ...maintenanceBudget,
         { selectedBillFile: "", serviceRecord: "" },
      ]);
   };
   const maintenanceBudgetDelete = (index) => {
      const updatedMaintenanceBudget = [...maintenanceBudget];
      updatedMaintenanceBudget.splice(index, 1);
      setMaintenanceBudget(updatedMaintenanceBudget);
   };

   const handleServiceBill = () => {
      setServiceBillAdd([
         ...serviceBillAdd,
         { selectedBillFile: "", serviceRecord: "" },
      ]);
   };
   const handleServiceBillDelete = (index) => {
      const updatedServiceBill = [...serviceBillAdd];
      updatedServiceBill.splice(index, 1);
      setServiceBillAdd(updatedServiceBill);
   };
   const handleTyreAdd = () => {
      setTyreAdd([...tyreAdd, { selectedFile: "", tyreType: "" }]);
   };
   const handleTyreDelete = (index) => {
      const updatedTyreAdd = [...tyreAdd];
      updatedTyreAdd.splice(index, 1);
      setTyreAdd(updatedTyreAdd);
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
                           {/* <li className="nav-item">
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
                  </li> */}
                           {fleetMasterFormTitle.map((item) => (
                              <li className="nav-item">
                                 <a
                                    className={
                                       item.value === currentTabIndex ? "nav-link active" : "nav-link"
                                    }
                                    id={`${item.value}`}
                                    data-toggle="pill"
                                    href={`#${item.value}`}
                                    role="tab"
                                    aria-controls={`${item.value}`}
                                    aria-selected={item.value === currentTabIndex ? "true" : "false"}
                                    onClick={() => setCurrentTabIndex(item.value)}
                                 >
                                    {item.label}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="card-body">
                        <div className="tab-content" id="custom-tabs-three-tabContent">
                           {currentTabIndex === 0 && (
                              <div
                                 className="tab-pane fade show active"
                                 id="0"
                                 role="tabpanel"
                                 aria-labelledby="0"
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
                                          <label className="text-bold">
                                             Vehicle Category
                                          </label>
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
                                          <label className="text-bold">
                                             Model(Month Year)
                                          </label>
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
                                       {/* <div className="col-12 mt-3 text-right">
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
                          </div> */}
                                    </div>
                                 </div>
                              </div>
                           )}
                           {currentTabIndex === 1 && (
                              <div
                                 className="tab-pane fade show active"
                                 id="1"
                                 role="tabpanel"
                                 aria-labelledby="1"
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
                                          {/* <div className="col-12 mt-3 text-right">
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
                          </div> */}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )}
                           {currentTabIndex === 2 && (
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
                                                <div className="col-lg-4 mt-4 pt-2">
                                                   {index > 0 && (
                                                      <button
                                                         type="button"
                                                         className="btn btn-danger float-left ml-3"
                                                         onClick={handleServiceBillDelete}
                                                      >
                                                         <i className="fas fa-trash"></i> Delete
                                                         item
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
                                             {/* <div className="col-6 mt-3 text-right">
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
                            </div> */}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )}
                           {currentTabIndex === 3 && (
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
                                                   index < tyreAdd.length - 1 &&
                                                      tyreAdd.length > 1
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
                                                <div className="col-12 mb-3">
                                                   {index > 0 && (
                                                      <button
                                                         type="button"
                                                         className="btn btn-danger float-left"
                                                         onClick={handleTyreDelete}
                                                      >
                                                         <i className="fas fa-trash"></i> Delete
                                                         item
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
                                             {/* <div className="col-6 mt-3 text-right">
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
                            </div> */}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )}
                           {currentTabIndex === 4 && (
                              <div
                                 className="tab-pane fade show active"
                                 id="4"
                                 role="tabpanel"
                                 aria-labelledby="4"
                              >
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
                                                <div className="col-12">
                                                   {index > 0 && (
                                                      <button
                                                         type="button"
                                                         className="btn btn-danger float-left mb-3"
                                                         onClick={maintenanceBudgetDelete}
                                                      >
                                                         <i className="fas fa-trash"></i> Delete
                                                         item
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
                                                   onClick={maintenanceBudgetAdd}
                                                >
                                                   <i className="fas fa-plus"></i> Add More
                                                </button>
                                             </div>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div className="col-12 mt-3 text-right">
                           {
                              currentTabIndex !== 0 &&
                              <button className="btn btn-secondary px-4 py-3 mr-3" type="button" onClick={() => setCurrentTabIndex(currentTabIndex - 1)}>
                                 <h6 className="mb-0 text-uppercase">Back</h6>
                              </button>
                           }
                           {currentTabIndex !== fleetMasterFormTitle.length - 1 &&
                              <button className="btn btn-primary px-4 py-3" type="button" onClick={() => setCurrentTabIndex(currentTabIndex + 1)}>
                                 <h6 className="mb-0 text-uppercase">Next</h6>
                              </button>
                           }

                           {currentTabIndex === fleetMasterFormTitle.length - 1 &&
                              <button
                                 className="btn btn-danger ml-3 px-4 py-3"
                                 type="button"
                              >
                                 <h6 className="mb-0 text-uppercase">Submit</h6>
                              </button>
                           }
                        </div>

                     </div>
                     {/* /.card */}
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default FleetMasterView;