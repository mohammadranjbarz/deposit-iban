import * as utils from '../utils'
import {bankCodes, isSourceOfIbanIsValid} from '../utils'
import {Bank} from './Bank'

export class Mellat extends Bank{
    bankCode:string

     constructor(bankCode:string){
        super(bankCode)
        this.bankCode = bankCode
    }
    convertDepositToIban(deposit: string): string {
        let formattedBankCode = this.bankCode;
        // @ts-ignore:
        if (formattedBankCode.startsWith('0')) {
            formattedBankCode = formattedBankCode.replace('0', '');
        }
        let bban;
        if (deposit.indexOf('-') > -1) {
            const parts = deposit.split('-');
            const part0 = utils.addPadString(parts[0], '0', 8);
            const part1 = utils.addPadString(parts[0], '0', 10);
            const originalAccount = part0 + part1;
            bban = `${formattedBankCode}1${originalAccount}182700`;
        } else {
            bban = `${formattedBankCode}001${utils.addPadString(deposit, '0', 16)}182700`
        }
        return utils.generateIbanFromBban(bban);
    }

    isIbanFromThisBank(iban: string): boolean {
        return  this.isIbanValid(iban) && isSourceOfIbanIsValid(iban, bankCodes.MELLAT_CODE);
    }
}

