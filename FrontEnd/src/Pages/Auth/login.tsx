import React, { useState } from 'react'
import MailInput from '../../Components/Auth/mailinput'
import Passwordinput from '../../Components/Auth/passwordinput'
import ButtonAuth from '../../Components/Auth/button'
import { Mail } from 'lucide-react'
import { toast } from 'sonner'
import ValidatorFunctions from '../../Utils/ValidatorFunctions'
import type { AppDispatch} from '../../Redux/store'
import { useDispatch} from 'react-redux'
import { LoginUser} from '../../Redux/slice/Auth/reducers'
import Loader from '../../Components/Loadings/Loader'
function Login() {
const [Loginpayload,setLoginPayload] = React.useState({
email:"",
password:""
})
const [isLoader,SetLoader] = useState<boolean>(false)

const dispatch = useDispatch<AppDispatch>()

function ValidateFeilds(){
if(!Loginpayload.email.trim()){
 toast.error("email is required")
 return false
}
if(ValidatorFunctions.isValidEmail(Loginpayload.email) === false){
 toast.error("invalid email address")
 return false
}
if(!Loginpayload.password.trim()){
 toast.error("password is required")
  return false
}
if(Loginpayload.password.length < 8){
 toast.error("password must be at least 6 characters")
 return false
}
return true
}


async function handleSubmit(){
const isValid = ValidateFeilds()
if(!isValid) return
try {
SetLoader(true)  
const response = await dispatch(LoginUser(Loginpayload)).unwrap();
console.log(response);
setTimeout(()=>{
SetLoader(false)
},500)
} catch (error) { 
  toast.error(error as string)
  setTimeout(()=>{
  SetLoader(false)
},500)
}
}
return (
<div>
<div className="space-y-4 mb-6">
<MailInput value={Loginpayload.email} Onchange={(e) => setLoginPayload((prev) => ({ ...prev, email: e.target.value }))} Icon={Mail} Label={'Email Address'}/>
<Passwordinput password={Loginpayload.password} onchange={(e)=>setLoginPayload((prev)=>({...prev,password:e.target.value}))}/>
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

export default Login
