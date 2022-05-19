import { CurrenciesExchangeRateFromApi } from "../@types-and-const/@currency-exchange-rate";
import tryConvertToFiniteNumber from "../utilities/tryConvertToFiniteNumber";

const DATA_STRUCTURE_ERROR_MESSAGE = "wrong received data structure";

export const tryConvertReceivedDataToObject = (
  data: string
): never | CurrenciesExchangeRateFromApi => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/xml");

  const receivedDataConvertedToObject: CurrenciesExchangeRateFromApi = {
    tableNr: "",
    publicationDate: "",
    currencies: [],
  };

  const tableNr = doc.getElementsByTagName("numer_tabeli")[0].textContent;
  const publicationDate =
    doc.getElementsByTagName("data_publikacji")[0].textContent;

  if (tableNr !== null && publicationDate !== null) {
    receivedDataConvertedToObject.tableNr = tableNr;
    receivedDataConvertedToObject.publicationDate = publicationDate;
  } else {
    throw new Error(DATA_STRUCTURE_ERROR_MESSAGE);
  }

  const currencies = doc.getElementsByTagName("pozycja");

  for (let index = 0; index < currencies.length; index++) {
    const currency = currencies[index];

    const name = currency.getElementsByTagName("nazwa_waluty")[0].textContent;
    const code = currency.getElementsByTagName("kod_waluty")[0].textContent;
    const ratio = currency.getElementsByTagName("przelicznik")[0].textContent;
    const averageExchangeRate = tryConvertToFiniteNumber(
      currency
        .getElementsByTagName("kurs_sredni")[0]
        .textContent?.replace(",", "."),
      true
    );

    if (
      name !== null &&
      code !== null &&
      ratio !== null &&
      averageExchangeRate !== null
    ) {
      receivedDataConvertedToObject.currencies.push({
        name,
        code,
        ratio,
        averageExchangeRate,
      });
    } else {
      throw new Error(DATA_STRUCTURE_ERROR_MESSAGE);
    }
  }

  return receivedDataConvertedToObject;
};
