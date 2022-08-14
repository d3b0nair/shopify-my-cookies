export const floatToUSDCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
