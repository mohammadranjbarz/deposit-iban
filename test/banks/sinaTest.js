const assert = require('assert');
const sina = require('../../dist/index').sina



describe('testing isIbanFromThisBank(iban) sina ', function() {
    it('should return true', () => {
        const iban = 'IR960590011581302697105001'
        assert.equal( sina.isIbanFromThisBank(iban), true);
    });


    it('should return false', () => {
        const iban = 'IR960580011581302697105001'
        assert.equal( sina.isIbanFromThisBank(iban), false);
    });
});

describe('testing convertDepositToIban(deposit) sina ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '115-813-2697105-1'
        const iban = 'IR960590011581302697105001'
        assert.equal(sina.convertDepositToIban(deposit), iban);
    });
    // it('Should calculate iban correctly', () => {
    //   const deposit = '3688933533'
    //   const iban = 'IR040120010000003688933533'
    //   assert.equal(sina.convertDepositToIban(deposit), iban);
    // });
});


describe('testing convertIbanToDeposit(deposit) sina ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '115-813-2697105-1'
        const iban = 'IR960590011581302697105001'
        assert.equal(sina.convertIbanToDeposit(iban), deposit);
    });
});