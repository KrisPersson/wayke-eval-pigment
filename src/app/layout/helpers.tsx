export const size = (multiplier = 1) => {
  const baseUnit = 8;
  return `${multiplier * baseUnit}px`;
};

export const parsePrice = (price: number) => {
  if (price < 1000) return price;

  const arr = price.toString().split("");
  const newArr = [];
  let counter = 0;

  for (let i = arr.length; i > 0; i--) {
    newArr.unshift(arr[i - 1]);
    counter++;
    if (counter === 3 && i > 1) {
      newArr.unshift(" ");
      counter = 0;
    }
  }
  return newArr.join("");
};
