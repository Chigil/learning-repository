function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return array[i];
  }
  return undefined;
}

console.log(find([1, 2, 3, 3, 2, 3, 1, 2, 6, 4, 2], 0));
