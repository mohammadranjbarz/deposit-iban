import * as utils from './utils'
import {Sepah} from './banks/sepah'
import {Mellat} from './banks/mellat'
import { BankTypeOne} from './banks/BankTypeOne'
import { BankTypeTwo} from './banks/BankTypeTwo'
import {bankCodes} from './utils'

export const saman = new BankTypeOne(bankCodes.SAMAN);
export const sarmaye = new BankTypeOne(bankCodes.SARMAYE);
export const sina = new BankTypeOne(bankCodes.SINA);
export const eghtesadNovin = new BankTypeOne(bankCodes.EGHTESAD_NOVIN_CODE);
export const etebariTovse = new BankTypeOne(bankCodes.ETEBARI_TOVSE);
export const karafarin = new BankTypeTwo(bankCodes.KAR_AFARIN);
export const toseeSaderat = new BankTypeTwo(bankCodes.TOSEE_SADERAT);
export const sanatMadan = new BankTypeTwo(bankCodes.SANAT_MADAN);
export const keshavarzi = new BankTypeTwo(bankCodes.KESHAVARZI);
export const mellat = new Mellat(bankCodes.MELLAT_CODE);
export const sepah = new Sepah(bankCodes.SEPAH_CODE);
export const ayande = new BankTypeTwo(bankCodes.AYANDE_CODE);
export const util = utils



