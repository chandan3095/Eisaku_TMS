import client from "./client";
import EndUrls from "./endUrls";

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
};

export const handleLoginApiCall = async (data) =>
  await client.post(EndUrls.login, data);

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
export const handleLocationMasterSingleList = async (
  id,
  model_id,
  action_id
) => {
  // console.log(EndUrls.locationMasterSingleList(id, model_id, action_id));
  return await client.get(
    EndUrls.locationMasterSingleList(id, model_id, action_id),
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }
  );
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

export const listFleetApiCall = async () =>
  await client.get(EndUrls.listFleet, config);
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

//Helper master
export const addHelperMasterApiCall = async (data) =>
  await client.post(EndUrls.addHelperMaster, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Custom-Header": "value",
    },
  });
