import { Mail } from 'lucide-react'
import React from 'react'

interface MailInputProps {
value: string
Onchange:(e: React.ChangeEvent<HTMLInputElement>) => void
Icon:any,
Label:string,
}

function TextInputBox({value,Onchange,Icon,Label}:MailInputProps) {
return (
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
{Label}
</label>
<div className="relative">
<Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
<input
type="email"
value={value}
onChange={Onchange}
placeholder="you@example.com"
className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
required
/>
</div>
</div>
)
}

export default TextInputBox
