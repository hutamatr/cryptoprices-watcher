import React from "react";

import TableBody from "./TableBody";

const Table = ({ itemsList }) => {
  return (
    <div className="mx-auto my-8 max-w-screen-lg overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Price (IDR)</th>
            <th>24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map((item) => {
            return <TableBody item={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
