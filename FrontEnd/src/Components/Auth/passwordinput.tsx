import { Eye, EyeOff, Lock } from 'lucide-react'
import React from 'react'

interface PasswordInputProps {
password: string
onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Passwordinput({password,onchange}:PasswordInputProps) {
const [showPassword, setShowPassword] = React.useState(false)
return (
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
Password
</label>
<div className="relative">
<Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
<input
type={showPassword ? 'text' : 'password'}
value={password}
onChange={onchange}
placeholder="Enter your password"
className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
required
/>
<button
type="button"
onClick={() => setShowPassword(!showPassword)}
className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
>
{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
</button>
</div>
</div>
)
}

export default Passwordinput
