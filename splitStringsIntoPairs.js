// Codewars Exercise
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  const arrayOfPairs = [];
  let pair = "";
  if (!str) {
    return [];
  }
  for (let i = 0; i < str.length; i += 2) {
    if (!str[i + 1]) {
      pair = str[i] + "_";
    } else {
      pair = str[i] + str[i + 1];
    }
    arrayOfPairs.push(pair);
  }
  return arrayOfPairs;
}
