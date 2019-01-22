import * as utils from '../utils'
import {checkIbanSourceBank} from '../utils'
import {AbstractBank} from './AbstractBank'
import {isValidIban} from "../utils";


// tosan banks : Saman, Sarmaye, Etebari Tosee, Sinaو eghtesadNovin, ansar
export class BankTypeOne extends AbstractBank{
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
    let bban;
    const parts = deposit.split('-');
    if (parts.length !== 4) throw new Error('Invalid deposit');
    const part0 = utils.addPadString(parts[0], '0', 4);
    const part1 = utils.addPadString(parts[1], '0', 3);
    const part2 = utils.addPadString(parts[2], '0', 8);
    const part3 = utils.addPadString(parts[3], '0', 3);
    const originalAccount = part0 + part1 + part2 + part3;
    bban = `${formattedBankCode}0${originalAccount}182700`;
    return utils.generateIbanFromBban(bban);
  }

  convertIbanToDeposit(iban: string): string{
    const part1 = this.removeFirstZeroes(iban.substring(8,12 ))
    const part2 = this.removeFirstZeroes(iban.substring(12,15))
    const part3 = this.removeFirstZeroes(iban.substring(15,23))
    const part4 = this.removeFirstZeroes(iban.substring(23,26))
    return `${part1}-${part2}-${part3}-${part4}`

  }

  isIbanFromThisBank(iban: string): boolean {
    return this.isValidIban(iban) && checkIbanSourceBank(iban, this.bankCode);
  }

  private removeFirstZeroes(data : string):string{
    let returnData = data;
    while (returnData.startsWith('0')){
      returnData = returnData.substring(1)
    }
    return returnData
  }
};
