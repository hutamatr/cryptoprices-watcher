import React from "react";

import CoinTableBody from "./CoinTableBody";

const CoinTable = ({ itemsList, onLoading }) => {
  return (
    <div class="mockup-window mx-4 my-6 max-w-full border border-base-300 shadow-md">
      <div className="mx-auto my-8 max-w-screen-xl overflow-x-auto">
        {onLoading.isLoading ? (
          <p className="text-center text-xl font-medium">{onLoading.text}</p>
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
              {itemsList.map((item) => {
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
