import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import { BASE_URL_IMAGE } from "../../../../Api/client";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import { useDispatch } from "react-redux";
import {
    addSingleCustomerChildAsync,
    fetchSingleCustomerMasterAsync,
    updateSingleCustomerChildAsync,
} from "../../../../redux/features/customerMaster";
import { backdropLoadingAction } from "../../../../redux/features/helperSlice";
import toast from "react-hot-toast";
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

const AgreementDocument = ({ agreementDocumentList }) => {
    const params = useParams();
    const dispatch = useDispatch();

    const [action, setAction] = useState("");
    const [initialState, setInitialState] = useState({
        id: "",
        document: null,
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

    console.log({ agreementDocumentList });

    const columns = [
        {
            name: "Document",
            selector: (row) => (
                <div
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                        setImageUrl(
                            `${BASE_URL_IMAGE}${row.agreement_document}`
                        );
                        handleShowImageModal();
                    }}
                >
                    {row.agreement_document}
                </div>
            ),
            sortable: true,
        },

        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const data = agreementDocumentList?.map?.((item) => ({
        ...item,
        action: (
            <>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setAction("edit");
                        setInitialState({ id: item?.id, document: null });
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

    const handleAgreementDocumentUpdate = () => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append("document_id", initialState?.id);
        newData.append("agreement_document[]", initialState?.document);
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

    const handleAgreementDocumentAdd = () => {
        const newData = new FormData();

        newData.append("customer_master_id", params?.id);
        newData.append("agreement_document[]", initialState?.document);
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

    //   "customer_master_id:1
    // location_id:1
    // address_id:1
    // document_id:1
    // contact_person_detail_id:1
    // lane_master_id
    // agreement_document[]:file upload
    // location_master_id[]:[2]
    // address[]:[aa]
    // contact_person_name[]:[aaaa]
    // mobile[]:[2222222222]
    // email[]:[aa@dssd.com]
    // lane_name[]:[aaa]
    // origin[]:[2]
    // destination[]:[3]
    // vehicle_category_id[]:[2]
    // tonnage_id[]:[2]
    // cust_express_mode_rate_additional[]:[11.1]
    // cust_super_express_mode_rate_additional[]:[11.1]
    // cust_detention_rate_additional[]:[11.1]
    // cust_multiple_loading_location_rate_additional[]:[11.1]
    // cust_loading_charges[]:[11.1]
    // cust_miscellaneous_charges[]:[11.1]
    // cust_unloading_charge[]:[11.1]
    // cust_miscellaneous_remarks[]:[aaa]
    // cust_multiple_unloading_location_rate_additional[]:[11.22]

    // _method:PATCH
    // model_id:6,
    // action_id:2"

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
                showModal={isImageModalVisible}
                handleCloseModal={handleCloseImageModal}
                modalSize="modal-xl"
                title="Agreement document"
                onSubmit={handleAgreementDocumentUpdate}
                child={
                    <div>
                        <img
                            src={imageUrl}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                }
            />
            <CustomModal
                showModal={isModalVisible}
                handleCloseModal={handleCloseModal}
                modalSize="modal-xl"
                title="Agreement document"
                onSubmit={() => {
                    if (action === "add") {
                        console.log(action);
                        handleAgreementDocumentAdd();
                    }
                    if (action === "edit") {
                        handleAgreementDocumentUpdate();
                    }
                }}
                child={
                    <>
                        <div className="col-lg-4">
                            <CustomFileUpload
                                label="Agreement Details"
                                onChange={(event) =>
                                    setInitialState((prev) => ({
                                        ...prev,
                                        document: event.currentTarget.files[0],
                                    }))
                                }
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
                <label className="text-bold">Agreement Documents</label>
                <div className="">
                    <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={() => {
                            setAction("add");
                            setInitialState({
                                id: "",
                                document: null,
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

export default AgreementDocument;
