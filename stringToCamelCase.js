// Codewars Exercise
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function checkIfLetter(str) {
  if (!str) return false;
  return str.toLowerCase() != str.toUpperCase();
}

function toCamelCase(str) {
  let finalString = "";
  let previousCharacter;
  console.log(previousCharacter);
  for (let i = 0; i < str.length; i++) {
    previousCharacter = str[i - 1];

    // If the character is not a letter, skip it
    if (!checkIfLetter(str[i])) continue;

    // If the previous character is not a letter and is not undefined
    // then make the current character uppercase
    if (!checkIfLetter(previousCharacter) && previousCharacter) {
      finalString += str[i].toUpperCase();
    } else {
      finalString += str[i];
    }
  }
  return finalString;
}
