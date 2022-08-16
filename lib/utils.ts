const bigInt = require('big-integer');

export enum BANK_CODES {
  SEPAH = '015',
  RESALAT = '070',
  AYANDE = '062',
  SADERAT = '019',
  MELLI = '017',
  ANSAR = '063',
  PASARGAD = '057',
  DEY = '066',
  TEJARAT = '018',
  MELLAT = '012',
  EGHTESAD_NOVIN = '055',
  SAMAN = '056',
  SARMAYE = '058',
  SINA = '059',
  ETEBARI_TOVSE = '051',
  TOSEE_SADERAT = '020',
  SANAT_MADAN = '011',
  KAR_AFARIN = '053',
  KESHAVARZI = '016',
  IRAN_ZAMIN = '069',
  PARSIAN = '054',
  SHAHR = '061',
  MASKAN = '014',
  KHAVAR_MIANE = "078"
};
const bankCardNumberMapping: {
  [keys: string]: string
} = {
  '627412': BANK_CODES.EGHTESAD_NOVIN,
  '621986': BANK_CODES.SAMAN,
  '639607': BANK_CODES.SARMAYE,
  '502229': BANK_CODES.PASARGAD,
  '504172': BANK_CODES.RESALAT,
  '585983': BANK_CODES.TEJARAT,
  '603770': BANK_CODES.KESHAVARZI,
  '627488': BANK_CODES.KAR_AFARIN,
  '636214': BANK_CODES.AYANDE,
  '603769': BANK_CODES.SADERAT,
  '603799': BANK_CODES.MELLI,
  '502938': BANK_CODES.DEY,
  '627381': BANK_CODES.ANSAR,
  '505785': BANK_CODES.IRAN_ZAMIN,
  '610433': BANK_CODES.MELLAT,
  '589210':BANK_CODES.SEPAH,
  '504706':BANK_CODES.SHAHR,
  '628023':BANK_CODES.MASKAN,
  '58594710':BANK_CODES.KHAVAR_MIANE,
}

export function addPadString(originalString: string, padString: string, length: number): string {
  let newString = originalString;
  while (newString.length < length) {
    newString = padString + newString;
  }
  return newString;
}

export function generateBbanForStandardDepositNumbers(deposit: string, bankCode: string): string {
  return `${bankCode}${addPadString(deposit, '0', 19)}182700`;
}

export function generateIbanFromBban(bban: string): string {
  const checkDigitBigInt = bigInt(bban);
  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
  const checkDigit = addPadString(checkDigitNumber.toString(), '0', 2);
  return `IR${checkDigit}0${bban.substring(0, bban.length - 6)}`;
}

export function isValidIban(iban: string): boolean {
  if ((!iban.startsWith('IR') && !iban.startsWith('ir')) || iban.length != 26 ||
    !Number(iban.substring(2, 26))) return false

  const checkSum = iban.substring(2, 4);
  const bban = `${iban.substring(5, iban.length)}182700`;
  const checkDigitBigInt = bigInt(bban);
  let checkDigitNumber = String(98 - checkDigitBigInt.mod(bigInt('97')));
  checkDigitNumber = addPadString(checkDigitNumber, '0', 2)
  return checkDigitNumber === checkSum;
}

export function removeFirstZeroes(data: string): string {
  let returnData = data;
  while (returnData.startsWith('0')) {
    returnData = returnData.substring(1)
  }
  return returnData
}

export function getBankCodeFromCardNumber(cardNumber: string) {
  if (cardNumber.length < 6){
    throw new Error('Invalid cardNumber prefix length (at least should be 6 digit)')
  }
  const bankCode = bankCardNumberMapping[cardNumber.substr(0, 6)]
  if (!bankCode) {
    throw new Error('BankCode for this cardNumber not found')
  }
  return bankCode
}


export function checkIbanSourceBank(iban: string, bankCode: string): boolean {
  return Boolean(bankCode === iban.substring(4, 7));
}
