import * as utils from './utils'
import {BANK_CODES} from './utils'
import {Sepah} from './banks/sepah'
import {Mellat} from './banks/mellat'
import {BankTypeOne} from './banks/BankTypeOne'
import {BankTypeTwo} from './banks/BankTypeTwo'
import {AbstractBank} from './banks/AbstractBank'
import {Resalat} from './banks/resalat'

export const saman = new BankTypeOne(BANK_CODES.SAMAN);
export const sarmaye = new BankTypeOne(BANK_CODES.SARMAYE);
export const sina = new BankTypeOne(BANK_CODES.SINA);
export const eghtesadNovin = new BankTypeOne(BANK_CODES.EGHTESAD_NOVIN);
export const etebariTovse = new BankTypeOne(BANK_CODES.ETEBARI_TOVSE);
export const karafarin = new BankTypeTwo(BANK_CODES.KAR_AFARIN);
export const toseeSaderat = new BankTypeTwo(BANK_CODES.TOSEE_SADERAT);
export const sanatMadan = new BankTypeTwo(BANK_CODES.SANAT_MADAN);
export const keshavarzi = new BankTypeTwo(BANK_CODES.KESHAVARZI);
export const mellat = new Mellat(BANK_CODES.MELLAT);
export const sepah = new Sepah(BANK_CODES.SEPAH);
export const ayande = new BankTypeTwo(BANK_CODES.AYANDE);
export const saderat = new BankTypeTwo(BANK_CODES.SADERAT);
export const melli = new BankTypeTwo(BANK_CODES.MELLI);
export const ansar = new BankTypeOne(BANK_CODES.ANSAR);
export const pasargad = new BankTypeOne(BANK_CODES.PASARGAD);
export const dey = new BankTypeTwo(BANK_CODES.DEY);
export const tejarat = new BankTypeTwo(BANK_CODES.TEJARAT);
export const resalat = new Resalat(BANK_CODES.RESALAT);
export const util = utils
export  { BANK_CODES}
export const getBankFromCode = (bankCode: String) : AbstractBank=> {
  switch (bankCode) {
    case BANK_CODES.SAMAN:
      return saman
    case BANK_CODES.SARMAYE:
      return sarmaye
    case BANK_CODES.SINA:
      return sina
    case BANK_CODES.EGHTESAD_NOVIN:
      return eghtesadNovin
    case  BANK_CODES.ETEBARI_TOVSE:
      return etebariTovse
    case  BANK_CODES.KAR_AFARIN:
      return karafarin
    case BANK_CODES.TOSEE_SADERAT:
      return toseeSaderat
    case BANK_CODES.SANAT_MADAN:
      return sanatMadan
    case BANK_CODES.KESHAVARZI:
      return keshavarzi
    case BANK_CODES.MELLAT:
      return mellat
    case BANK_CODES.SEPAH:
      return sepah
    case BANK_CODES.AYANDE:
      return ayande
    case BANK_CODES.SADERAT:
      return saderat
    case BANK_CODES.MELLI:
      return melli
    case BANK_CODES.ANSAR:
      return ansar
    case BANK_CODES.PASARGAD:
      return pasargad
    case BANK_CODES.DEY:
      return dey
    case BANK_CODES.TEJARAT:
      return tejarat
    case BANK_CODES.RESALAT:
      return resalat
    default:
      throw new Error(`Bank with ${bankCode} code not supported`)
  }
}
export const convertIbanToDeposit = (iban: string):string =>{
  const bankCode : string = iban.substring(4,7)
  const bank : AbstractBank = getBankFromCode(bankCode)
  return bank.convertIbanToDeposit(iban)
}

export const convertDepositToIban = (bankCode :BANK_CODES, deposit: string):string =>{
  const bank : AbstractBank = getBankFromCode(bankCode)
  return bank.convertDepositToIban(deposit)
}

export const isIbanValid = utils.isValidIban



