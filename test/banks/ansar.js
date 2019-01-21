const assert = require('assert');
const ansar = require('../../dist/index').ansar



describe('testing isIbanFromThisBank(iban) ansar ', function() {
  it('should return true', () => {
    const iban = 'IR860630381970111410043001'
    assert.equal( ansar.isIbanFromThisBank(iban), true);
  });


  it('should return false', () => {
    const iban = 'IR860620381970111410043001'
    assert.equal( ansar.isIbanFromThisBank(iban), false);
  });
});

describe('testing convertDepositToIban(deposit) ansar ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '3819-701-11410043-1'
    const iban = 'IR860630381970111410043001'
    assert.equal(ansar.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '3688933533'
  //   const iban = 'IR040120010000003688933533'
  //   assert.equal(ansar.convertDepositToIban(deposit), iban);
  // });
});
