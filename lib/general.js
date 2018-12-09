'use strict'
const SEPAH_CODE = '015'
const AYANDE_CODE = '062'

function isSourceOfIbanIsValid(iban, bankCode) {
  return bankCode === iban.substring(4,7)
}

module.exports = {
  SEPAH_CODE,
  AYANDE_CODE,
  isSourceOfIbanIsValid}
