import * as utils from '../utils'
import { checkIbanSourceBank, removeFirstZeroes} from '../utils'
import {AbstractBank} from './AbstractBank'

export class Shahr extends AbstractBank{
  bankCode: string

  public constructor(bankCode: string) {
    super(bankCode)
    this.bankCode = bankCode;
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
    return removeFirstZeroes( iban.substring(13,26) )
  }
};
