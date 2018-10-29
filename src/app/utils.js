export const classNames = (...args) => args.join(' ');

export const roundTwoDec = number => Math.round(number * 100) / 100;

export const prettyNumber = (number) => {
  const numberString = number.toString();
  let wholePart = numberString.split('.')[0];
  let ret = '';
  while (wholePart) {
    if (ret) {
      ret = `.${ret}`;
    }
    ret = wholePart.slice(-3) + ret;
    wholePart = wholePart.slice(0, -3);
  }
  return `${wholePart}${ret}`;
};

export const prettyTwoDecNumber = number => prettyNumber(roundTwoDec(number));
