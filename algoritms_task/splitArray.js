//method №1
// function splitArray(array, count) {
//   let resultArrays = [];
//   // let currentCount = 0;
//   let addedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     //currentCount++;
//     addedArray.push(array[i]);
//     if ((i+1)%count === 0) { // currentCount
//       resultArrays.push(addedArray)
//       addedArray = [];
//       //currentCount = 0;
//     }
//   }
//   return addedArray.length ? [...resultArrays,addedArray] : resultArrays;
// }

//method №2
function splitArray(array, count) {
  const resultArrays = []
  for (let i = 0; i < array.length; i+=count) {
    resultArrays.push(array.slice(i, i+count));
  }
  return resultArrays;
}

const result = splitArray([1, 2, 3, 2, 31, 2, 5, 8], 1);
console.log(result);
