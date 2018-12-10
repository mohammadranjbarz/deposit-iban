
const general = require('../general');
const utils = require('../utils');

function generateMellatBban(deposit, bankCode) {
  return `${bankCode}001${utils.addPadString(deposit, '0', 16)}182700`;
}

function convertDepositToIban(deposit) {
  let bankCode = general.MELLAT_CODE;
  if (bankCode.startsWith('0')) {
    bankCode = bankCode.replace('0', '');
  }
  let bban;
  if (deposit.indexOf('-') > -1) {
    const parts = deposit.split('-');
    const part0 = utils.addPadString(parts[0], '0', 8);
    const part1 = utils.addPadString(parts[0], '0', 10);
    const originalAccount = part0 + part1;
    bban = `${bankCode}1${originalAccount}182700`;
  } else {
    bban = generateMellatBban(deposit, bankCode);
  }
  return utils.generateIbanFromBban(bban);
}

function isIbanFromThisBank(iban) {
  return general.isSourceOfIbanIsValid(iban, general.MELLAT_CODE);
}

module.exports = { convertDepositToIban, isIbanFromThisBank };
