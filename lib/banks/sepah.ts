import * as utils from '../utils'
import {bankCodes, isSourceOfIbanIsValid} from '../utils'
import {Bank} from './Bank'

export class Sepah extends Bank{
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
    isIbanFromThisBank(iban: string): boolean {
        return  this.isIbanValid(iban) && isSourceOfIbanIsValid(iban, bankCodes.SEPAH_CODE);

    }
}

