const reverseStringNative = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

const str = reverseStringNative('20012');
const strN = reverseString('20012');

console.log(strN);
console.log(str);

