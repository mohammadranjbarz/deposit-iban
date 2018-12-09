'use strict'
const utils = require('../utils')
const general = require('../general')
const bigInt = require('big-integer')

function convertDepositToIban(deposit){
  const sepahBankCode = '15'
  let bban
  if (deposit.indexOf('-') >-1 ){
    const parts = deposit.split('-')
    const part0 =utils.addPadString(parts[0],"0", 8)
    const part1 =utils.addPadString(parts[0],"0", 10)
    const originalAccount = part0 +part1
    bban = sepahBankCode + "1" + originalAccount + "182700";

  }else{
    bban = sepahBankCode+ utils.addPadString(deposit,"0", 19) + "182700"
  }
  console.log('bban : ', bban)
  const checkDigitBigInt = bigInt(bban)
  console.log('checkDigitBigInt : ', checkDigitBigInt.toString())

  const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'))
  console.log('checkDigitNumber : ', checkDigitNumber)
  const checkDigit = utils.addPadString(checkDigitNumber.toString(), '0',2)
  const  iban = `IR${checkDigit}0${bban.substring(0, bban.length-6)}`
  return iban
}

function isIbanFromSepah(iban) {
  return general.isSourceOfIbanIsValid(iban , general.SEPAH_CODE)
}

module.exports = {convertDepositToIban, isIbanFromSepah}