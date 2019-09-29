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
import { getBankFromCode, util } from 'deposit-iban';

// see bank codes from table below of README, 015 is sepah codeBank
const sepahBank = getBankFromCode("015")
const iban = sepahBank.convertDepositToIban('1177301920207');
console.log('iban : ',iban)
const deposit = sepahBank.convertIbanToDeposit('IR240150000001177301920207')
console.log('deposit : ',deposit)
const isValidIban = sepahBank.isValidIban('IR240150000001177301920207')
console.log('isValidIban : ',isValidIban)

OR
import { convertDepositToIban, convertIbanToDeposit } from 'deposit-iban';
const deposit = convertIbanToDeposit("IR240150000001177301920207")
console.log('deposit : ',deposit)
// see bank codes from table below of README , 015 is sepah codeBank
const iban = sepahBank.convertDepositToIban('015', '1177301920207');
console.log('iban : ',iban)

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

| Bank          | نام فارسی   | Code | Deposit to iban | Iban to deposit | Iban example               | Deposit example     |
|---------------|-------------|------|-----------------|-----------------|----------------------------|---------------------|
| mellat        | ملت         | 012  | ✓               | ×               | IR690120010000004168450796 | 4168450796          |
| ayande        | آینده       | 062  | ✓               | ✓               | IR820620000000202102329006 | 202102329006        |
| saderat       | صادرات      | 019  | ✓               | ✓               | IR890190000000104440444000 | 104440444000        |
| melli         | ملی         | 017  | ✓               | ✓               | IR180170000000205511280008 | 205511280008        |
| sepah         | سپه         | 015  | ✓               | ✓               | IR930150000001351800087201 | 1351800087201       |
| eghtesadNovin | اقتصاد نوین | 055  | ✓               | ✓               | IR100550340180004068261003 | 3401-800-4068261-3  |
| ansar         | انصار       | 063  | ✓               | ✓               | IR860630381970111410043001 | 3819-701-11410043-1 |
| saman         | سامان       | 056  | ✓               | ✓               | IR670560083204000825920001 | 832-40-825920-1     |
| sina          | سینا        | 059  | ✓               | ✓               | IR960590011581302697105001 | 115-813-2697105-1   |
| karafarin     | کارافرین    | 053  | ✓               | ✓               | IR950530000002400402064606 | 2400402064606       |
| pasargad      | پاسارگاد    | 057  | ✓               | ✓               | IR190570390511514007660001 | 3905.115.14007660.1      |
| tejarat       | تجارت       | 018  | ✓               | ✓               | IR540180000000000166620481 | 166620481           |
| dey           | دی          | 063  | ✓               | ✓               | IR220660000000100003532002 | 100003532002        |
| sarmaye       | سرمایه      | 058  | ✓               | ✓               | IR570580102780001046216001 | 1027-800-1046216-1  |
| keshavarzi       | کشاورزی      | 016  | ✓               | ✓               | IR680160000000000845567398 | 845567398  |
| iranZamin       | ایران زمین      | 069  | ✓               | ✓               | IR450690050071000122559001 | 500-710-122559-1  |
