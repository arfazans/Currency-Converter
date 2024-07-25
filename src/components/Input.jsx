import React from 'react'

const Input = ({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) => {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label> {label} </label>
                <input
                 
             type="number"
                   value={amount}
                   onChange={(e) => onAmountChange(parseFloat(e.target.value))}
                   disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    value={selectCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option.toUpperCase()}
                      </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;