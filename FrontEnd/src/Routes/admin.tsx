import React, { useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../Redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import { VerifyUser } from '../Redux/slice/Auth/reducers'

function AdminRoutes() {
const {isLoggedIn,Role} = useSelector((state:RootState)=>state.auth)
const dispatch = useDispatch<AppDispatch>()

useEffect(()=>{
if(isLoggedIn !== null) return
dispatch(VerifyUser())
},[dispatch])

if(isLoggedIn == null) return
if (!isLoggedIn) {
return <Navigate to="/auth/login" />;
}
if (Role !== "admin") {
return <Navigate to="/" />;
}
return <Outlet />;
}

export default AdminRoutes
