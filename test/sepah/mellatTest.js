const assert = require('assert');
const mellat = require('../../lib/deposit-to-iban').mellat



describe('testing isIbanFromSepah(iban) function ', function() {
    it('should return true', () => {
        const iban = 'IR690120010000004168450796'
        assert.equal( mellat.isIbanFromThisBank(iban), true);
    });


    it('should return false', () => {
        const iban = 'IR840620000001426304971108'
        assert.equal( mellat.isIbanFromThisBank(iban), false);
    });
});

// describe('testing convertMellatDepositToIban(deposit) function ', function() {
//     it('Should calculate iban correctly', () => {
//         const deposit = '4168450796'
//         const iban = 'IR690120010000004168450796'
//         assert.equal(mellat.convertDepositToIban(deposit), iban);
//     });
// });