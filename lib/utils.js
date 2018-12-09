function addPadString(originalString  , padString, length){
  while (originalString.length < length)
    originalString = padString + originalString;
  return originalString;
}

module.exports ={addPadString}