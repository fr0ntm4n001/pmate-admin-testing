describe("Policies", () => {
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
    cy.get(":nth-child(10) > .text-gray-primary").should("have.text", "FAQs");
    cy.get(":nth-child(10) > .text-gray-primary").click();
  });

  beforeEach(() => {
    cy.login();
  });
});
