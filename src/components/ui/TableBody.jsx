import React from "react";

import { formatPriceChange, formatCurrency } from "../../utils/utils";

const TableBody = ({
  item: {
    image,
    symbol,
    current_price,
    market_cap_rank,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap,
    name,
  },
}) => {
  const [formattedPriceChange1h, priceChangeColor1h] = formatPriceChange(
    price_change_percentage_1h_in_currency
  );
  const [formattedPriceChange24h, priceChangeColor24h] = formatPriceChange(
    price_change_percentage_24h_in_currency
  );
  const [formattedPriceChange7d, priceChangeColor7d] = formatPriceChange(
    price_change_percentage_7d_in_currency
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
        <span className={`font-medium ${priceChangeColor1h}`}>
          {formattedPriceChange1h}
        </span>
      </td>
      <td>
        <span className={`font-medium ${priceChangeColor24h}`}>
          {formattedPriceChange24h}
        </span>
      </td>
      <td>
        <span className={`font-medium ${priceChangeColor7d}`}>
          {formattedPriceChange7d}
        </span>
      </td>
      <td>IDR {formatCurrency(market_cap)}</td>
    </tr>
  );
};

export default TableBody;
