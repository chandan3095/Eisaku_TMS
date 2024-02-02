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
import { addCustomerMasterAsync } from "../../../../redux/features/customerMaster";
import { getFleetMasterDropdownDataAsync } from "../../../../redux/features/fleetMaster";
import { backdropLoadingAction } from "../../../../redux/features/helperSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RouteNames from "../../../../AppRoutes/RouteName";

const initialValues = {
   customerName: "",
   agreementDocument: [""],
   contactPerson: [
      {
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

function FleetMasterAddForm() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const fleetMaster = useSelector((state) => state.fleetMaster);
   console.log({ fleetMaster });
   const locationData = fleetMaster?.location?.map?.((item) => ({
      label: item?.name,
      value: item?.id,
   }));
   const vehicleTypeData = fleetMaster?.vehicleCategory?.map?.((item) => ({
      label: item?.category_name,
      value: item?.id,
   }));
   const tonnageData = fleetMaster?.tonnage?.map?.((item) => ({
      label: item?.tonnage,
      value: item?.id,
   }));

   const [showLaneDetails, setShowLaneDetails] = useState("");
   const [showLaneNameTop, setShowLaneNameTop] = useState(0);
   const [showLaneTable, setShowLaneTable] = useState(false);
   const [laneTable, setLaneTable] = useState([]);

   useEffect(() => {
      dispatch(getFleetMasterDropdownDataAsync());
   }, []);

   const handelLaneSave = (index) => {
      setShowLaneNameTop(index);
      setShowLaneDetails(index);
   };
   const handelSave = () => {
      setShowLaneNameTop("");
      setShowLaneDetails("");
      setShowLaneTable(true);
      setLaneTable(values.lane);
   };
   const handelLaneBack = () => {
      setShowLaneDetails(false);
      setShowLaneNameTop(true);
   };

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

      dispatch(backdropLoadingAction(true));
      dispatch(
         addCustomerMasterAsync({
            data: newData,
            err: () => {
               toast.error("Something went wrong !");
               console.log("ajsdcnjn");
               dispatch(backdropLoadingAction(false));
            },
            done: () => {
               toast.success("Customer master created successfully !");
               dispatch(backdropLoadingAction(false));
               navigate(RouteNames.customerMasterView);
            },
         })
      );
   };

   const formik = useFormik({
      initialValues: initialValues,
      // CustomerMasterSchema, // Apply the validation schema
      onSubmit: handleAddCustomerMaster,
   });
   // console.log(newLaneDetails, "000");

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

                        {/* Agreement Details */}
                        <div className="col-lg-12">
                           <FieldArray
                              name="agreementDocument"
                              render={(arrayHelpers) => (
                                 <div>
                                    {values.agreementDocument.map((item, index) => (
                                       <div className="row">
                                          <div className="col-lg-6" key={index}>
                                             <label className="text-bold">
                                                Agreement Document
                                                <span className="text-danger">*</span>
                                             </label>
                                             <CustomFileUpload
                                                label="Agreement Details"
                                                onChange={(event) =>
                                                   formik.setFieldValue(
                                                      `agreementDocument[${index}]`,
                                                      event.currentTarget.files[0]
                                                   )
                                                }
                                             />
                                          </div>
                                          {values.agreementDocument.length > 1 && (
                                             <div className="col-lg-6 mt-4 pt-2">
                                                <button
                                                   type="button"
                                                   className="btn btn-danger"
                                                   onClick={() => {
                                                      arrayHelpers.remove(index);
                                                   }}
                                                >
                                                   <i className="fas fa-trash"></i> Delete
                                                   File
                                                </button>
                                             </div>
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              )}
                           />
                        </div>

                        {/* Contact Person Details  */}
                        <div className="col-lg-12">
                           <FieldArray
                              name="contactPerson"
                              render={(arrayHelpers) => (
                                 <div>
                                    {values.contactPerson.map((item, index) => (
                                       <div
                                          className={
                                             index < values.contactPerson.length - 1 &&
                                             values.contactPerson.length > 1
                                                ? "row border-bottom mb-4 pb-3"
                                                : "row"
                                          }
                                       >
                                          <div className="col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Contact Person Name"
                                                id="contactPersonName"
                                                placeholder="Enter Contact Person Name"
                                                {...getFieldProps(
                                                   `contactPerson[${index}].name`
                                                )}
                                             />
                                          </div>
                                          <div className="col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Customer Mobile No"
                                                id="customerMobileNo"
                                                placeholder="Enter Customer Mobile No"
                                                {...getFieldProps(
                                                   `contactPerson[${index}].mobile`
                                                )}
                                             />
                                          </div>
                                          <div className="col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Customer Email Id"
                                                id="customerEmailId"
                                                placeholder="Enter Customer Email Id"
                                                {...getFieldProps(
                                                   `contactPerson[${index}].email`
                                                )}
                                             />
                                          </div>
                                          <div className="col-12">
                                             {values.contactPerson.length > 1 && (
                                                <button
                                                   type="button"
                                                   className="btn btn-danger float-right mr-3"
                                                   onClick={() => {
                                                      arrayHelpers.remove(index);
                                                   }}
                                                >
                                                   <i className="fas fa-trash"></i> Delete
                                                </button>
                                             )}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              )}
                           />
                        </div>

                        <div className="col-lg-6">
                           {/* Location  */}
                           <div className="">
                              <FieldArray
                                 name="location"
                                 render={(arrayHelpers) => (
                                    <div>
                                       {values.location.map((item, index) => (
                                          <div>
                                             <CustomDropdown
                                                optionData={locationData}
                                                label="Location"
                                                id=""
                                                onChange={(values) => {
                                                   // console.log({ values });
                                                   setFieldValue(
                                                      `location[${index}]`,
                                                      values?.[0]?.value
                                                   );
                                                }}
                                             />
                                             {values.location.length > 1 && (
                                                <button
                                                   type="button"
                                                   className="btn btn-danger float-right mb-3"
                                                   onClick={() => {
                                                      arrayHelpers.remove(index);
                                                   }}
                                                >
                                                   <i className="fas fa-trash"></i> Delete
                                                   Location
                                                </button>
                                             )}
                                          </div>
                                       ))}
                                    </div>
                                 )}
                              />
                           </div>
                        </div>

                        <div className="col-lg-6">
                           {/* Address  */}
                           <div className="d-block">
                              <FieldArray
                                 name="address"
                                 render={(arrayHelpers) => (
                                    <div>
                                       {values.address.map((item, index) => (
                                          <>
                                             <CustomTextArea
                                                label="Address"
                                                id=""
                                                placeholder="Enter Address "
                                                {...getFieldProps(`address[${index}]`)}
                                             />
                                             {values.address.length > 1 && (
                                                <button
                                                   type="button"
                                                   className="btn btn-danger float-right mb-3"
                                                   onClick={() => {
                                                      arrayHelpers.remove(index);
                                                   }}
                                                >
                                                   <i className="fas fa-trash"></i> Delete
                                                   Address
                                                </button>
                                             )}
                                          </>
                                       ))}
                                    </div>
                                 )}
                              />
                           </div>
                        </div>
                        <div className="col-12 mt-4">
                           <button
                              type="button"
                              className="btn mx-1 btn-primary"
                              onClick={() => {
                                 setFieldValue("agreementDocument", [
                                    ...values.agreementDocument,
                                    "",
                                 ]);
                              }}
                           >
                              <i className="fas fa-plus"></i> Add Agreement Document
                           </button>
                           <button
                              type="button"
                              className="btn mx-1 btn-primary"
                              onClick={() => {
                                 setFieldValue("contactPerson", [
                                    ...values.contactPerson,
                                    {
                                       name: "",
                                       mobile: "",
                                       email: "",
                                    },
                                 ]);
                              }}
                           >
                              <i className="fas fa-plus"></i> Add Contact Person
                           </button>
                           <button
                              type="button"
                              className="btn mx-1 btn-primary"
                              onClick={() => {
                                 setFieldValue("address", [...values.address, ""]);
                              }}
                           >
                              <i className="fas fa-plus"></i> Add Address
                           </button>
                           <button
                              type="button"
                              className="btn mx-1 btn-primary"
                              onClick={() => {
                                 setFieldValue("location", [...values.location, ""]);
                              }}
                           >
                              <i className="fas fa-plus"></i> Add Location
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="card card-primary">
                  <div className="card-header">
                     <h3 className="card-title">Lane Details</h3>
                  </div>

                  <div className="card-body">
                     <div className="row">
                        {/* Lane name  */}
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
                                                <th>
                                                   Super Express Mode Rate Additional
                                                </th>
                                                <th>Detention Rate Additional</th>
                                                <th>
                                                   Multiple Loading Location Rate
                                                   Additional
                                                </th>
                                                <th>
                                                   Multiple Unloading Location Rate
                                                   Additional
                                                </th>
                                                <th>Loading Charges</th>
                                                <th>Unloading Charge</th>
                                                <th>Miscellaneous Charges</th>
                                                <th>Miscellaneous Remarks</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>{item.expressModeRateAdditional}</td>
                                                <td>
                                                   {item.superExpressModeRateAdditional}
                                                </td>
                                                <td>{item.detentionRateAdditional}</td>
                                                <td>
                                                   {
                                                      item.multipleLoadingLocationRateAdditional
                                                   }
                                                </td>
                                                <td>
                                                   {
                                                      item.multipleUnloadingLocationRateAdditional
                                                   }
                                                </td>
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
                                                      {...getFieldProps(
                                                         `lane[${index}].laneName`
                                                      )}
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
                                                         console.log({
                                                            values,
                                                         });
                                                         setFieldValue(
                                                            `lane[${index}].destination`,
                                                            values?.[0]?.value
                                                         );
                                                      }}
                                                   />
                                                </div>
                                                {/* Vehicle Category Sec */}
                                                <div className="col-lg-6">
                                                   <CustomDropdown
                                                      label="Vehicle Type"
                                                      require={require}
                                                      optionData={vehicleTypeData}
                                                      values={
                                                         formik.values.vehicleCategory
                                                      }
                                                      onChange={(values) => {
                                                         setFieldValue(
                                                            `lane[${index}].vehicleType`,
                                                            values?.[0]?.value
                                                         );
                                                      }}
                                                   />
                                                </div>
                                                {/* Tonnage Sec */}
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
                                                      {values.customerName &&
                                                         `${values.customerName}`}
                                                      {values.origin &&
                                                         `#${values.origin}`}
                                                      {values.destination &&
                                                         `#${values.destination}`}
                                                      {values.vehicleCategory &&
                                                         `#${values.vehicleCategory}`}
                                                      {values.tonnage &&
                                                         `#${values.tonnage}`}
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
                                                      {...getFieldProps(
                                                         `lane[${index}].loadingCharges`
                                                      )}
                                                   />
                                                </div>
                                                <div className="col-lg-4">
                                                   <CustomInput
                                                      require={require}
                                                      label="Unloading charge"
                                                      id="unloadingCharge"
                                                      placeholder="Enter amount"
                                                      {...getFieldProps(
                                                         `lane[${index}].unloadingCharge`
                                                      )}
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
                  </div>
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

export default FleetMasterAddForm;
