import { useMemo } from "react";
import { LOCALE } from "../../../@types-and-const/@common";

import { Currency } from "../../../@types-and-const/@currency-exchange-rate";
import { SortQueryInURL } from "../../../@types-and-const/@url-queries/@sort";

const useSortCurrencies = (
  currencies: Currency[] | undefined,
  sortingOrder: SortQueryInURL | null
) => {
  const sortedCurrencies = useMemo(() => {
    const sortedCurrencies = currencies ? [...currencies] : [];

    switch (sortingOrder) {
      case "name-asc":
        sortedCurrencies.sort((a, b) =>
          a.name
            .toLocaleLowerCase(LOCALE)
            .localeCompare(b.name.toLocaleLowerCase(LOCALE), LOCALE)
        );
        break;
      case "name-desc":
        sortedCurrencies.sort((a, b) =>
          b.name
            .toLocaleLowerCase(LOCALE)
            .localeCompare(a.name.toLocaleLowerCase(LOCALE), LOCALE, {})
        );
        break;
      case "rate-asc":
        sortedCurrencies.sort(
          (a, b) => a.averageExchangeRate - b.averageExchangeRate
        );
        break;
      case "rate-desc":
        sortedCurrencies.sort(
          (a, b) => b.averageExchangeRate - a.averageExchangeRate
        );
        break;
      default:
        break;
    }

    return sortedCurrencies;
  }, [sortingOrder, currencies]);

  return sortedCurrencies;
};

export default useSortCurrencies;
