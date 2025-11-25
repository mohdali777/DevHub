import { Mail } from 'lucide-react'
import React from 'react'

interface MailInputProps {
email: string
Onchange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

function MailInput({email,Onchange}:MailInputProps) {
return (
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
Email Address
</label>
<div className="relative">
<Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
<input
type="email"
value={email}
onChange={Onchange}
placeholder="you@example.com"
className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
required
/>
</div>
</div>
)
}

export default MailInput
