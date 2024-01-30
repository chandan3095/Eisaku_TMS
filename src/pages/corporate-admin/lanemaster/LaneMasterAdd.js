import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import selectOptionData from "../../../constansts/LocalData";
import { useDispatch, useSelector } from "react-redux";
import {
  addLaneMasterAsync,
  getAllLaneAsync,
  getAllVendorAsync,
} from "../../../redux/features/laneMaster";
import { FormikProvider, useFormik } from "formik";
import { getFleetMasterDropdownDataAsync } from "../../../redux/features/fleetMaster";

// "
// lane_master_id:1
// vendor_master_id:1
// driver_trip_advance:89.90
// trip_diesel_budget:78.98
// trip_adblue_budget:45.78
// trip_toll:45.90,
// tat:3.7

// model_id:8,
// action_id:1"

const initialValues = {
  lane_master_id: "",
  vendor_master_id: "",
  origin: "",
  destination: "",
  driver_trip_advance: "",
  trip_diesel_budget: "",
  trip_adblue_budget: "",
  trip_toll: "",
  tat: "",
  vehicleType: "",
  tonnage: "",
  customerName: "",
};

const LaneMasterAdd = () => {
  const dispatch = useDispatch();
  const laneMaster = useSelector((state) => state.laneMaster);
  const fleetMaster = useSelector((state) => state.fleetMaster);

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

  const laneData = laneMaster?.allLanes?.map?.((item) => ({
    ...item,
    label: item?.name,
    value: item?.id,
  }));
  const vendorData = laneMaster?.allVendors?.map?.((item) => ({
    ...item,
    label: item?.name,
    value: item?.id,
  }));

  const [makeSelect, setMake] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);

  const handleSelectChange = (selected) => {
    setMake(selected[0].value);
    if (selected[0].value === "NA") {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  };

  useEffect(() => {
    dispatch(getAllVendorAsync());
    dispatch(getAllLaneAsync());
    dispatch(getFleetMasterDropdownDataAsync());
  }, [dispatch]);

  const handleAddLane = (formData) => {
    const data = { ...formData };

    if (data.vendor_master_id !== "NA") {
      [
        "origin",
        "destination",
        "driver_trip_advance",
        "trip_diesel_budget",
        "trip_adblue_budget",
        "trip_toll",
        "tat",
        "vehicleType",
        "tonnage",
        "customerName",
      ].forEach((key) => {
        delete data?.[key];
      });
    } else {
      delete data.vendor_master_id;
    }

    const newData = new FormData();

    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });
    newData.append("model_id", 8);
    newData.append("action_id", 1);

    console.log({ data });

    dispatch(addLaneMasterAsync(newData));
  };

  const formik = useFormik({
    initialValues: initialValues,
    // CustomerMasterSchema, // Apply the validation schema
    onSubmit: handleAddLane,
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
    <FormikProvider value={formik}>
      <div>
        <BodyHeader title="Add Lane Master" />
        <form className="p-3 shadow-lg">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Personal Details</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <CustomDropdown
                    label="Lane Name"
                    optionData={laneData}
                    value={makeSelect}
                    onChange={(values) => {
                      setFieldValue("lane_master_id", values?.[0]?.value);
                    }}
                    // onChange={(event) => setMake(event.target.value)}
                  />
                </div>

                <div className="col-lg-4">
                  {/* Dimension  */}
                  <CustomDropdown
                    label="Vendor Name"
                    optionData={[...vendorData, { label: "NA", value: "NA" }]}
                    value={makeSelect}
                    onChange={(values) => {
                      if (values?.[0].value === "NA") {
                        setIsdisabled(false);
                      } else {
                        setIsdisabled(true);
                      }
                      setFieldValue("vendor_master_id", values?.[0]?.value);
                    }}
                  />
                </div>

                <div className="col-lg-4">
                  {/* Financed by sec */}
                  <CustomDropdown
                    label="Origin"
                    optionData={locationData}
                    disabled={isDisabled}
                    onChange={(values) => {
                      setFieldValue("origin", values?.[0]?.value);
                    }}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomDropdown
                    label="Destination"
                    optionData={locationData}
                    disabled={isDisabled}
                    onChange={(values) => {
                      setFieldValue("destination", values?.[0]?.value);
                    }}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Driver Trip Advance"
                    id="#tripadvance"
                    disabled={isDisabled}
                    placeholder="E.g. 500.00"
                    {...getFieldProps("driver_trip_advance")}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Trip Diesel budget (ltr)"
                    id="#dieselBudget"
                    disabled={isDisabled}
                    placeholder="E.g. 500.00"
                    {...getFieldProps("trip_diesel_budget")}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Trip Adblue budget (ltr)"
                    id="#adblueBudget"
                    disabled={isDisabled}
                    placeholder="E.g. 500.00"
                    {...getFieldProps("trip_adblue_budget")}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Trip Toll"
                    id="#tripToll"
                    disabled={isDisabled}
                    placeholder="E.g. 500.00"
                    {...getFieldProps("trip_toll")}
                  />
                </div>

                <div className="col-lg-4">
                  {/* Vehicle Type  */}
                  <CustomDropdown
                    label="Vehicle Type"
                    optionData={vehicleTypeData}
                    value={makeSelect}
                    disabled={isDisabled}
                    onChange={(values) => {
                      setFieldValue("vehicleType", values?.[0]?.value);
                    }}
                    // onChange={(event) => setMake(event.target.value)}
                  />
                </div>

                <div className="col-lg-4">
                  {/* Tonnage */}
                  <CustomDropdown
                    label="Tonnage"
                    optionData={tonnageData}
                    value={makeSelect}
                    disabled={isDisabled}
                    onChange={(values) => {
                      setFieldValue("tonnage", values?.[0]?.value);
                    }}
                    // onChange={(event) => setMake(event.target.value)}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="Customer Name (Including broker)"
                    id="#nameBroker"
                    disabled={isDisabled}
                    placeholder="Broker"
                    {...getFieldProps("customerName")}
                  />
                </div>

                <div className="col-lg-4">
                  <CustomInput
                    require={require}
                    label="TAT (in Hrs)"
                    id="#tat"
                    disabled={isDisabled}
                    inputType="number"
                    placeholder="2 Hrs"
                    {...getFieldProps("tat")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3 text-center">
            <button
              className="btn btn-primary px-4 py-3"
              type="button"
              onClick={handleSubmit}
            >
              <h5 className="mb-0 text-uppercase">Submit</h5>
            </button>
            <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
              <h5 className="mb-0 text-uppercase">reset</h5>
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
  );
};

export default LaneMasterAdd;
