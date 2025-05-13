import React, { useState, useEffect } from 'react';


const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  
  // Fetching the available currencies on component mount
  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[toCurrency]);
      });
  }, []);

  // Fetching the exchange rate whenever 'fromCurrency' or 'toCurrency' changes
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
          setExchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Currency Converter</h2>
      
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="w-1/2 mr-2">
          <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700">From Currency</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>

        <button
          onClick={swapCurrencies}
          className="ml-2 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          ↔️
        </button>

        <div className="w-1/2 ml-2">
          <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700">To Currency</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 text-center">
        {exchangeRate ? (
          <p className="text-lg font-medium">
            {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
          </p>
        ) : (
          <p>Loading exchange rate...</p>
        )}
      </div>
    </div>
  )
}

export default CurrencyConverter