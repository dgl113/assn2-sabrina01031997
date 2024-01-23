'use strict';

let invoiceConfig = {
  PSTrate: 0.08,
  GSTrate: 0.05,
  nightlyRate: 175,
};

function getTaxRate(type) {
  switch (type) {
    case 'PST':
      return invoiceConfig.PSTrate;
    case 'GST':
      return invoiceConfig.GSTrate;
    default:
      return 0;
  }
}

function getNightlyRate() {
  return invoiceConfig.nightlyRate;
}

function setTaxRate(type, value) {
  switch (type) {
    case 'PST':
      invoiceConfig.PSTrate = value;
      break;
    case 'GST':
      invoiceConfig.GSTrate = value;
      break;
  }
}

function setNightlyRate(value) {
  invoiceConfig.nightlyRate = value;
}

(() => {
  window.addEventListener('load', (event) => {
    newInvoice.addEventListener('click', (event) => {
      doInvoice();
    });
  });
})();
