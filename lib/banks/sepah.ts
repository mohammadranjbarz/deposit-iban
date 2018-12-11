import * as utils from '../utils'
import {bankCodes, isSourceOfIbanIsValid} from '../utils'

export class Sepah {
    convertDepositToIban(deposit: string): string {
        let bankCode = bankCodes.SEPAH_CODE;
        // @ts-ignore:
        if (bankCode.startsWith('0')) {
            bankCode = bankCode.replace('0', '');
        }
        let bban;
        if (deposit.indexOf('-') > -1) {
            const parts = deposit.split('-');
            const part0 = utils.addPadString(parts[0], '0', 8);
            const part1 = utils.addPadString(parts[0], '0', 10);
            const originalAccount = part0 + part1;
            bban = `${bankCode}1${originalAccount}182700`;
        } else {
            bban = utils.generateBbanForStandardDepositNumbers(deposit, bankCode);
        }
        return utils.generateIbanFromBban(bban);
    }

    isIbanFromThisBank(iban: string): boolean {
        return isSourceOfIbanIsValid(iban, bankCodes.SEPAH_CODE);

    }
}

