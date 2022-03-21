function findMaxOrMin(array, isMin) {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (isMin) {
      if (array[i] > result) result = array[i];
    } else {
      if (array[i] < result) result = array[i];
    }
  }
  return result;
}

console.log(findMaxOrMin([1, 2, 0, 3, 4, 1, 2, 3, 6, 29, 32, 52, 12, 1, 1, 2, 3], true));
