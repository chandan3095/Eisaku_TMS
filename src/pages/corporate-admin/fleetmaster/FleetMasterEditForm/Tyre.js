import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    addSingleFleetChildAsync,
    updateSingleFleetChildAsync,
} from "../../../../redux/features/fleetMaster";

function Tyre({
    tyreAdd,
    handleFileChange,
    handleTyreDelete,
    handleTyreAdd,
    formik,
    selectOptionData,
    tyreType,
    handleTyreChange,
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
            name: "Odometer Reading",
            selector: (row) => row.odometerReading,
        },
        {
            name: "Tyre Amount",
            selector: (row) => row.tyreAmount,
            sortable: true,
        },
        {
            name: "Tyre Change Date",
            selector: (row) => {
                return row.tyreChangeDate;
            },
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = tyreAdd?.map((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setAction("edit");
                        setFormData({
                            id: item?.id,
                            odometerReading: item?.odometerReading,
                            tyreType: item?.tyreType,
                            tyreChangeDate: item?.tyreChangeDate,
                            tyreAmount: item?.tyreAmount,
                            tyreStationName: item?.tyreStationName,
                            tyreBillUpload: item?.tyreBillUpload,
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
        tyreType: "",
        tyreChangeDate: "",
        tyreAmount: "",
        tyreStationName: "",
        tyreBillUpload: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
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
            tyre_id: formData?.id,

            // bill_upload_along_with_warranty_status[]:File upload,
        };
        const dataArr = {
            tyre_type_id: [formData.tyreType],
            odometer_reading: [formData.odometerReading],
            tyre_amount: [formData.tyreAmount],
            tyre_station_name: [formData.tyreStationName],
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
            typeof formData.tyreBillUpload === "object" &&
                newData.append(
                    "bill_upload_along_with_warranty_status[]",
                    formData.tyreBillUpload
                );

            dispatch(updateSingleFleetChildAsync(newData)).then(() => {
                handleCloseModal();
            });
        }

        if (action === "add") {
            newData.append("action_id", 1);

            newData.append(
                "bill_upload_along_with_warranty_status[]",
                formData.tyreBillUpload
            );

            dispatch(addSingleFleetChildAsync(newData)).then(() => {
                handleCloseModal();
            });
        }
    };

    console.log({ data });

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
                                    <div className={"row"}>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Odometer reading"
                                                id="odometerReading"
                                                placeholder="Enter Odometer reading"
                                                name={"odometerReading"}
                                                value={formData.odometerReading}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomDropdown
                                                label="Tyre Type"
                                                optionData={selectOptionData}
                                                // value={tyreType}
                                                name={"tyreType"}
                                                value={formData.tyreType}
                                                onChange={(e) => {
                                                    console.log({ e });
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        tyreType: e?.[0]?.value,
                                                    }));
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomDatePicker
                                                require={require}
                                                label="Tyre Change Date"
                                                id="tyreChangeDate"
                                                placeholder="Select Tyre Change Date"
                                                name={"tyreChangeDate"}
                                                value={formData.tyreChangeDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Tyre Amount"
                                                id="tyreAmount"
                                                placeholder="Enter Tyre Amount"
                                                name={"tyreAmount"}
                                                value={formData.tyreAmount}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                                require={require}
                                                label="Tyre Station Name"
                                                id="tyreStationName"
                                                placeholder="Enter Tyre Station Name"
                                                name={"tyreStationName"}
                                                value={formData.tyreStationName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-lg-4">
                                            <label className="text-bold">
                                                Bill upload along with warranty
                                                status
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <CustomFileUpload
                                                accept=".pdf, .doc, .docx"
                                                errors={
                                                    formik.errors
                                                        .insuranceAmount
                                                }
                                                message={
                                                    formik.errors
                                                        .insuranceAmount
                                                }
                                                name={"tyreBillUpload"}
                                                value={formData.tyreBillUpload}
                                                onChange={handleChange}
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
                <div className="col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary float-left"
                        onClick={() => {
                            setAction("add");
                            setFormData({
                                id: "",
                                odometerReading: "",
                                tyreType: "",
                                tyreChangeDate: "",
                                tyreAmount: "",
                                tyreStationName: "",
                                tyreBillUpload: "",
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

export default Tyre;
