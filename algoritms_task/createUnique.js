const createUniqueNative = (array1, array2, ...nextArray) => {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    const item1 = array1[i];
    let found = false;
    for (let j = 0; j < array2.length && !found; j++) {
      found = item1 === array2[j];
    }
    if (found === true) {
      result.push(item1);
    }
  }
  const firstArray = nextArray.shift();
  if (firstArray) {
    return createUniqueNative(result, firstArray, ...nextArray);
  }
  return result;
};

const createUnique = (...arrays) => {
  const result = arrays[0].filter((element) => {
    if (arrays[1].indexOf(element) !== -1) {
      return element
    }
  });
  if (arrays.length > 2) {
    createUnique(result, ...arrays.slice(2, arrays.length));
  }
  return result;
}

console.log(createUnique([1, 32, 23, 2], [12321, 1, 213], [13123, 1, 2], [23, 1, 23, 2], [5, 1, 23, 23], [41, 1, 23, 23]));
console.log(createUniqueNative([1, 32, 23, 2], [12321, 1, 213, 2], [13123, 2], [23, 1, 23, 2], [5, 1, 23, 23, 2], [41, 1, 23, 23, 2]));
