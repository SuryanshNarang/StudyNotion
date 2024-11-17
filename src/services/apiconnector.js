import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
//LOGIC>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.WORKFLOW>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// For login
// We know that controllers ke andar there is a file named Auth, having function login which is responsible for login functionality

// coming to frontend we have pages folder: containing login page which is using Template then template is under:
// components >common>core>Auth>Template.jsx
// template is using LoginForm
// loginForm is another file in Auth folder: it has a function named handleonSubmit
// handlesubmit is using dispatch(login(email, password,navigate))
// now this login has came from services/operations/authApi
// this authApi contains login function it does not have its logic it is just calling backend
// That POST request is there LOGIN_API input contains email,password
