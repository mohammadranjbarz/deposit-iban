const general = require('./general');
const sepah = require('./banks/sepah');
const mellat = require('./banks/mellat');
const Saman = require('./banks/saman');

const saman = new Saman(general.bankCodes.SAMAN);
const sarmaye = new Saman(general.bankCodes.SARMAYE);
const sina = new Saman(general.bankCodes.SINA);
const etebariTovse = new Saman(general.bankCodes.ETEBARI_TOVSE);
const eghtesadNovin = new Saman(general.bankCodes.EGHTESAD_NOVIN_CODE);

module.exports = {
  sepah,
  eghtesadNovin,
  mellat,
  saman,
  sarmaye,
  sina,
  etebariTovse,
};
