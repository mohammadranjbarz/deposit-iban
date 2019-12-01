import * as utils from '../utils'
import {BANK_CODES, checkIbanSourceBank} from '../utils'
import {AbstractBank} from './AbstractBank'
const bankCode=BANK_CODES.SHAHR

export class Shahr extends AbstractBank{
  public constructor(){
    super(bankCode)
  }

  convertDepositToIban(deposit: string): string {
    let formattedBankCode:string = this.bankCode;
    if (formattedBankCode.startsWith('0')) {
      formattedBankCode = formattedBankCode.replace('0', '');
    }
    const bban = utils.generateBbanForStandardDepositNumbers(deposit, formattedBankCode);
    return utils.generateIbanFromBban(bban);
  }
  isIbanFromThisBank(iban: string): boolean {
    return  this.isValidIban(iban) && checkIbanSourceBank(iban, this.bankCode);
  }

  convertIbanToDeposit(iban: string): string{
    return iban.substring(14,26)
  }
};
