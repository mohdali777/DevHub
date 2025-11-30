import type { LucideIcon } from 'lucide-react'
import React from 'react'

interface SelectInputProps{
Value:string,
OnChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
Icon:LucideIcon,
Label:string,
PlaceHolder:string,
List:string[]
}
function RadioInput({Icon,Value,OnChange,List,Label}:SelectInputProps) {
return (
<div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
<label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
<Icon className="w-5 h-5 text-blue-600" />
{Label}
</label>
<div className="space-y-3">
{List.map(v => (
<label key={v} className="flex items-center gap-3 cursor-pointer">
<input
type="radio"
name="status"
value={v}
checked={Value === v}
onChange={OnChange}
className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
/>
<span className="text-gray-700 font-medium capitalize">{v}</span>
</label>
))}
</div>
</div>
)
}

export default RadioInput
