import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { FieldArray, FormikProvider, useFormik } from "formik";
import CustomerMasterSchema from "../../../../constansts/schema";
import {
    destinationData,
    vehicleCategoryData,
} from "../../../../constansts/LocalData";
import { useDispatch, useSelector } from "react-redux";
import {
    addCustomerMasterAsync,
    fetchSingleCustomerMasterAsync,
    updateCustomerMasterAsync,
} from "../../../../redux/features/customerMaster";
import { getFleetMasterDropdownDataAsync } from "../../../../redux/features/fleetMaster";
import { useParams } from "react-router-dom";
import ContactPerson from "./ContactPerson";
import { updateCustomerMasterApiCall } from "../../../../Api/api";
import AgreementDocument from "./AgreementDocument";
import Location from "./Location";
import Lane from "./Lane";
import { backdropLoadingAction } from "../../../../redux/features/helperSlice";
import { useToggleState } from "../../../../Hooks/useToggleState";

// (locations/addresses/documents/contact_person_details/lane_masters)
const TABLE_NAMES = {
    locations: "locations",
    addresses: "addresses",
    documents: "documents",
    contact_person_details: "contact_person_details",
    lane_masters: "lane_masters",
};

const initialValues = {
    customerName: "",
    agreementDocument: [""],
    contactPerson: [
        {
            id: "",
            name: "",
            mobile: "",
            email: "",
        },
    ],
    location: [""],
    address: [""],
    lane: [
        {
            laneName: "",
            origin: "",
            destination: "",
            vehicleType: "",
            tonnage: "",
            expressModeRateAdditional: "",
            superExpressModeRateAdditional: "",
            detentionRateAdditional: "",
            multipleLoadingLocationRateAdditional: "",
            multipleUnloadingLocationRateAdditional: "",
            loadingCharges: "",
            unloadingCharge: "",
            miscellaneousCharges: "",
            miscellaneousRemarks: "",
        },
    ],
};

