import * as utils from './utils'
import {Sepah} from './banks/sepah'
import {Mellat} from './banks/mellat'
import { Type1} from './banks/type1'
import { Type2} from './banks/type2'
import {bankCodes} from './utils'

export const saman = new Type1(bankCodes.SAMAN);
export const sarmaye = new Type1(bankCodes.SARMAYE);
export const sina = new Type1(bankCodes.SINA);
export const eghtesadNovin = new Type1(bankCodes.EGHTESAD_NOVIN_CODE);
export const etebariTovse = new Type1(bankCodes.ETEBARI_TOVSE);
export const karafarin = new Type2(bankCodes.KAR_AFARIN);
export const toseeSaderat = new Type2(bankCodes.TOSEE_SADERAT);
export const sanatMadan = new Type2(bankCodes.SANAT_MADAN);
export const keshavarzi = new Type2(bankCodes.KESHAVARZI);
export const mellat = new Mellat(bankCodes.MELLAT_CODE);
export const sepah = new Sepah(bankCodes.SEPAH_CODE);
export const util = utils



