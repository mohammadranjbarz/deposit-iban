const assert = require('assert');
const general = require('../../lib/deposit-to-iban').general




describe('testing isIbanValid function sepah iban ', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(general.isIbanValid(iban), true);
    });
});
describe('testing isIbanValid function sepah iban', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(general.isIbanValid(iban), true);
    });
});

describe('testing isIbanValid function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR690120010000004168450796'
        assert.equal(general.isIbanValid(iban), true);
    });
});

describe('testing isIbanValid function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR680120010000004168450796'
        assert.equal(general.isIbanValid(iban), false);
    });
});
