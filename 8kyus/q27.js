// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  // Brute force
  //   let str = "";
  //   for (let i = 0; i < x.length; i++) {
  //     str += Number(x[i]) < 5 ? 0 : 1;
  //   }
  //   return str;
  // One liner
  return x
    .split("")
    .reduce((acc, item) => (acc += Number(item) < 5 ? 0 : 1), "");
}
