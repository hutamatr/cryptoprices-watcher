import React, { useEffect, useState } from "react";

import CoinTable from "../components/coinTable/CoinTable";
import useHttp from "../hooks/use-http";
import Error from "../components/ui/Error";

const CoinData = () => {
  const [coinData, setCoinData] = useState([]);

  const {
    requestData: requestCoinData,
    error: errorCoinData,
    isLoadingNow: isLoadingCoinData,
  } = useHttp();

  useEffect(() => {
    const coinDataFunc = (coins) => {
      setCoinData(coins);
    };
    requestCoinData(
      {
        method: "get",
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
      },
      coinDataFunc
    );
  }, [requestCoinData]);

  return (
    <section className="min-h-[80vh]">
      <h1
        className="my-8 px-4 text-center text-2xl font-semibold md:text-3xl"
        id="coin-data"
      >
        Cryptocurrency Prices by Market Cap
      </h1>
      {errorCoinData.isError ? (
        <Error message={errorCoinData.message} />
      ) : (
        <CoinTable itemsList={coinData} onLoading={isLoadingCoinData} />
      )}
    </section>
  );
};

export default CoinData;
