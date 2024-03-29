const EndUrls = {
   login: "login",
   addUser: "user/add",
   listUser: "/user?model_id=1&action_id=3",
   editUser: "/user/update",
   contractorAdd: "/contractor/add",
   contractorList: "/contractor?&model_id=9&action_id=3",
   contractorUpdate: "/contractor/update",
   singleConractorContactDetails: (id) =>
      `/contractor/fetch/${id}?&model_id=9&action_id=3`,
   singleConractorContactAdd: "/contractor/add/child",
   singleConractorContactEdit: "/contractor/update/child",

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
   // Helper Master
   addHelperMaster: "/helper/add",
   listHelperMaster: "/helper?&model_id=5&action_id=3",
   updateHelperMaster: "/helper/update",

   // Get all lane
   listLane: "/lane?&model_id=8&action_id=3",

   // Vendor Master
   addVendorMaster: "/vendor/add",
   listVendorMaster: "/vendor?&model_id=7&action_id=3",
   contactPersonDetails:
      "api/vendor/fetch/child/1?&table_name=contact_person_details&model_id=7&action_id=3",
};

export default EndUrls;
