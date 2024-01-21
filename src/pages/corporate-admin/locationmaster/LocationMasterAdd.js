import React, { useEffect } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addLocationMasterAsync } from "../../../redux/features/location-master/addLocationMasterSlice";
import { locationMasterSingleListAsync } from "../../../redux/features/location-master/singleListLocationMasterSlice";
import { locationMasterUpdateAsync } from "../../../redux/features/location-master/updateLocationMasterSlice";
import { useParams } from "react-router-dom";

const LocationSchema = Yup.object().shape({
  personName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Person name is required"),
});

const LocationMasterAdd = () => {
  const { id, formType } = useParams();

  // console.log(`${id}`, 'formType');
  // console.log(`${formType}`, 'formType');

  const dispatch = useDispatch();
  const locationMasterList = useSelector(
    (state) => state.locationMasterSingleListSlice
  );
  // console.log(locationMasterList.data?.res?.name, "000");

  // const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(
        locationMasterSingleListAsync({ id: id, modelId: 1, actionId: 3 })
      );
    }
  }, []);

  const addLocationMasterData = async (data) => {
    const bodyData = {
      name: data.personName,
      model_id: "10",
      action_id: "1",
    };
    dispatch(addLocationMasterAsync(bodyData));
  };
  const updateLocationMasterData = async (data) => {
    const updateData = {
      name: data.personName,
      model_id: "10",
      action_id: "2",
      id: id,
    };
    dispatch(locationMasterUpdateAsync(updateData));
  };
  const formik = useFormik({
    initialValues: {
      personName: locationMasterList?.data?.res?.name
        ? locationMasterList?.data?.res?.name
        : "",
    },
    validationSchema: LocationSchema,
    onSubmit: (values) => {
      if (formType === "Add") {
        addLocationMasterData(values);
      } else {
        updateLocationMasterData(values);
      }
      console.log(values);
    },
  });
  return (
    <div>
      <BodyHeader title={`${formType} Location Master`} />
      <form className="p-3 shadow-lg" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Location Master Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6">
                    <CustomInput
                      require={require}
                      label="Name"
                      id="personName"
                      name="personName"
                      placeholder="Enter Person Name"
                      onChange={formik.handleChange}
                      value={formik.values.personName}
                      onBlur={formik.handleBlur}
                      errors={formik.errors.personName}
                      message={formik.errors.personName}
                    />
                  </div>
                  <div className="col-lg-12 mt-3 text-center">
                    <button className="btn btn-primary px-4 py-3" type="submit">
                      <h6 className="mb-0 text-uppercase">Submit</h6>
                    </button>
                    <button
                      className="btn btn-danger ml-3 px-4 py-3"
                      type="submit"
                    >
                      <h6 className="mb-0 text-uppercase">reset</h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationMasterAdd;
