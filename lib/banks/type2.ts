import * as utils from '../utils'
import {isSourceOfIbanIsValid} from '../utils'
import {Bank} from './Bank'

// Karafarin, Sanat Madan, Kar afarin, Keshavarzi, Ayande
export class Type2 extends Bank{
  bankCode: string

  public constructor(bankCode: string) {
    super(bankCode)
    this.bankCode = bankCode;
  }

  convertDepositToIban(deposit: string): string {
    let formattedBankCode = this.bankCode;
    // @ts-ignore:
    if (formattedBankCode.startsWith('0')) {
      formattedBankCode = formattedBankCode.replace('0', '');
    }
    const bban = utils.generateBbanForStandardDepositNumbers(deposit, formattedBankCode);
    return utils.generateIbanFromBban(bban);
  }
  isIbanFromThisBank(iban: string): boolean {
    return  this.isIbanValid(iban) && isSourceOfIbanIsValid(iban, this.bankCode);
  }

  convertIbanToDeposit(iban: string): string{
        return iban.substring(13,26)
  }
};
