const assert = require('assert');
const utils = require('../dist/index').util
const {getBankFromCode} = require('../dist/index')
const depositCardIbanData = require('./depositCardIbanData').depositIbanMapping


describe('convertDepositToIban', function() {
  depositCardIbanData.forEach(item => {
    it(`bank ${item.bankName}` , () => {
      if (item.testShouldNotPass){
        return;
      }
      const bank = getBankFromCode(item.bankCode)
      assert.equal(bank.convertDepositToIban(item.deposit), item.iban);
    });
  })
});

describe('convertDepositToIban invalid ibans', function() {
  depositCardIbanData.forEach(item => {
    it(`bank ${item.bankName}` , () => {
      if (item.testShouldNotPass){
        return;
      }
      const bank = getBankFromCode(item.bankCode)
      assert.notEqual(bank.convertDepositToIban(item.deposit), item.invalidIban);
    });
  })
});


describe('convertIbanToDeposit', function() {
  depositCardIbanData.forEach(item => {
    it(`bank ${item.bankName}` , () => {
      if (item.testShouldNotPass){
        return;
      }
      const bank = getBankFromCode(item.bankCode)
      assert.equal(bank.convertIbanToDeposit(item.iban), item.deposit);
    });
  })
});
