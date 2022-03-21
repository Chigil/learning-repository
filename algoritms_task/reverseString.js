// method №1
// const reverseString = (str) => {
//   const reversed = [];
//   for (let i = str.length - 1; i >= 0; --i) {
//     reversed.push(str[i]);
//   }
//   return reversed.join("");
// };


// method №2
const reverseString = (str) => str.split("").reverse().join("");

const str = reverseString("20012");
console.log(str);

