import React from "react";
import BodyHeader from "./common/CommonBodyHeader";
import CustomInput from "./common/CustomInput/CustomInput";

function Profile() {
  return (
    <>
      <BodyHeader title="Profile" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {/* Profile Image */}
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img
                    className="profile-user-img img-fluid img-circle"
                    src="../../dist/img/user4-128x128.jpg"
                    alt="User profile picture"
                  />
                </div>
                <h3 className="profile-username text-center">Nina Mcintire</h3>
                <p className="text-muted text-center">Software Engineer</p>
                <div className="my-3">
                  <a href="#" className="btn btn-primary btn-block">
                    <b>Change Password</b>
                  </a>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-9">
            {/* About Me Box */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Change Password</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <CustomInput
					label="Password"
					type="password"
				/>
				<CustomInput
					label="Confirm Password"
					type="password"
				/>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
      </div>
    </>
  );
}

export default Profile;
