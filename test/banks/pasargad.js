const assert = require('assert');
const pasargad = require('../../dist/index').getBankFromCode('057')

describe('testing isIbanFromThisBank(iban) pasargad ', function() {
  it('should return true', () => {
    const iban = 'IR660570020901100039919001'
    assert.equal( pasargad.isIbanFromThisBank(iban), true);
  });

  it('should return false', () => {
    const iban = 'IR790580038780011476567101'
    assert.equal( pasargad.isIbanFromThisBank(iban), false);
  });
});

describe('testing convertDepositToIban(deposit) pasargad ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '209-11-39919-1'
    const iban = 'IR660570020901100039919001'
    assert.equal(pasargad.convertDepositToIban(deposit), iban);
  });
  // it('Should calculate iban correctly', () => {
  //   const deposit = '387-8000-11476567-1'
  //   const iban = 'IR790570038780011476567101'
  //   assert.equal(pasargad.convertDepositToIban(deposit), iban);
  // });
});

describe('testing convertIbanToDeposit(deposit) pasargad ', function() {
  it('Should calculate deposit correctly', () => {
    const deposit = '209-11-39919-1'
    const iban = 'IR660570020901100039919001'
    assert.equal(pasargad.convertIbanToDeposit(iban), deposit);
  });

  // it('Should calculate deposit correctly', () => {
  //   const deposit = '387-8000-11476567-1'
  //   const iban = 'IR790570038780011476567101'
  //   assert.equal(pasargad.convertIbanToDeposit(iban), deposit);
  // });
});
