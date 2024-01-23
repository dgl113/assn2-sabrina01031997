import path from 'path';

describe('all tests', () => {
  let firstDialog = true;

  const dialogHandler2 = jest.fn((dialog) => {
    if (firstDialog) {
      firstDialog = false;
      return dialog.accept('Adam Smith');
    } else {
      return dialog.accept('7');
    }
  });

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    page.on('dialog', dialogHandler2);
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
    await page.evaluate('setNightlyRate(123)');
    await page.evaluate('setTaxRate("PST",0.0123)');
    await page.evaluate('setTaxRate("GST",0.0456)');
    await page.evaluate('doInvoice()');
  });

  it('guestName should be "Adam Smith"', async () => {
    const value = await page.evaluate('guestName.textContent');
    expect(value).toEqual('Adam Smith');
  });

  it('numberOfNights should be "7"', async () => {
    const value = await page.evaluate('numberOfNights.textContent');
    expect(value).toEqual('7');
  });

  it('nightlyRate should be "$123.00"', async () => {
    const value = await page.evaluate('nightlyRate.textContent');
    expect(value).toEqual('$123.00');
  });

  it('subTotal should be "$861.00"', async () => {
    const value = await page.evaluate('subTotal.textContent');
    expect(value).toEqual('$861.00');
  });

  it('pstRate should be "1.23%"', async () => {
    const value = await page.evaluate('pstRate.textContent');
    expect(value).toEqual('1.23%');
  });

  it('pstAmount should be "$10.59"', async () => {
    const value = await page.evaluate('pstAmount.textContent');
    expect(value).toEqual('$10.59');
  });

  it('gstRate should be "4.56%"', async () => {
    const value = await page.evaluate('gstRate.textContent');
    expect(value).toEqual('4.56%');
  });

  it('gstAmount should be "$39.26"', async () => {
    const value = await page.evaluate('gstAmount.textContent');
    expect(value).toEqual('$39.26');
  });

  it('total should be "$910.85"', async () => {
    const value = await page.evaluate('total.textContent');
    expect(value).toEqual('$910.85');
  });
});
