const saman = require('../../dist/index').getBankFromCode('056')
const assert = require('chai').assert

describe('testing convertDepositToIban(deposit) saman ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '832-40-825920-1'
        const iban = 'IR670560083204000825920001'
        assert.equal(saman.convertDepositToIban(deposit), iban);
    });
});


describe('testing convertDepositToIban(iban) Saman ', function() {
    it('should throw because invalid format', () => {
        const deposit = '849-40-8310241'
        assert.throw( saman.convertDepositToIban.bind(null, deposit));
    });


    it('isIbanFromThisBank() success', () => {
        const iban = 'IR670560083204000825920001'
        assert.equal( saman.isIbanFromThisBank(iban), true);
    });


    it('isIbanFromThisBank ()fail ', () => {
        const iban = 'IR840550084904000831024001'
        assert.equal( saman.isIbanFromThisBank(iban), false);
    });

});



describe('testing convertIbanToDeposit(deposit) saman ', function() {
    it('Should calculate iban correctly', () => {
        const deposit = '832-40-825920-1'
        const iban = 'IR670560083204000825920001'
        assert.equal(saman.convertIbanToDeposit(iban), deposit);
    });
});