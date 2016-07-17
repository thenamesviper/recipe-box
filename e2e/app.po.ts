export class RecipeBoxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('recipe-box-app h1')).getText();
  }
}
