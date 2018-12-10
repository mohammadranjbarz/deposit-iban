import * as general  from './general'
import {Sepah}  from './banks/sepah'
import {Mellat}  from './banks/mellat'
import {Saman}from './banks/saman'

export const saman = new Saman(general.bankCodes.SAMAN);
export const sarmaye = new Saman(general.bankCodes.SARMAYE);
export const sina = new Saman(general.bankCodes.SINA);
export const etebariTovse = new Saman(general.bankCodes.ETEBARI_TOVSE);
export const eghtesadNovin = new Saman(general.bankCodes.EGHTESAD_NOVIN_CODE);
export const mellat = new Mellat();
export const sepah = new Sepah();




