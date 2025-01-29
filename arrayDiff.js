// Codewars Exercise
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  let differencesArray = [];
  a.map((value) => (!b.includes(value) ? differencesArray.push(value) : null));
  return differencesArray;
}
