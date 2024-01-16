import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import selectOptionData, {
  fleetMasterFormTitle,
  makeData,
  tonnageData,
  vehicleCategoryData,
} from "../../../../constansts/LocalData";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  vehicleNo: Yup.string().required("vehicle No is required"),
  chasisNo: Yup.string().required("Chasis No is required"),
  engineNo: Yup.string().required("Engine No is required"),
  vehicleOwnerName: Yup.string().required("Vehicle Owner Name is required"),
  dimension: Yup.string().required("Dimension is required"),
  fastagBankName: Yup.string().required("Fastag Bank Name is required"),
  vehicleCategory: Yup.string().required("Vehicle Category is required"),
  tonnage: Yup.number()
    .required("Tonnage is required")
    .positive("Tonnage must be a positive number"),
  make: Yup.string().required("Make Name is required"),
  model: Yup.date()
  .required("Model Month Year is required")
  .min(new Date(), "Must be a future date"),
  registrationCertificate: Yup.string().required(
    "Registration Certificate is required"
  ),
  insuranceExpiryDate: Yup.date()
    .required("Insurance Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  insuranceAmount: Yup.number()
    .required("Insurance Amount is required")
    .min(0, "Must be a positive value"),
  insuranceCertificate: Yup.string().required(
    "Insurance Certificate is required"
  ),
  fitnessExpiryDate: Yup.date()
    .required("Fitness Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  fitnessAmount: Yup.number()
    .required("Fitness Amount is required")
    .min(0, "Must be a positive value"),
  fitnessCertificate: Yup.string().required("Fitness Certificate is required"),
  localPermitExpiryDate: Yup.date()
    .required("Local Permit Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  localPermitAmount: Yup.number()
    .required("Local Permit Amount is required")
    .min(0, "Must be a positive value"),
  localPermitDocument: Yup.string().required(
    "Local Permit Document is required"
  ),
  nationalPermitExpiryDate: Yup.date()
    .required("National Permit Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  nationalPermitAmount: Yup.number()
    .required("National Permit Amount is required")
    .min(0, "Must be a positive value"),
  nationalPermitDocument: Yup.string().required(
    "National Permit Document is required"
  ),
  pucExpiryDate: Yup.date()
    .required("PUC Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  pucAmount: Yup.number()
    .required("PUC Amount is required")
    .min(0, "Must be a positive value"),
  pucDocument: Yup.mixed().required('File is required'),
  mvTax: Yup.number()
    .required("MV Tax is required")
    .min(0, "Must be a positive value"),
  mvTaxExpiryDate: Yup.date()
    .required("MV Tax Expiry Date is required")
    .min(new Date(), "Must be a future date"),
  mvTaxAmount: Yup.number()
    .required("MV Tax Amount is required")
    .min(0, "Must be a positive value"),
  gpsProviderName: Yup.string().required("GPS Provider Name is required"),
  gpsAmount: Yup.number()
    .required("GPS Amount is required")
    .min(0, "Must be a positive value"),
  fabricatorName: Yup.string().required("Fabricator Name is required"),
  fabricatorLocation: Yup.string().required("Fabricator Location is required"),
});
const initialValues = {
  initialValues: {
    vehicleNo: "",
    chasisNo: "",
    engineNo: "",
    vehicleOwnerName: "",
    dimension: [],
    fastagBankName: "",
    vehicleCategory: "",
    tonnage: "",
    fuelType: "Petrol",
    make: "",
    model: "",
    registrationCertificate: "",
    insuranceExpiryDate: "",
    insuranceAmount: 0,
    insuranceCertificate: null,
    fitnessExpiryDate: "",
    fitnessAmount: 0,
    fitnessCertificate: "",
    localPermitExpiryDate: "",
    localPermitAmount: 0,
    localPermitDocument: "",
    nationalPermitExpiryDate: "",
    nationalPermitAmount: 0,
    nationalPermitDocument: "",
    pucExpiryDate: "",
    pucAmount: 0,
    pucDocument: "",
    mvTax: 0,
    mvTaxExpiryDate: "",
    mvTaxAmount: 0,
    gpsProviderName: "",
    gpsAmount: 0,
    fabricatorName: "",
    fabricatorLocation: "",

    // EMI 
    emiStartDate: "",
    emiEndDate: "",
    emiAmount: "",
    emiCertificate: "",
    financedBy: "",

    // Service Record 
    odometerReading: "",
    serviceDate: "",
    serviceAmount: "",
    serviceStationName: "",
    serviceBill: "",

    // tyre 
    tyreType: "",
    tyreChangeDate: "",
    tyreAmount: "",
    tyreStationName: "",
    tyreBillUpload: "",
  },
};
// const emiDetailsValues = {
//   initialValues: {
//     // EMI 
//     emiStartDate: "",
//     emiEndDate: "",
//     emiAmount: "",
//     emiCertificate: "",
//     financedBy: "",
//   },
// };
// const serviceRecordValues = {
//   initialValues: {
//     // Service Record 
//     odometerReading: "",
//     serviceDate: "",
//     serviceAmount: "",
//     serviceStationName: "",
//     serviceBill: "",
//   },
// };
// const tyreDetailsValues = {
//   initialValues: {
//     // tyre 
//     odometerReading: "",
//     tyreType: "",
//     tyreChangeDate: "",
//     tyreAmount: "",
//     tyreStationName: "",
//     tyreBillUpload: "",
//   },
// };
// const monthlyMaintenanceBudgetValues = {
//   initialValues: {
//     // Monthly Maintenance Budget 
//     maintenanceBudgetAmount: "",
//     maintenanceBudgetToDate: "",
//     maintenanceBudgetFromDate: "",
//   },
// };
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

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  // console.log(currentTabIndex, "currentTabIndex");
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });
  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue('file', file);
  };
  return (
    <div>
      <BodyHeader title="Add Fleet Master" />
      {/* <form className="" onSubmit={formik.handleSubmit}> */}
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
                          item.value === currentTabIndex
                            ? "nav-link active"
                            : "nav-link"
                        }
                        id={`${item.value}`}
                        data-toggle="pill"
                        href={`#${item.value}`}
                        role="tab"
                        aria-controls={`${item.value}`}
                        aria-selected={
                          item.value === currentTabIndex ? "true" : "false"
                        }
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
                              onChange={formik.handleChange}
                              value={formik.values.vehicleNo}
                              errors={formik.errors.vehicleNo}
                              message={formik.errors.vehicleNo}
                            />
                          </div>
                          <div className="col-lg-4">
                            {/* Vehicle No Sec */}
                            <CustomInput
                              label="Chasis No"
                              id="chasisNo"
                              placeholder="Enter Chasis No"
                              onChange={formik.handleChange}
                              value={formik.values.chasisNo}
                              errors={formik.errors.chasisNo}
                              message={formik.errors.chasisNo}
                            />
                          </div>
                          <div className="col-lg-4">
                            {/* Vehicle No Sec */}
                            <CustomInput
                              label="Engine No"
                              id="engineNo"
                              placeholder="Enter Engine No"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.engineNo}
                              errors={formik.errors.engineNo}
                              message={formik.errors.engineNo}
                            />
                          </div>

                          <div className="col-lg-4">
                            <CustomInput
                              label="Vehicle owner name"
                              id="vehicleOwner"
                              placeholder="Enter vehicle owner name"
                              onChange={formik.handleChange}
                              value={formik.values.vehicleOwnerName}
                              errors={formik.errors.vehicleOwnerName}
                              message={formik.errors.vehicleOwnerName}
                            />
                          </div>

                          {/* Dimension  */}
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Dimension(L B H (ft))
                            </label>
                            <CustomDropdown
                              optionData={selectOptionData}
                              value={formik.values.dimension}
                              onChange={(value) => {
                                formik.setFieldValue("dimension", value);
                              }}
                              errors={formik.errors.dimension}
                              message={formik.errors.dimension}
                            />
                          </div>

                          {/* Fastag bank name Sec */}
                          <div className="col-lg-4">
                            <CustomInput
                              label="Fastag bank name"
                              id="fastagBankName"
                              placeholder="Enter Fastag bank name"
                              onChange={formik.handleChange}
                              value={formik.values.fastagBankName}
                              errors={formik.errors.fastagBankName}
                              message={formik.errors.fastagBankName}
                            />
                          </div>
                          {/* Vehicle Category Sec */}
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Vehicle Category
                            </label>
                            <CustomDropdown
                              optionData={vehicleCategoryData}
                              value={formik.values.vehicleCategory}
                              onChange={(value) => {
                                formik.setFieldValue("vehicleCategory", value);
                              }}
                              errors={formik.errors.vehicleCategory}
                              message={formik.errors.vehicleCategory}
                            />
                          </div>
                          {/* Tonnage Sec */}
                          <div className="col-lg-4">
                            <label className="text-bold">Tonnage(T)</label>
                            <CustomDropdown
                              optionData={tonnageData}
                              value={formik.values.tonnage}
                              onChange={(value) => {
                                formik.setFieldValue("tonnage", value);
                              }}
                              errors={formik.errors.tonnage}
                              message={formik.errors.tonnage}
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
                              optionData={makeData}
                              value={formik.values.make}
                              onChange={(value) => {
                                formik.setFieldValue("make", value);
                              }}
                              errors={formik.errors.make}
                              message={formik.errors.make}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Model (Month Year)
                            </label>
                            <CustomMonthYear 
                            values={formik.values.model}
                            errors={formik.errors.model}
                            message={formik.errors.model}/>
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Registration Certificate{" "}
                            </label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="Insurance Expiry Date"
                              placeholder="Enter Insurance Expiry Date"
                              values={formik.values.insuranceExpiryDate}
                              errors={formik.errors.insuranceExpiryDate}
                              message={formik.errors.insuranceExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="Insurance Amount"
                              id="fitnessAmount"
                              placeholder="Enter Insurance Amount"
                              onChange={formik.handleChange}
                              value={formik.values.insuranceAmount}
                              errors={formik.errors.insuranceAmount}
                              message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Insurance Certificate
                            </label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}/>
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="Fitness Expiry Date"
                              placeholder="Enter Fitness Expiry Date"
                              values={formik.values.fitnessExpiryDate}
                              errors={formik.errors.fitnessExpiryDate}
                              message={formik.errors.fitnessExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="Fitness Amount"
                              id="fitnessAmount"
                              placeholder="Enter Fitness Amount"
                              onChange={formik.handleChange}
                              value={formik.values.fitnessAmount}
                              errors={formik.errors.fitnessAmount}
                              message={formik.errors.fitnessAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Fitness Certificate
                            </label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="Local Permit Expiry Date"
                              placeholder="Enter Local Permit Expiry Date"
                              name="localPermitExpiryDate"
                              values={formik.values.localPermitExpiryDate}
                              errors={formik.errors.localPermitExpiryDate}
                              message={formik.errors.localPermitExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="Local Permit Amount"
                              id="fitnessAmount"
                              placeholder="Enter Local Permit Amount"
                              onChange={formik.handleChange}
                              value={formik.values.fitnessAmount}
                              errors={formik.errors.fitnessAmount}
                              message={formik.errors.fitnessAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              Local Permit Document
                            </label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="National Permit Expiry Date"
                              placeholder="Enter National Permit Expiry Date"
                              values={formik.values.nationalPermitExpiryDate}
                              errors={formik.errors.nationalPermitExpiryDate}
                              message={formik.errors.nationalPermitExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="National Permit Amount"
                              id="fitnessAmount"
                              placeholder="Enter National Permit Amount"
                              onChange={formik.handleChange}
                              value={formik.values.nationalPermitAmount}
                              errors={formik.errors.nationalPermitAmount}
                              message={formik.errors.nationalPermitAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">
                              National Permit Document
                            </label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="PUC Expiry Date"
                              placeholder="Enter PUC Expiry Date"
                              values={formik.values.pucExpiryDate}
                              errors={formik.errors.pucExpiryDate}
                              message={formik.errors.pucExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="PUC Amount"
                              id="fitnessAmount"
                              placeholder="Enter PUC Amount"
                              onChange={formik.handleChange}
                              value={formik.values.pucAmount}
                              errors={formik.errors.pucAmount}
                              message={formik.errors.pucAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">PUC Document</label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="text-bold">MV Tax</label>
                            <CustomFileUpload 
                            accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomDatePicker
                              label="MV Tax Expiry Date"
                              placeholder="Enter MV Tax Expiry Date"
                              values={formik.values.mvTaxExpiryDate}
                              errors={formik.errors.mvTaxExpiryDate}
                              message={formik.errors.mvTaxExpiryDate}
                            />
                          </div>
                          <div className="col-lg-4">
                            <CustomInput
                              label="MV Tax Amount"
                              id="fitnessAmount"
                              placeholder="Enter MV Tax Amount"
                              onChange={formik.handleChange}
                              value={formik.values.mvTaxAmount}
                              errors={formik.errors.mvTaxAmount}
                              message={formik.errors.mvTaxAmount}
                            />
                          </div>
                          <div className="col-lg-6">
                            <CustomInput
                              label="GPS Provider Name"
                              id="#gpsProvider"
                              placeholder="Enter GPS Provider Name"
                              onChange={formik.handleChange}
                              value={formik.values.gpsProviderName}
                              errors={formik.errors.gpsProviderName}
                              message={formik.errors.gpsProviderName}
                            />
                          </div>
                          <div className="col-lg-6">
                            <CustomInput
                              label="GPS Amount"
                              id="fitnessAmount"
                              placeholder="Enter GPS Amount"
                              onChange={formik.handleChange}
                              value={formik.values.gpsAmount}
                              errors={formik.errors.gpsAmount}
                              message={formik.errors.gpsAmount}
                            />
                          </div>
                          <div className="col-lg-6">
                            <CustomInput
                              label="Fabricator Name"
                              id="fitnessAmount"
                              placeholder="Enter Fabricator Name"
                              onChange={formik.handleChange}
                              value={formik.values.fabricatorName}
                              errors={formik.errors.fabricatorName}
                              message={formik.errors.fabricatorName}
                            />
                          </div>

                          <div className="col-lg-6">
                            <CustomInput
                              label="Fabricator Location"
                              id="fitnessAmount"
                              placeholder="Enter Fabricator Location"
                              onChange={formik.handleChange}
                              value={formik.values.fabricatorLocation}
                              errors={formik.errors.fabricatorLocation}
                              message={formik.errors.fabricatorLocation}
                            />
                          </div>                          
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
                              <CustomFileUpload 
                              accept=".pdf, .doc, .docx"
                            onChange={(event) => handleFileChange(event)}
                            errors={formik.errors.insuranceAmount}
                            message={formik.errors.insuranceAmount}
                            />
                            </div>
                            {/* Financed by sec */}
                            <div className="col-lg-4">
                              <CustomInput
                                label="Financed by"
                                id="#financedBy"
                                placeholder="Enter name"
                              />
                            </div>                            
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
                                    id="odometerReading"
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
                  {currentTabIndex !== 0 && (
                    <button
                      className="btn btn-secondary px-4 py-3 mr-3"
                      type="button"
                      onClick={() => setCurrentTabIndex(currentTabIndex - 1)}
                    >
                      <h6 className="mb-0 text-uppercase">Back</h6>
                    </button>
                  )}
                  {currentTabIndex !== fleetMasterFormTitle.length - 1 && (
                    <button
                      className="btn btn-primary px-4 py-3"
                      type="button"
                      onClick={() => setCurrentTabIndex(currentTabIndex + 1)}
                    >
                      <h6 className="mb-0 text-uppercase">Next</h6>
                    </button>
                  )}

                  {currentTabIndex === fleetMasterFormTitle.length - 1 && (
                    <button className="btn btn-danger px-4 py-3" type="button" onClick={formik.handleSubmit}>
                      <h6 className="mb-0 text-uppercase">Submit</h6>
                    </button>
                  )}
                </div>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
}

export default FleetMasterAddForm;
