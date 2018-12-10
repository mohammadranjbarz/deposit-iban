const eghtesadNovin = require('../../dist/index').eghtesadNovin
const assert = require('chai').assert

describe('testing convertDepositToIban(deposit) Eghtesad novin ', function () {
    it('Should calculate iban correctly', () => {
        const deposit = '3401-800-4068261-3'
        const iban = 'IR100550340180004068261003'
        assert.equal(eghtesadNovin.convertDepositToIban(deposit), iban);
    });
});


describe('testing isIbanFromThisBank(iban) Eghtesad Novin ', function () {
    it('should throw because invalid format', () => {
        const deposit = '3401-800-40682613'
        assert.throw(eghtesadNovin.convertDepositToIban.bind(null, deposit));
    });


    it('isIbanFromThisBank() success', () => {
        const iban = 'IR100550340180004068261003'
        assert.equal(eghtesadNovin.isIbanFromThisBank(iban), true);
    });


    it('isIbanFromThisBank ()fail ', () => {
        const iban = 'IR100540340180004068261003'
        assert.equal(eghtesadNovin.isIbanFromThisBank(iban), false);
    });

});
