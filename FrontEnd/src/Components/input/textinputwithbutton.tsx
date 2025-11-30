import { Plus, X, type LucideIcon } from 'lucide-react'
import React, { useState } from 'react'
interface TextProps{
OnSubmit:(value:string)=>void,
OnRemove:(value:string)=>void,
Icon:LucideIcon,
Label:string,
PlaceHolder:string,
ListValues:string[]
}
function ListInput({OnSubmit,Icon,Label,PlaceHolder,ListValues,OnRemove}:TextProps) {
const [Tag,setTagInput] = useState<string>('')   
function Addvalue(){
OnSubmit(Tag)
setTagInput('')
}
return (
<div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
<label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
<Icon className="w-5 h-5 text-blue-600" />
{Label}</label>   
<div className="flex gap-2 mb-3">
<input
type="text"
value={Tag}
onChange={(e) => setTagInput(e.target.value)}
onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(),Addvalue())}
placeholder={PlaceHolder}
className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>
<button
onClick={()=>Addvalue()}
className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
>
<Plus className="w-5 h-5" />
</button>
</div>
{ListValues.length > 0 && (
<div className="flex flex-wrap gap-2">
{ListValues.map((tag, index) => (
<span
key={index}
className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-medium"
>
{tag}
<button
onClick={() => OnRemove(tag)}
className="hover:text-blue-900"
>
<X className="w-4 h-4" />
</button>
</span>
))}
</div>
)}
</div>
)
}

export default ListInput
