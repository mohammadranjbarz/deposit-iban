const assert = require('assert');
const {isCardValid} = require('../dist/index')
const {validCards, invalidCards} = require('./depositCardIbanData')

describe('validate card number', function () {
  validCards.forEach(card => {
    it(`card ${card} should be valid`, () => {
      assert.equal(isCardValid(card), true);
    })
  });
});

describe('validate invalid card number', function () {
  invalidCards.forEach(card => {
    it(`card ${card} should not be valid`, () => {
      assert.equal(isCardValid(card), false);
    })
  });
});
