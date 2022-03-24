const arrays = [[1, 32, 23, 2], [12321, 1, 213], [13123, 1, 2], [23, 1, 23, 2], [5, 1, 23, 23], [41, 1, 23, 23]]

const findUniqueValuesNative = (...arrays) => {
  const result = [];
  for (let i = 0; i < arrays[0].length; i++) {
    for (let j = 0; j < arrays[1].length; j++) {
      if (arrays[0][i] === arrays[1][j]) {
        result.push(arrays[0][i]);
        break;
      }
    }
  }
  if (arrays.length > 2) {
    return findUniqueValuesNative(result, ...arrays.slice(2, arrays.length));
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
