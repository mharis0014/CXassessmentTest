// Q#3: Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.

function twoLargestNumsSum(arr) {
  if (arr.length < 2) {
    console.log("enter atleast 2 elements");
    return null;
  }

  let largest1 = arr[0];
  let largest2 = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest1) {
      largest2 = largest1;
      largest1 = arr[i];
    } else if (arr[i] > largest2) {
      largest2 = arr[i];
    }
  }
  const sum = largest1 + largest2;
  return sum;
}

const arr = [3, 7, 1, 5, 11, 19];

const sumOfTwoLargestNumbers = twoLargestNumsSum(arr);

console.log(sumOfTwoLargestNumbers);
