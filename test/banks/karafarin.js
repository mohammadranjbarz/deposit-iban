const assert = require('assert');
const karafarin = require('../../dist/index').karafarin



describe('testing isIbanFromThisBank(iban) karafarin ', function() {
  it('should return true', () => {
    const iban = 'IR950530000002400402064606'
    assert.equal( karafarin.isIbanFromThisBank(iban), true);
  });


  it('should return false', () => {
    const iban = 'IR950520000002400402064606'
    assert.equal( karafarin.isIbanFromThisBank(iban), false);
  });
});

describe('testing convertDepositToIban(deposit) karafarin ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '2400402064606'
    const iban = 'IR950530000002400402064606'
    assert.equal(karafarin.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '3688933533'
  //   const iban = 'IR040120010000003688933533'
  //   assert.equal(karafarin.convertDepositToIban(deposit), iban);
  // });
});
