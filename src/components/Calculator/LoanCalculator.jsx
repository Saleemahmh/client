import React from 'react'
import { useState, useEffect } from "react"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import CurrencyConverter from "./CurrencyConverter"

const LoanCalculator = () => {
    const navigate = useNavigate()
    const [loanType, setLoanType] = useState("personal")
    const [loanAmount, setLoanAmount] = useState("100000")
    const [interestRate, setInterestRate] = useState("5.5")
    const [loanTerm, setLoanTerm] = useState("5")
    const [monthlyPayment, setMonthlyPayment] = useState(null)
    const [totalRepayment, setTotalRepayment] = useState(null)
    const [showConverter, setShowConverter] = useState(false)
  
    useEffect(() => {
      calculateLoan()
    }, [loanAmount, interestRate, loanTerm])
  
    const calculateLoan = () => {
      const principal = Number.parseFloat(loanAmount) || 0
      const rate = (Number.parseFloat(interestRate) || 0) / 100 / 12 // Monthly interest rate
      const time = (Number.parseFloat(loanTerm) || 0) * 12 // Total months
  
      if (principal > 0 && rate > 0 && time > 0) {
        const x = Math.pow(1 + rate, time)
        const monthly = (principal * x * rate) / (x - 1)
  
        setMonthlyPayment(monthly)
        setTotalRepayment(monthly * time)
        setShowConverter(true)
      } else {
        setMonthlyPayment(0)
        setTotalRepayment(0)
        setShowConverter(false)
      }
    }
  return (
    <div className="min-h-screen mt-17 bg-white">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <button onClick={() => navigate("/calculatorhub")} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <MdOutlineKeyboardDoubleArrowLeft className="w-5 h-5 mr-2" />
          <span>Loan Calculator</span>
        </button>

        {/* Rest of your component remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Loan Details</h2>
            <p className="text-gray-600 mb-6">Enter your loan information</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  step="0.01"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-2">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1 year</span>
                    <span>15 years</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Loan Summary</h2>
            <p className="text-gray-600 mb-6">Your estimated loan details</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                ${monthlyPayment ? monthlyPayment.toFixed(2) : "0.00"}
              </div>
              <div className="text-gray-600">with interest rate of {interestRate}%</div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Loan amount:</span>
                <span className="font-medium">${Number(loanAmount).toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Loan term:</span>
                <span className="font-medium">{loanTerm} years</span>
              </div>

              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Total payment:</span>
                <span className="font-medium">${totalRepayment ? totalRepayment.toFixed(2) : "0.00"}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Get a loan quote
            </button>
          </div>
        </div>

        {showConverter && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <CurrencyConverter amount={monthlyPayment || 0} fromCurrency="USD" />
          </div>
        )}
      </div>
    </div>
  )
}

export default LoanCalculator