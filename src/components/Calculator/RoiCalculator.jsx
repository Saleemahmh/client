
import { useState, useEffect } from "react"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import CurrencyConverter from "./CurrencyConverter"
const RoiCalculator = () => {
    const navigate = useNavigate()
    const [investmentAmount, setInvestmentAmount] = useState("10000")
    const [returnAmount, setReturnAmount] = useState("12000")
    const [timePeriod, setTimePeriod] = useState("2")
    const [roi, setRoi] = useState(null)
    const [interpretation, setInterpretation] = useState("")
    const [showConverter, setShowConverter] = useState(false)
  
    useEffect(() => {
      calculateRoi()
    }, [investmentAmount, returnAmount, timePeriod])
  
    const calculateRoi = () => {
      const investment = Number.parseFloat(investmentAmount) || 0
      const returns = Number.parseFloat(returnAmount) || 0
      const years = Number.parseFloat(timePeriod) || 1
  
      if (investment > 0 && returns > 0 && years > 0) {
        // Calculate annualized ROI
        const annualizedRoi = (Math.pow(returns / investment, 1 / years) - 1) * 100
        setRoi(annualizedRoi)
        setInterpretation(annualizedRoi > 0 ? "Positive" : "Negative")
        setShowConverter(true)
      } else {
        setRoi(0)
        setInterpretation("")
        setShowConverter(false)
      }
    }
  
  return (
    <div className="min-h-screen mt-17 bg-white">
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <button onClick={() => navigate("/calculatorhub")} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <MdOutlineKeyboardDoubleArrowLeft className="w-5 h-5 mr-2" />
        <span>ROI Calculator</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Investment Details</h2>
          <p className="text-gray-600 mb-6">Enter your investment information</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount ($)</label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Return Amount ($)</label>
              <input
                type="number"
                value={returnAmount}
                onChange={(e) => setReturnAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Investment Time Period (years)</label>
              <input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                step="0.1"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-2">
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="w-full accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.5 year</span>
                  <span>5 years</span>
                  <span>10 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">ROI Summary</h2>
          <p className="text-gray-600 mb-6">Your estimated return on investment</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">{roi !== null ? roi.toFixed(2) : "0.00"}%</div>
            <div className="text-gray-600">Annualized ROI</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Investment amount:</span>
              <span className="font-medium">${Number(investmentAmount).toLocaleString()}</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Return amount:</span>
              <span className="font-medium">${Number(returnAmount).toLocaleString()}</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Time period:</span>
              <span className="font-medium">{timePeriod} years</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Interpretation:</span>
              <span
                className={`font-medium ${roi > 0 ? "text-green-600" : roi < 0 ? "text-red-600" : "text-gray-600"}`}
              >
                {interpretation || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showConverter && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <CurrencyConverter amount={Number(returnAmount) - Number(investmentAmount)} fromCurrency="USD" />
        </div>
      )}
    </div>
  </div>
  )
}

export default RoiCalculator