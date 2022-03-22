const splitArrayNative = (array, count) => {
  let resultArrays = [];
  let addedArray = [];
  for (let i = 0; i < array.length; i++) {
    addedArray.push(array[i]);
    if ((i + 1) % count === 0) {
      resultArrays.push(addedArray)
      addedArray = [];
    }
  }
  return addedArray.length ? [...resultArrays, addedArray] : resultArrays;
}

const splitArray = (array, count) => {
  const resultArrays = []
  for (let i = 0; i < array.length; i += count) {
    resultArrays.push(array.slice(i, i + count));
  }
  return resultArrays;
}

const result = splitArray([1, 2, 3, 2, 31, 2, 5, 8], 2);
const resultN = splitArrayNative([1, 2, 3, 2, 31, 2, 5, 8], 2);

console.log(resultN);
console.log(result);
