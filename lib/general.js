
const SEPAH_CODE = '015';
const AYANDE_CODE = '062';
const MELLAT_CODE = '012';

function isSourceOfIbanIsValid(iban, bankCode) {
  return bankCode === iban.substring(4, 7);
}

module.exports = {
  SEPAH_CODE,
  AYANDE_CODE,
  MELLAT_CODE,
  isSourceOfIbanIsValid,
};
