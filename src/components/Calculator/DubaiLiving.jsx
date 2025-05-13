
import { useState, useEffect, useRef } from "react"
import { MdOutlineFileDownload,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { AiOutlinePlusCircle,AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import CurrencyConverter from "./CurrencyConverter"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js"
import { Pie, Bar } from "react-chartjs-2"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import "jspdf-autotable"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)


const DubaiLiving = () => {
    const navigate = useNavigate()
  const chartRef = useRef(null)
  const reportRef = useRef(null)

  const [monthlyIncome, setMonthlyIncome] = useState("15000")
  const [monthlyRent, setMonthlyRent] = useState("5000")
  const [utilityBills, setUtilityBills] = useState("1000")
  const [transportation, setTransportation] = useState("800")
  const [foodGroceries, setFoodGroceries] = useState("2000")

  const [customCategories, setCustomCategories] = useState([])
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryAmount, setNewCategoryAmount] = useState("")

  const [incomeCategories, setIncomeCategories] = useState([
    { name: "Salary", amount: "15000" },
    { name: "Bonus", amount: "0" },
    { name: "Investments", amount: "0" },
    { name: "Other", amount: "0" },
  ])

  const [totalExpenses, setTotalExpenses] = useState(null)
  const [totalIncome, setTotalIncome] = useState(null)
  const [monthlySavings, setMonthlySavings] = useState(null)
  const [savingsPercentage, setSavingsPercentage] = useState(null)
  const [showConverter, setShowConverter] = useState(false)

  const [chartType, setChartType] = useState("pie")

  const [plannedExpenses, setPlannedExpenses] = useState("9000")
  const [startBalance, setStartBalance] = useState("10000")
  const [endBalance, setEndBalance] = useState(null)
  const [savingsIncrease, setSavingsIncrease] = useState(null)

  useEffect(() => {
    calculateExpenses()
  }, [monthlyIncome, monthlyRent, utilityBills, transportation, foodGroceries, customCategories, incomeCategories])

  const calculateExpenses = () => {
    const rent = Number.parseFloat(monthlyRent) || 0
    const utilities = Number.parseFloat(utilityBills) || 0
    const transport = Number.parseFloat(transportation) || 0
    const food = Number.parseFloat(foodGroceries) || 0

    const customExpensesTotal = customCategories.reduce((total, category) => {
      return total + (Number.parseFloat(category.amount) || 0)
    }, 0)

    const totalIncomeValue = incomeCategories.reduce((total, category) => {
      return total + (Number.parseFloat(category.amount) || 0)
    }, 0)

    const expenses = rent + utilities + transport + food + customExpensesTotal
    const savings = totalIncomeValue - expenses
    const percentage = totalIncomeValue > 0 ? (savings / totalIncomeValue) * 100 : 0

    const endBalanceValue = Number.parseFloat(startBalance) + savings
    const savingsIncreaseValue =
      endBalanceValue > 0 && Number.parseFloat(startBalance) > 0
        ? ((endBalanceValue - Number.parseFloat(startBalance)) / Number.parseFloat(startBalance)) * 100
        : 0

    setTotalExpenses(expenses)
    setTotalIncome(totalIncomeValue)
    setMonthlySavings(savings)
    setSavingsPercentage(percentage)
    setEndBalance(endBalanceValue)
    setSavingsIncrease(savingsIncreaseValue)
    setShowConverter(expenses > 0)
  }

  const addCustomCategory = () => {
    if (newCategoryName && newCategoryAmount) {
      setCustomCategories([...customCategories, { name: newCategoryName, amount: newCategoryAmount }])
      setNewCategoryName("")
      setNewCategoryAmount("")
    }
  }

  const removeCustomCategory = (index) => {
    const updatedCategories = [...customCategories]
    updatedCategories.splice(index, 1)
    setCustomCategories(updatedCategories)
  }

  const updateIncomeCategory = (index, amount) => {
    const updatedCategories = [...incomeCategories]
    updatedCategories[index].amount = amount
    setIncomeCategories(updatedCategories)
  }

  const expenseChartData = {
    labels: ["Rent", "Utilities", "Transportation", "Food & Groceries", ...customCategories.map((cat) => cat.name)],
    datasets: [
      {
        label: "Expenses (AED)",
        data: [
          Number.parseFloat(monthlyRent) || 0,
          Number.parseFloat(utilityBills) || 0,
          Number.parseFloat(transportation) || 0,
          Number.parseFloat(foodGroceries) || 0,
          ...customCategories.map((cat) => Number.parseFloat(cat.amount) || 0),
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(199, 199, 199, 0.8)",
          "rgba(83, 102, 255, 0.8)",
          "rgba(78, 129, 189, 0.8)",
          "rgba(192, 80, 77, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
          "rgba(83, 102, 255, 1)",
          "rgba(78, 129, 189, 1)",
          "rgba(192, 80, 77, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const balanceChartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Amount (AED)",
        data: [totalIncome || 0, totalExpenses || 0],
        backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  }

  const plannedVsActualData = {
    labels: ["Expenses"],
    datasets: [
      {
        label: "Planned",
        data: [plannedExpenses],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [totalExpenses || 0],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: chartType === "pie" ? "Expense Breakdown" : "Income vs Expenses",
      },
    },
  }

  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a")
        link.download = "dubai-living-expenses-chart.png"
        link.href = canvas.toDataURL("image/png")
        link.click()
      })
    }
  }

  const downloadReport = () => {
    const pdf = new jsPDF("p", "mm", "a4")
    const pageWidth = pdf.internal.pageSize.getWidth()
    const margin = 10
    let yPosition = 20

    pdf.setFontSize(18)
    pdf.text("Dubai Living Costs Report", margin, yPosition)
    yPosition += 10

    pdf.setFontSize(10)
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, yPosition)
    yPosition += 15

    pdf.setFontSize(14)
    pdf.text("Summary", margin, yPosition)
    yPosition += 8

    pdf.setFontSize(10)
    pdf.text(`Total Monthly Income: ${totalIncome ? totalIncome.toLocaleString() : "0"} AED`, margin, yPosition)
    yPosition += 6

    pdf.text(`Total Monthly Expenses: ${totalExpenses ? totalExpenses.toLocaleString() : "0"} AED`, margin, yPosition)
    yPosition += 6

    pdf.text(`Monthly Savings: ${monthlySavings ? monthlySavings.toLocaleString() : "0"} AED`, margin, yPosition)
    yPosition += 6

    pdf.text(`Savings Percentage: ${savingsPercentage ? savingsPercentage.toFixed(1) : "0"}%`, margin, yPosition)
    yPosition += 15

    pdf.setFontSize(14)
    pdf.text("Expense Breakdown", margin, yPosition)
    yPosition += 10

    const expenseData = [
      ["Category", "Amount (AED)", "Percentage"],
      ["Rent", monthlyRent, totalExpenses ? ((Number(monthlyRent) / totalExpenses) * 100).toFixed(1) + "%" : "0%"],
      [
        "Utilities",
        utilityBills,
        totalExpenses ? ((Number(utilityBills) / totalExpenses) * 100).toFixed(1) + "%" : "0%",
      ],
      [
        "Transportation",
        transportation,
        totalExpenses ? ((Number(transportation) / totalExpenses) * 100).toFixed(1) + "%" : "0%",
      ],
      [
        "Food & Groceries",
        foodGroceries,
        totalExpenses ? ((Number(foodGroceries) / totalExpenses) * 100).toFixed(1) + "%" : "0%",
      ],
    ]

    customCategories.forEach((category) => {
      expenseData.push([
        category.name,
        category.amount,
        totalExpenses ? ((Number(category.amount) / totalExpenses) * 100).toFixed(1) + "%" : "0%",
      ])
    })

    pdf.autoTable({
      startY: yPosition,
      head: [expenseData[0]],
      body: expenseData.slice(1),
      margin: { top: 10, right: margin, bottom: 10, left: margin },
      theme: "grid",
    })

    yPosition = pdf.lastAutoTable.finalY + 15

    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const imgWidth = pageWidth - margin * 2
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        if (yPosition + imgHeight > pdf.internal.pageSize.getHeight() - margin) {
          pdf.addPage()
          yPosition = 20
        }

        pdf.text("Expense Visualization", margin, yPosition)
        yPosition += 5
        pdf.addImage(imgData, "PNG", margin, yPosition, imgWidth, imgHeight)
        yPosition += imgHeight + 15

        pdf.setFontSize(14)

        if (yPosition + 40 > pdf.internal.pageSize.getHeight() - margin) {
          pdf.addPage()
          yPosition = 20
        }

        pdf.text("Currency Conversion", margin, yPosition)
        yPosition += 8

        pdf.setFontSize(10)
        pdf.text(`${totalExpenses ? totalExpenses.toLocaleString() : "0"} AED is approximately:`, margin, yPosition)
        yPosition += 6

        const rates = {
          USD: 0.27,
          EUR: 0.25,
          GBP: 0.22,
          INR: 22.65,
        }

        Object.entries(rates).forEach(([currency, rate]) => {
          const converted = (totalExpenses || 0) * rate
          pdf.text(
            `${converted.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${currency}`,
            margin,
            yPosition,
          )
          yPosition += 6
        })

        pdf.save("dubai-living-costs-report.pdf")
      })
    } else {
      pdf.save("dubai-living-costs-report.pdf")
    }
  }
  return (
    <div className="relative bg-gray-950 w-full mt-17 min-h-screen">
    <div className="absolute inset-0">
      <div className="w-full h-full bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center opacity-30" />
    </div>
    
      <div className="container relative z-10 mx-auto px-4 py-6 max-w-6xl" ref={reportRef}>
        <button onClick={() => navigate("/calculatorhub")} className="flex items-center text-amber-300 hover:text-gray-900 mb-6">
          <MdOutlineKeyboardDoubleArrowLeft className="w-5 h-5 mr-2" />
          <span>Dubai Living Costs Calculator</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Living Costs Details</h2>
            <p className="text-gray-600 mb-6">Enter your monthly expenses in Dubai</p>

            <div className="space-y-4">
              {}
              <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-800 mb-3">Income</h3>

                {incomeCategories.map((category, index) => (
                  <div key={`income-${index}`} className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{category.name} (AED)</label>
                    <input
                      type="number"
                      value={category.amount}
                      onChange={(e) => updateIncomeCategory(index, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>

              {}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Expenses</h3>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent (AED)</label>
                  <input
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Utility Bills (AED)</label>
                  <input
                    type="number"
                    value={utilityBills}
                    onChange={(e) => setUtilityBills(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transportation (AED)</label>
                  <input
                    type="number"
                    value={transportation}
                    onChange={(e) => setTransportation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Food & Groceries (AED)</label>
                  <input
                    type="number"
                    value={foodGroceries}
                    onChange={(e) => setFoodGroceries(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {}
                {customCategories.map((category, index) => (
                  <div key={`custom-${index}`} className="mb-3 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{category.name} (AED)</label>
                    <div className="flex">
                      <input
                        type="number"
                        value={category.amount}
                        onChange={(e) => {
                          const updatedCategories = [...customCategories]
                          updatedCategories[index].amount = e.target.value
                          setCustomCategories(updatedCategories)
                        }}
                        className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => removeCustomCategory(index)}
                        className="bg-red-500 text-white px-3 rounded-r-md hover:bg-red-600"
                      >
                        <IoClose size={16} />
                      </button>
                    </div>
                  </div>
                ))}

                {}
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Add Custom Category</h4>
                  <div className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="Category Name"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      value={newCategoryAmount}
                      onChange={(e) => setNewCategoryAmount(e.target.value)}
                      className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={addCustomCategory}
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                  >
                    <AiOutlinePlusCircle size={16} className="mr-1" /> Add Category
                  </button>
                </div>
              </div>

              {}
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium text-gray-800 mb-3">Budget Planning</h3>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Planned Expenses (AED)</label>
                  <input
                    type="number"
                    value={plannedExpenses}
                    onChange={(e) => setPlannedExpenses(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Starting Balance (AED)</label>
                  <input
                    type="number"
                    value={startBalance}
                    onChange={(e) => setStartBalance(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Expenses Summary</h2>
            <p className="text-gray-600 mb-6">Your estimated monthly expenses in Dubai</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {totalExpenses !== null ? totalExpenses.toLocaleString() : "0"} AED
              </div>
              <div className="text-gray-600">Total Monthly Expenses</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-lg font-bold text-green-600">
                  {monthlySavings !== null && monthlySavings >= 0 ? monthlySavings.toLocaleString() : "0"} AED
                </div>
                <div className="text-sm text-green-600">Monthly savings</div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                <div className="text-lg font-bold text-blue-600">
                  {savingsPercentage !== null ? savingsPercentage.toFixed(1) : "0"}%
                </div>
                <div className="text-sm text-blue-600">Percentage saved</div>
              </div>
            </div>

            {}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Start Balance:</span>
                <span>{Number(startBalance).toLocaleString()} AED</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">End Balance:</span>
                <span className="text-green-600 font-medium">
                  {endBalance !== null ? endBalance.toLocaleString() : "0"} AED
                </span>
              </div>
              {savingsIncrease > 0 && (
                <div className="mt-2 text-center bg-green-100 p-2 rounded-md">
                  <span className="text-green-700 font-medium">+{savingsIncrease.toFixed(1)}%</span>
                  <div className="text-xs text-green-600">Increase in total savings</div>
                </div>
              )}
            </div>

            <h3 className="font-medium text-gray-800 mb-3">Expense Breakdown</h3>
            <div className="space-y-3 mb-6">
              {totalExpenses > 0 && (
                <>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Rent:</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(Number(monthlyRent) / totalExpenses) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium ml-2 w-16 text-right">
                      {Math.round((Number(monthlyRent) / totalExpenses) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Utilities:</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(Number(utilityBills) / totalExpenses) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium ml-2 w-16 text-right">
                      {Math.round((Number(utilityBills) / totalExpenses) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Transport:</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(Number(transportation) / totalExpenses) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium ml-2 w-16 text-right">
                      {Math.round((Number(transportation) / totalExpenses) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Food:</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(Number(foodGroceries) / totalExpenses) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium ml-2 w-16 text-right">
                      {Math.round((Number(foodGroceries) / totalExpenses) * 100)}%
                    </span>
                  </div>

                  {}
                  {customCategories.map((category, index) => (
                    <div key={`progress-${index}`} className="flex items-center">
                      <span className="text-sm text-gray-600 w-24 truncate">{category.name}:</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${(Number(category.amount) / totalExpenses) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium ml-2 w-16 text-right">
                        {Math.round((Number(category.amount) / totalExpenses) * 100)}%
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>

            {}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800">Visualization</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setChartType("pie")}
                  className={`p-2 rounded-md ${chartType === "pie" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}
                >
                  <AiOutlinePieChart size={16} />
                </button>
                <button
                  onClick={() => setChartType("bar")}
                  className={`p-2 rounded-md ${chartType === "bar" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}
                >
                  <AiOutlineBarChart size={16} />
                </button>
                <button
                  onClick={downloadChart}
                  className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
                  title="Download Chart"
                >
                  <MdOutlineFileDownload size={16} />
                </button>
              </div>
            </div>

            {}
            <div className="h-64 mb-6" ref={chartRef}>
              {chartType === "pie" ? (
                <Pie data={expenseChartData} options={chartOptions} />
              ) : chartType === "bar" ? (
                <Bar data={balanceChartData} options={chartOptions} />
              ) : null}
            </div>

            {}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">Planned vs Actual</h3>
              <div className="h-40">
                <Bar
                  data={plannedVsActualData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      title: {
                        display: true,
                        text: "Expenses Comparison",
                      },
                    },
                  }}
                />
              </div>
            </div>

            {}
            <button
              onClick={downloadReport}
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <MdOutlineFileDownload size={16} className="mr-2" /> Download Full Report
            </button>
          </div>
        </div>

        {showConverter && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <CurrencyConverter amount={totalExpenses || 0} fromCurrency="AED" />
          </div>
        )}
      </div>
    </div>

  )
}

export default DubaiLiving