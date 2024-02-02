import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { backdropLoadingAction } from "../../../../redux/features/helperSlice";
import {
   addSingleCustomerChildAsync,
   fetchChildTableDataAsync,
   fetchSingleCustomerMasterAsync,
   updateSingleCustomerChildAsync,
} from "../../../../redux/features/customerMaster";
import toast from "react-hot-toast";

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

const Lane = ({ laneList, tableName, locationData, vehicleTypeData, tonnageData }) => {
   const params = useParams();
   const dispatch = useDispatch();

   const [action, setAction] = useState("");

   const [initialState, setInitialState] = useState({
      id: "",
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
      originValue: [{ label: "", value: "" }],
      destinationValue: [{ label: "", value: "" }],
      vehicleTypeValue: [{ label: "", value: "" }],
      tonnageValue: [{ label: "", value: "" }],
   });
   const [isChecked, setIsChecked] = useState({}); // State to manage toggle

   const [isModalVisible, handleShowModal, handleCloseModal] = useToggleState();

   const toggleSwitch = () => {
      setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
      console.log(isChecked);
   };

   console.log({ laneList });

   const columns = [
      {
         name: "Lane Name",
         selector: (row) => row.name,
         sortable: true,
      },
      // {
      //   name: "Email",
      //   selector: (row) => row.email,
      // },
      // {
      //   name: "Mobile Number",
      //   selector: (row) => row.mobile,
      // },
      {
         name: "Action",
         selector: (row) => row.action,
      },
   ];

   const data = laneList?.map?.((item) => ({
      ...item,
      action: (
         <>
            <button
               className="btn btn-primary mx-2"
               onClick={() => {
                  setAction("edit");
                  dispatch(backdropLoadingAction(true));
                  dispatch(
                     fetchChildTableDataAsync({
                        id: item?.id,
                        tableName: tableName,
                        err: () => {
                           dispatch(backdropLoadingAction(false));
                        },
                        done: (res) => {
                           console.log({ res });
                           dispatch(backdropLoadingAction(false));
                           setInitialState({
                              id: item?.id,
                              laneName: item?.name,
                              origin: item?.origin,
                              destination: item?.destination,
                              vehicleType: item?.vehicle_category_id,
                              tonnage: item?.tonnage_id,
                              expressModeRateAdditional:
                                 item?.cust_express_mode_rate_additional,
                              superExpressModeRateAdditional:
                                 item?.cust_super_express_mode_rate_additional,
                              detentionRateAdditional:
                                 item?.cust_detention_rate_additional,
                              multipleLoadingLocationRateAdditional:
                                 item?.cust_multiple_loading_location_rate_additional,
                              multipleUnloadingLocationRateAdditional:
                                 item?.cust_multiple_unloading_location_rate_additional,
                              loadingCharges: item?.cust_loading_charges,
                              unloadingCharge: item?.cust_unloading_charge,
                              miscellaneousCharges: item?.cust_miscellaneous_charges,
                              miscellaneousRemarks: item?.cust_miscellaneous_remarks,
                              originValue: locationData?.filter?.(
                                 (loc) => loc?.value === item?.origin
                              ),
                              destinationValue: locationData?.filter?.(
                                 (loc) => loc?.value === item?.destination
                              ),
                              vehicleTypeValue: locationData?.filter?.(
                                 (loc) => loc?.value === item?.vehicle_category_id
                              ),
                              tonnageValue: locationData?.filter?.(
                                 (loc) => loc?.value === item?.tonnage_id
                              ),
                           });
                           handleShowModal();
                        },
                     })
                  );
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

   const handleContactPersonUpdate = (data) => {
      const newData = new FormData();

      const _data = {
         lane_master_id: data?.id,
         lane_name: data?.laneName,
         origin: data?.origin,
         destination: data?.destination,
         vehicle_category_id: data?.vehicleType,
         tonnage_id: data?.tonnage,
         cust_express_mode_rate_additional: data?.expressModeRateAdditional,
         cust_super_express_mode_rate_additional: data?.superExpressModeRateAdditional,
         cust_detention_rate_additional: data?.detentionRateAdditional,
         cust_multiple_loading_location_rate_additional:
            data?.multipleLoadingLocationRateAdditional,
         cust_loading_charges: data?.loadingCharges,
         cust_miscellaneous_charges: data?.miscellaneousCharges,
         cust_unloading_charge: data?.unloadingCharge,
         cust_miscellaneous_remarks: data?.miscellaneousRemarks,
         cust_multiple_unloading_location_rate_additional:
            data?.multipleUnloadingLocationRateAdditional,
      };

      newData.append("customer_master_id", params?.id);

      Object.keys(_data).forEach((key) => {
         newData.append(`${key}[]`, _data[key]);
      });

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

      const _data = {
         lane_name: data?.laneName,
         origin: data?.origin,
         destination: data?.destination,
         vehicle_category_id: data?.vehicleType,
         tonnage_id: data?.tonnage,
         cust_express_mode_rate_additional: data?.expressModeRateAdditional,
         cust_super_express_mode_rate_additional: data?.superExpressModeRateAdditional,
         cust_detention_rate_additional: data?.detentionRateAdditional,
         cust_multiple_loading_location_rate_additional:
            data?.multipleLoadingLocationRateAdditional,
         cust_loading_charges: data?.loadingCharges,
         cust_miscellaneous_charges: data?.miscellaneousCharges,
         cust_unloading_charge: data?.unloadingCharge,
         cust_miscellaneous_remarks: data?.miscellaneousRemarks,
         cust_multiple_unloading_location_rate_additional:
            data?.multipleUnloadingLocationRateAdditional,
      };

      newData.append("customer_master_id", params?.id);
      Object.keys(_data).forEach((key) => {
         newData.append(`${key}[]`, _data[key]);
      });

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
            title="Lane"
            onSubmit={handleSubmit}
            child={
               <>
                  {/* <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Customer Name"
                id="laneCustomerName"
                placeholder="Customer Name"
                disabled={true}
                onChange={(event) => {}}
                value={formik.values.customerName}
              />
            </div> */}
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Lane Name"
                        id="laneName"
                        placeholder="Lane Name"
                        {...getFieldProps(`laneName`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomDropdown
                        label="Origin"
                        require={require}
                        optionData={locationData}
                        values={values?.originValue}
                        onChange={(values) => {
                           setFieldValue(`origin`, values?.[0]?.value);
                        }}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomDropdown
                        label="Destination"
                        require={require}
                        optionData={locationData}
                        values={values?.destinationValue}
                        onChange={(values) => {
                           setFieldValue(`destination`, values?.[0]?.value);
                        }}
                     />
                  </div>
                  {/* Vehicle Category Sec */}
                  <div className="col-lg-6">
                     <CustomDropdown
                        label="Vehicle Type"
                        require={require}
                        optionData={vehicleTypeData}
                        values={values.vehicleTypeValue}
                        onChange={(values) => {
                           setFieldValue(`vehicleType`, values?.[0]?.value);
                        }}
                     />
                  </div>
                  {/* Tonnage Sec */}
                  <div className="col-lg-6">
                     <CustomDropdown
                        label="Tonnage(T)"
                        require={require}
                        optionData={tonnageData}
                        values={values.tonnageValue}
                        onChange={(values) => {
                           setFieldValue(`tonnage`, values?.[0]?.value);
                        }}
                     />
                  </div>

                  <h4>details</h4>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Express mode rate additional"
                        id="expressModeRateAdditional"
                        placeholder="Enter Amount"
                        {...getFieldProps(`expressModeRateAdditional`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Super express mode rate additional"
                        id="superExpressModeRateAdditional"
                        placeholder="Enter amount"
                        {...getFieldProps(`superExpressModeRateAdditional`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Detention rate additional"
                        id="detentionRateAdditional"
                        placeholder="Enter amount"
                        {...getFieldProps(`detentionRateAdditional`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Multiple loading location rate additional"
                        id="multipleLoadingLocationRateAdditional"
                        placeholder="Enter amount"
                        {...getFieldProps(`multipleLoadingLocationRateAdditional`)}
                     />
                  </div>

                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Multiple unloading location rate additional"
                        id="multipleUnloadingLocationRateAdditional"
                        placeholder="Enter amount"
                        {...getFieldProps(`multipleUnloadingLocationRateAdditional`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Loading charges"
                        id="loadingCharges"
                        placeholder="Enter amount"
                        {...getFieldProps(`loadingCharges`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="Unloading charge"
                        id="unloadingCharge"
                        placeholder="Enter amount"
                        {...getFieldProps(`unloadingCharge`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="miscellaneous charges"
                        id="miscellaneousCharges"
                        placeholder="Enter amount"
                        {...getFieldProps(`miscellaneousCharges`)}
                     />
                  </div>
                  <div className="col-lg-4">
                     <CustomInput
                        require={require}
                        label="miscellaneous Remarks"
                        id="miscellaneousRemarks"
                        placeholder="Enter remarks"
                        {...getFieldProps(`miscellaneousRemarks`)}
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
            <label className="text-bold">Lane details</label>
            <div className="">
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                     setAction("add");
                     setInitialState({
                        id: "",
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

export default Lane;
