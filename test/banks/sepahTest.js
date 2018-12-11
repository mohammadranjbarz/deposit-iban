const assert = require('assert');
const sepah = require('../../dist/index').sepah
describe('testing convertSepahDepositToIban(deposit) function ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '1426304971108'
    const iban = 'IR840150000001426304971108'
    assert.equal(sepah.convertDepositToIban(deposit), iban);
  });

  it('Should calculate iban correctly', () => {
    const deposit = '1177301920207'
    const iban = 'IR240150000001177301920207'
    assert.equal(sepah.convertDepositToIban(deposit), iban);
  });
  it('Should calculate iban correctly', () => {
    const deposit = '1177301920207'
    const iban = 'IR240150000001177301920207'
    assert.equal(sepah.convertDepositToIban(deposit), iban);
  });
  it('Should calculate iban correctly', () => {
    const deposit = '1351800087201'
    const iban = 'IR930150000001351800087201'
    assert.equal(sepah.convertDepositToIban(deposit), iban);
  });
  it('convertDecentralizedDepositToIban Should calculate iban correctly', () => {
    const deposit = '148986'
    const iban = 'IR680151000001920000148986'
    const  branch = '192'
    assert.equal(sepah.convertDecentralizedDepositToIban(deposit, branch), iban);
  });

  it('convertDecentralizedDepositToIban Should calculate iban correctly', () => {
    const deposit = '188852'
    const iban = 'IR340151000020000000188852'
    const  branch = '2000'
    assert.equal(sepah.convertDecentralizedDepositToIban(deposit, branch), iban);
  });
});


describe('testing isIbanFromSepah(iban) function ', function() {
  it('should return true', () => {
    const iban = 'IR840150000001426304971108'
    assert.equal( sepah.isIbanFromThisBank(iban), true);
  });


  it('should return false', () => {
    const iban = 'IR840620000001426304971108'
    assert.equal( sepah.isIbanFromThisBank(iban), false);
  });

});
