import React, { useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../Redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import { VerifyUser } from '../Redux/slice/Auth/reducers'

function UserRoutes() {
const {isLoggedIn} = useSelector((state:RootState)=>state.auth)
const dispatch = useDispatch<AppDispatch>()

useEffect(()=>{
if(isLoggedIn !== null) return
dispatch(VerifyUser())
},[dispatch])

if(isLoggedIn == null) return
return isLoggedIn ? <Outlet/> : <Navigate to="/auth/login" /> ;
}

export default UserRoutes
