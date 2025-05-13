/* import React from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const CalculatorLayout = ({ title, icon, children, onBack }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button onClick={onBack} className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
          <MdOutlineKeyboardDoubleArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator Hub
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
          <span className="mr-2">{icon}</span> {title}
        </h1>
      </div>

      {children}
    </div>
  )
}

export default CalculatorLayout */
