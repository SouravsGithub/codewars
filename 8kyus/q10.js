// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((sheep) => {
    if (sheep) {
      count++;
    }
  });
  return count;
}
