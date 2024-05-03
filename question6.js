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
