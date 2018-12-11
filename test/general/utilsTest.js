const assert = require('assert');
const utilsTest = require('../../dist/index').util




describe('testing isValidIban function sepah iban ', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(utilsTest.isValidIban(iban), true);
    });
});
describe('testing isValidIban function sepah iban', function() {
    it('iban is valid', () => {
        const iban = 'IR840150000001426304971108'
        assert.equal(utilsTest.isValidIban(iban), true);
    });
});

describe('testing isValidIban function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR690120010000004168450796'
        assert.equal(utilsTest.isValidIban(iban), true);
    });
});

describe('testing isValidIban function mellat iban', function() {
    it('iban is invalid', () => {
        const iban = 'IR680120010000004168450796'
        assert.equal(utilsTest.isValidIban(iban), false);
    });
});
