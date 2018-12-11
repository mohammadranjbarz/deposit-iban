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
  if ((!iban.startsWith('IR') && !iban.startsWith('ir') )|| iban.length != 26)return false
  const checkSum = iban.substring(2, 4);
  const bban = `${iban.substring(5, iban.length)}182700`;
  const checkDigitBigInt = bigInt(bban);
  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  return String(checkDigitNumber) === checkSum;
}

export const bankCodes = {
  SEPAH_CODE: '015',
  AYANDE_CODE: '062',
  MELLAT_CODE: '012',
  EGHTESAD_NOVIN_CODE: '055',
  SAMAN: '056',
  SARMAYE: '058',
  SINA: '059',
  ETEBARI_TOVSE: '051',
  TOSEE_SADERAT: '020',
  SANAT_MADAN: '011',
  KAR_AFARIN: '053',
  KESHAVARZI: '016',
};

export function isSourceOfIbanIsValid(iban: string, bankCode: string): boolean {
  return Boolean(bankCode === iban.substring(4, 7));
}
