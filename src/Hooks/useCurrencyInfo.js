
import { useState, useEffect } from 'react';

const useCurrencyinfo = (from) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    // Replace with actual API call or logic to fetch currency info
    const fetchCurrencyInfo = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setCurrencyInfo(data.rates);
    };

    fetchCurrencyInfo();
  }, [from]);

  return currencyInfo;
};

export default useCurrencyinfo;