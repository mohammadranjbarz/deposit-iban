const assert = require('assert');
const saderat = require('../../dist/index').saderat



describe('testing isIbanFromThisBank(iban) saderat ', function() {
    it('should return true', () => {
        const iban = 'IR890190000000104440444000'
        assert.equal( saderat.isIbanFromThisBank(iban), true);
    });


    it('should return false', () => {
        const iban = 'IR180160000000104440444000'
        assert.equal( saderat.isIbanFromThisBank(iban), false);
    });
});

describe('testing convertDepositToIban(deposit) saderat ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '0104440444000'
        const iban = 'IR890190000000104440444000'
        assert.equal(saderat.convertDepositToIban(deposit), iban);
    });
    // it('Should calculate iban correctly', () => {
    //   const deposit = '3688933533'
    //   const iban = 'IR040120010000003688933533'
    //   assert.equal(saderat.convertDepositToIban(deposit), iban);
    // });
});

describe('testing convertIbanToDeposit(deposit) saderat ', function() {
    it('Should calculate deposit correctly', () => {
        const deposit = '0104440444000'
        const iban = 'IR890190000000104440444000'
        assert.equal(saderat.convertIbanToDeposit(iban), deposit);
    });
});
