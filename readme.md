# deposit-iban

A Typescript/Nodejs module that convert iranian  bank deposit (account)
to iban (International Bank Account Number )

برای تبدیل شماره حساب بانکی  به شبا و برعکس
## Installation 
```sh
npm install deposit-iban  --save

```
## Usage
## Usage
### Javascript
```javascript
var depositIban = require('deposit-iban');
var iban = depositIban.sepah.convertDepositToIban('1177301920207');
console.log('iban : ',iban)
var deposit = depositIban.sepah.convertIbanToDeposit('IR240150000001177301920207')
console.log('deposit : ',deposit)
var isValidIban = depositIban.util.isIbanValid('IR240150000001177301920207')
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
const isValidIban = util.isIbanValid('IR240150000001177301920207')
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
