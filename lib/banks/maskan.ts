import * as utils from '../utils'
import {BANK_CODES, checkIbanSourceBank} from '../utils'
import {AbstractBank} from './AbstractBank'

export class Maskan extends AbstractBank{
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
        const bban = `${formattedBankCode}004${utils.addPadString(deposit, '0', 16)}182700`

        return utils.generateIbanFromBban(bban);
    }

    isIbanFromThisBank(iban: string): boolean {
        return  this.isValidIban(iban) && checkIbanSourceBank(iban, BANK_CODES.MELLAT);
    }

    convertIbanToDeposit(deposit: string): string {
        throw new Error("convertIbanToDeposit() not implemented for maskan")

    }
}

