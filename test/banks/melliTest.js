const assert = require('assert');
const melli = require('../../dist/index').getBankFromCode('017')



describe('testing isIbanFromThisBank(iban) melli ', function() {
    it('should return true', () => {
        const iban = 'IR180170000000205511280008'
        assert.equal( melli.isIbanFromThisBank(iban), true);
    });


    it('should return false', () => {
        const iban = 'IR180160000000205511280008'
        assert.equal( melli.isIbanFromThisBank(iban), false);
    });
});

describe('testing convertDepositToIban(deposit) melli ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '0205511280008'
        const iban = 'IR180170000000205511280008'
        assert.equal(melli.convertDepositToIban(deposit), iban);
    });
    // it('Should calculate iban correctly', () => {
    //   const deposit = '3688933533'
    //   const iban = 'IR040120010000003688933533'
    //   assert.equal(melli.convertDepositToIban(deposit), iban);
    // });
});

describe('testing convertIbanToDeposit(deposit) melli ', function() {
    it('Should calculate deposit correctly', () => {
        const deposit = '0205511280008'
        const iban = 'IR180170000000205511280008'
        assert.equal(melli.convertIbanToDeposit(iban), deposit);
    });
});
