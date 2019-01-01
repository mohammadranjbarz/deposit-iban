const assert = require('assert');
const utils = require('../../dist/index').util




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
