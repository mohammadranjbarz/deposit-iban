const bigInt = require('big-integer');

export function addPadString(originalString:string, padString:string, length:number):string {
  let newString = originalString;
  while (newString.length < length) { newString = padString + newString; }
  return newString;
}

export function generateBbanForStandardDepositNumbers(deposit:string, bankCode:string):string {
  return `${bankCode}${addPadString(deposit, '0', 19)}182700`;
}

export function generateIbanFromBban(bban:string) :string{
  const checkDigitBigInt = bigInt(bban);
  console.log('checkDigitBigInt : ', checkDigitBigInt.toString());

  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  console.log('checkDigitNumber : ', checkDigitNumber);
  const checkDigit = addPadString(checkDigitNumber.toString(), '0', 2);
  return `IR${checkDigit}0${bban.substring(0, bban.length - 6)}`;
}

export function isIbanValid(iban:string) :boolean {
  const checkSum = iban.substring(2, 4);
  const bban = `${iban.substring(5, iban.length)}182700`;
  const checkDigitBigInt = bigInt(bban);
  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  return String(checkDigitNumber) === checkSum;
}

