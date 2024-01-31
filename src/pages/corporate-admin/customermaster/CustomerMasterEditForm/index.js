import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { FieldArray, FormikProvider, useFormik } from "formik";
import CustomerMasterSchema from "../../../../constansts/schema";
import { destinationData, vehicleCategoryData } from "../../../../constansts/LocalData";
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
      contact_person_name: formData?.contactPerson?.map?.((item) => item?.name),
      mobile: formData?.contactPerson?.map?.((item) => item?.mobile),
      email: formData?.contactPerson?.map?.((item) => item?.email),
      lane_name: formData?.lane?.map?.((item) => item?.laneName),
      origin: formData?.lane?.map?.((item) => +item?.origin),
      destination: formData?.lane?.map?.((item) => +item?.destination),
      // vehicle_category_id: formData?.lane?.map?.((item) => item?.vehicleType),
      vehicle_category_id: formData?.lane?.map?.((item) => +item?.vehicleType),
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
      cust_multiple_loading_location_rate_additional: formData?.lane?.map?.(
        (item) => +item?.multipleLoadingLocationRateAdditional
      ),
      cust_loading_charges: formData?.lane?.map?.((item) => +item?.loadingCharges),
      cust_miscellaneous_charges: formData?.lane?.map?.(
        (item) => +item?.miscellaneousCharges
      ),
      cust_unloading_charge: formData?.lane?.map?.((item) => +item?.unloadingCharge),
      cust_miscellaneous_remarks: formData?.lane?.map?.(
        (item) => item?.miscellaneousRemarks
      ),
      cust_multiple_unloading_location_rate_additional: formData?.lane?.map?.(
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
                  {formik.touched.customerName && formik.errors.customerName ? (
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
                    agreementDocumentList={singleCustomerMaster?.documents}
                  />
                </div>

                {/* Contact Person Details  */}
                <ContactPerson
                  contactPersonList={singleCustomerMaster?.contact_personal_details}
                />

                <div className="col-lg-12">
                  <Location
                    locationList={singleCustomerMaster?.locations}
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
              <Lane laneList={singleCustomerMaster?.lane} />
            </div>

            {/* <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  {showLaneTable &&
                    laneTable?.map?.((item) => {
                      return (
                        <div className="mt-3">
                          <h4 className="border-bottom mb-3 pb-2">
                            {item.laneName +
                              "#" +
                              item.origin +
                              "#" +
                              item.destination +
                              "#" +
                              item.vehicleType +
                              "#" +
                              item.tonnage}
                          </h4>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Express Mode Rate Additional</th>
                                <th>Super Express Mode Rate Additional</th>
                                <th>Detention Rate Additional</th>
                                <th>Multiple Loading Location Rate Additional</th>
                                <th>Multiple Unloading Location Rate Additional</th>
                                <th>Loading Charges</th>
                                <th>Unloading Charge</th>
                                <th>Miscellaneous Charges</th>
                                <th>Miscellaneous Remarks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{item.expressModeRateAdditional}</td>
                                <td>{item.superExpressModeRateAdditional}</td>
                                <td>{item.detentionRateAdditional}</td>
                                <td>{item.multipleLoadingLocationRateAdditional}</td>
                                <td>{item.multipleUnloadingLocationRateAdditional}</td>
                                <td>{item.loadingCharges}</td>
                                <td>{item.unloadingCharge}</td>
                                <td>{item.miscellaneousCharges}</td>
                                <td>{item.miscellaneousRemarks}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      );
                    })}
                  <div className="row">
                    <FieldArray
                      name="location"
                      render={(arrayHelpers) =>
                        values.lane.map((item, index) => (
                          <>
                            {showLaneNameTop === index && (
                              <>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Customer Name"
                                    id="laneCustomerName"
                                    placeholder="Customer Name"
                                    disabled={true}
                                    onChange={(event) => {}}
                                    value={formik.values.customerName}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Lane Name"
                                    id="laneName"
                                    placeholder="Lane Name"
                                    {...getFieldProps(`lane[${index}].laneName`)}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomDropdown
                                    label="Origin"
                                    require={require}
                                    optionData={locationData}
                                    onChange={(values) => {
                                      setFieldValue(
                                        `lane[${index}].origin`,
                                        values?.[0]?.value
                                      );
                                    }}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomDropdown
                                    label="Destination"
                                    require={require}
                                    optionData={locationData}
                                    values={formik.values.destination}
                                    onChange={(values) => {
                                      console.log({ values });
                                      setFieldValue(
                                        `lane[${index}].destination`,
                                        values?.[0]?.value
                                      );
                                    }}
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <CustomDropdown
                                    label="Vehicle Type"
                                    require={require}
                                    optionData={vehicleTypeData}
                                    values={formik.values.vehicleCategory}
                                    onChange={(values) => {
                                      setFieldValue(
                                        `lane[${index}].vehicleType`,
                                        values?.[0]?.value
                                      );
                                    }}
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <CustomDropdown
                                    label="Tonnage(T)"
                                    require={require}
                                    optionData={tonnageData}
                                    values={formik.values.tonnage}
                                    onChange={(values) => {
                                      setFieldValue(
                                        `lane[${index}].tonnage`,
                                        values?.[0]?.value
                                      );
                                    }}
                                  />
                                </div>
                                <div className="text-left">
                                  <button
                                    type="button"
                                    className="btn btn-success mr-2"
                                    onClick={() => {
                                      handelLaneSave(index);
                                    }}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            )}
                            {showLaneDetails === index && (
                              <div className="row mt-3">
                                <div className="col-lg-12">
                                  <h4 className="border-bottom mb-3 pb-2">
                                    {values.customerName && `${values.customerName}`}
                                    {values.origin && `#${values.origin}`}
                                    {values.destination && `#${values.destination}`}
                                    {values.vehicleCategory &&
                                      `#${values.vehicleCategory}`}
                                    {values.tonnage && `#${values.tonnage}`}
                                  </h4>
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Express mode rate additional"
                                    id="expressModeRateAdditional"
                                    placeholder="Enter Amount"
                                    {...getFieldProps(
                                      `lane[${index}].expressModeRateAdditional`
                                    )}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Super express mode rate additional"
                                    id="superExpressModeRateAdditional"
                                    placeholder="Enter amount"
                                    {...getFieldProps(
                                      `lane[${index}].superExpressModeRateAdditional`
                                    )}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Detention rate additional"
                                    id="detentionRateAdditional"
                                    placeholder="Enter amount"
                                    {...getFieldProps(
                                      `lane[${index}].detentionRateAdditional`
                                    )}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Multiple loading location rate additional"
                                    id="multipleLoadingLocationRateAdditional"
                                    placeholder="Enter amount"
                                    {...getFieldProps(
                                      `lane[${index}].multipleLoadingLocationRateAdditional`
                                    )}
                                  />
                                </div>

                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Multiple unloading location rate additional"
                                    id="multipleUnloadingLocationRateAdditional"
                                    placeholder="Enter amount"
                                    {...getFieldProps(
                                      `lane[${index}].multipleUnloadingLocationRateAdditional`
                                    )}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Loading charges"
                                    id="loadingCharges"
                                    placeholder="Enter amount"
                                    {...getFieldProps(`lane[${index}].loadingCharges`)}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="Unloading charge"
                                    id="unloadingCharge"
                                    placeholder="Enter amount"
                                    {...getFieldProps(`lane[${index}].unloadingCharge`)}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="miscellaneous charges"
                                    id="miscellaneousCharges"
                                    placeholder="Enter amount"
                                    {...getFieldProps(
                                      `lane[${index}].miscellaneousCharges`
                                    )}
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <CustomInput
                                    require={require}
                                    label="miscellaneous Remarks"
                                    id="miscellaneousRemarks"
                                    placeholder="Enter remarks"
                                    {...getFieldProps(
                                      `lane[${index}].miscellaneousRemarks`
                                    )}
                                  />
                                </div>

                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-secondary mr-2"
                                    onClick={handelLaneBack}
                                  >
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Back
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-success mr-2"
                                    onClick={handelSave}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ))
                      }
                    />
                  </div>

                  <div className="text-right">
                    <button
                      type="button"
                      className="btn btn-primary float-right"
                      onClick={() => {
                        setFieldValue("lane", [
                          ...values.lane,
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
                        ]);
                        setShowLaneNameTop(values.lane.length);
                        // setnewLaneDetails(values.lane.length - 1);
                      }}
                      disabled={values.lane.length < 1}
                    >
                      <i className="fas fa-plus"></i> Add New
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-12 mt-3 text-center">
            <button
              className="btn btn-primary px-4 py-3"
              type="submit"
              onClick={formik.handleSubmit}
            >
              <h6 className="mb-0 text-uppercase">Submit</h6>
            </button>
            <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
              <h6 className="mb-0 text-uppercase">reset</h6>
            </button>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
}

export default CustomerMasterEditForm;
