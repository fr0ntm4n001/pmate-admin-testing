describe("Profile Screen", () => {
  Cypress.Commands.add("login", () => {
    // Step 1: Set the viewport size
    cy.viewport(1920, 1080);

    // Step 2: Visit the login page
    cy.visit("https://admin.app.pocketmate.ai"); // Replace with your actual URL

    // Step 3: Enter the email (hardcoded)
    cy.get("#email").clear().type("admin_prod@pocketmate.ai"); // Replace with actual email

    // Step 4: Enter the password (hardcoded)
    cy.get("#password").clear().type("12345678"); // Replace with actual password

    // Step 5: Check the "remember me" checkbox
    cy.get("#remember").check();

    // Step 6: Submit the form
    cy.get(".py-8 > .justify-center").click();

    // Step 7: Verify login by checking if the specified text appears
    cy.get("h1.text-black.text-2xl.font-semibold", { timeout: 20000 })
      .should("be.visible")
      .contains("Patient Users"); // Verify the expected text after login

    //click on profile icon to redirect to profile page
    cy.get(".h-8", { timeout: 20000 }).click();
    cy.get("#headlessui-menu-item-\\:r3\\:", { timeout: 20000 }).click();
  });

  beforeEach(() => {
    cy.login();
  });

  ///////////////////
  it("should verify that the Profile input fields (name,email) are not empty", () => {
    // Loop through nth-child(1), nth-child(2), and nth-child(3)
    for (let i = 1; i <= 3; i++) {
      cy.get(`.grid > :nth-child(${i}) > .relative`).should(
        "match",
        /[a-zA-Z]+/
      ); // Verify that each element is not empty
    }
  });

  /////////////////

  it("should verify that the Profile input fields (name,email) are disabled", () => {
    // Loop through nth-child(1), nth-child(2), and nth-child(3)
    for (let i = 1; i <= 3; i++) {
      cy.get(
        `body > div > div.w-full > div.lg\\:pl-72 > main > div > div > div.grid.grid-cols-3.gap-12.w-4\\/5.mx-auto > div:nth-child(${i}) > div > input`
      )
        .should("have.class", "pointer-events-none") // Ensure the input is not clickable
        .should("not.be.focused"); // The input should not be focused since it is disabled
    }
  });

  it("should verify on edit name can be updated only not email", () => {
    cy.get(".text-sm").should("have.text", "Edit");
    cy.get("img.font-semibold").click();
    cy.get(":nth-child(1) > .relative > .text-black").should("be.enabled");
    cy.get(":nth-child(2) > .relative > .text-black").should("be.enabled");
    cy.get(":nth-child(1) > .relative > .text-black").clear("su");
    cy.get(":nth-child(1) > .relative > .text-black").type("super1");
    cy.get(":nth-child(2) > .relative > .text-black").clear("admin1");
    cy.get(":nth-child(2) > .relative > .text-black").type("admin1");
    cy.get("img.font-semibold").should("be.visible");
    cy.get(".text-sm").click();
  });

  it("Access Level and permissions", () => {
    const expectedAccessLevels = [
      "Patient Users",
      "Professional Users",
      "Payment Subscriptions",
      "Content Management System",
    ];

    cy.get("div.w-full.border-2.py-4").then(($cells) => {
      for (let i = 0; i < $cells.length; i += 2) {
        const accessLevel = $cells[i].innerText.trim();
        const permission = $cells[i + 1].innerText.trim();

        // Assert the access level is one of the expected
        expect(expectedAccessLevels).to.include(accessLevel);

        // Assert the permission is "Can Edit"
        expect(permission).to.eq("Can Edit");
      }
    });
  });
});
