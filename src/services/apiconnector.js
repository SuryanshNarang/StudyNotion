import axios from "axios";
// we have a method with which we can call for any request either it is get post or put
export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
      method: `${method}`,  // e.g., "GET", "POST"
      url: `${url}`,        // URL to the backend endpoint
      data: bodyData ? bodyData : null,  // Optional data for POST/PUT
      headers: headers ? headers : null, // Optional headers
      params : params ? params : null,   // Optional query params
    });
  };
  