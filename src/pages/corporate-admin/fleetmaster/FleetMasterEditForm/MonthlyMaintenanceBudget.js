import React, { useState } from "react";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import { useToggleState } from "../../../../Hooks/useToggleState";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useDispatch } from "react-redux";
import {
    addSingleFleetChildAsync,
    updateSingleFleetChildAsync,
} from "../../../../redux/features/fleetMaster";
import { useParams } from "react-router-dom";

function MonthlyMaintenanceBudget({
    maintenanceBudgetDelete,
    maintenanceBudgetAdd,
    maintenanceBudget,
    formik,
    handleMaintenanceBudgetChange,
}) {
    const params = useParams();
    const dispatch = useDispatch();

    const [action, setAction] = useState(""); // State to manage toggle
    const [isChecked, setIsChecked] = useState({}); // State to manage toggle

    const toggleSwitch = () => {
        setIsChecked(!isChecked); // Toggle the state
        // console.log(isChecked);
    };
    const [isModalVisible, handleShowModal, handleCloseModal] =
        useToggleState();

    const columns = [
        {
            name: "Amount",
            selector: (row) => row.amount,
        },
        {
            name: "To Date",
            selector: (row) => row.toDate,
            sortable: true,
        },
        {
            name: "From Date",
            selector: (row) => {
                // console.log({ row });
                return row.fromDate;
            },
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = maintenanceBudget?.map((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setAction("edit");
                        setFormData({
                            id: item?.id,
                            amount: item?.amount,
                            toDate: item?.toDate,
                            fromDate: item?.fromDate,
                        });
                        handleShowModal();
                    }}
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
    }));

    console.log({ data });

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

    const [formData, setFormData] = useState({
        id: "",
        amount: "",
        toDate: "",
        fromDate: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const newData = new FormData();

        const data = {
            fleet_master_id: params?.id,
            monthly_maintenance_budget_id: formData.id,
            model_id: 3,
        };
        const dataArr = {
            monthly_maintenance_budget_amount: [formData.amount],
            to_date: [formData.toDate],
            from_date: [formData.fromDate],
        };

        Object.keys(data).forEach((item) => {
            newData.append(item, data[item]);
        });
        Object.keys(dataArr).forEach((item) => {
            newData.append(`${item}[]`, JSON.stringify(dataArr[item]));
        });

        if (action === "edit") {
            newData.append("_method", "PATCH");
            newData.append("action_id", 2);

            dispatch(updateSingleFleetChildAsync(newData)).then(() => {
                handleCloseModal();
            });
        }

        if (action === "add") {
            newData.append("action_id", 1);

            dispatch(addSingleFleetChildAsync(newData)).then(() => {
                handleCloseModal();
            });
        }
    };

    return (
        <>
            <CustomModal
                showModal={isModalVisible}
                handleCloseModal={handleCloseModal}
                modalSize="modal-xl"
                title="Service Record"
                onSubmit={handleSubmit}
                child={
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
                                    <div
                                        className={
                                            "row border-bottom mb-4 pb-3"
                                        }
                                    >
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Amount"
                                                id="fitnessAmount"
                                                placeholder="Enter Amount"
                                                name={"amount"}
                                                value={formData.amount}
                                                onChange={handleChange}
                                                // onChange={(e) =>
                                                //     handleMaintenanceBudgetChange(
                                                //         item?.id,
                                                //         e
                                                //     )
                                                // }
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomDatePicker
                                                require={require}
                                                label="To Date"
                                                id="serviceDate"
                                                placeholder="Select To Date"
                                                name={"toDate"}
                                                value={formData.toDate}
                                                onChange={handleChange}
                                                // value={item.toDate}
                                                // onChange={(e) =>
                                                //     handleMaintenanceBudgetChange(
                                                //         item?.id,
                                                //         e
                                                //     )
                                                // }
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomDatePicker
                                                require={require}
                                                label="From Date"
                                                id="serviceDate"
                                                placeholder="Select From Date"
                                                name={"fromDate"}
                                                value={formData.fromDate}
                                                onChange={handleChange}
                                                // value={item.fromDate}
                                                // onChange={(e) =>
                                                //     handleMaintenanceBudgetChange(
                                                //         item?.id,
                                                //         e
                                                //     )
                                                // }
                                            />
                                        </div>
                                        {/* <div className="col-12">
                                                {index > 0 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger float-left mb-3"
                                                        onClick={
                                                            maintenanceBudgetDelete
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>{" "}
                                                        Delete item
                                                    </button>
                                                )}
                                            </div> */}
                                    </div>

                                    {/* <div className="row">
                                        <div className="col-lg-6">
                                            <button
                                                type="button"
                                                className="btn btn-primary float-left"
                                                onClick={maintenanceBudgetAdd}
                                            >
                                                <i className="fas fa-plus"></i>{" "}
                                                Add More
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            <DataTable
                columns={columns}
                data={data}
                sortable
                fixedHeader
                pagination
                responsive
                striped={true}
                borderColor="#000000"
                customStyles={customStyles}
            ></DataTable>

            <div className="row">
                <div className="col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary float-left"
                        onClick={() => {
                            setAction("add");
                            setFormData({
                                amount: "",
                                fromDate: "",
                                toDate: "",
                            });
                            handleShowModal();
                        }}
                    >
                        <i className="fas fa-plus"></i> Add More
                    </button>
                </div>
            </div>
        </>
    );
}

export default MonthlyMaintenanceBudget;
