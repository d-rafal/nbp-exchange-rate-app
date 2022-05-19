import useCurrenciesExchangeRateProvider from "./hooks/useCurrenciesExchangeRateProvider";
import ErrorIndicator from "./components/error-indicator";

import LoadingIndicator from "./components/loading-indicator";
import TableCurrencyExchangeRate from "./components/table-currency-exchange-rate";

function App() {
  const {
    currenciesExchangeRateFromApi,
    actionStatus: fetchingDataActionStatus,
  } = useCurrenciesExchangeRateProvider();

  if (fetchingDataActionStatus === "FAILED") {
    return <ErrorIndicator />;
  } else if (fetchingDataActionStatus === "PROCESSING") {
    return <LoadingIndicator />;
  } else {
    return (
      <TableCurrencyExchangeRate
        currenciesExchangeRateFromApi={currenciesExchangeRateFromApi}
      />
    );
  }
}

export default App;
