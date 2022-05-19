import { useEffect, useState } from "react";
import { CurrenciesExchangeRateFromApi } from "../@types-and-const/@currency-exchange-rate";
import { ActionStatus } from "../@types-and-const/@general";

import { fetchCurrenciesExchangeRate } from "../api/fetchCurrenciesExchangeRate";

const useCurrenciesExchangeRateProvider = () => {
  const [actionStatus, setActionStatus] = useState<ActionStatus>("PROCESSING");

  const [currenciesExchangeRateFromApi, setCurrenciesExchangeRateFromApi] =
    useState<CurrenciesExchangeRateFromApi | null>(null);

  useEffect(() => {
    setActionStatus("PROCESSING");

    const fetchData = async () => {
      try {
        const receivedData = await fetchCurrenciesExchangeRate();
        setCurrenciesExchangeRateFromApi(receivedData);

        setActionStatus("SUCCEEDED");
      } catch (error) {
        console.error(error);

        setActionStatus("FAILED");
      }
    };

    fetchData();
  }, []);

  return { currenciesExchangeRateFromApi, actionStatus };
};

export default useCurrenciesExchangeRateProvider;
