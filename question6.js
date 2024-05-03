// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1
// time and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

function rotateRight(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const lastNum = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 1; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastNum;

  return arr;
}

const arr = [3, 8, 9, 7, 6];

const rotatedArr = rotateRight(arr);
console.log(rotatedArr);
