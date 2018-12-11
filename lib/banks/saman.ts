import * as general from '../general'
import * as utils from '../utils'

export class Saman {
    bankCode: string

    public constructor(bankCode: string) {
        this.bankCode = bankCode;
    }

    convertDepositToIban(deposit :string):string {
        let formattedBankCode = this.bankCode;
        // @ts-ignore:
        if (formattedBankCode.startsWith('0')) {
            formattedBankCode = formattedBankCode.replace('0', '');
        }
        let bban;
        if (deposit.indexOf('-') > -1) {
            const parts = deposit.split('-');
            if (parts.length !== 4) throw new Error('Invalid deposit');
            const part0 = utils.addPadString(parts[0], '0', 4);
            const part1 = utils.addPadString(parts[1], '0', 3);
            const part2 = utils.addPadString(parts[2], '0', 8);
            const part3 = utils.addPadString(parts[3], '0', 3);
            const originalAccount = part0 + part1 + part2 + part3;
            bban = `${formattedBankCode}0${originalAccount}182700`;
        } else {
            bban = utils.generateBbanForStandardDepositNumbers(deposit, formattedBankCode);
        }
        return utils.generateIbanFromBban(bban);
    }

    isIbanFromThisBank(iban: string) : boolean {
        console.log('iban : ', iban);
        console.log('bankCode : ', this.bankCode);
        return general.isSourceOfIbanIsValid(iban, this.bankCode);
    }
};
