const testNumber = 20929103

const sumNumbersNative = (number) => {
  let sum = 0;
  let digit = 0;
  while (number) {
    digit = number % 10;
    number = (number - digit) / 10;
    sum += digit;
  }
  return sum;
}

const sumNumbersRecursion = (number) => {
  let digit = number % 10;
  if (number > 0) {
    return digit + sumNumbersRecursion((number - digit) / 10);
  }
  return digit;
}

const sumNumbers = (number) => {
  let sum = 0;
  Array.from(String(number), (el) => {
    sum += +el;
  })
  return sum;
}

console.log(sumNumbersNative(testNumber));
console.log(sumNumbersRecursion(testNumber));
console.log(sumNumbers(testNumber));