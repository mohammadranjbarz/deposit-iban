
function addPadString(originalString, padString, length) {
  let newString = originalString;
  while (newString.length < length) { newString = padString + newString; }
  return newString;
}

module.exports = { addPadString };
