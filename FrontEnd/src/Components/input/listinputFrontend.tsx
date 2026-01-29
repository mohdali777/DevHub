import React, { useState } from 'react'
import { X } from 'lucide-react'

interface ListInputProps {
  items: string[]
  setItems: React.Dispatch<React.SetStateAction<string[]>>
  label?: string
  placeholder?: string
  maxItems?: number
}

function ListInput({
  items,
  setItems,
  label = 'List',
  placeholder = 'Add item',
  maxItems
}: ListInputProps) {
  const [input, setInput] = useState('')

  const normalizedItems = items.map(i => i.toLowerCase())

  const addItem = () => {
    const value = input.trim()
    if (!value) return
    if (normalizedItems.includes(value.toLowerCase())) return
    if (maxItems && items.length >= maxItems) return

    setItems([...items, value])
    setInput('')
  }

  const removeItem = (item: string) => {
    setItems(items.filter(i => i !== item))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addItem()
    }
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={addItem}
          disabled={!input.trim()}
          className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold
                     hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {items.map(item => (
            <span
              key={item}
              className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {item}
              <button
                type="button"
                onClick={() => removeItem(item)}
                className="hover:text-purple-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}

      {maxItems && (
        <p className="text-xs text-gray-500 mt-1">
          {items.length}/{maxItems} added
        </p>
      )}
    </div>
  )
}

export default ListInput
