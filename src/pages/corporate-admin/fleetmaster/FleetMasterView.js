import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import selectOptionData, {
  fleetMasterFormEdit,
  fleetMasterFormTitle,
} from "../../../constansts/LocalData";
import CustomModal from "../../../components/common/Modal";
import EmiForm from "./FleetMasterEditForm/EmiForm";
import ServiceRecord from "./FleetMasterEditForm/ServiceRecord";
import Tyre from "./FleetMasterEditForm/Tyre";
import MonthlyMaintenanceBudget from "./FleetMasterEditForm/MonthlyMaintenanceBudget";
import VehicleDetails from "./FleetMasterEditForm/VehicleDetails";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addFleetAsync,
  fetchSingleFleetAsync,
  fetchSingleFleetChildAsync,
  getFleetMasterDropdownDataAsync,
  updateFleetAsync,
} from "../../../redux/features/fleetMaster";

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
};

const childTableNames = {
  tyres: "tyres",
  serviceRecords: "service_records",
  monthlyBudget: "monthly_maintenance_budgets",
};

const FleetMasterView = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const fleetMaster = useSelector((state) => state.fleetMaster);
  const singleFleetMaster = fleetMaster?.singleFleetMaster;
  console.log({ singleFleetMaster });

  const [formDataState, setFormDataState] = useState(initialValues);

  console.log({ params });

  const [fuelType, setFuelType] = useState("Diesel");
  const [makeSelect, setMake] = useState("");
  const [tonnageSelect, setTonnage] = useState("");
  const [vehicleSelect, setVehicleCategory] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const toggleSwitch = () => {
    setIsChecked(!isChecked); // Toggle the state
    // console.log(isChecked);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

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

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    // setFieldValue("file", file);
    // setFile(file);
  };

  useEffect(() => {
    setFormDataState({
      vehicleNo: singleFleetMaster?.vehicle_no,
      chasisNo: singleFleetMaster?.chasis_no,
      engineNo: singleFleetMaster?.engine_no,
      vehicleOwnerName: singleFleetMaster?.vehicle_owner_name,
      dimension: singleFleetMaster?.dimension?.dimension,
      fastagBankName: singleFleetMaster?.fastag_bank_name,
      vehicleCategory: singleFleetMaster?.vehicle_category?.id,
      tonnage: singleFleetMaster?.tonnage?.id,
      fuelType: singleFleetMaster?.fuel_type,
      make: singleFleetMaster?.make?.id,
      model: singleFleetMaster?.model,
      registrationCertificate: singleFleetMaster?.registration_certificate,
      insuranceExpiryDate: singleFleetMaster?.insurance_expiry_date,
      insuranceAmount: singleFleetMaster?.insurance_amount,
      insuranceCertificate: singleFleetMaster?.insurance_certificate,
      fitnessExpiryDate: singleFleetMaster?.fitness_expiry_date,
      fitnessAmount: singleFleetMaster?.fitness_amount,
      fitnessCertificate: singleFleetMaster?.fitness_certificate,
      localPermitExpiryDate: singleFleetMaster?.local_permit_expiry_date,
      localPermitAmount: singleFleetMaster?.local_permit_amount,
      localPermitDocument: singleFleetMaster?.local_permit_document,
      nationalPermitExpiryDate: singleFleetMaster?.national_permit_expiry_date,
      nationalPermitAmount: singleFleetMaster?.national_permit_amount,
      nationalPermitDocument: singleFleetMaster?.national_permit_document,
      pucExpiryDate: singleFleetMaster?.puc_expiry_date,
      pucAmount: singleFleetMaster?.puc_amount,
      pucDocument: singleFleetMaster?.puc_document,
      mvTax: singleFleetMaster?.mv_tax_document,
      mvTaxExpiryDate: singleFleetMaster?.mv_tax_expiry_date,
      mvTaxAmount: singleFleetMaster?.mv_tax_amount,
      gpsProviderName: singleFleetMaster?.gps_provider_name,
      gpsAmount: singleFleetMaster?.gps_amount,
      fabricatorName: singleFleetMaster?.fabricator_name,
      fabricatorLocation: singleFleetMaster?.fabricator_location,

      // EMI
      emiStartDate: singleFleetMaster?.emi_start_date,
      emiEndDate: singleFleetMaster?.emi_end_date,
      emiAmount: singleFleetMaster?.emi_amount,
      emiCertificate: singleFleetMaster?.emi_certificate,
      financedBy: singleFleetMaster?.financed_by,
    });

    setFuelType(singleFleetMaster?.fuel_type);

    setTyreAdd(
      singleFleetMaster?.tyres?.map((item, index) => ({
        id: item?.id,
        odometerReading: item?.odometer_reading,
        tyreType: item?.tyre_type_id,
        tyreChangeDate: item?.tyre_change_date,
        tyreAmount: item?.tyre_amount,
        tyreStationName: item?.tyre_station_name,
        tyreBillUpload: item?.bill_upload_along_with_warranty_status,
      }))
    );

    setServiceBillAdd(
      singleFleetMaster?.service_records?.map((item, index) => ({
        id: item?.id,
        odometerReading: item?.odometer_reading,
        serviceDate: item?.service_date,
        serviceAmount: item?.service_amount,
        serviceStationName: item?.service_station_name,
        serviceBillUpload: item?.service_bill_upload,
      }))
    );

    setMaintenanceBudget(
      singleFleetMaster?.monthly_maintenance_budgets?.map((item, index) => ({
        id: item?.id,
        amount: item?.amount,
        toDate: item?.to_date,
        fromDate: item?.from_date,
      }))
    );
  }, [singleFleetMaster]);

  console.log({ formDataState });

  const updateFleetMaster = (formData) => {
    // return;
    const data = {
      id: params?.id,
      _method: "PATCH",
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
      action_id: 2,
      registration_certificate: formData?.registrationCertificate,
      insurance_certificate: formData.insuranceCertificate,
      local_permit_document: formData.localPermitDocument,
      national_permit_document: formData.nationalPermitDocument,
      puc_document: formData.pucDocument,
      mv_tax_document: formData.mvTax,
      emi_certificate: formData.insuranceCertificate,
      fitness_certificate: formData.fitnessCertificate,
    };

    typeof data.registration_certificate !== "object" &&
      delete data.registration_certificate;
    typeof data.insurance_certificate !== "object" &&
      delete data.insurance_certificate;
    typeof data.local_permit_document !== "object" &&
      delete data.local_permit_document;
    typeof data.national_permit_document !== "object" &&
      delete data.national_permit_document;
    typeof data.puc_document !== "object" && delete data.puc_document;
    typeof data.mv_tax_document !== "object" && delete data.mv_tax_document;
    typeof data.emi_certificate !== "object" && delete data.emi_certificate;
    typeof data.fitness_certificate !== "object" &&
      delete data.fitness_certificate;

    // console.log(typeof data.fitness_certificate, data.fitness_certificate);
    // return;

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
      service_station_name: serviceBillAdd.map(
        (item) => item.serviceStationName
      ),
      monthly_maintenance_budget_amount: maintenanceBudget.map(
        (item) => item.amount
      ),
      to_date: maintenanceBudget.map((item) => item.toDate),
      from_date: maintenanceBudget.map((item) => item.fromDate),
      // tyre_type_id: 1,
      // odometer_reading: 11,
      // tyre_change_date: "2024-02-02",
      // tyre_amount: 33,
      // tyre_station_name: "test2",
      // service_record_odometer_reading: 88,
      // service_date: "2024-02-02",
      // service_amount: 99,
      // service_station_name: "name2",
      // monthly_maintenance_budget_amount: 44,
      // to_date: "2024-02-02",
      // from_date: "2024-02-03",
    };

    // const db = {
    //     bill_upload_along_with_warranty_status: [file],
    //     service_bill_upload: [file],
    // };

    const newData = new FormData();

    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });
    Object.keys(ard).forEach((key, index) => {
      newData.append(`${key}[]`, JSON.stringify(ard[key]));
    });
    // Object.keys(db).forEach((key) => {
    //     newData.append(key, db[key]);
    // });
    serviceBillAdd.forEach((item) => {
      newData.append("service_bill_upload[]", item.serviceBillUpload);
    });
    tyreAdd.forEach((item) => {
      newData.append(
        "bill_upload_along_with_warranty_status[]",
        item.tyreBillUpload
      );
    });
    // newData.append("bill_upload_along_with_warranty_status[]", file);
    // newData.append("bill_upload_along_with_warranty_status[]", file);
    // newData.append("service_bill_upload[]", file);

    for (let i of newData.entries()) {
      console.log(i);
    }

    // newData.entries().forEach((item) => {
    //     console.log(item);
    // });

    dispatch(updateFleetAsync(newData));

    // navigate(RouteNames.fleetMasterList);
  };

  const formik = useFormik({
    initialValues: formDataState,
    // validationSchema,
    enableReinitialize: true,
    onSubmit: updateFleetMaster,
  });
  const handleCheckEditForm = () => {
    switch (currentTabIndex) {
      case 1:
        return <EmiForm />;
      case 2:
        return <ServiceRecord />;
      case 3:
        return <Tyre />;
      case 4:
        return <MonthlyMaintenanceBudget />;
      default:
        return <VehicleDetails />;
    }
  };

  useEffect(() => {
    dispatch(fetchSingleFleetAsync(params?.id));
    dispatch(getFleetMasterDropdownDataAsync());
  }, []);

  // useEffect(() => {
  //   let table_name = "";
  //   switch (currentTabIndex) {
  //     case 0:
  //       table_name = "";
  //       break;
  //     case 1:
  //       table_name = childTableNames.serviceRecords;
  //       break;
  //     case 2:
  //       table_name = childTableNames.tyres;
  //       break;
  //     case 3:
  //       table_name = childTableNames.monthlyBudget;
  //       break;
  //     default:
  //       break;
  //   }

  //   if (table_name) {
  //     dispatch(
  //       fetchSingleFleetChildAsync({
  //         // id: params?.id,
  //         id: 3,
  //         tableName: table_name,
  //       })
  //     );
  //   }
  // }, [currentTabIndex, dispatch, params?.id]);

  return (
    <div>
      <BodyHeader title="Edit Fleet Master" />
      {/* <CustomModal
        showModal={isModalVisible}
        handleCloseModal={handleCloseModal}
        modalSize="modal-xl"
        child={<EmiForm formik={formik} />}
      /> */}
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
                  {fleetMasterFormEdit.map((item) => (
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
                    <>
                      <VehicleDetails
                        //   setFile={setFile}
                        formik={formik}
                        //   handleFileChange={handleFileChange}
                        //   makeData={makeData}
                        selectOptionData={selectOptionData}
                        fuelType={fuelType}
                        //   tonnageData={tonnageData}
                        setFuelType={setFuelType}
                        //   vehicleCategoryData={vehicleCategoryData}
                      />
                      <EmiForm
                        handleFileChange={handleFileChange}
                        formik={formik}
                      />
                    </>
                  )}
                  {currentTabIndex === 1 && (
                    <ServiceRecord
                      serviceBillAdd={serviceBillAdd}
                      handleFileChange={handleFileChange}
                      handleServiceBill={handleServiceBill}
                      handleServiceBillDelete={handleServiceBillDelete}
                      handleServiceBillChange={handleServiceBillChange}
                      formik={formik}
                    />
                  )}
                  {currentTabIndex === 2 && (
                    <Tyre
                      tyreAdd={tyreAdd}
                      selectOptionData={selectOptionData}
                      //   tyreType={tyreType}
                      handleFileChange={handleFileChange}
                      handleTyreDelete={handleTyreDelete}
                      handleTyreAdd={handleTyreAdd}
                      handleTyreChange={handleTyreChange}
                      formik={formik}
                    />
                    // <ServiceRecord
                    //   serviceBillAdd={serviceBillAdd}
                    //   handleFileChange={handleFileChange}
                    //   handleServiceBill={handleServiceBill}
                    //   handleServiceBillDelete={handleServiceBillDelete}
                    //   handleServiceBillChange={handleServiceBillChange}
                    //   formik={formik}
                    // />
                  )}
                  {currentTabIndex === 3 && (
                    <MonthlyMaintenanceBudget
                      maintenanceBudgetDelete={maintenanceBudgetDelete}
                      maintenanceBudgetAdd={maintenanceBudgetAdd}
                      maintenanceBudget={maintenanceBudget}
                      formik={formik}
                      handleMaintenanceBudgetChange={
                        handleMaintenanceBudgetChange
                      }
                    />
                    // <Tyre
                    //   tyreAdd={tyreAdd}
                    //   selectOptionData={selectOptionData}
                    //   //   tyreType={tyreType}
                    //   handleFileChange={handleFileChange}
                    //   handleTyreDelete={handleTyreDelete}
                    //   handleTyreAdd={handleTyreAdd}
                    //   handleTyreChange={handleTyreChange}
                    //   formik={formik}
                    // />
                  )}
                  {/* {currentTabIndex === 4 && (
                    <MonthlyMaintenanceBudget
                      maintenanceBudgetDelete={maintenanceBudgetDelete}
                      maintenanceBudgetAdd={maintenanceBudgetAdd}
                      maintenanceBudget={maintenanceBudget}
                      formik={formik}
                      handleMaintenanceBudgetChange={handleMaintenanceBudgetChange}
                    />
                  )} */}
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
                      // onClick={() => {setCurrentTabIndex(currentTabIndex + 1)}}
                      onClick={formik.handleSubmit}
                    >
                      <h6 className="mb-0 text-uppercase">Save</h6>
                    </button>
                  )}

                  {currentTabIndex === fleetMasterFormTitle.length - 1 && (
                    <button
                      className="btn btn-danger ml-3 px-4 py-3"
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
      </form>
    </div>
  );
};

export default FleetMasterView;
