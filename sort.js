
const arr = [2, 4, 1, 10, 5, 8, 1, 3, 7,- 4];

const sort = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        callback(i, j);
      }
    }
  }

  return arr;
};

console.log(sort(arr, (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])));
