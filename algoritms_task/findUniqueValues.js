const arrays = [[1, 32, 23, 2], [12321, 1, 213], [13123, 1, 2], [23, 1, 23, 2], [5, 1, 23, 23], [41, 1, 23, 23]]

const findUniqueValuesNative = (array1, array2, ...nextArray) => {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    let found = false;
    for (let j = 0; j < array2.length && !found; j++) {
      found = array1[i] === array2[j];
    }
    if (found === true) {
      result.push(array1[i]);
    }
  }
  const firstArray = nextArray.shift();
  if (firstArray) {
    return findUniqueValuesNative(result, firstArray, ...nextArray);
  }
  return result;
};

const findUniqueValues = (...arrays) => {
  const result = arrays[0].filter((element) => {
    if (arrays[1].indexOf(element) !== -1) {
      return element
    }
  });
  if (arrays.length > 2) {
    findUniqueValues(result, ...arrays.slice(2, arrays.length));
  }
  return result;
}

console.log(findUniqueValuesNative(...arrays));
console.log(findUniqueValues(...arrays));
