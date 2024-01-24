import React from "react";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";

function EmiForm({ handleFileChange, formik }) {
    const { errors, touched, getFieldProps, handleSubmit, setFieldValue } = formik;

    return (
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
                                require={require}
                                label="EMI Start date"
                                placeholder="Enter vehicle owner name"
                                {...getFieldProps("emiStartDate")}
                                errors={formik.errors.emiStartDate}
                                message={formik.errors.emiStartDate}
                            />
                        </div>
                        <div className="col-lg-4">
                            <CustomDatePicker
                                require={require}
                                label="EMI End date"
                                placeholder="Enter vehicle owner name"
                                {...getFieldProps("emiEndDate")}
                                errors={formik.errors.emiEndDate}
                                message={formik.errors.emiEndDate}
                            />
                        </div>
                        <div className="col-lg-4">
                            <CustomInput
                                require={require}
                                label="EMI Amount"
                                id="emiAmount"
                                placeholder="Enter Amount"
                                {...getFieldProps("emiAmount")}
                                errors={formik.errors.emiAmount}
                                message={formik.errors.emiAmount}
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="text-bold">
                                EMI Certificate <span className="text-danger">*</span>
                            </label>
                            <CustomFileUpload
                                accept=".pdf, .doc, .docx"
                                onChange={(event) => {
                                    setFieldValue(
                                        "emiCertificate",
                                        event?.target?.files?.[0]
                                    );
                                }}
                                // onChange={(event) => handleFileChange(event)}
                                // errors={formik.errors.insuranceAmount}
                                // message={formik.errors.insuranceAmount}
                            />
                        </div>
                        {/* Financed by sec */}
                        <div className="col-lg-4">
                            <CustomInput
                                require={require}
                                label="Financed by"
                                id="#financedBy"
                                placeholder="Enter name"
                                {...getFieldProps("financedBy")}
                                errors={formik.errors.financedBy}
                                message={formik.errors.financedBy}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmiForm;
