const bankCodes = {
  SEPAH_CODE: '015',
  AYANDE_CODE: '062',
  MELLAT_CODE: '012',
  EGHTESAD_NOVIN_CODE: '055',
  SAMAN: '056',
  SARMAYE: '058',
  SINA: '055',
  ETEBARI_TOVSE: '051',
};
function isSourceOfIbanIsValid(iban, bankCode) {
  return bankCode === iban.substring(4, 7);
}

module.exports = {
  bankCodes,
  isSourceOfIbanIsValid,
};
