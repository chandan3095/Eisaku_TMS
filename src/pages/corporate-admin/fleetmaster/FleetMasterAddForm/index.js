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
import VehicleDetails from "./VehicleDetails";
import MonthlyMaintenanceBudget from "./MonthlyMaintenanceBudget";
import Tyre from "./Tyre";
import ServiceRecord from "./ServiceRecord";
import EmiForm from "./EmiForm";

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
   pucDocument: Yup.mixed().required("File is required"),
   mvTax: Yup.number()
      .required("MV Tax is required")
      .min(0, "Must be a positive value"),
   mvTaxExpiryDate: Yup.date()
      .required("MV Tax Expiry Date is required")
      .min(new Date(), "Must be a future date"),
   mvTaxAmount: Yup.number()
      .required("MV Tax Amount is required")
      .min(0, "Must be a positive value"),
   gpsProviderName: Yup.string(),
   gpsAmount: Yup.number().min(0, "Must be a positive value"),
   fabricatorName: Yup.string(),
   fabricatorLocation: Yup.string(),
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

      // Monthly Maintenance Budget
      maintenanceBudgetAmount: "",
      maintenanceBudgetToDate: "",
      maintenanceBudgetFromDate: "",
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
      initialValues: initialValues.initialValues,
      validationSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
         // Handle form submission logic here
         console.log(values);
      },
   });

   // const {getFieldP} = formik
   const handleFileChange = (event, setFieldValue) => {
      const file = event.currentTarget.files[0];
      setFieldValue("file", file);
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
                           <VehicleDetails
                              formik={formik}
                              handleFileChange={handleFileChange}
                              makeData={makeData}
                              selectOptionData={selectOptionData}
                              fuelType={fuelType}
                              tonnageData={tonnageData}
                              setFuelType={setFuelType}
                              vehicleCategoryData={vehicleCategoryData}
                           />
                        )}

                        {currentTabIndex === 1 && (
                           <EmiForm
                              handleFileChange={handleFileChange}
                              formik={formik}
                           />
                        )}

                        {currentTabIndex === 2 && (
                           <ServiceRecord
                              serviceBillAdd={serviceBillAdd}
                              handleFileChange={handleFileChange}
                              handleServiceBill={handleServiceBill}
                              handleServiceBillDelete={handleServiceBillDelete}
                              formik={formik}
                           />
                        )}

                        {currentTabIndex === 3 && (
                           <Tyre
                              tyreAdd={tyreAdd}
                              selectOptionData={selectOptionData}
                              tyreType={tyreType}
                              handleFileChange={handleFileChange}
                              handleTyreDelete={handleTyreDelete}
                              handleTyreAdd={handleTyreAdd}
                              formik={formik}
                           />
                        )}

                        {currentTabIndex === 4 && (
                           <MonthlyMaintenanceBudget
                              maintenanceBudgetDelete={maintenanceBudgetDelete}
                              maintenanceBudgetAdd={maintenanceBudgetAdd}
                              maintenanceBudget={maintenanceBudget}
                              formik={formik}
                           />
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
                           <button
                              className="btn btn-danger px-4 py-3"
                              type="button"
                              onClick={formik.handleSubmit}
                           >
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
