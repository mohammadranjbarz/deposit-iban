import * as utils from './utils'
import {Sepah} from './banks/sepah'
import {Mellat} from './banks/mellat'
import {Saman} from './banks/saman'
import {bankCodes} from './utils'

export const saman = new Saman(bankCodes.SAMAN);
export const sarmaye = new Saman(bankCodes.SARMAYE);
export const sina = new Saman(bankCodes.SINA);
export const etebariTovse = new Saman(bankCodes.ETEBARI_TOVSE);
export const eghtesadNovin = new Saman(bankCodes.EGHTESAD_NOVIN_CODE);
export const mellat = new Mellat();
export const sepah = new Sepah();
export const util = utils




