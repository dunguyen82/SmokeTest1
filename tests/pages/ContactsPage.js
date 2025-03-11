exports.ContactsPage = class ContactsPage {
  constructor(page) {
    this.page = page;
  }

  async createNewContact() {
    const randomNumber = Math.floor(Math.random() * 1000000000); // Random number
    const lastname = `newcontact${randomNumber}`;
    const email = `newcontact${randomNumber}@test.com`;
    await this.page.getByRole("link", { name: "Contacts" }).click();
    await this.page.getByRole("button", { name: "New", exact: true }).click();

    await this.page.getByPlaceholder("First Name").fill("test");

    await this.page.getByPlaceholder("Last Name").fill(lastname);

    await this.page.getByPlaceholder("Search Accounts...").click();
    await this.page.waitForSelector("text=GROUPE LACTALIS");
    await this.page
      .getByLabel("Recent Accounts")
      .getByText("GROUPE LACTALIS")
      .click();

    await this.page.getByRole("combobox", { name: "Type" }).click();
    await this.page.waitForSelector("text=Client");
    await this.page.getByText("Client").click();

    await this.page.getByRole("combobox", { name: "Service" }).click();
    await this.page.waitForSelector("text=Commerce");
    await this.page.getByText("Commerce").click();

    await this.page.getByRole("combobox", { name: "Fonction" }).click();
    await this.page.waitForSelector("text=Manager");
    await this.page.getByText("Manager").click();

    await this.page.getByLabel("*Email").fill(email);
    await this.page.getByLabel("Mailing Street").fill(lastname);

    // Ensure save button is visible before clicking
    const saveButton = this.page.getByRole("button", {
      name: "Save",
      exact: true,
    });
    await expect(saveButton).toBeVisible();
    await saveButton.click();
  }
};
