import React from "react";
import BodyHeader from "./CommonBodyHeader";
import AreaChart from "./chart/AreaChart";

const Body = () => {
  return (
    <div>
      <BodyHeader/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>160</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>
                  53<sup style={{ fontSize: 20 }}>%</sup>
                </h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>Trip Approval Pending</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>
                  53<sup style={{ fontSize: 20 }}>%</sup>
                </h3>
                <p>Today's Trip</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>Adhoc Lane Pending</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Adhoc Vendor Pending</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <section className="col-lg-12 connectedSortable">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Sales
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#revenue-chart"
                        data-toggle="tab"
                      >
                        Area
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#sales-chart"
                        data-toggle="tab"
                      >
                        Donut
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="tab-content p-0">
                  <div
                    className="chart tab-pane active"
                    id="revenue-chart"
                    style={{ position: "relative", height: 300 }}
                  >
                   <AreaChart/>
                  </div>
                  <div
                    className="chart tab-pane"
                    id="sales-chart"
                    style={{ position: "relative", height: 300 }}
                  >
                    <canvas
                      id="sales-chart-canvas"
                      height={300}
                      style={{ height: 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="col-lg-7 connectedSortable">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  To Do List
                </h3>
                <div className="card-tools">
                  <ul className="pagination pagination-sm">
                    <li className="page-item">
                      <a href="#" className="page-link">
                        «
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <ul className="todo-list" data-widget="todo-list">
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo1"
                        id="todoCheck1"
                      />
                      <label htmlFor="todoCheck1" />
                    </div>
                    <span className="text">Design a nice theme</span>
                    <small className="badge badge-danger">
                      <i className="far fa-clock" /> 2 mins
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo2"
                        id="todoCheck2"
                        defaultChecked
                      />
                      <label htmlFor="todoCheck2" />
                    </div>
                    <span className="text">Make the theme responsive</span>
                    <small className="badge badge-info">
                      <i className="far fa-clock" /> 4 hours
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo3"
                        id="todoCheck3"
                      />
                      <label htmlFor="todoCheck3" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-warning">
                      <i className="far fa-clock" /> 1 day
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo4"
                        id="todoCheck4"
                      />
                      <label htmlFor="todoCheck4" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-success">
                      <i className="far fa-clock" /> 3 days
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo5"
                        id="todoCheck5"
                      />
                      <label htmlFor="todoCheck5" />
                    </div>
                    <span className="text">
                      Check your messages and notifications
                    </span>
                    <small className="badge badge-primary">
                      <i className="far fa-clock" /> 1 week
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input
                        type="checkbox"
                        defaultValue
                        name="todo6"
                        id="todoCheck6"
                      />
                      <label htmlFor="todoCheck6" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-secondary">
                      <i className="far fa-clock" /> 1 month
                    </small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer clearfix">
                <button type="button" className="btn btn-primary float-right">
                  <i className="fas fa-plus" /> Add item
                </button>
              </div>
            </div>
          </section>
          <section className="col-lg-5 connectedSortable">
            <div className="card bg-gradient-info">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="fas fa-th mr-1" />
                  Sales Graph
                </h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn bg-info btn-sm"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn bg-info btn-sm"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <canvas
                  className="chart"
                  id="line-chart"
                  style={{
                    minHeight: 250,
                    height: 250,
                    maxHeight: 250,
                    maxWidth: "100%",
                  }}
                />
              </div>
              <div className="card-footer bg-transparent">
                <div className="row">
                  <div className="col-4 text-center">
                    <input
                      type="text"
                      className="knob"
                      data-readonly="true"
                      defaultValue={20}
                      data-width={60}
                      data-height={60}
                      data-fgcolor="#39CCCC"
                    />
                    <div className="text-white">Mail-Orders</div>
                  </div>
                  <div className="col-4 text-center">
                    <input
                      type="text"
                      className="knob"
                      data-readonly="true"
                      defaultValue={50}
                      data-width={60}
                      data-height={60}
                      data-fgcolor="#39CCCC"
                    />
                    <div className="text-white">Online</div>
                  </div>
                  <div className="col-4 text-center">
                    <input
                      type="text"
                      className="knob"
                      data-readonly="true"
                      defaultValue={30}
                      data-width={60}
                      data-height={60}
                      data-fgcolor="#39CCCC"
                    />
                    <div className="text-white">In-Store</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container-fluid">
      </div>
    </div>
  );
};

export default Body;
