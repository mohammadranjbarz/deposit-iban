import * as generals  from './general'
import {Sepah}  from './banks/sepah'
import {Mellat}  from './banks/mellat'
import {Saman}from './banks/saman'

export const saman = new Saman(generals.bankCodes.SAMAN);
export const sarmaye = new Saman(generals.bankCodes.SARMAYE);
export const sina = new Saman(generals.bankCodes.SINA);
export const etebariTovse = new Saman(generals.bankCodes.ETEBARI_TOVSE);
export const eghtesadNovin = new Saman(generals.bankCodes.EGHTESAD_NOVIN_CODE);
export const mellat = new Mellat();
export const sepah = new Sepah();
export const general = generals




