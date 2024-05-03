// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]

function findMissingNums(arr) {
  if (arr.length === 0) {
    return [];
  }

  let highest = arr[0];

  for (let num of arr) {
    if (num > highest) {
      highest = num;
    }
  }

  const missingNums = [];

  for (let i = 0; i <= highest; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingNums.push(i);
    }
  }
  return missingNums;
}

const arr = [3, 4, 9, 1, 7, 3, 2, 6];
const missingNums = findMissingNums(arr);
console.log(missingNums);
