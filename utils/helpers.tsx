import { BigNumber, BigNumberish } from "ethers";

export const currency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 8
});

export const nFormatter = (
  bn: BigNumberish,
  decimals: number,
  fixed: number
) => {
  const num = bnToFloat(bn, decimals);

  const lookup = [
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });
  return item
    ? currency.format(
        parseFloat((num / item.value).toFixed(fixed).replace(rx, "$1"))
      ) + item.symbol
    : num.toFixed(fixed);
};

export const bnToFloat = (bn: BigNumberish, decimals: number) => {
  return parseFloat(BigNumber.from(bn).toString()) / Math.pow(10, decimals);
};

export function isNumeric(str: BigNumberish) {
  if (typeof str !== "string") return false; // we only process strings!
  return (
    // @ts-ignore
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

export function isLongString(str: string, maxLength: number): boolean {
  return str.length > maxLength;
}

export function shortenString(str: string, maxLength: number): string {
  if (isLongString(str, maxLength)) {
    return `${str.slice(0, maxLength - 3)}...`;
  }
  return str;
}

export function toLowerKeys(obj: any) {
  return Object.keys(obj).reduce((accumulator: any, key: any) => {
    accumulator[key.toLowerCase()] = obj[key];
    return accumulator;
  }, {});
}
