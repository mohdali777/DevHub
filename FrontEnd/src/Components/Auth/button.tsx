import React from 'react'

interface ButtonAuthProps {
handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void
title:string
}
function ButtonAuth({handleSubmit,title="Auth"}:ButtonAuthProps) {
  return (
     <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
        >
        {title}
    </button>
  )
}

export default ButtonAuth
