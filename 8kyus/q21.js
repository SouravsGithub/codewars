// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  return array.length > 0
    ? array.reduce((acc, item) => (acc += item)) / array.length
    : 0;
}
