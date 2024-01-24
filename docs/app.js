'use strict';

function doInvoice() {
  const guestName = prompt("Enter guest's name:");

  document.getElementById('guestName').textContent = guestName;

  const numberOfNights = parseInt(prompt('Enter the number of nights:'), 10);

  document.getElementById('numberOfNights').textContent = numberOfNights;

  const nightlyRate = getNightlyRate();
  document.getElementById('nightlyRate').textContent = `$${nightlyRate.toFixed(
    2
  )}`;

  const subTotal = numberOfNights * nightlyRate;
  document.getElementById('subTotal').textContent = `$${subTotal.toFixed(2)}`;

  const pstRate = getTaxRate('PST');
  document.getElementById('pstRate').textContent = `${(pstRate * 100).toFixed(
    2
  )}%`;

  const pstAmount = subTotal * pstRate;
  document.getElementById('pstAmount').textContent = `$${pstAmount.toFixed(2)}`;

  const gstRate = getTaxRate('GST');
  document.getElementById('gstRate').textContent = `${(gstRate * 100).toFixed(
    2
  )}%`;

  const gstAmount = subTotal * gstRate;
  document.getElementById('gstAmount').textContent = `$${gstAmount.toFixed(2)}`;

  const total = subTotal + pstAmount + gstAmount;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}