function CustomerMasterEditForm() {
    const params = useParams();
    const dispatch = useDispatch();

    const fleetMaster = useSelector((state) => state.fleetMaster);
    const customerMaster = useSelector((state) => state.customerMaster);
    const singleCustomerMaster = customerMaster?.singleCustomerMaster;

    const locationData = fleetMaster?.location?.map?.((item) => ({
        label: item?.name,
        value: item?.id,
    }));

    const [initialState, setInitialState] = useState(initialValues);
    const [isLoading, startLoading, stopLoading] = useToggleState(true);

    useEffect(() => {
        dispatch(getFleetMasterDropdownDataAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(backdropLoadingAction(true));
        startLoading();

        dispatch(
            fetchSingleCustomerMasterAsync({
                id: params?.id,
                err: () => {
                    stopLoading();
                    dispatch(backdropLoadingAction(false));
                },
                done: () => {
                    stopLoading();
                    dispatch(backdropLoadingAction(false));
                },
            })
        );
    }, [dispatch, params?.id]);

    useEffect(() => {
        !isLoading &&
            setInitialState((prev) => ({
                ...prev,
                customerName: singleCustomerMaster?.name,
            }));
    }, [singleCustomerMaster?.name, isLoading]);

    const handleAddCustomerMaster = (formData) => {
        console.log({ formData: formData?.contactPerson });
        // return;

        const newData = new FormData();

        // dispatch(addCustomerMasterAsync(newData));

        newData.append("name", formData?.customerName);
        newData.append("model_id", 6);
        newData.append("action_id", 1);

        const data = {
            // agreement_document: formData.agreementDocument,
            location_master_id: formData?.location?.map?.((item) => +item),
            address: formData.address,
            contact_person_name: formData?.contactPerson?.map?.(
                (item) => item?.name
            ),
            mobile: formData?.contactPerson?.map?.((item) => item?.mobile),
            email: formData?.contactPerson?.map?.((item) => item?.email),
            lane_name: formData?.lane?.map?.((item) => item?.laneName),
            origin: formData?.lane?.map?.((item) => +item?.origin),
            destination: formData?.lane?.map?.((item) => +item?.destination),
            // vehicle_category_id: formData?.lane?.map?.((item) => item?.vehicleType),
            vehicle_category_id: formData?.lane?.map?.(
                (item) => +item?.vehicleType
            ),
            tonnage_id: formData?.lane?.map?.((item) => +item?.tonnage),
            cust_express_mode_rate_additional: formData?.lane?.map?.(
                (item) => +item?.expressModeRateAdditional
            ),
            cust_super_express_mode_rate_additional: formData?.lane?.map?.(
                (item) => +item?.superExpressModeRateAdditional
            ),
            cust_detention_rate_additional: formData?.lane?.map?.(
                (item) => +item?.detentionRateAdditional
            ),
            cust_multiple_loading_location_rate_additional:
                formData?.lane?.map?.(
                    (item) => +item?.multipleLoadingLocationRateAdditional
                ),
            cust_loading_charges: formData?.lane?.map?.(
                (item) => +item?.loadingCharges
            ),
            cust_miscellaneous_charges: formData?.lane?.map?.(
                (item) => +item?.miscellaneousCharges
            ),
            cust_unloading_charge: formData?.lane?.map?.(
                (item) => +item?.unloadingCharge
            ),
            cust_miscellaneous_remarks: formData?.lane?.map?.(
                (item) => item?.miscellaneousRemarks
            ),
            cust_multiple_unloading_location_rate_additional:
                formData?.lane?.map?.(
                    (item) => +item?.multipleUnloadingLocationRateAdditional
                ),
        };

        formData?.agreementDocument?.forEach?.((item) => {
            newData.append("agreement_document[]", item);
        });

        Object.keys(data).forEach((key) => {
            newData.append(`${key}[]`, JSON.stringify(data[key]));
        });

        dispatch(addCustomerMasterAsync(newData));
    };

    const formik = useFormik({
        initialValues: initialState,
        enableReinitialize: true,
        onSubmit: handleAddCustomerMaster,
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

    const handleUpdate = () => {
        const newData = new FormData();

        const data = {
            id: params?.id,
            name: values.customerName,
            model_id: 6,
            action_id: 2,
            _method: "PATCH",
        };

        Object.keys(data).forEach((key) => {
            newData.append(key, data[key]);
        });

        dispatch(backdropLoadingAction(true));
        dispatch(updateCustomerMasterAsync(newData)).then(() => {
            dispatch(backdropLoadingAction(false));
        });
    };

    return (
        <FormikProvider value={formik}>
            <div>
                <BodyHeader title="Add Customer Master" />
                {/* <form className="p-3 shadow-lg" onSubmit={formik.handleSubmit}> */}
                <div className="p-5 shadow-lg">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Customer Documents</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <CustomInput
                                        require={require}
                                        label="Customer Name"
                                        id="customerName"
                                        placeholder="Enter Customer Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.customerName}
                                    />
                                    {formik.touched.customerName &&
                                    formik.errors.customerName ? (
                                        <div>{formik.errors.customerName}</div>
                                    ) : null}
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-success mr-2 ml-2 mb-5"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>

                                {/* Agreement Details */}
                                <div className="col-lg-12">
                                    <AgreementDocument
                                        agreementDocumentList={
                                            singleCustomerMaster?.documents
                                        }
                                    />
                                </div>

                                {/* Contact Person Details  */}
                                <ContactPerson
                                    contactPersonList={
                                        singleCustomerMaster?.contact_personal_details
                                    }
                                />

                                <div className="col-lg-12">
                                    <Location
                                        locationList={
                                            singleCustomerMaster?.locations
                                        }
                                        locationData={locationData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Lane Details</h3>
                        </div>

                        <div className="card-body">
                            <Lane
                                laneList={singleCustomerMaster?.lane}
                                tableName={TABLE_NAMES.lane_masters}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FormikProvider>
    );
}

export default CustomerMasterEditForm;
