const RouteNames = {
  addUser: "/user/add-user",
  listUser: "/user/user-List",
  updateUser: "/user/update-user/:id",

  // add forms
  fleetMasterAddForm: "/fleet-master/add-form",
  driverMasterAddForm: "/driver-master/add-form",
  helperMasterAddForm: "/helper-master/add-form",
  customerMasterAddForm: "/customer-master/add-form",
  vendorMasterAddForm: "/vendor-master/add-form",
  LaneMasterAddForm: "/lane-master/add-form",
  ContractorMasterAddForm: "/contractor-master/add-form",
  LocationMasterAddForm: "/location-master/:formType",

  // list
  fleetMasterList: "/fleet-master/list",
  driverMasterView: "/driver-master/view",
  helperMasterView: "/helper-master/view",
  customerMasterView: "/customer-master/view",
  vendorMasterView: "/vendor-master/view",
  laneMasterView: "/lane-master/view",
  contractorMasterView: "/contractor-master/view",
  LocationMasterView: "/location-master/view",

  // list view
  fleetMasterView: "/fleet-master/view/:id",

  // edit
  fleetMasterEdit: "/fleet-master/edit",
  driverMasterEdit: "/driver-master/edit/:id",
  helperMasterEdit: "/helper-master/edit/:id",
  customerMasterEdit: "/customer-master/edit",
  vendorMasterEdit: "/vendor-master/edit/:id",
  laneMasterEdit: "/lane-master/edit",
  contractorMasterEdit: "/contractor-master/edit",
  LocationMasterEdit: "/location-master/:formType/:id",

  // manager Trip view
  tripCreate: "/trip/adhoc/add",
  tripView: "/trip/adhoc/view",

  // Contractual
  contractualView: "/trip/contractual/view",

  // adhoc
  CreateAdhoc: "/adhoc-lane/add",
  adhocView: "/adhoc-lane/view",

  // Manager add vendor
  managerAddVendor: "/adhoc-vendor/add",
  managerVendorView: "/adhoc-vendor/view",

  // common pages
  profileView: "/profile",
};
export default RouteNames;
