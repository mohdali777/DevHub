import { ArrowLeft, Eye } from 'lucide-react'
import React from 'react'

function BackButton({OnSubmit}:{OnSubmit:()=>void}) {
  return (
        <div className="bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Dashboard</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={OnSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl font-semibold transition-all"
              >
                <Eye className="w-5 h-5" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BackButton
