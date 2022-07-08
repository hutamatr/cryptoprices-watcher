import React from "react";

import { formatPriceChange, formatCurrency } from "../../utils/utils";

const TableBody = (props) => {
  const {
    item: {
      image,
      symbol,
      current_price,
      market_cap_rank,
      price_change_percentage_24h,
      market_cap,
      name,
    },
  } = props;

  console.log(price_change_percentage_24h);

  const [formattedPriceChange24, priceChangeColor24] = formatPriceChange(
    price_change_percentage_24h
  );
  return (
    <tr>
      <th>{market_cap_rank}</th>
      <td>
        <div className="flex max-w-xs flex-row items-center justify-start gap-x-1">
          <img src={image} alt="coin-icon" className="w-7" />
          <span className="font-semibold">{name}</span>
        </div>
      </td>
      <td></td>
      <td>
        <span className="text-sm uppercase">{symbol}</span>
      </td>
      <td></td>
      <td>IDR {formatCurrency(current_price)}</td>
      <td>
        <span className={`font-medium ${priceChangeColor24}`}>
          {formattedPriceChange24}
        </span>
      </td>
      <td>IDR {formatCurrency(market_cap)}</td>
    </tr>
  );
};

export default TableBody;
