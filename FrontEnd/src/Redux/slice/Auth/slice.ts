import { createSlice } from "@reduxjs/toolkit"
import { GoogleAuth, LoginUser, LogoutUsers, SignupUser, VerifyUser } from "./reducers"

export interface InitialStateI{
UserId:string|null
UserName:string|null
UserEmail:string|null
ImageUrl:string|null
Role:string|null
IsVerified:boolean|null
Badge:string|null
isLoggedIn:boolean|null
}

const initialState:InitialStateI = {
UserId:null,
UserName:null,
UserEmail:null,
ImageUrl:null,
Role:null,
IsVerified:null,
Badge:null,
isLoggedIn:null
}


const AuthSlice = createSlice({
name:"Auth",
initialState,
reducers:{ 
},
extraReducers:(builder)=>{
builder
.addCase(LoginUser.fulfilled,(state,action)=>{    
state.UserId = action.payload.UserId
state.UserName = action.payload.UserName
state.UserEmail = action.payload.UserEmail
state.ImageUrl = action.payload.ImageUrl
state.Role = action.payload.Role
state.IsVerified = action.payload.IsVerified
state.Badge = action.payload.Badge
state.isLoggedIn = true
})
.addCase(LoginUser.rejected,(state)=>{
state.UserId = null
state.UserName = null
state.UserEmail = null
state.ImageUrl = null
state.Role = null
state.IsVerified = null
state.Badge = null
state.isLoggedIn = false
})
builder
.addCase(GoogleAuth.fulfilled,(state,action)=>{    
state.UserId = action.payload.UserId
state.UserName = action.payload.UserName
state.UserEmail = action.payload.UserEmail
state.ImageUrl = action.payload.ImageUrl
state.Role = action.payload.Role
state.IsVerified = action.payload.IsVerified
state.Badge = action.payload.Badge
state.isLoggedIn = true
})
.addCase(GoogleAuth.rejected,(state)=>{
state.UserId = null
state.UserName = null
state.UserEmail = null
state.ImageUrl = null
state.Role = null
state.IsVerified = null
state.Badge = null
state.isLoggedIn = false
})
builder
.addCase(SignupUser.fulfilled,(state,action)=>{    
state.UserId = action.payload.UserId
state.UserName = action.payload.UserName
state.UserEmail = action.payload.UserEmail
state.ImageUrl = action.payload.ImageUrl
state.Role = action.payload.Role
state.IsVerified = action.payload.IsVerified
state.Badge = action.payload.Badge
state.isLoggedIn = true
})
.addCase(SignupUser.rejected,(state)=>{
state.UserId = null
state.UserName = null
state.UserEmail = null
state.ImageUrl = null
state.Role = null
state.IsVerified = null
state.Badge = null
state.isLoggedIn = false
})
builder
.addCase(VerifyUser.fulfilled,(state,action)=>{    
state.UserId = action.payload.UserId
state.UserName = action.payload.UserName
state.UserEmail = action.payload.UserEmail
state.ImageUrl = action.payload.ImageUrl
state.Role = action.payload.Role
state.IsVerified = action.payload.IsVerified
state.Badge = action.payload.Badge
state.isLoggedIn = true
})
.addCase(VerifyUser.rejected,(state)=>{
state.UserId = null
state.UserName = null
state.UserEmail = null
state.ImageUrl = null
state.Role = null
state.IsVerified = null
state.Badge = null
state.isLoggedIn = false
})
.addCase(LogoutUsers.pending,(state)=>{
state.UserId = null
state.UserName = null
state.UserEmail = null
state.ImageUrl = null
state.Role = null
state.IsVerified = null
state.Badge = null
state.isLoggedIn = false
})
.addCase(LogoutUsers.fulfilled,(state)=>{
state.isLoggedIn = false
})
.addCase(LogoutUsers.rejected,(state)=>{
state.isLoggedIn = false
})
}
})

export default AuthSlice.reducer