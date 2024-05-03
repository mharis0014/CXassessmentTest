function sortInDescendingOrder(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [3, 2, 7, 4, 6, 9];

const sortArr = sortInDescendingOrder(arr);
console.log(sortArr);
