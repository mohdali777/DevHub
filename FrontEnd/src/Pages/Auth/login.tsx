import React from 'react'
import MailInput from '../../Components/Auth/mailinput'
import Passwordinput from '../../Components/Auth/passwordinput'
import ButtonAuth from '../../Components/Auth/button'
import axiosInstance from '../../Api/loginaxios'

function Login() {
const [Loginpayload,setLoginPayload] = React.useState({
email:"",
password:""
})

async function handleSubmit(){
try {
const response = await axiosInstance.post("/login",Loginpayload);
} catch (error) {
console.log(error);
}
}
return (
<div>
<div className="space-y-4 mb-6">
<MailInput email={Loginpayload.email} Onchange={(e)=>setLoginPayload((prev)=>({...prev,email:e.target.value}))}/>
<Passwordinput password={Loginpayload.password} onchange={(e)=>setLoginPayload((prev)=>({...prev,password:e.target.value}))}/>
</div>
{/* Submit Button */}
<ButtonAuth handleSubmit={handleSubmit} title={'login'}/>
</div>
)
}

export default Login
