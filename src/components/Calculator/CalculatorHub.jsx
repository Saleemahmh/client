import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoIosCalculator } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
const calculators = [
    {
      id: "dubai",
      title: "Dubai Living Cost Estimator",
      description: "Plan your move or long-term stay in Dubai with confidence. This calculator provides a detailed breakdown of expected monthly expenses, including housing, utilities, transportation, and lifestyle costs, helping you budget accurately.",
      icon: <FaBuilding className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      to: "/dubai-living-calculator",
    },
    {
      id: "roi",
      title: "ROI Analyzer",
      description: "Evaluate the profitability of your investments with precision. Use this tool to calculate your Return on Investment (ROI), understand performance metrics, and make informed decisions to maximize your business or personal investment growth.",
      icon: <IoIosCalculator className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      to: "/roi-calculator",
    },
    {
      id: "loan",
      title: "Loan Repayment Planner",
      description: "Understand your borrowing costs clearly. This calculator helps you estimate monthly payments, total interest paid, and loan timelines, enabling you to manage loans more effectively and make smarter financing choices.",
      icon: <IoHome className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      to: "/loan-calculator",
    },
  ];
const CalculatorHub = () => {
    const navigate = useNavigate();
  return (
    <div className="relative bg-gray-950 w-full min-h-screen">
    <div className="absolute inset-0">
      <div className="w-full h-full bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center opacity-30" />
    </div>
    <div className="container relative z-20 mx-auto px-4 py-8 max-w-3xl font-amarante text-indigo-900">
      <h1 className="text-3xl font-bold mt-15 text-center mb-2 bg-gradient-to-r from-yellow-700 via-amber-200 to-yellow-300 bg-clip-text text-transparent">Financial Calculator Hub</h1>
      <p className="text-center text-amber-600 mb-12">Select from our expert-designed tools to make smarter, data-driven financial decisions.</p>

      <div className="space-y-6">
        {calculators.map((calculator) => (
          <div key={calculator.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className={`${calculator.iconBg} rounded-full p-3 mr-4`}>
                {calculator.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{calculator.title}</h2>
                <p className="text-gray-600">{calculator.description}</p>
              </div>
            </div>
            <button
              onClick={() => navigate(calculator.to)}
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Open Calculator
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default CalculatorHub