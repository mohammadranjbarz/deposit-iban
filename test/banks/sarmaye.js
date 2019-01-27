const bank = require('../../dist/index').getBankFromCode('058')
const assert = require('chai').assert

describe('testing convertDepositToIban(deposit) bank ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '1027-800-1046216-1'
    const iban = 'IR570580102780001046216001'
    assert.equal(bank.convertDepositToIban(deposit), iban);
  });
});


describe('testing convertDepositToIban(iban) Saman ', function() {
  it('should throw because invalid format', () => {
    const deposit = '1027-800-1046216'
    assert.throw( bank.convertDepositToIban.bind(null, deposit));
  });


  it('isIbanFromThisBank() success', () => {
    const iban = 'IR570580102780001046216001'
    assert.equal( bank.isIbanFromThisBank(iban), true);
  });


  it('isIbanFromThisBank ()fail ', () => {
    const iban = 'IR570590102780001046216001'
    assert.equal( bank.isIbanFromThisBank(iban), false);
  });

});



describe('testing convertIbanToDeposit(deposit) bank ', function() {
  it('Should calculate iban correctly', () => {
    const deposit = '1027-800-1046216-1'
    const iban = 'IR570580102780001046216001'
    assert.equal(bank.convertIbanToDeposit(iban), deposit);
  });
});