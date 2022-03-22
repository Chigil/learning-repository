const string = '20013232'

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

console.log(reverseStringNative(string));
console.log(reverseString(string));

