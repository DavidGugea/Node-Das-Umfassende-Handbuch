const array = [2, 3, 9, 8, 4, 1, 5, 6, 7];

const result = array
    .filter(element => element % 2 === 0)
    .map(element => element * element);

console.log(result);