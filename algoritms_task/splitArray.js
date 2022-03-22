const array = [1, 2, 3, 2, 31, 2, 5, 8];
const count = 2;

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

console.log(splitArray(array, count));
console.log(splitArrayNative(array, count));
