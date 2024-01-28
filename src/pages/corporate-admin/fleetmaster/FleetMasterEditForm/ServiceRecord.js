import React, { useState } from "react";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import CustomModal from "../../../../components/common/Modal";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    addSingleFleetChildAsync,
    updateSingleFleetChildAsync,
} from "../../../../redux/features/fleetMaster";

function ServiceRecord({
    handleFileChange,
    handleServiceBill,
    handleServiceBillDelete,
    serviceBillAdd,
    formik,
    handleServiceBillChange,
}) {
    const params = useParams();
    const dispatch = useDispatch();

    const [action, setAction] = useState(""); // State to manage toggle

    const [isChecked, setIsChecked] = useState({}); // State to manage toggle

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
            name: "Odometer Reading",
            selector: (row) => row.odometerReading,
        },
        {
            name: "Service Amount",
            selector: (row) => row.serviceAmount,
            sortable: true,
        },
        {
            name: "Service Date",
            selector: (row) => row.serviceDate,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = serviceBillAdd?.map((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        console.log({ item });
                        setAction("edit");
                        setFormData({
                            id: item?.id,
                            odometerReading: item?.odometerReading,
                            serviceDate: item?.serviceDate,
                            serviceAmount: item?.serviceAmount,
                            serviceStationName: item?.serviceStationName,
                            serviceBillUpload: item?.serviceBillUpload,
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
        odometerReading: "",
        serviceDate: "",
        serviceAmount: "",
        serviceStationName: "",
        serviceBillUpload: "",
    });

    console.log({ formData });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // console.log({ name, value, type, file: e.target.files[0] });
        if (type === "file") {
            setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = () => {
        const newData = new FormData();

        const data = {
            fleet_master_id: params?.id,
            model_id: 3,
            service_record_id: formData?.id,
        };
        const dataArr = {
            service_record_odometer_reading: [formData.odometerReading],
            service_date: [formData.serviceDate],
            service_amount: [formData.serviceAmount],
            service_station_name: [formData.serviceStationName],
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
            typeof formData.serviceBillUpload === "object" &&
                newData.append(
                    "service_bill_upload[]",
                    formData.serviceBillUpload
                );

            dispatch(updateSingleFleetChildAsync(newData)).then(() => {
                handleCloseModal();
            });
        }

        if (action === "add") {
            newData.append("action_id", 1);

            newData.append("service_bill_upload[]", formData.serviceBillUpload);

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
                                    <div className={"row"}>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Odometer reading"
                                                id="odometerReading"
                                                placeholder="Enter Amount"
                                                name={"odometerReading"}
                                                value={formData.odometerReading}
                                                onChange={handleChange}
                                                // value={item.odometerReading}
                                                // onChange={(e) =>
                                                //     handleServiceBillChange(
                                                //         item?.id,
                                                //         e
                                                //     )
                                                // }
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomDatePicker
                                                require={require}
                                                label="Service Date"
                                                id="serviceDate"
                                                placeholder="Select Service Date"
                                                name={"serviceDate"}
                                                value={formData.serviceDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Service Amount"
                                                id="serviceAmount"
                                                placeholder="Enter Service Amount"
                                                name={"serviceAmount"}
                                                value={formData.serviceAmount}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Service Station Name"
                                                id="serviceStationName"
                                                placeholder="Enter Service Station Name"
                                                name={"serviceStationName"}
                                                value={
                                                    formData.serviceStationName
                                                }
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <label className="text-bold">
                                                Service bill upload{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <CustomFileUpload
                                                accept=".pdf, .doc, .docx, .png, .jpg"
                                                // onChange={(event) => handleFileChange(event)}
                                                name={"serviceBillUpload"}
                                                value={
                                                    formData.serviceBillUpload
                                                }
                                                onChange={handleChange}
                                                // errors={formik.errors.insuranceAmount}
                                                // message={formik.errors.insuranceAmount}
                                            />
                                        </div>
                                    </div>
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
                <div className="col-6">
                    <button
                        type="button"
                        className="btn btn-primary float-left"
                        onClick={() => {
                            setAction("add");
                            setFormData({
                                id: "",
                                odometerReading: "",
                                serviceDate: "",
                                serviceAmount: "",
                                serviceStationName: "",
                                serviceBillUpload: "",
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

export default ServiceRecord;
