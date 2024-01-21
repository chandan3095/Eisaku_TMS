import client from "./client";
import EndUrls from "./endUrls";

const config = {
    headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
};

export const handleLoginApiCall = async (data) => await client.post(EndUrls.login, data);

export const handleAdduserApiCall = async (data) =>
    await client.post(EndUrls.addUser, data, config);

export const handleListuserApiCall = async (data) =>
    await client.get(EndUrls.listUser, config);

// export const handleGetParentRoleApiCall= async (data)=> await client.get(EndUrls.parentRole, {headers:{Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`}})

export const handleEdituserApiCall = async (data) =>
    await client.patch(EndUrls.editUser, data, config);

// fleet master
export const getDropdownDataApiCall = async () =>
    await client.get(EndUrls.getDropdownData, config);
