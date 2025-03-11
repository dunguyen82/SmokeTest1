const { test, expect } = require("@playwright/test");
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ContactsPage } from "../pages/ContactsPage";

test("Login to UAT", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 1000000000); // Random number
  const lastname = `newcontact${randomNumber}`;
  const email = `newcontact${randomNumber}@test.com`;

  console.log(`Generated Random Number: ${randomNumber}`);
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login("dunguyen@fr.scc.com.uat", "Upsale@1234");
  await page.waitForTimeout(5000);

  // const homepage = new HomePage(page);
  // await homepage.navigate("Contacts");

  // const contactpage = new ContactsPage(page);
  // await contactpage.createNewContact();
});
