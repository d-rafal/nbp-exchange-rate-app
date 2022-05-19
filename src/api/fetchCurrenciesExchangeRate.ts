import { tryConvertReceivedDataToObject } from "./tryConvertReceivedDataToObject";

export const fetchCurrenciesExchangeRate = async () => {
  try {
    const res = await fetch("https://www.nbp.pl/kursy/xml/a095z220518.xml", {
      headers: {
        Accept: "text/xml",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("text/xml")) {
      throw new Error(`Response not in text/xml format!`);
    }

    const buffer = await res.arrayBuffer();

    const decoder = new TextDecoder("iso-8859-2");
    const data = decoder.decode(buffer);

    const receivedDataConvertedToObject = tryConvertReceivedDataToObject(data);

    return receivedDataConvertedToObject;
  } catch (error) {
    return Promise.reject(error);
  }
};
