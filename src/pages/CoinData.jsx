import React, { Fragment, useEffect, useState } from "react";

import Table from "../components/ui/Table";
import useHttp from "../hooks/use-http";
import Error from "../components/ui/Error";

const CoinData = () => {
  const [coinData, setCoinData] = useState([]);

  const { requestData, error, isLoadingNow } = useHttp();

  useEffect(() => {
    const coinDataFunc = (coins) => {
      setCoinData(coins);
    };
    requestData(coinDataFunc);
  }, [requestData]);

  return (
    <Fragment>
      {error.isError ? (
        <Error message={error.message} />
      ) : (
        <Fragment>
          <h1 className="my-8 px-4 text-center text-2xl font-semibold lg:text-3xl">
            Cryptocurrency Prices by Market Cap
          </h1>
          <Table itemsList={coinData} onLoading={isLoadingNow} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default CoinData;
