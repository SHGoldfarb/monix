export const classNames = (...args) => args.join(' ');

export const round4Dec = number => Math.round(number * 10000) / 10000;

export const prettyNumber = (number) => {
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

export const pretty4DecNumber = number => prettyNumber(round4Dec(number));
