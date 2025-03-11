exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homeMenu = "//button[@title='Show Navigation Menu']";
  }

  async navigate(expectedmenu) {
    //const menuItem = expectedmenu;
    await this.page.click('button:has-text("Show Navigation Menu")');
    await this.page.waitForSelector(`text="${expectedmenu}"`, {
      state: "visible",
    });
    await this.page.click(`text="${expectedmenu}"`);
    await this.page.waitForTimeout(5000);
  }
};
