import React from 'react'

interface TeaxtArea {
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?:string
    label?:string
    name?:string
}
function TeaxtArea({value,onChange,placeholder,label,name}:TeaxtArea) {
  return (
    <div>
    <label className="block text-sm font-semibold text-gray-900 mb-2">{label}</label>
    <textarea
    value={value}
    onChange={onChange}
    name={name}
    rows="4"
    placeholder={placeholder}
    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
    />
    </div>
  )
}

export default TeaxtArea
