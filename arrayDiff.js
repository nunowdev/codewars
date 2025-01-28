function arrayDiff(a, b) {
  let differencesArray = [];
  a.map((value) => (!b.includes(value) ? differencesArray.push(value) : null));
  return differencesArray;
}
