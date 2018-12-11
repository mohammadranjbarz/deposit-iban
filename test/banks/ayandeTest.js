const assert = require('assert');
const ayande = require('../../dist/index').ayande



describe('testing isIbanFromThisBank(iban) ayande ', function() {
    it('should return true', () => {
        const iban = 'IR820620000000202102329006'
        assert.equal( ayande.isIbanFromThisBank(iban), true);
    });


    it('should return false', () => {
        const iban = 'IR820610000000202102329006'
        assert.equal( ayande.isIbanFromThisBank(iban), false);
    });
});

describe('testing convertDepositToIban(deposit) ayande ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '0202102329006'
        const iban = 'IR820620000000202102329006'
        assert.equal(ayande.convertDepositToIban(deposit), iban);
    });
    // it('Should calculate iban correctly', () => {
    //   const deposit = '3688933533'
    //   const iban = 'IR040120010000003688933533'
    //   assert.equal(ayande.convertDepositToIban(deposit), iban);
    // });
});
