// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    if (item >= 0) {
      sum += item;
    }
  });
  return sum;
}
