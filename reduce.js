const text = "This is a sample text. It is a sample text for demonstration purposes.";
const words = text.split(" ");

const wordCount = words.reduce((accumulator, word) => {
  if (!accumulator[word]) {
    accumulator[word] = 1;
  } else {
    accumulator[word]++;
  }
  return accumulator;
}, {});

console.log(wordCount);