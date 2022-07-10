import React, { useState, useCallback } from "react";
import axios from "axios";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";

const useHttp = () => {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const [isLoadingNow, setIsLoadingNow] = useState({
    isLoading: false,
    text: "",
  });

  const requestData = useCallback(async (requestDataFunc) => {
    setIsLoadingNow({
      isLoading: true,
      text: "Loading data...",
    });
    try {
      const response = await axios({
        method: "get",
        url: BASE_URL,
      });

      if (response.status !== 200) {
        throw new Error("Failed get data");
      }

      const data = response.data;

      requestDataFunc(data);
    } catch (error) {
      if (error instanceof Error) {
        setError({
          isError: true,
          message: error.message,
        });
      }
    }
    setIsLoadingNow({
      isLoading: false,
      text: "",
    });
  }, []);

  return {
    requestData,
    error,
    isLoadingNow,
  };
};

export default useHttp;
