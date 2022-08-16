import * as utils from './utils'
import {BANK_CODES} from './utils'
import {Sepah} from './banks/sepah'
import {Mellat} from './banks/mellat'
import {BankTypeOne} from './banks/BankTypeOne'
import {BankTypeTwo} from './banks/BankTypeTwo'
import {AbstractBank} from './banks/AbstractBank'
import {Resalat} from './banks/resalat'
import {Shahr} from './banks/shahr'
import {Maskan} from './banks/maskan'

const saman = new BankTypeOne(BANK_CODES.SAMAN);
const sarmaye = new BankTypeOne(BANK_CODES.SARMAYE);
const sina = new BankTypeOne(BANK_CODES.SINA);
const eghtesadNovin = new BankTypeOne(BANK_CODES.EGHTESAD_NOVIN);
const etebariTovse = new BankTypeOne(BANK_CODES.ETEBARI_TOVSE);
const karafarin = new BankTypeTwo(BANK_CODES.KAR_AFARIN);
const toseeSaderat = new BankTypeTwo(BANK_CODES.TOSEE_SADERAT);
const sanatMadan = new BankTypeTwo(BANK_CODES.SANAT_MADAN);
const keshavarzi = new BankTypeTwo(BANK_CODES.KESHAVARZI);
const mellat = new Mellat(BANK_CODES.MELLAT);
const sepah = new Sepah(BANK_CODES.SEPAH);
const ayande = new BankTypeTwo(BANK_CODES.AYANDE);
const saderat = new BankTypeTwo(BANK_CODES.SADERAT);
const melli = new BankTypeTwo(BANK_CODES.MELLI);
const ansar = new BankTypeOne(BANK_CODES.ANSAR);
const pasargad = new BankTypeOne(BANK_CODES.PASARGAD);
const dey = new BankTypeTwo(BANK_CODES.DEY);
const tejarat = new BankTypeTwo(BANK_CODES.TEJARAT);
const resalat = new Resalat(BANK_CODES.RESALAT);
const iranZamin = new BankTypeOne(BANK_CODES.IRAN_ZAMIN);
const parsian = new BankTypeOne(BANK_CODES.PARSIAN);
const shahr = new Shahr(BANK_CODES.SHAHR);
const maskan = new Maskan(BANK_CODES.MASKAN);

// We dont know the formula for khavar miane so we just added an adapter to not get error
// when running khavarmiane
const khavarmiane = new Maskan(BANK_CODES.KHAVAR_MIANE);

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
    case BANK_CODES.IRAN_ZAMIN:
      return iranZamin
    case BANK_CODES.PARSIAN:
      return parsian
    case BANK_CODES.SHAHR:
      return shahr
    case BANK_CODES.MASKAN:
      return maskan
    case BANK_CODES.KHAVAR_MIANE:
      return khavarmiane
    default:
      throw new Error(`Bank with ${bankCode} code not supported,
       check supported banks here\n https://github.com/mohammadranjbar/deposit-iban#supported-banks`)
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


export {getBankCodeFromCardNumber} from './utils'
export {isCardValid} from './cardUtils'
