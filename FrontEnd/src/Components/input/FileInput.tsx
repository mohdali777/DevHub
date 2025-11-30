import { Upload } from 'lucide-react'
import React from 'react'

interface FileInputProps {
AcceptType: string
onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
PlaceHolder: string
}

function FileInput({ AcceptType, onUpload, PlaceHolder }: FileInputProps) {
return (
<div>
<label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">

<div className="flex flex-col items-center justify-center pt-5 pb-6">
<Upload className="w-12 h-12 text-gray-400 mb-3" />

<p className="mb-2 text-sm text-gray-500">
<span className="font-semibold">Click to upload</span> or drag and drop
</p>

<p className="text-xs text-gray-500">{PlaceHolder}</p>
</div>

<input
type="file"
className="hidden"
accept={AcceptType}
onChange={onUpload}
multiple
/>

</label>
</div>
)
}

export default FileInput
