exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
      
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = "#Login";

    }

    async gotoLoginPage(){
        await this.page.goto("https://scc-france-main-org--uat.sandbox.my.salesforce.com/");
    }

    async login(username,password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
};
