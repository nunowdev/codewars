// Codewars exercise
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// i know that this isn't by far the best solution
// but i wanted to have some fun with array.splice() ✌🏻

function sortArray(array) {
  let oddNumbersArray = array
    .filter((number) => number % 2 !== 0)
    .sort((a, b) => a - b);

  let resultArray = array.slice();

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      resultArray.splice(i, 1, oddNumbersArray.shift());
    }
  }

  return resultArray;
}
