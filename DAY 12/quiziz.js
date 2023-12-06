const number = [1, 2, 3, [11, 10, "hello", ["makan", "siomay", ["banana"]]]];

number[4] = 5;

delete number[3][1];

console.log(number[3][2]);

const returnObj = (something) => {
  hello: "udin";
};

console.log(returnObj("huhu"));

const test = () => {
  let result = 1;

  while (result < 10) {
    for (let i = 0; i < 5; i++) {
      result + 1;

      result * 5;
    }
  }

  return result;
};

console.log(test);

const penjumlahan = (arr = []) => {
  const result = arr.forEach((curr, val) => {
    return curr + val;
  });

  return result;
};

console.log(penjumlahan([1, 2, 3, 4]));

console.log(5 && 3);
