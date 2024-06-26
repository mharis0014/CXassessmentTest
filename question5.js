// Q#5: Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

function findHighestRepeatedNum(arr) {
  if (arr.length === 0) {
    return null;
  }

  let highestRepeated = arr[0];
  let highestCount = 1;

  for (let i = 0; i < arr.length; i++) {
    let currCount = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currCount++;
      }
    }

    if (currCount > highestCount) {
      highestRepeated = arr[i];
      highestCount = currCount;
    }
  }

  const answer = `${highestRepeated} is repeated ${highestCount} times`;

  return answer;
}

const arr = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const result = findHighestRepeatedNum(arr);
console.log(result);
