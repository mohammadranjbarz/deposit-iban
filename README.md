[![Build Status](https://travis-ci.org/mohammadranjbar/deposit-iban.svg?branch=master)](https://travis-ci.org/mohammadranjbar/deposit-iban)
[![Coverage Status](https://coveralls.io/repos/github/mohammadranjbar/deposit-iban/badge.svg?branch=master)](https://coveralls.io/github/mohammadranjbar/deposit-iban?branch=master)

# deposit-iban


A Typescript/Nodejs module that convert iranian  bank deposit (account)
to iban (International AbstractBank Account Number )

Based on this Document
[IBAN calculation](./calculate_iban.pdf)

برای تبدیل شماره حساب بانکی  به شبا و برعکس
## Installation 
```sh
npm install deposit-iban  --save

```
## Usage
### Javascript
```javascript
var depositIban = require('deposit-iban');
var iban = depositIban.sepah.convertDepositToIban('1177301920207');
console.log('iban : ',iban)
var deposit = depositIban.sepah.convertIbanToDeposit('IR240150000001177301920207')
console.log('deposit : ',deposit)
var isValidIban = depositIban.util.isValidIban('IR240150000001177301920207')
console.log('isValidIban : ',isValidIban)

```
```sh
Output should be : 
iban : IR240150000001177301920207
deposit : 1177301920207
isValidIban : true
```
### TypeScript
```typescript
import { sepah, util } from 'deposit-iban';
const iban = sepah.convertDepositToIban('1177301920207');
console.log('iban : ',iban)
const deposit = sepah.convertIbanToDeposit('IR240150000001177301920207')
console.log('deposit : ',deposit)
const isValidIban = util.isValidIban('IR240150000001177301920207')
console.log('isValidIban : ',isValidIban)
```
```sh
Output should be : 
iban : IR240150000001177301920207
deposit : 1177301920207
isValidIban : true
```

## Test 
`
npm run test
`

## Supported banks

| ‌Bank          | نام فارسی   | Code | deposit to iban | iban to deposit |
|---------------|-------------|------|:---------------:|:---------------:|
|  mellat       | ملت         | 012  |        ✓        |        ×        |
| ayande        | آینده       | 062  |        ✓        |        ✓        |
| sepah         | سپه         | 015  |        ✓        |        ✓        |
| eghtesadNovin | اقتصاد نوین | 055  |        ✓        |        ×        |
| saman         | سامان       | 056  |        ✓        |        ×        |
| sina          | سینا        | 059  |        ✓        |        ×        |
| karafarin     | کارآفرین    | 053  |        ✓        |        ✓        |
