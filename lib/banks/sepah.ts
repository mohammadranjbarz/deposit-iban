import * as utils from '../utils'
import {BANK_CODES, checkIbanSourceBank} from '../utils'
import {AbstractBank} from './AbstractBank'

export class Sepah extends AbstractBank{
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
        if (deposit.includes('-') ) {
            const parts = deposit.split('-')
           return this.convertDecentralizedDepositToIban(parts[0], parts[1])
        } else {
            bban = utils.generateBbanForStandardDepositNumbers(deposit, formattedBankCode);
        }
        return utils.generateIbanFromBban(bban);
    }

    convertDecentralizedDepositToIban(deposit :string, branch:string):string{
        let formattedBankCode = this.bankCode;
        // @ts-ignore:
        if (formattedBankCode.startsWith('0')) {
            formattedBankCode = formattedBankCode.replace('0', '');
        }
        const branchPart = utils.addPadString(branch, '0', 8);
        const depositPart = utils.addPadString(deposit, '0', 10);
        const bban = `${formattedBankCode}1${branchPart}${depositPart}182700`;
        return utils.generateIbanFromBban(bban);

    }
    convertIbanToDeposit(deposit: string): string {
       throw new Error("convertIbanToDeposit() not implemented for sepah")
    }

    isIbanFromThisBank(iban: string): boolean {
        return  this.isValidIban(iban) && checkIbanSourceBank(iban, BANK_CODES.SEPAH);

    }
}

