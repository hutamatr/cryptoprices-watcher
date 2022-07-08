import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "../ui/Table";

const CoinData = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    try {
      const requestDataCoin = async () => {
        const response = await axios({
          method: "get",
          url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=20&page=1&page=1",
        });
        if (response.status !== 200) {
          throw new Error("Failed get data");
        }
        const data = await response.data;
        setCoinData(data);
      };
      requestDataCoin();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, []);

  return <Table itemsList={coinData} />;
};

export default CoinData;
