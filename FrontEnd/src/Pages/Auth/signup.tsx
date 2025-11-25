import React from 'react'
import MailInput from '../../Components/Auth/mailinput'
import Passwordinput from '../../Components/Auth/passwordinput'
import ButtonAuth from '../../Components/Auth/button'
import axiosInstance from '../../Api/loginaxios'

function Signup() {
const [Signuppayload,setSignupPayload] = React.useState({
email:"",
password:""
})

async function handleSubmit(){
try {
const response = await axiosInstance.post("/signup",Signuppayload);
console.log(response);

} catch (error) {
console.log(error);
}
}
return (
<div>
<div className="space-y-4 mb-6">
<MailInput email={Signuppayload.email} Onchange={(e)=>setSignupPayload((prev)=>({...prev,email:e.target.value}))}/>
<Passwordinput password={Signuppayload.password} onchange={(e)=>setSignupPayload((prev)=>({...prev,password:e.target.value}))}/>
</div>
{/* Submit Button */}
<ButtonAuth handleSubmit={handleSubmit} title={'login'}/>
</div>
)
}

export default Signup
