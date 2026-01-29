import React from 'react'

interface UserSideInputProps {
    type?:string
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?:string
    label?:string
    name?:string
}
function UserSideInput({type="text",value="",onChange,placeholder="",label="",name=""}:UserSideInputProps) {
  return (
        <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">{label}</label>
        <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
        />
        </div>
  )
}

export default UserSideInput
