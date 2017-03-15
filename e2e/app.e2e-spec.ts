import { CryptoCheckPage } from './app.po';

describe('crypto-check App', () => {
  let page: CryptoCheckPage;

  beforeEach(() => {
    page = new CryptoCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
