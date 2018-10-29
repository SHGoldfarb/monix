export const classNames = (...args) => args.join(' ');

export const roundDec = nDec => number => Math.round(number * (10 ** nDec)) / (10 ** nDec);

export const numberWithPoints = (number) => {
  const numberString = number.toString();
  let wholePart = numberString.split('.')[0];
  const decimalPart = numberString.split('.')[1];
  let ret = '';
  while (wholePart) {
    if (ret) {
      ret = `.${ret}`;
    }
    ret = wholePart.slice(-3) + ret;
    wholePart = wholePart.slice(0, -3);
  }
  return `${ret}${decimalPart ? `,${decimalPart}` : ''}`;
};

export const prettyNumber = number => numberWithPoints(roundDec(2)(number));
