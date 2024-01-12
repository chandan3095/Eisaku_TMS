import client from "./client"
import EndUrls from "./endUrls"

export const handleLoginApiCall = async (data) => await client.post(EndUrls.login, data )


