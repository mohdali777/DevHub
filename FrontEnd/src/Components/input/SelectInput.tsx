import {type LucideIcon } from 'lucide-react'
import React from 'react'
interface SelectInputProps{
Value:string,
OnChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void,
Icon:LucideIcon,
Label:string,
PlaceHolder:string,
List:{id:string,name:string}[]
}
function SelectInput({Icon,Value,OnChange,List}:SelectInputProps) {
return (
<div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
<label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
<Icon className="w-5 h-5 text-blue-600" />
Category *
</label>
<select
value={Value}
onChange={OnChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
required
>
<option value="">Select a category</option>
{List.map(cat => (
<option key={cat.id} value={cat.id}>
{cat.name}
</option>
))}
</select>
</div>
)
}

export default SelectInput
