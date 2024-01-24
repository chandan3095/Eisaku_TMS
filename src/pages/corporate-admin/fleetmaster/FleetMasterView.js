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
import selectOptionData, { fleetMasterFormTitle } from "../../../constansts/LocalData";
import CustomModal from "../../../components/common/Modal";
import EmiForm from "./FleetMasterAddForm/EmiForm";
import ServiceRecord from "./FleetMasterAddForm/ServiceRecord";
import Tyre from "./FleetMasterAddForm/Tyre";
import MonthlyMaintenanceBudget from "./FleetMasterAddForm/MonthlyMaintenanceBudget";
import VehicleDetails from "./FleetMasterAddForm/VehicleDetails";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchSingleFleetAsync } from "../../../redux/features/fleetMaster";

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

const FleetMasterView = () => {
    const params = useParams();
    const dispatch = useDispatch();

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
    const columns = [
        {
            name: "Vehicle Number",
            selector: (row) => row.vehicleNumber,
        },
        {
            name: "Vehicle Name",
            selector: (row) => row.vehicleName,
            sortable: true,
        },
        {
            name: "Vehicle Title",
            selector: (row) => row.vehicleTitle,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];
    const data = [
        {
            id: 1,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataOne"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
        {
            id: 2,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataTwo"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
        {
            id: 3,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataThree"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
        {
            id: 4,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataFour"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
        {
            id: 5,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataFive"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
        {
            id: 6,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleShowModal}
                        type="button"
                    >
                        Edit
                    </button>
                    <CustomToggleSwitch
                        id="dataSix"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                </>
            ),
        },
    ];
    const customStyles = {
        table: {
            style: {
                border: "1px solid #0bc4f0", // Set border color
            },
        },
        rows: {
            style: {
                minHeight: "72px", // override the row height
                fontSize: "1rem",
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
                backgroundColor: "#0bc4f0",
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
                fontSize: "14px", // Set font size for regular cells
                border: "1px solid #0bc4f0",
            },
        },
    };
    const [records, setRecords] = useState(data);
    const handleFilter = (e) => {
        const searchText = e.target.value.toLowerCase();
        const newData = data.filter((row) => {
            return (
                row.vehicleNumber.toLowerCase().includes(searchText) ||
                row.vehicleName.toLowerCase().includes(searchText) ||
                row.vehicleTitle.toLowerCase().includes(searchText)
            );
        });
        setRecords(newData);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
        },
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
    }, []);
    return (
        <div>
            <BodyHeader title="Edit Fleet Master" />
            <CustomModal
                showModal={isModalVisible}
                handleCloseModal={handleCloseModal}
                modalSize="modal-xl"
                child={<EmiForm formik={formik} />}
            />
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
                                                    item.value === currentTabIndex
                                                        ? "true"
                                                        : "false"
                                                }
                                                onClick={() =>
                                                    setCurrentTabIndex(item.value)
                                                }
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-body">
                                <div
                                    className="tab-content"
                                    id="custom-tabs-three-tabContent"
                                >
                                    {currentTabIndex === 0 && (
                                        <div
                                            className="tab-pane fade show active"
                                            id="0"
                                            role="tabpanel"
                                            aria-labelledby="0"
                                        >
                                            <div className="card card-primary">
                                                <div className="card-header">
                                                    <h3 className="card-title">
                                                        Vehicle Details
                                                    </h3>
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
                                                        <label className="text-bold">
                                                            Tonnage
                                                        </label>
                                                        <CustomDropdown
                                                            optionData={selectOptionData}
                                                            value={tonnageSelect}
                                                            // onChange={(event) => setTonnage(event.target.value)}
                                                        />
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <label className="text-bold">
                                                            Fuel Type
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <CustomRadio
                                                                label="Diesel"
                                                                id="diesel"
                                                                value="Diesel"
                                                                name="fuelType"
                                                                defaultChecked={fuelType}
                                                                onChange={(event) =>
                                                                    setFuelType(
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />

                                                            <CustomRadio
                                                                label="CNG"
                                                                id="cng"
                                                                value="CNG"
                                                                name="fuelType"
                                                                onChange={(event) =>
                                                                    setFuelType(
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <label className="text-bold">
                                                            Make
                                                        </label>
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
                                                        <label className="text-bold">
                                                            PUC Document
                                                        </label>
                                                        <CustomFileUpload />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <label className="text-bold">
                                                            MV Tax
                                                        </label>
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
                                                        <h3 className="card-title">
                                                            EMI
                                                        </h3>
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
                                                        <h3 className="card-title">
                                                            Service Record
                                                        </h3>
                                                    </div>

                                                    <div className="card-body">
                                                        {/* <ServiceRecord /> */}
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
                                                        <h3 className="card-title">
                                                            Tyre
                                                        </h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-end">
                                                            <CustomInput
                                                                inputType="text"
                                                                placeholder="Search..."
                                                                id="search"
                                                                onChange={(e) =>
                                                                    handleFilter(e)
                                                                }
                                                            />
                                                        </div>
                                                        <DataTable
                                                            columns={columns}
                                                            data={records}
                                                            sortable
                                                            fixedHeader
                                                            pagination
                                                            responsive
                                                            striped={true}
                                                            borderColor="#000000"
                                                            customStyles={customStyles}
                                                        ></DataTable>
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
                                                        <div className="d-flex justify-content-end">
                                                            <CustomInput
                                                                inputType="text"
                                                                placeholder="Search..."
                                                                id="search"
                                                                onChange={(e) =>
                                                                    handleFilter(e)
                                                                }
                                                            />
                                                        </div>
                                                        <DataTable
                                                            columns={columns}
                                                            data={records}
                                                            sortable
                                                            fixedHeader
                                                            pagination
                                                            responsive
                                                            striped={true}
                                                            borderColor="#000000"
                                                            customStyles={customStyles}
                                                        ></DataTable>
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
                                            onClick={() =>
                                                setCurrentTabIndex(currentTabIndex - 1)
                                            }
                                        >
                                            <h6 className="mb-0 text-uppercase">Back</h6>
                                        </button>
                                    )}
                                    {currentTabIndex !==
                                        fleetMasterFormTitle.length - 1 && (
                                        <button
                                            className="btn btn-primary px-4 py-3"
                                            type="button"
                                            onClick={() =>
                                                setCurrentTabIndex(currentTabIndex + 1)
                                            }
                                        >
                                            <h6 className="mb-0 text-uppercase">Next</h6>
                                        </button>
                                    )}

                                    {currentTabIndex ===
                                        fleetMasterFormTitle.length - 1 && (
                                        <button
                                            className="btn btn-danger ml-3 px-4 py-3"
                                            type="button"
                                        >
                                            <h6 className="mb-0 text-uppercase">
                                                Submit
                                            </h6>
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
