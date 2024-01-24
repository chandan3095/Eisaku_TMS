import React from "react";
import * as Yup from "yup";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { Form, FormikProvider, useFormik } from "formik";
import { useSelector } from "react-redux";

// const validationSchema = Yup.object().shape({
//     vehicleNo: Yup.string().required("vehicle No is required"),
//     chasisNo: Yup.string().required("Chasis No is required"),
//     engineNo: Yup.string().required("Engine No is required"),
//     vehicleOwnerName: Yup.string().required("Vehicle Owner Name is required"),
//     dimension: Yup.string().required("Dimension is required"),
//     fastagBankName: Yup.string().required("Fastag Bank Name is required"),
//     vehicleCategory: Yup.string().required("Vehicle Category is required"),
//     tonnage: Yup.number()
//         .required("Tonnage is required")
//         .positive("Tonnage must be a positive number"),
//     make: Yup.string().required("Make Name is required"),
//     model: Yup.date()
//         .required("Model Month Year is required")
//         .min(new Date(), "Must be a future date"),
//     registrationCertificate: Yup.string().required(
//         "Registration Certificate is required"
//     ),
//     insuranceExpiryDate: Yup.date()
//         .required("Insurance Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     insuranceAmount: Yup.number()
//         .required("Insurance Amount is required")
//         .min(0, "Must be a positive value"),
//     insuranceCertificate: Yup.string().required("Insurance Certificate is required"),
//     fitnessExpiryDate: Yup.date()
//         .required("Fitness Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     fitnessAmount: Yup.number()
//         .required("Fitness Amount is required")
//         .min(0, "Must be a positive value"),
//     fitnessCertificate: Yup.string().required("Fitness Certificate is required"),
//     localPermitExpiryDate: Yup.date()
//         .required("Local Permit Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     localPermitAmount: Yup.number()
//         .required("Local Permit Amount is required")
//         .min(0, "Must be a positive value"),
//     localPermitDocument: Yup.string().required("Local Permit Document is required"),
//     nationalPermitExpiryDate: Yup.date()
//         .required("National Permit Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     nationalPermitAmount: Yup.number()
//         .required("National Permit Amount is required")
//         .min(0, "Must be a positive value"),
//     nationalPermitDocument: Yup.string().required("National Permit Document is required"),
//     pucExpiryDate: Yup.date()
//         .required("PUC Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     pucAmount: Yup.number()
//         .required("PUC Amount is required")
//         .min(0, "Must be a positive value"),
//     pucDocument: Yup.mixed().required("File is required"),
//     mvTax: Yup.number().required("MV Tax is required").min(0, "Must be a positive value"),
//     mvTaxExpiryDate: Yup.date()
//         .required("MV Tax Expiry Date is required")
//         .min(new Date(), "Must be a future date"),
//     mvTaxAmount: Yup.number()
//         .required("MV Tax Amount is required")
//         .min(0, "Must be a positive value"),
//     gpsProviderName: Yup.string(),
//     gpsAmount: Yup.number().min(0, "Must be a positive value"),
//     fabricatorName: Yup.string(),
//     fabricatorLocation: Yup.string(),
// });

// const initialValues = {
//     vehicleNo: "",
//     chasisNo: "",
//     engineNo: "",
//     vehicleOwnerName: "",
//     dimension: [],
//     fastagBankName: "",
//     vehicleCategory: "",
//     tonnage: "",
//     fuelType: "Petrol",
//     make: "",
//     model: "",
//     registrationCertificate: "",
//     insuranceExpiryDate: "",
//     insuranceAmount: 0,
//     insuranceCertificate: null,
//     fitnessExpiryDate: "",
//     fitnessAmount: 0,
//     fitnessCertificate: "",
//     localPermitExpiryDate: "",
//     localPermitAmount: 0,
//     localPermitDocument: "",
//     nationalPermitExpiryDate: "",
//     nationalPermitAmount: 0,
//     nationalPermitDocument: "",
//     pucExpiryDate: "",
//     pucAmount: 0,
//     pucDocument: "",
//     mvTax: 0,
//     mvTaxExpiryDate: "",
//     mvTaxAmount: 0,
//     gpsProviderName: "",
//     gpsAmount: 0,
//     fabricatorName: "",
//     fabricatorLocation: "",
// };

