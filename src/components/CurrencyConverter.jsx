// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [output, setOutput] = useState();
  useEffect(
    function () {
      async function currencyConverter() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`
          );
          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          setOutput(data.rates[targetCurrency]);
        } catch (err) {
          console.log(err.message);
        }
      }
      baseCurrency === targetCurrency ? setOutput(amount) : currencyConverter();
    },
    [amount, baseCurrency, targetCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
