const utils = require('./utils');

const SEPAH_CODE = '015';
const AYANDE_CODE = '062';
const MELLAT_CODE = '012';

function isSourceOfIbanIsValid(iban, bankCode) {
  return bankCode === iban.substring(4, 7);
}

function isIbanValid(iban) {
  return iban.length === 26 && iban.startsWith('IR') && Number(iban.substring(2, 26))
  && utils.isCheckSumValid(iban);
}

module.exports = {
  SEPAH_CODE,
  AYANDE_CODE,
  MELLAT_CODE,
  isSourceOfIbanIsValid,
  isIbanValid,
};
