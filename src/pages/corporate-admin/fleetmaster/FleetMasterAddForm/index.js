import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
   addFleetAsync,
   getFleetMasterDropdownDataAsync,
   listFleetAsync,
} from "../../../../redux/features/fleetMaster";
import { useNavigate } from "react-router-dom";
import RouteNames from "../../../../AppRoutes/RouteName";
import CustomTab from "../../../../components/common/CustomTab";
import CustomStepper from "../../../../components/common/CustomStepper";

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
   registrationCertificate: Yup.string().required("Registration Certificate is required"),
   insuranceExpiryDate: Yup.date()
      .required("Insurance Expiry Date is required")
      .min(new Date(), "Must be a future date"),
   insuranceAmount: Yup.number()
      .required("Insurance Amount is required")
      .min(0, "Must be a positive value"),
   insuranceCertificate: Yup.string().required("Insurance Certificate is required"),
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
   localPermitDocument: Yup.string().required("Local Permit Document is required"),
   nationalPermitExpiryDate: Yup.date()
      .required("National Permit Expiry Date is required")
      .min(new Date(), "Must be a future date"),
   nationalPermitAmount: Yup.number()
      .required("National Permit Amount is required")
      .min(0, "Must be a positive value"),
   nationalPermitDocument: Yup.string().required("National Permit Document is required"),
   pucExpiryDate: Yup.date()
      .required("PUC Expiry Date is required")
      .min(new Date(), "Must be a future date"),
   pucAmount: Yup.number()
      .required("PUC Amount is required")
      .min(0, "Must be a positive value"),
   pucDocument: Yup.mixed().required("File is required"),
   mvTax: Yup.number().required("MV Tax is required").min(0, "Must be a positive value"),
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
      dimension: "",
      fastagBankName: "",
      vehicleCategory: "",
      tonnage: "",
      fuelType: "Petrol",
      make: "",
      model: "",
      registrationCertificate: null,
      insuranceExpiryDate: "",
      insuranceAmount: 0,
      insuranceCertificate: null,
      fitnessExpiryDate: "",
      fitnessAmount: 0,
      fitnessCertificate: null,
      localPermitExpiryDate: "",
      localPermitAmount: 0,
      localPermitDocument: null,
      nationalPermitExpiryDate: "",
      nationalPermitAmount: 0,
      nationalPermitDocument: "",
      pucExpiryDate: "",
      pucAmount: 0,
      pucDocument: "",
      mvTax: null,
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
      // odometerReading: "",
      // serviceDate: "",
      // serviceAmount: "",
      // serviceStationName: "",
      // serviceBill: "",

      // tyre
      // tyreType: "",
      // tyreChangeDate: "",
      // tyreAmount: "",
      // tyreStationName: "",
      // tyreBillUpload: "",
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
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const driverMaster = useSelector((state) => state.driverMaster);
   console.log({ driverMaster });

   const [file, setFile] = useState(null);
   console.log({ file });
   const [fuelType, setFuelType] = useState("Diesel");
   const [tyreType, setTyreType] = useState("");
   const [makeSelect, setMake] = useState("");
   const [tonnageSelect, setTonnage] = useState("");
   const [vehicleSelect, setVehicleCategory] = useState("");

   const [tyreAdd, setTyreAdd] = useState([
      {
         id: 1,
         odometerReading: "",
         tyreType: "",
         tyreChangeDate: "",
         tyreAmount: "",
         tyreStationName: "",
         tyreBillUpload: "",
      },
   ]);
   const handleTyreAdd = () => {
      setTyreAdd((prev) => [
         ...prev,
         {
            id: prev.length + 1,
            odometerReading: "",
            tyreType: "",
            tyreChangeDate: "",
            tyreAmount: "",
            tyreStationName: "",
            tyreBillUpload: "",
         },
      ]);
   };
   const handleTyreChange = (id, e, file) => {
      const { name, value } = e.target;
      console.log({ value: e.target?.files?.[0] });
      const changedData = tyreAdd.map((item) => {
         if (item.id === id) {
            return { ...item, [name]: file ? e.target?.files?.[0] : value };
         } else {
            return item;
         }
      });
      setTyreAdd(changedData);
   };
   const handleTyreDelete = (index) => {
      const updatedTyreAdd = [...tyreAdd];
      updatedTyreAdd.splice(index, 1);
      setTyreAdd(updatedTyreAdd);
   };

   const [serviceBillAdd, setServiceBillAdd] = useState([
      {
         id: 1,
         odometerReading: "",
         serviceDate: "",
         serviceAmount: "",
         serviceStationName: "",
         serviceBillUpload: null,
      },
   ]);
   const handleServiceBill = () => {
      setServiceBillAdd((prev) => [
         ...prev,
         {
            id: prev.length + 1,
            odometerReading: "",
            serviceDate: "",
            serviceAmount: "",
            serviceStationName: "",
            serviceBillUpload: null,
         },
      ]);
   };
   const handleServiceBillDelete = (index) => {
      const updatedServiceBill = [...serviceBillAdd];
      updatedServiceBill.splice(index, 1);
      setServiceBillAdd(updatedServiceBill);
   };
   const handleServiceBillChange = (id, e, file) => {
      const { name, value } = e.target;
      console.log({ value: e.target?.files?.[0] });
      const changedData = serviceBillAdd.map((item) => {
         if (item.id === id) {
            return { ...item, [name]: file ? e.target?.files?.[0] : value };
         } else {
            return item;
         }
      });
      setServiceBillAdd(changedData);
   };

   const [maintenanceBudget, setMaintenanceBudget] = useState([
      {
         id: 1,
         amount: "",
         toDate: "",
         fromDate: "",
      },
   ]);
   console.log({ maintenanceBudget });
   const maintenanceBudgetAdd = () => {
      setMaintenanceBudget((prev) => [
         ...prev,
         {
            id: prev.length + 1,
            amount: "",
            toDate: "",
            fromDate: "",
         },
      ]);
   };
   const maintenanceBudgetDelete = (index) => {
      const updatedMaintenanceBudget = [...maintenanceBudget];
      updatedMaintenanceBudget.splice(index, 1);
      setMaintenanceBudget(updatedMaintenanceBudget);
   };
   const handleMaintenanceBudgetChange = (id, e, file) => {
      const { name, value } = e.target;
      console.log({ value: e.target?.files?.[0] });
      const changedData = maintenanceBudget.map((item) => {
         if (item.id === id) {
            return { ...item, [name]: file ? e.target?.files?.[0] : value };
         } else {
            return item;
         }
      });
      setMaintenanceBudget(changedData);
   };

   const [currentTabIndex, setCurrentTabIndex] = useState(0);
   // console.log(currentTabIndex, "currentTabIndex");

   const addFleetMaster = (formData) => {
      console.log({ formData });
      console.log({ tyreAdd });
      console.log({ serviceBillAdd });
      console.log({ maintenanceBudget });
      // return;
      const data = {
         vehicle_no: formData.vehicleNo,
         chasis_no: formData.chasisNo,
         engine_no: formData.engineNo,
         vehicle_owner_name: formData.vehicleOwnerName,
         dimension_id: formData.dimension,
         fastag_bank_name: formData.fastagBankName,
         vehicle_category_id: formData.vehicleCategory,
         tonnage_id: formData.tonnage,
         make_id: formData.make,
         model: formData.model,
         insurance_expiry_date: formData.insuranceExpiryDate,
         insurance_amount: formData.insuranceAmount,
         fitness_expiry_date: formData.fitnessExpiryDate,
         fitness_amount: formData.fitnessAmount,
         local_permit_expiry_date: formData.localPermitExpiryDate,
         local_permit_amount: formData.localPermitAmount,
         national_permit_expiry_date: formData.nationalPermitExpiryDate,
         national_permit_amount: formData.nationalPermitAmount,
         puc_expiry_date: formData.pucExpiryDate,
         puc_amount: formData.pucAmount,
         mv_tax_expiry_date: formData.mvTaxExpiryDate,
         mv_tax_amount: formData.mvTaxAmount,
         gps_provider_name: formData.gpsProviderName,
         gps_amount: formData.gpsAmount,
         fabricator_name: formData.fabricatorName,
         fabricator_location: formData.fabricatorLocation,
         emi_start_date: formData.emiStartDate,
         emi_end_date: formData.emiEndDate,
         emi_amount: formData.emiAmount,
         financed_by: formData.financedBy,
         model_id: 3,
         action_id: 1,
         registration_certificate: formData?.registrationCertificate,
         insurance_certificate: formData.insuranceCertificate,
         local_permit_document: formData.localPermitDocument,
         national_permit_document: formData.nationalPermitDocument,
         puc_document: formData.pucDocument,
         mv_tax_document: formData.mvTax,
         emi_certificate: formData.insuranceCertificate,
         fitness_certificate: formData.fitnessCertificate,
      };

      const ard = {
         tyre_type_id: tyreAdd.map((item) => item.tyreType),
         odometer_reading: tyreAdd.map((item) => item.odometerReading),
         tyre_change_date: tyreAdd.map((item) => item.tyreChangeDate),
         tyre_amount: tyreAdd.map((item) => item.tyreAmount),
         tyre_station_name: tyreAdd.map((item) => item.tyreStationName),
         service_record_odometer_reading: serviceBillAdd.map(
            (item) => item.odometerReading
         ),
         service_date: serviceBillAdd.map((item) => item.serviceDate),
         service_amount: serviceBillAdd.map((item) => item.serviceAmount),
         service_station_name: serviceBillAdd.map((item) => item.serviceStationName),
         monthly_maintenance_budget_amount: maintenanceBudget.map((item) => item.amount),
         to_date: maintenanceBudget.map((item) => item.toDate),
         from_date: maintenanceBudget.map((item) => item.fromDate),
      };

      const newData = new FormData();

      Object.keys(data).forEach((key) => {
         newData.append(key, data[key]);
      });
      Object.keys(ard).forEach((key, index) => {
         newData.append(`${key}[]`, JSON.stringify(ard[key]));
      });

      serviceBillAdd.forEach((item) => {
         newData.append("service_bill_upload[]", item.serviceBillUpload);
      });
      tyreAdd.forEach((item) => {
         newData.append("bill_upload_along_with_warranty_status[]", item.tyreBillUpload);
      });

      console.log(file);

      for (let i of newData.entries()) {
         console.log(i);
      }

      dispatch(addFleetAsync(newData));
   };

   const formik = useFormik({
      initialValues: initialValues.initialValues,
      enableReinitialize: true,
      onSubmit: addFleetMaster,
   });

   const handleFileChange = (event, setFieldValue) => {
      const file = event.currentTarget.files[0];
      setFile(file);
   };

   useEffect(() => {
      dispatch(getFleetMasterDropdownDataAsync());
   }, []);

   return (
      <div>
         <BodyHeader title="Add Fleet Master" />

         {/* <CustomStepper /> */}
         {/* <CustomTab tabs={["a", "b"]} components={[<>asdsad</>, <>asdsad</>]} /> */}
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
                              setFile={setFile}
                              formik={formik}
                              handleFileChange={handleFileChange}
                              makeData={makeData}
                              selectOptionData={selectOptionData}
                              fuelType={fuelType}
                              tonnageData={tonnageData}
                              setFuelType={setFuelType}
                              vehicleCategoryData={vehicleCategoryData}
                              setCurrentTabIndex={setCurrentTabIndex}
                           />
                        )}

                        {currentTabIndex === 1 && (
                           <EmiForm
                              handleFileChange={handleFileChange}
                              formik={formik}
                              setCurrentTabIndex={setCurrentTabIndex}
                           />
                        )}

                        {currentTabIndex === 2 && (
                           <ServiceRecord
                              serviceBillAdd={serviceBillAdd}
                              handleFileChange={handleFileChange}
                              handleServiceBill={handleServiceBill}
                              handleServiceBillDelete={handleServiceBillDelete}
                              handleServiceBillChange={handleServiceBillChange}
                              setCurrentTabIndex={setCurrentTabIndex}
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
                              handleTyreChange={handleTyreChange}
                              formik={formik}
                              setCurrentTabIndex={setCurrentTabIndex}
                           />
                        )}

                        {currentTabIndex === 4 && (
                           <MonthlyMaintenanceBudget
                              maintenanceBudgetDelete={maintenanceBudgetDelete}
                              maintenanceBudgetAdd={maintenanceBudgetAdd}
                              maintenanceBudget={maintenanceBudget}
                              formik={formik}
                              handleMaintenanceBudgetChange={
                                 handleMaintenanceBudgetChange
                              }
                              setCurrentTabIndex={setCurrentTabIndex}
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
               </div>
            </div>
         </div>
      </div>
   );
}

export default FleetMasterAddForm;
