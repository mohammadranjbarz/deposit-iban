function addPadString(originalString, padString, length) {
  let newString = originalString;
  while (originalString.length < length) { newString = padString + newString; }
  return newString;
}

module.exports = { addPadString };
