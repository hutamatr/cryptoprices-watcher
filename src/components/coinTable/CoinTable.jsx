import React from "react";

import CoinTableBody from "./CoinTableBody";
import Loading from "../ui/Loading";

const CoinTable = ({ onLoading, onPaginationData }) => {
  return (
    <div className="mockup-window mx-4 my-6 max-w-full border border-base-300 shadow-material-shadow">
      <div className="mx-auto my-8 max-w-screen-xl overflow-x-auto">
        {onLoading.isLoading ? (
          <Loading text={onLoading.text} />
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th></th>
                <th></th>
                <th></th>
                <th>Price (IDR)</th>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {onPaginationData().map((item) => {
                return <CoinTableBody item={item} key={item.id} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CoinTable;
