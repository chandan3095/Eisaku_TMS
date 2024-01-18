import client from "./client"
import EndUrls from "./endUrls"

export const handleLoginApiCall = async (data) => await client.post(EndUrls.login, data);

export const handleAdduserApiCall = async (data) => await client.post(EndUrls.addUser, data, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } });

export const handleListuserApiCall = async(data)=> await client.get(EndUrls.listUser, {headers:{Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`}});


// export const handleGetParentRoleApiCall= async (data)=> await client.get(EndUrls.parentRole, {headers:{Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`}})


export const handleEdituserApiCall = async(data)=> await client.patch(EndUrls.editUser, data, {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`}})

