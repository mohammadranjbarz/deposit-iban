const assert = require('assert');
const resalat = require('../../dist/index').getBankFromCode('070')



describe('testing isIbanFromThisBank(iban) resalat ', function() {
  it('should return true', () => {
    const iban = 'IR850700001000113995346001'
    assert.equal( resalat.isIbanFromThisBank(iban), true);
  });
  it('should return true', () => {
    const iban = 'IR290700062200113995346001'
    assert.equal( resalat.isIbanFromThisBank(iban), true);
  });

});

describe('testing convertDepositToIban(deposit) resalat ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '10.3995346.1'
    const iban = 'IR850700001000113995346001'
    assert.equal(resalat.convertDepositToIban(deposit), iban);
  });
  it('Should calculate iban correctly', () => {
    const deposit = '622.3995346.1'
    const iban = 'IR290700062200113995346001'
    assert.equal(resalat.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '3688933533'
  //   const iban = 'IR040120010000003688933533'
  //   assert.equal(resalat.convertDepositToIban(deposit), iban);
  // });
});

describe('testing convertIbanToDeposit(deposit) resalat ', function() {
  it('Should calculate deposit correctly', () => {
    const deposit = '10.3995346.1'
    const iban = 'IR850700001000113995346001'
    assert.equal(resalat.convertIbanToDeposit(iban), deposit);
  });
  it('Should calculate deposit correctly', () => {
    const deposit = '622.3995346.1'
    const iban = 'IR290700062200113995346001'
    assert.equal(resalat.convertIbanToDeposit(iban), deposit);
  });
});
