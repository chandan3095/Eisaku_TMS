import client from "./client";
import EndUrls from "./endUrls";

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
};

export const handleLoginApiCall = async (data) => await client.post(EndUrls.login, data);

export const handleAdduserApiCall = async (data) =>
  await client.post(EndUrls.addUser, data, config);

export const handleListuserApiCall = async (data) =>
  await client.get(EndUrls.listUser, config);

export const handleGetParentRoleApiCall = async (data) =>
  await client.get(EndUrls.parentRole, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });

// Add Location Master
export const handleAddLocationMaster = async (data) =>
  await client.post(EndUrls.addLocationMaster, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
export const handleLocationMasterList = async () =>
  await client.get(EndUrls.locationMasterList, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
export const handleLocationMasterSingleList = async (id, model_id, action_id) => {
  // console.log(EndUrls.locationMasterSingleList(id, model_id, action_id));
  return await client.get(EndUrls.locationMasterSingleList(id, model_id, action_id), {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};

export const handleLocationMasterUpdate = async (data) =>
  await client.patch(EndUrls.locationMasterUpdate, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
// export const handleGetParentRoleApiCall= async (data)=> await client.get(EndUrls.parentRole, {headers:{Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`}})

export const handleEdituserApiCall = async (data) =>
  await client.patch(EndUrls.editUser, data, config);

// fleet master
export const getDropdownDataApiCall = async () =>
  await client.get(EndUrls.getDropdownData, config);

export const addFleetApiCall = async (data) =>
  await client.post(EndUrls.addFleet, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // "Content-Type": "content type multipart/form-data",
      "Custom-Header": "value",
    },
  });

export const listFleetApiCall = async () => await client.get(EndUrls.listFleet, config);
export const updateFleetApiCall = async (data) =>
  await client.post(EndUrls.updateFleet, data, config);

// driver master
export const fetchAllContractorsApiCall = async () =>
  await client.get(EndUrls.fetchAllContractors, config);
export const addDriverMasterApiCall = async (data) =>
  await client.post(EndUrls.addDriverMaster, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // "Content-Type": "content type multipart/form-data",
      "Custom-Header": "value",
    },
  });
export const listDriverMasterApiCall = async () =>
  await client.get(EndUrls.listDriverMaster, config);
export const updateDriverMasterApiCall = async (data) =>
  await client.post(EndUrls.updateDriverMaster, data, config);

export const handleContractorMasterApiCall = async (data) =>
  await client.post(EndUrls.contractorAdd, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });

// customer master
// export const fetchAllCustomersApiCall = async () =>
//   await client.get(EndUrls.fetchAllCustomers, config);

export const addCustomerMasterApiCall = async (data) =>
  await client.post(EndUrls.addCustomerMaster, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // "Content-Type": "content type multipart/form-data",
      "Custom-Header": "value",
    },
  });
export const listCustomerMasterApiCall = async () =>
  await client.get(EndUrls.listCustomerMaster, config);

export const updateCustomerMasterApiCall = async (data) =>
  await client.post(EndUrls.updateCustomerMaster, data, config);

// export const handleContractorMasterApiCall = async (data) =>
//   await client.post(EndUrls.contractorAdd, data, {
//     headers: {
//       Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
//     },
//   });

// Lane Master

export const addLaneMasterApiCall = async (data) =>
  await client.post(EndUrls.addLaneMaster, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // "Content-Type": "content type multipart/form-data",
      "Custom-Header": "value",
    },
  });

export const getAllLaneApiCall = async () => await client.get(EndUrls.getAllLane, config);
export const getAllVendorsApiCall = async () =>
  await client.get(EndUrls.getAllVendors, config);

export const listLaneMasterApiCall = async () =>
  await client.get(EndUrls.listLaneMaster, config);

// export const updateLaneMasterApiCall = async (data) =>
//   await client.post(EndUrls.updateLaneMaster, data, config);
