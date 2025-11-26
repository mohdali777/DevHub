import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../Api/loginaxios";
import { AxiosError } from "axios";
import type { InitialStateI } from "./slice";

export const LoginUser = createAsyncThunk(
"auth/login",async (payload:{email:string,password:string},thunkAPI)=>{
try {
const resonse = await axiosInstance.post("/login",payload)
const {TokenPayload} = resonse.data
return TokenPayload as InitialStateI
} catch (error) {
if(error instanceof AxiosError){
return thunkAPI.rejectWithValue(error.response?.data?.message||"login failed")
}else{
return thunkAPI.rejectWithValue("An unexpected error occurred")
}
}
})

export const GoogleAuth = createAsyncThunk(
"auth/GoogleAuth",async (payload:{token:string},thunkAPI)=>{
try {
const resonse = await axiosInstance.post("/googlelogin",payload)
const {TokenPayload} = resonse.data
return TokenPayload as InitialStateI
} catch (error) {
if(error instanceof AxiosError){
return thunkAPI.rejectWithValue(error.response?.data?.message||"login failed")
}else{
return thunkAPI.rejectWithValue("An unexpected error occurred")
}
}
})

export const SignupUser = createAsyncThunk(
"auth/SignupUser",async (payload:{name:string,email:string,password:string},thunkAPI)=>{
try {
const resonse = await axiosInstance.post("/signup",payload)
const {TokenPayload} = resonse.data
return TokenPayload as InitialStateI
} catch (error) {
if(error instanceof AxiosError){
return thunkAPI.rejectWithValue(error.response?.data?.message||"login failed")
}else{
return thunkAPI.rejectWithValue("An unexpected error occurred")
}
}
})

export const VerifyUser = createAsyncThunk(
"auth/VerifyUser",async (_,thunkAPI)=>{
try {
const resonse = await axiosInstance.get("/verifyuser")
const TokenPayload = resonse.data
return TokenPayload as InitialStateI
} catch (error) {
if(error instanceof AxiosError){
return thunkAPI.rejectWithValue(error.response?.data?.message||"login failed")
}else{
return thunkAPI.rejectWithValue("An unexpected error occurred")
}
}
})

