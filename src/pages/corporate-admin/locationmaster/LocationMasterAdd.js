import React from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import BodyHeader from "../../../components/common/CommonBodyHeader";

const LocationMasterAdd = () => {
  return (
    <div>
      <BodyHeader title="Add Location Master" />
      <form className="p-3 shadow-lg">
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
