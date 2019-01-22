const assert = require('assert');
const dey = require('../../dist/index').dey



describe('testing isIbanFromThisBank(iban) dey ', function() {
  it('should return true', () => {
    const iban = 'IR220660000000100003532002'
    assert.equal( dey.isIbanFromThisBank(iban), true);
  });


  it('should return false', () => {
    const iban = 'IR220650000000100003532002'
    assert.equal( dey.isIbanFromThisBank(iban), false);
  });
});

describe('testing convertDepositToIban(deposit) dey ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '0100003532002'
    const iban = 'IR220660000000100003532002'
    assert.equal(dey.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '3688933533'
  //   const iban = 'IR040120010000003688933533'
  //   assert.equal(dey.convertDepositToIban(deposit), iban);
  // });
});

describe('testing convertIbanToDeposit(deposit) dey ', function() {
  it('Should calculate deposit correctly', () => {
    const deposit = '0100003532002'
    const iban = 'IR220660000000100003532002'
    assert.equal(dey.convertIbanToDeposit(iban), deposit);
  });
});
