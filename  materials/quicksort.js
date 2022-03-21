function quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  const index = Math.floor(Math.random() * array.length);
  const currentItem = array[index];
  const more = [];
  const less = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }

    if (array[i] > currentItem) {
      more.push(array[i]);
    } else {
      less.push(array[i]);
    }
  }

  return [...quicksort(less), currentItem, ...quicksort(more)];
}

console.log(quicksort([231, 123, 2, 23, 13, 523, 23, 15, 23]));