function VehicleDetails({
    formik,
    // makeData,
    handleFileChange,
    selectOptionData,
    fuelType,
    // tonnageData,
    setFuelType,
    // vehicleCategoryData,
}) {
    // const formik = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: validationSchema,
    //     onSubmit: () => {},
    // });

    const fleetMaster = useSelector((state) => state.fleetMaster);

    const tonnageData = fleetMaster?.tonnage?.map?.((item) => ({
        label: item?.tonnage,
        value: item?.id,
    }));
    const makeData = fleetMaster?.make?.map?.((item) => ({
        label: item?.make,
        value: item?.id,
    }));
    const dimensionData = fleetMaster?.dimension?.map?.((item) => ({
        label: item?.dimension,
        value: item?.id,
    }));
    const vehicleCategoryData = fleetMaster?.vehicleCategory?.map?.((item) => ({
        label: item?.category_name,
        value: item?.id,
    }));

    const { errors, touched, getFieldProps, handleSubmit, setFieldValue } = formik;

    return (
        <FormikProvider value={formik}>
            <Form noValidate>
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
                                    require={require}
                                    label="Vehicle No"
                                    id="vehicleNo"
                                    placeholder="Enter Vehicle No"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.vehicleNo}
                                    {...getFieldProps("vehicleNo")}
                                    errors={errors.vehicleNo}
                                    message={errors.vehicleNo}
                                />
                            </div>
                            <div className="col-lg-4">
                                {/* Vehicle No Sec */}
                                <CustomInput
                                    require={require}
                                    label="Chasis No"
                                    id="chasisNo"
                                    placeholder="Enter Chasis No"
                                    {...getFieldProps("chasisNo")}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.chasisNo}
                                    errors={errors.chasisNo}
                                    message={errors.chasisNo}
                                />
                            </div>
                            <div className="col-lg-4">
                                {/* Vehicle No Sec */}
                                <CustomInput
                                    require={require}
                                    label="Engine No"
                                    id="engineNo"
                                    placeholder="Enter Engine No"
                                    onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    {...getFieldProps("engineNo")}
                                    errors={errors.engineNo}
                                    message={errors.engineNo}
                                />
                            </div>

                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="Vehicle owner name"
                                    id="vehicleOwner"
                                    placeholder="Enter vehicle owner name"
                                    {...getFieldProps("vehicleOwnerName")}
                                    errors={errors.vehicleOwnerName}
                                    message={errors.vehicleOwnerName}
                                />
                            </div>

                            {/* Dimension  */}
                            <div className="col-lg-4">
                                <CustomDropdown
                                    label="Dimension(L B H (ft))"
                                    optionData={dimensionData}
                                    {...getFieldProps("dimension")}
                                    onChange={(value) => {
                                        setFieldValue(
                                            "dimension",
                                            value?.[0]?.value,
                                            true
                                        );
                                    }}
                                    errors={errors.dimension}
                                    message={errors.dimension}
                                />
                            </div>

                            {/* Fastag bank name Sec */}
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="Fastag bank name"
                                    id="fastagBankName"
                                    placeholder="Enter Fastag bank name"
                                    {...getFieldProps("fastagBankName")}
                                    errors={errors.fastagBankName}
                                    message={errors.fastagBankName}
                                />
                            </div>
                            {/* Vehicle Category Sec */}
                            <div className="col-lg-4">
                                <CustomDropdown
                                    label="Vehicle Category"
                                    optionData={vehicleCategoryData}
                                    {...getFieldProps("vehicleCategory")}
                                    onChange={(value) => {
                                        setFieldValue(
                                            "vehicleCategory",
                                            value?.[0]?.value
                                        );
                                    }}
                                    errors={errors.vehicleCategory}
                                    message={errors.vehicleCategory}
                                />
                            </div>
                            {/* Tonnage Sec */}
                            <div className="col-lg-4">
                                <CustomDropdown
                                    label="Tonnage(T)"
                                    optionData={tonnageData}
                                    {...getFieldProps("tonnage")}
                                    onChange={(value) => {
                                        setFieldValue("tonnage", value?.[0]?.value);
                                    }}
                                    errors={errors.tonnage}
                                    message={errors.tonnage}
                                />
                            </div>

                            <div className="col-lg-4">
                                <label className="text-bold">
                                    Fuel Type
                                    <span className="text-danger">*</span>
                                </label>
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
                                <CustomDropdown
                                    label="Make"
                                    optionData={makeData}
                                    {...getFieldProps("make")}
                                    onChange={(value) => {
                                        setFieldValue("make", value?.[0]?.value);
                                    }}
                                    errors={errors.make}
                                    message={errors.make}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomMonthYear
                                    label="Model (Month Year)"
                                    {...getFieldProps("model")}
                                    errors={errors.model}
                                    message={errors.model}
                                    onChange={(value) => {
                                        setFieldValue("model", value?.[0]?.value);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    Registration emiCertificate
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "registrationCertificate",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // errors={errors.insuranceAmount}
                                    // message={errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    label="Insurance Expiry Date"
                                    placeholder="Enter Insurance Expiry Date"
                                    {...getFieldProps("insuranceExpiryDate")}
                                    errors={errors.insuranceExpiryDate}
                                    message={errors.insuranceExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="Insurance Amount"
                                    // inputType={"number"}
                                    id="fitnessAmount"
                                    placeholder="Enter Insurance Amount"
                                    {...getFieldProps("insuranceAmount")}
                                    errors={errors.insuranceAmount}
                                    message={errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    Insurance Certificate
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    // onChange={(event) => handleFileChange(event)}
                                    onChange={(event) => {
                                        setFieldValue(
                                            "insuranceCertificate",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    label="Fitness Expiry Date"
                                    placeholder="Enter Fitness Expiry Date"
                                    {...getFieldProps("fitnessExpiryDate")}
                                    errors={formik.errors.fitnessExpiryDate}
                                    message={formik.errors.fitnessExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="Fitness Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter Fitness Amount"
                                    {...getFieldProps("fitnessAmount")}
                                    errors={formik.errors.fitnessAmount}
                                    message={formik.errors.fitnessAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    Fitness Certificate
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fitnessCertificate",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // onChange={(event) => handleFileChange(event)}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    label="Local Permit Expiry Date"
                                    placeholder="Enter Local Permit Expiry Date"
                                    {...getFieldProps("localPermitExpiryDate")}
                                    errors={formik.errors.localPermitExpiryDate}
                                    message={formik.errors.localPermitExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="Local Permit Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter Local Permit Amount"
                                    {...getFieldProps("localPermitAmount")}
                                    errors={formik.errors.localPermitAmount}
                                    message={formik.errors.localPermitAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    Local Permit Document
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "localPermitDocument",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // onChange={(event) => handleFileChange(event)}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    label="National Permit Expiry Date"
                                    placeholder="Enter National Permit Expiry Date"
                                    {...getFieldProps("nationalPermitExpiryDate")}
                                    errors={formik.errors.nationalPermitExpiryDate}
                                    message={formik.errors.nationalPermitExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="National Permit Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter National Permit Amount"
                                    {...getFieldProps("nationalPermitAmount")}
                                    errors={formik.errors.nationalPermitAmount}
                                    message={formik.errors.nationalPermitAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    National Permit Document
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "nationalPermitDocument",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // onChange={(event) => handleFileChange(event)}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    label="PUC Expiry Date"
                                    placeholder="Enter PUC Expiry Date"
                                    {...getFieldProps("pucExpiryDate")}
                                    errors={formik.errors.pucExpiryDate}
                                    message={formik.errors.pucExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="PUC Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter PUC Amount"
                                    {...getFieldProps("pucAmount")}
                                    errors={formik.errors.pucAmount}
                                    message={formik.errors.pucAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    PUC Document
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "pucDocument",
                                            event?.target?.files?.[0]
                                        );
                                    }}
                                    // onChange={(event) => handleFileChange(event)}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="text-bold">
                                    MV Tax
                                    <span className="text-danger">*</span>
                                </label>
                                <CustomFileUpload
                                    accept=".pdf, .doc, .docx"
                                    onChange={(event) => {
                                        setFieldValue("mvTax", event?.target?.files?.[0]);
                                    }}
                                    // onChange={(event) => handleFileChange(event)}
                                    // errors={formik.errors.insuranceAmount}
                                    // message={formik.errors.insuranceAmount}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomDatePicker
                                    require={require}
                                    createdBy
                                    label="MV Tax Expiry Date"
                                    placeholder="Enter MV Tax Expiry Date"
                                    {...getFieldProps("mvTaxExpiryDate")}
                                    errors={formik.errors.mvTaxExpiryDate}
                                    message={formik.errors.mvTaxExpiryDate}
                                />
                            </div>
                            <div className="col-lg-4">
                                <CustomInput
                                    require={require}
                                    label="MV Tax Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter MV Tax Amount"
                                    {...getFieldProps("mvTaxAmount")}
                                    errors={formik.errors.mvTaxAmount}
                                    message={formik.errors.mvTaxAmount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <CustomInput
                                    label="GPS Provider Name"
                                    id="gpsProvider"
                                    placeholder="Enter GPS Provider Name"
                                    {...getFieldProps("gpsProviderName")}
                                    errors={formik.errors.gpsProviderName}
                                    message={formik.errors.gpsProviderName}
                                />
                            </div>
                            <div className="col-lg-6">
                                <CustomInput
                                    label="GPS Amount"
                                    id="fitnessAmount"
                                    placeholder="Enter GPS Amount"
                                    {...getFieldProps("gpsAmount")}
                                    errors={formik.errors.gpsAmount}
                                    message={formik.errors.gpsAmount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <CustomInput
                                    label="Fabricator Name"
                                    id="fitnessAmount"
                                    placeholder="Enter Fabricator Name"
                                    {...getFieldProps("fabricatorName")}
                                    errors={formik.errors.fabricatorName}
                                    message={formik.errors.fabricatorName}
                                />
                            </div>

                            <div className="col-lg-6">
                                <CustomInput
                                    label="Fabricator Location"
                                    id="fitnessAmount"
                                    placeholder="Enter Fabricator Location"
                                    {...getFieldProps("fabricatorLocation")}
                                    errors={formik.errors.fabricatorLocation}
                                    message={formik.errors.fabricatorLocation}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </FormikProvider>
    );
}

export default VehicleDetails;
