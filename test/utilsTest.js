const assert = require('assert');
const utils = require('../dist/index').util

const depositCardIbanData = require('./depositCardIbanData')

describe('testing isValidIban function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR680120010000004168450796'
        assert.equal(utils.isValidIban(iban), false);
    });
});


describe('getBankCodeFromCardNumber', function() {
    depositCardIbanData.forEach(item => {
        it(`bank ${item.bankName}` , () => {
            assert.equal(utils.getBankCodeFromCardNumber(item.cardNumber), item.bankCode);
        });
    })

});

describe('isIbanValid', function() {
    depositCardIbanData.forEach(item => {
        it(`bank ${item.bankName}` , () => {
            assert.equal(utils.isValidIban(item.iban), true);
        });
    })
});
