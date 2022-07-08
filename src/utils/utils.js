export const formatCurrency = (amount) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const formatPriceChange = (priceChange) => {
  const formattedPriceChange = (priceChange / 100).toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const priceChangeColor = priceChange > 0 ? "text-green-500" : "text-red-500";

  return [formattedPriceChange, priceChangeColor];
};
