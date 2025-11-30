import type { LucideIcon } from 'lucide-react'
import React from 'react'

interface TextProps{
Value:string,
OnChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
Icon:LucideIcon,
Label:string,
PlaceHolder:string
}
function Textinput({Value,OnChange,Icon,Label,PlaceHolder}:TextProps) {
return (
<div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
<label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
<Icon className="w-5 h-5 text-blue-600" />
{Label}
</label>
<input
type="text"
value={Value}
onChange={OnChange}
placeholder={PlaceHolder}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
required
/>
</div>
)
}




export default Textinput
