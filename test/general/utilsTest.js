const assert = require('assert');
const utils = require('../../dist/index').util

const depositCardIbanData = require('../depositCardIbanData')



describe('testing isValidIban function sepah iban ', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(utils.isValidIban(iban), true);
    });
});
describe('testing isValidIban function sepah iban', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(utils.isValidIban(iban), true);
    });
});

describe('testing isValidIban function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR690120010000004168450796'
        assert.equal(utils.isValidIban(iban), true);
    });
});

describe('testing isValidIban function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR680120010000004168450796'
        assert.equal(utils.isValidIban(iban), false);
    });
});


describe('testing isValidIban function ayande iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR070620000000202057838008'
        assert.equal(utils.isValidIban(iban), true);
    });
});

describe('getBankCodeFromCardNumber', function() {

    depositCardIbanData.forEach(item => {
        it(`bank ${item.bankName}` , () => {
            assert.equal(utils.getBankCodeFromCardNumber(item.cardNumber), item.bankCode);
        });
    })

});
