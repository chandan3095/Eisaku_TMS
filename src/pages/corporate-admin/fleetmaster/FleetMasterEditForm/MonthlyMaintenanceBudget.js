import React from "react";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";

function MonthlyMaintenanceBudget({
    maintenanceBudgetDelete,
    maintenanceBudgetAdd,
    maintenanceBudget,
    formik,
    handleMaintenanceBudgetChange,
}) {
    return (
        <div
            className="tab-pane fade show active"
            id="4"
            role="tabpanel"
            aria-labelledby="4"
        >
            <div className="col-lg-12">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Monthly Maintenance Budget</h3>
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
                                        require={require}
                                        label="Amount"
                                        id="fitnessAmount"
                                        placeholder="Enter Amount"
                                        name={"amount"}
                                        value={item.amount}
                                        onChange={(e) =>
                                            handleMaintenanceBudgetChange(item?.id, e)
                                        }
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <CustomDatePicker
                                        require={require}
                                        label="To Date"
                                        id="serviceDate"
                                        placeholder="Select To Date"
                                        name={"toDate"}
                                        value={item.toDate}
                                        onChange={(e) =>
                                            handleMaintenanceBudgetChange(item?.id, e)
                                        }
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <CustomDatePicker
                                        require={require}
                                        label="From Date"
                                        id="serviceDate"
                                        placeholder="Select From Date"
                                        name={"fromDate"}
                                        value={item.fromDate}
                                        onChange={(e) =>
                                            handleMaintenanceBudgetChange(item?.id, e)
                                        }
                                    />
                                </div>
                                <div className="col-12">
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="btn btn-danger float-left mb-3"
                                            onClick={maintenanceBudgetDelete}
                                        >
                                            <i className="fas fa-trash"></i> Delete item
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
    );
}

export default MonthlyMaintenanceBudget;
