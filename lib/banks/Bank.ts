import {isIbanValid} from '../utils'

export abstract class Bank {
  bankCode: string

  protected constructor(bankCode : string){
    this.bankCode = bankCode
  }
  abstract isIbanFromThisBank(iban: string): boolean
  abstract convertDepositToIban(iban: string): string
  // abstract convertIbanToDeposit(iban: string): string
  public isIbanValid (iban :string):boolean{
    return isIbanValid(iban)
  }

  public getBankCode():string{
    return this.bankCode
  }
}