[![Build Status](https://travis-ci.org/mohammadranjbar/deposit-iban.svg?branch=master)](https://travis-ci.org/mohammadranjbar/deposit-iban)
[![Coverage Status](https://coveralls.io/repos/github/mohammadranjbar/deposit-iban/badge.svg?branch=master)](https://coveralls.io/github/mohammadranjbar/deposit-iban?branch=master)

# deposit-iban


A Typescript/Nodejs module that convert iranian  bank deposit (account)
to iban (International Bank Account Number )

Based on this Document
[IBAN calculation](./calculate_iban.pdf)

برای تبدیل شماره حساب بانکی  به شبا و برعکس
(ممکن است برای حساب‌های غیرمتمرکز و وابسته به شعبه که درصد کمی از حساب‌ها را تشکیل میدهند شماره شبا به درستی محاسبه نشود)

[حساب متمرکز و غیر متمرکز چیست؟](http://account20.blogfa.com/post/12)

اگر شماره حساب از بانک‌های مختلف دارید لطفا ایشو کنید تا به تست‌ها اضافه شود ، و بعضی از بانک‌ها بدلیل نداشتن نمونه شماره حساب و شبا تست نشده و اضافه نشده‌اند.
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
| saderat        | صادرات       | 019  |        ✓        |        ✓        |
| melli        | ملی       | 017  |        ✓        |        ✓        |
| sepah         | سپه         | 015  |        ✓        |        ✓        |
| eghtesadNovin | اقتصاد نوین | 055  |        ✓        |        ×        |
| ansar | اقتصاد نوین | 063  |        ✓        |        ×        |
| saman         | سامان       | 056  |        ✓        |        ×        |
| sina          | سینا        | 059  |        ✓        |        ×        |
| karafarin     | کارآفرین    | 053  |        ✓        |        ✓        |
