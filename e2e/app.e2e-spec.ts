import { AbseboPage } from './app.po';

describe('absebo App', () => {
  let page: AbseboPage;

  beforeEach(() => {
    page = new AbseboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
