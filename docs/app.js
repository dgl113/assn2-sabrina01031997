'use strict';

function doInvoice() {
  // 1. Prompt for the guest's name.
  var guestName = prompt('Adam Smith');

  // 2. Show the guest's name in the sub-heading of the page.
  document.getElementById('guestName').textContent = guestName;

  // 3. Prompt for the number of nights.
  var numberOfNights = parseInt(prompt('7'));

  // 4. Show the number of nights in the invoice.
  document.getElementById('numberOfNights').textContent =
    numberOfNights + ' nights @';

  // 5. Show the nightly rate using the getNightlyRate() function.
  var nightlyRate = getNightlyRate();
  document.getElementById('nightlyRate').textContent =
    '$' + nightlyRate.toFixed(2) + '/night';

  // 6. Calculate the subtotal.
  var subtotal = nightlyRate * numberOfNights;
  document.getElementById('subTotal').textContent = '$' + subtotal.toFixed(2);

  // 7. Show the PST rate using the getTaxRate() function.
  var pstRate = getTaxRate('PST');
  document.getElementById('pstRate').textContent = pstRate * 100 + '%';

  // 8. Calculate the dollar amount of the PST.
  var pstAmount = subtotal * pstRate;
  document.getElementById('pstAmount').textContent = '$' + pstAmount.toFixed(2);

  // 9. Show the GST rate using the getTaxRate() function.
  var gstRate = getTaxRate('GST');
  document.getElementById('gstRate').textContent = gstRate * 100 + '%';

  // 10. Calculate the dollar amount of the GST.
  var gstAmount = subtotal * gstRate;
  document.getElementById('gstAmount').textContent = '$' + gstAmount.toFixed(2);

  // 11. Calculate the grand total.
  var grandTotal = subtotal + pstAmount + gstAmount;
  document.getElementById('total').textContent = '$' + grandTotal.toFixed(2);
}

// Add an event listener to the "New Invoice" button.
document.getElementById('newInvoice').addEventListener('click', doInvoice);
