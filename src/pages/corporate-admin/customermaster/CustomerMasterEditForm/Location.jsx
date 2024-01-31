import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import { BASE_URL_IMAGE } from "../../../../Api/client";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { backdropLoadingAction } from "../../../../redux/features/helperSlice";
import {
    addSingleCustomerChildAsync,
    fetchSingleCustomerMasterAsync,
    updateSingleCustomerChildAsync,
} from "../../../../redux/features/customerMaster";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const customStyles = {
    table: {
        style: {
            border: "1px solid #0bc4f0", // Set border color
        },
    },
    rows: {
        style: {
            minHeight: "72px", // override the row height
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

const Location = ({ locationList, locationData }) => {
    const dispatch = useDispatch();
    const params = useParams();

    const [action, setAction] = useState("");
    const [initialState, setInitialState] = useState({
        id: "",
        location: "",
        locationMasterId: "",
    });
    const [isChecked, setIsChecked] = useState({}); // State to manage toggle

    const [isModalVisible, handleShowModal, handleCloseModal] =
        useToggleState();
    const [isImageModalVisible, handleShowImageModal, handleCloseImageModal] =
        useToggleState();
    const [imageUrl, setImageUrl] = useState(null);

    const toggleSwitch = () => {
        setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
        console.log(isChecked);
    };

    console.log({ locationList });

    const columns = [
        {
            name: "Location",
            selector: (row) => <div>{row.name}</div>,
            sortable: true,
        },

        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = locationList?.map?.((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setAction("edit");
                        setInitialState({
                            id: item?.id,
                            location: "",
                            locationMasterId: item?.pivot?.location_master_id,
                        });
                        handleShowModal();
                    }}
                >
                    Edit
                </button>
                <CustomToggleSwitch
                    checked={isChecked}
                    onChange={toggleSwitch}
                    id="csutomer6"
                />
            </>
        ),
    }));

    const handleLocationUpdate = () => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append("location_id", initialState?.location);
        newData.append(
            "location_master_id[]",
            JSON.stringify([initialState?.locationMasterId])
        );
        newData.append("_method", "PATCH");
        newData.append("model_id", 6);
        newData.append("action_id", 2);

        dispatch(backdropLoadingAction(true));

        dispatch(
            updateSingleCustomerChildAsync({
                data: newData,
                err: () => {
                    toast.error("Something went wrong !");
                    dispatch(backdropLoadingAction(false));
                },
                done: () => {
                    toast.success("Record updated successfully !");
                    handleCloseModal();
                    dispatch(
                        fetchSingleCustomerMasterAsync({
                            id: params?.id,
                            err: () => {
                                dispatch(backdropLoadingAction(false));
                            },
                            done: () => {
                                dispatch(backdropLoadingAction(false));
                            },
                        })
                    );
                },
            })
        );
    };

    const handleLocationAdd = () => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append(
            "location_master_id[]",
            JSON.stringify([initialState?.location])
        );
        // newData.append(
        //     "location_id[]",
        //     JSON.stringify([initialState?.location])
        // );

        newData.append("model_id", 6);
        newData.append("action_id", 1);

        dispatch(backdropLoadingAction(true));

        dispatch(
            addSingleCustomerChildAsync({
                data: newData,
                err: () => {
                    toast.error("Something went wrong !");
                    dispatch(backdropLoadingAction(false));
                },
                done: () => {
                    toast.success("Record added successfully !");
                    handleCloseModal();
                    dispatch(
                        fetchSingleCustomerMasterAsync({
                            id: params?.id,
                            err: () => {
                                dispatch(backdropLoadingAction(false));
                            },
                            done: () => {
                                dispatch(backdropLoadingAction(false));
                            },
                        })
                    );
                },
            })
        );
    };

    const formik = useFormik({
        initialValues: initialState,
        enableReinitialize: true,
        // onSubmit: handleAddCustomerMaster,
    });

    const {
        touched,
        errors,
        values,
        getFieldProps,
        handleSubmit,
        resetForm,
        setFieldValue,
    } = formik;

    return (
        <>
            <CustomModal
                showModal={isModalVisible}
                handleCloseModal={handleCloseModal}
                modalSize="modal-xl"
                title="Location"
                onSubmit={() => {
                    if (action === "add") {
                        console.log(action);
                        handleLocationAdd();
                    }
                    if (action === "edit") {
                        handleLocationUpdate();
                    }
                }}
                child={
                    <>
                        <div className="col-lg-12" style={{ minHeight: 300 }}>
                            <CustomDropdown
                                optionData={locationData}
                                label="Location"
                                id=""
                                onChange={(values) => {
                                    setInitialState((prev) => ({
                                        ...prev,
                                        location: values?.[0]?.value,
                                    }));
                                    // console.log({ values });
                                    // setFieldValue(`location[${index}]`, values?.[0]?.value);
                                }}
                            />
                        </div>
                    </>
                }
            />

            <div
                className="flex mb-3"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <label className="text-bold">Locations</label>
                <div className="">
                    <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={() => {
                            setAction("add");
                            setInitialState({
                                id: "",
                                location: "",
                            });
                            handleShowModal();
                        }}
                    >
                        <i className="fas fa-plus"></i> Add More
                    </button>
                </div>
            </div>

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
        </>
    );
};

export default Location;
