import { RetrieveArrayElementType } from "./@general";

export interface CurrenciesExchangeRateFromApi {
  tableNr: string;
  publicationDate: string;
  currencies: {
    name: string;
    code: string;
    ratio: string;
    averageExchangeRate: number;
  }[];
}

export type Currency = RetrieveArrayElementType<
  CurrenciesExchangeRateFromApi["currencies"]
>;
