const bigInt = require('big-integer');

function addPadString(originalString, padString, length) {
  let newString = originalString;
  while (newString.length < length) { newString = padString + newString; }
  return newString;
}

function generateBbanForStandardDepositNumbers(deposit, bankCode){
  console.log('raw bban : ', addPadString(deposit, '0', 19))
  return `${bankCode + addPadString(deposit, '0', 19)}182700`
}

function generateIbanFromBban(bban){
  const checkDigitBigInt = bigInt(bban);
  console.log('checkDigitBigInt : ', checkDigitBigInt.toString());

  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  console.log('checkDigitNumber : ', checkDigitNumber);
  const checkDigit = addPadString(checkDigitNumber.toString(), '0', 2);
  return `IR${checkDigit}0${bban.substring(0, bban.length - 6)}`;
}

module.exports = { addPadString, generateIbanFromBban, generateBbanForStandardDepositNumbers };
