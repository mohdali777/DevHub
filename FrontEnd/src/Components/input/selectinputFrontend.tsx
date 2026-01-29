import React from 'react'

interface SelectOption {
  label: string
  value: string
}

interface UserSelectInputProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  label?: string
  options: SelectOption[]
  name?: string
}

function UserSelectInput({
  value = '',
  onChange,
  label = '',
  options,
  name = ''
}: UserSelectInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none bg-white"
      >
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default UserSelectInput
