const bigInt = require('big-integer');

export function addPadString(originalString:string, padString:string, length:number):string {
  let newString = originalString;
  while (newString.length < length) { newString = padString + newString; }
  return newString;
}

export function generateBbanForStandardDepositNumbers(deposit:string, bankCode:string):string {
  console.log('raw bban : ', addPadString(deposit, '0', 19));
  return `${bankCode + addPadString(deposit, '0', 19)}182700`;
}

export function generateIbanFromBban(bban:string) :string{
  const checkDigitBigInt = bigInt(bban);
  console.log('checkDigitBigInt : ', checkDigitBigInt.toString());

  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  console.log('checkDigitNumber : ', checkDigitNumber);
  const checkDigit = addPadString(checkDigitNumber.toString(), '0', 2);
  return `IR${checkDigit}0${bban.substring(0, bban.length - 6)}`;
}

