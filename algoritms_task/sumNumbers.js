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
  String(number).split('').forEach((el) => {
    sum += +el;
  })
  return sum;
}

console.log(sumNumbersNative(20929103));
console.log(sumNumbersRecursion(20929103));
console.log(sumNumbers(20929103));