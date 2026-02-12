//authentication related apis
//signup, signin,forgotpassword

import axiosInstance from "../apis/Api"
import { API_ENDPOINT } from "../apis/endpoints"

export const signupApi= async(data)=>{

    return await axiosInstance.post(API_ENDPOINT.SIGNUP,data)
}
export const signinApi= async(data)=>{

    return await axiosInstance.post(API_ENDPOINT.SIGNIN,data)
}
export const resetpasswordApi=async(data)=>{
    return await axiosInstance.post(API_ENDPOINT.FORGOTPASSWORD, data )
}
export const searchkeywordApi=async(data)=> 
{
    return await axiosInstance.post(API_ENDPOINT.SEARCH, data)
}

export const addaddressapi=async(data)=>
{
    return axiosInstance.post(API_ENDPOINT.ADDRESS_ADD, data)
}
export const viewaddressapi=async(data)=>
{
    return axiosInstance.post(API_ENDPOINT.ADDRESS_VIEW, data)
}
export const deleteaddaddress=async(data)=>
{
    return axiosInstance.post(API_ENDPOINT.ADDRESS_DELETE, data)
}