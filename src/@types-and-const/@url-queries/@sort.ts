type CurrencyAsc = "name-asc";
type CurrencyDesc = "name-desc";
type RateAsc = "rate-asc";
type RateDesc = "rate-desc";

const CURRENCY_ASC: CurrencyAsc = "name-asc";
const CURRENCY_DESC: CurrencyDesc = "name-desc";
const RATE_ASC: RateAsc = "rate-asc";
const RATE_DESC: RateDesc = "rate-desc";

// !!!!! adequate changes must also be made in "isValidSortQueryInURL" type predicate function !!!!!
export type SortQueryInURL = CurrencyAsc | CurrencyDesc | RateAsc | RateDesc;

export function isValidSortQueryInURL(
  sortQuery: any
): sortQuery is SortQueryInURL {
  if (!sortQuery || typeof sortQuery !== "string") {
    return false;
  }

  return (
    sortQuery === CURRENCY_ASC ||
    sortQuery === CURRENCY_DESC ||
    sortQuery === RATE_ASC ||
    sortQuery === RATE_DESC
  );
}

export type SortQueryInUrlByCurrency = Extract<
  SortQueryInURL,
  CurrencyAsc | CurrencyDesc
>;

export type SortQueryInUrlByRate = Extract<SortQueryInURL, RateAsc | RateDesc>;

export type SortQueryInUrlKayName = "sort";
export const SORT_QUERY_IN_URL_KEY_NAME: SortQueryInUrlKayName = "sort";
