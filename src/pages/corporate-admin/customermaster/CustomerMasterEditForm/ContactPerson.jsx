import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
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

const ContactPerson = ({ contactPersonList }) => {
    const params = useParams();
    const dispatch = useDispatch();

    const [action, setAction] = useState("");
    const [initialState, setInitialState] = useState({
        id: "",
        name: "",
        mobile: "",
        email: "",
    });
    const [isChecked, setIsChecked] = useState({}); // State to manage toggle

    const [isModalVisible, handleShowModal, handleCloseModal] =
        useToggleState();

    const toggleSwitch = () => {
        setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
        console.log(isChecked);
    };

    console.log({ contactPersonList });

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Mobile Number",
            selector: (row) => row.mobile,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = contactPersonList?.map?.((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setAction("edit");
                        setInitialState({
                            id: item?.id,
                            name: item?.name,
                            mobile: item?.mobile,
                            email: item?.email,
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

    // contact_person_detail_id:1
    // contact_person_name[]:[aaaa]
    // mobile[]:[2222222222]
    // email[]:[aa@dssd.com]
    const handleContactPersonUpdate = (data) => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append("contact_person_detail_id", initialState?.id);
        newData.append("contact_person_name[]", data?.name);
        newData.append("mobile[]", data?.mobile);
        newData.append("email[]", data?.email);

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

    const handleContactPersonAdd = (data) => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append("contact_person_name[]", data?.name);
        newData.append("mobile[]", data?.mobile);
        newData.append("email[]", data?.email);
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
        onSubmit: (formData) => {
            if (action === "add") {
                console.log(action);
                handleContactPersonAdd(formData);
            }
            if (action === "edit") {
                handleContactPersonUpdate(formData);
            }
        },
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
                title="Contact Person"
                onSubmit={handleSubmit}
                child={
                    <>
                        <div className="col-lg-4">
                            <CustomInput
                                require={require}
                                label="Contact Person Name"
                                id="contactPersonName"
                                placeholder="Enter Contact Person Name"
                                {...getFieldProps(`name`)}
                            />
                        </div>
                        <div className="col-lg-4">
                            <CustomInput
                                require={require}
                                label="Customer Mobile No"
                                id="customerMobileNo"
                                placeholder="Enter Customer Mobile No"
                                {...getFieldProps(`mobile`)}
                            />
                        </div>
                        <div className="col-lg-4">
                            <CustomInput
                                require={require}
                                label="Customer Email Id"
                                id="customerEmailId"
                                placeholder="Enter Customer Email Id"
                                {...getFieldProps(`email`)}
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
                    width: "100%",
                }}
            >
                <label className="text-bold">Contact person details</label>
                <div className="">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            setAction("add");
                            setInitialState({
                                id: "",
                                name: "",
                                mobile: "",
                                email: "",
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

export default ContactPerson;
