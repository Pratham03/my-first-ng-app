import { MyFirstNgAppPage } from './app.po';

describe('my-first-ng-app App', () => {
  let page: MyFirstNgAppPage;

  beforeEach(() => {
    page = new MyFirstNgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
