import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  isValidSortQueryInURL,
  SortQueryInURL,
  SortQueryInUrlByCurrency,
  SortQueryInUrlByRate,
  SortQueryInUrlKayName,
  SORT_QUERY_IN_URL_KEY_NAME,
} from "../../../@types-and-const/@url-queries/@sort";
import { setQueryInURL } from "../../../utilities/setQueryInURL";

const useSortingOrderProvider = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortQueryInURL = searchParams.get(SORT_QUERY_IN_URL_KEY_NAME);
  let sortingOrder: SortQueryInURL | null = null;

  if (isValidSortQueryInURL(sortQueryInURL)) {
    sortingOrder = sortQueryInURL;
  }

  const setSortingOrderByCurrencyName = useCallback(() => {
    setQueryInURL<SortQueryInUrlKayName, SortQueryInUrlByCurrency>(
      searchParams,
      setSearchParams,
      "sort",
      sortingOrder === "name-desc" ? "name-asc" : "name-desc"
    );
  }, [sortingOrder, searchParams, setSearchParams]);

  const setSortingOrderByAverageExchangeRate = useCallback(() => {
    setQueryInURL<SortQueryInUrlKayName, SortQueryInUrlByRate>(
      searchParams,
      setSearchParams,
      "sort",
      sortingOrder === "rate-desc" ? "rate-asc" : "rate-desc"
    );
  }, [sortingOrder, searchParams, setSearchParams]);

  return [
    sortingOrder,
    setSortingOrderByCurrencyName,
    setSortingOrderByAverageExchangeRate,
  ] as const;
};

export default useSortingOrderProvider;
