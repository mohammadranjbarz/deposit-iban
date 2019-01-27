const assert = require('assert');
const tejarat = require('../../dist/index').getBankFromCode('018')



describe('testing isIbanFromThisBank(iban) tejarat ', function() {
  it('should return true', () => {
    const iban = 'IR540180000000000166620481'
    assert.equal( tejarat.isIbanFromThisBank(iban), true);
  });


  it('should return false', () => {
    const iban = 'IR540190000000000166620481'
    assert.equal( tejarat.isIbanFromThisBank(iban), false);
  });
});

describe('testing convertDepositToIban(deposit) tejarat ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '0000166620481'
    const iban = 'IR540180000000000166620481'
    assert.equal(tejarat.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '3688933533'
  //   const iban = 'IR040120010000003688933533'
  //   assert.equal(tejarat.convertDepositToIban(deposit), iban);
  // });
});

describe('testing convertIbanToDeposit(deposit) tejarat ', function() {
  it('Should calculate deposit correctly', () => {
    const deposit = '0000166620481'
    const iban = 'IR540180000000000166620481'
    assert.equal(tejarat.convertIbanToDeposit(iban), deposit);
  });
});
