import React, { useState } from 'react'
import TextInput from '../../Components/Auth/mailinput'
import Passwordinput from '../../Components/Auth/passwordinput'
import ButtonAuth from '../../Components/Auth/button'
import { Mail, User } from 'lucide-react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../Redux/store'
import { toast } from 'sonner'
import { SignupUser } from '../../Redux/slice/Auth/reducers'
import ValidatorFunctions from '../../Utils/ValidatorFunctions'
import Loader from '../../Components/Loadings/Loader'

function Signup() {
const [Signuppayload,setSignupPayload] = useState({
name:"",    
email:"",
password:""
})
const dispatch = useDispatch<AppDispatch>()
const [isLoader,SetLoader] = useState<boolean>(false)
function ValidateFeilds(){
if(!Signuppayload.name.trim()){
 toast.error("username is required")
 return false
}    
if(!Signuppayload.email.trim()){
 toast.error("email is required")
 return false
}
if(ValidatorFunctions.isValidEmail(Signuppayload.email) === false){
 toast.error("invalid email address")
 return false
}
if(!Signuppayload.password.trim()){
 toast.error("password is required")
  return false
}
if(Signuppayload.password.length < 8){
 toast.error("password must be at least 6 characters")
 return false
}
return true
}

async function handleSubmit(){
if(!ValidateFeilds()) return
try {
SetLoader(true)    
const response = await dispatch(SignupUser(Signuppayload)).unwrap();
setTimeout(() => {
SetLoader(false) 
}, 500);
console.log(response);
} catch (error) {
toast.error(error as string)
setTimeout(() => {
SetLoader(false) 
}, 500);
}
}
return (
<div>
<div className="space-y-4 mb-6">
<TextInput value={Signuppayload.name} Onchange={(e) => setSignupPayload((prev) => ({ ...prev, name: e.target.value }))} Icon={User} Label={'User Name'} />    
<TextInput value={Signuppayload.email} Onchange={(e) => setSignupPayload((prev) => ({ ...prev, email: e.target.value }))} Icon={Mail} Label={'Email Address'}/>
<Passwordinput password={Signuppayload.password} onchange={(e)=>setSignupPayload((prev)=>({...prev,password:e.target.value}))}/>
</div>
{/* Submit Button */}
{isLoader ?
<Loader/>
:
<ButtonAuth handleSubmit={handleSubmit} title={'login'}/>
}
</div>
)
}

export default Signup
