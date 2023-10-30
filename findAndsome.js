// some

const numbers = [1, 2, 3, 4, 5];

const isEven = (number) => number % 2 === 0;

const hasEvenNumber = numbers.some(isEven);

if (hasEvenNumber) {
  console.log("The array contains at least one even number.");
} else {
  console.log("The array does not contain any even numbers.");
}

// find

const number = [1, 2, 3, 4, 5];

const isOdd = (number) => number % 2 !== 0;

const oddNumber = numbers.some(isEven);

console.log(oddNumber);