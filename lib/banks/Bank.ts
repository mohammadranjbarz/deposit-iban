import {isValidIban} from '../utils'

export abstract class Bank {
  bankCode: string

  protected constructor(bankCode : string){
    this.bankCode = bankCode
  }
  abstract isIbanFromThisBank(iban: string): boolean
  abstract convertDepositToIban(deposit: string): string
  // abstract convertIbanToDeposit(iban: string): string
  // abstract convertIbanToDeposit(iban: string): string
  public isValidIban (iban :string):boolean{
    return  isValidIban(iban)
  }

  public getBankCode():string{
    return this.bankCode
  }
}