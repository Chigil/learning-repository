const inputString = '20013232'

const reverseStringNative = (inputString) => {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed = reversed + inputString[i];
  }
  return reversed;
};

const reverseString = (inputString) => {
  return inputString.split('').reverse().join('');
}

console.log(reverseStringNative(inputString));
console.log(reverseString(inputString));

