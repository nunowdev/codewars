// Codewars Exercise
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript

// god i hate regex codes
function validatePIN(pin) {
  return RegExp(/^\d{4}$|^\d{6}$/).test(pin);
}
