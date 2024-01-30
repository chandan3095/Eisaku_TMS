const EndUrls = {
  login: "login",
  addUser: "user/add",
  listUser: "/user?model_id=1&action_id=3",
  editUser: "/user/update",
  contractorAdd: "/contractor/add",

  // Fleet Master
  getDropdownData: "fleet/get_dropdowns?&model_id=3&action_id=3",
  addFleet: "fleet/add",
  listFleet: "fleet?&model_id=3&action_id=3",
  fetchSingleFleet: (id) => `fleet/fetch/${id}?&model_id=3&action_id=3`,
  updateFleet: "fleet/update",

  // driver master
  fetchAllContractors: "contractor/get_all_contractors?&model_id=9&action_id=3",
  addDriverMaster: "driver/add",
  listDriverMaster: "driver?&model_id=4&action_id=3",
  fetchSingleDriverMaster: (id) => `api/driver/fetch/${id}?&model_id=4&action_id=3`,
  updateDriverMaster: "driver/update",

  // customer master
  // fetchAllCustomers: "customer?&model_id=6&action_id=3",
  addCustomerMaster: "customer/add",
  listCustomerMaster: "customer?&model_id=6&action_id=3",
  // fetchSingleDriverMaster: (id) =>
  //   `api/driver/fetch/${id}?&model_id=4&action_id=3`,
  updateCustomerMaster: "customer/update",

  // Location Master
  addLocationMaster: "location/add",
  locationMasterList: "/location?&model_id=10&action_id=3",
  locationMasterSingleList: (id, model_id, action_id) =>
    `/location/fetch/${id}?model_id=${model_id}&action_id=${action_id}`,
  locationMasterUpdate: "/location/update",

  // lane master
  getAllVendors: "vendor/get_all_vendors?&model_id=7&action_id=3",
  getAllLane: "lane?&model_id=8&action_id=3",
  listLaneMaster: "lane-cust-vend-map?&model_id=8&action_id=3",
  addLaneMaster: "lane-cust-vend-map/add",
};

export default EndUrls;
