describe("FAQ", () => {
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

    cy.get(":nth-child(10) > .text-gray-primary").should("have.text", "FAQs");
    cy.get(":nth-child(10) > .text-gray-primary").click();
  });

  beforeEach(() => {
    cy.login();
  });

  ///////////////////
  it("verify listed FAQS ", () => {
    cy.get(".text-gray-dark").should("have.text", "Frequently Asked Questions");
    cy.get("#headlessui-disclosure-button-\\:r2\\: > .text-base").should(
      "have.text",
      "Can AI provide the same level of ethical decision-making as human therapists?"
    );
    cy.get("#headlessui-disclosure-button-\\:r2\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "Ethical decision-making in therapy involves considerations that go beyond data and algorithms. It includes understanding moral principles, cultural contexts, and the unique circumstances of each client. Human therapists can navigate these complex ethical landscapes and make decisions that are in the best interest of their clients. AI, on the other hand, operates within the limitations of its programming and cannot independently make such complex ethical decisions."
    );

    cy.get("#headlessui-disclosure-button-\\:r2\\: > .text-base").click();
    cy.get("#headlessui-disclosure-button-\\:r4\\: > .text-base").should(
      "have.text",
      "How does the ethical handling of sensitive information differ between AI and human therapists?"
    );
    cy.get("#headlessui-disclosure-button-\\:r4\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "Human therapists are bound by professional ethical standards and confidentiality agreements to protect sensitive client information. While AI systems can be designed to keep information confidential, there are ongoing concerns about data privacy, security breaches, and the potential misuse of AI in handling sensitive information. Human therapists also possess the ethical judgment to handle sensitive information appropriately, which AI lacks."
    );

    cy.get("#headlessui-disclosure-button-\\:r4\\: > .text-base").click();

    cy.get("#headlessui-disclosure-button-\\:r6\\: > .text-base").should(
      "have.text",
      " Is the role of human intuition replaceable in therapy by AI?"
    );
    cy.get("#headlessui-disclosure-button-\\:r6\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "Human intuition plays a critical role in therapy. Therapists rely on their intuition to sense unspoken emotions, detect subtle shifts in mood, and understand the deeper implications of a client’s words and behaviors. AI lacks this intuitive sense and the ability to make nuanced judgments based on these subtle cues. The intuition of a human therapist, honed through years of training and experience, is a key component in understanding and effectively responding to clients’ needs."
    );

    cy.get("#headlessui-disclosure-button-\\:r6\\: > .text-base").click();
    cy.get("#headlessui-disclosure-button-\\:r8\\: > .text-base").should(
      "have.text",
      "How does AI handle complex cases that require nuanced understanding and intervention?"
    );
    cy.get("#headlessui-disclosure-button-\\:r8\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "AI systems are limited in handling complex psychological cases that require a nuanced understanding, contextual knowledge, and the ability to navigate between different therapeutic techniques. Complex cases often involve intertwining issues like trauma, mental health disorders, and personal crises, which require a sophisticated and flexible therapeutic approach. Human therapists can integrate various therapeutic modalities and use their judgment and experience to navigate these complexities."
    );

    cy.get("#headlessui-disclosure-button-\\:r8\\: > .text-base").click();

    cy.get("#headlessui-disclosure-button-\\:ra\\: > .text-base").should(
      "have.text",
      "Can AI adapt to the unique needs of each therapy client as a human therapist can?"
    );
    cy.get("#headlessui-disclosure-button-\\:ra\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "While AI can be programmed to respond to a range of scenarios, it lacks the ability to fully adapt to the unique and evolving needs of each client. Human therapists can intuitively adjust their approach based on subtle cues, changes in mood, and the evolving dynamics of the therapy process. They can also provide personalized care that resonates with the individual’s experiences, culture, and personality, which AI cannot match."
    );

    cy.get("#headlessui-disclosure-button-\\:ra\\: > .text-base").click();
    cy.get("#headlessui-disclosure-button-\\:rc\\: > .text-base").should(
      "have.text",
      "Can AI fully understand and empathize with human emotions in the same or similar way that a therapist does?"
    );
    cy.get("#headlessui-disclosure-button-\\:rc\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "AI technology has made significant strides in understanding and processing human language and emotions. However, it lacks the genuine empathy and deep understanding that a human therapist provides. AI can analyze words and patterns, but it can’t fully comprehend the nuances of human emotions, personal experiences, and the complex psychological dynamics that a trained therapist can. The empathetic connection and understanding that a human therapist offers are irreplaceable elements of effective therapy."
    );

    cy.get("#headlessui-disclosure-button-\\:rc\\: > .text-base").click();
    cy.get("#headlessui-disclosure-button-\\:re\\: > .text-base").should(
      "have.text",
      "How does AI’s role in therapy compare to the comprehensive approach of human therapists?"
    );
    cy.get("#headlessui-disclosure-button-\\:re\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "AI can play a supportive role in therapy, such as offering automated responses, tracking mood changes, or providing information. However, it cannot match the comprehensive approach of a human therapist, who considers the client’s emotional, psychological, and sometimes physical health. Human therapists provide a holistic approach, considering various aspects of a person’s life and well-being, which AI is not equipped to do."
    );

    cy.get("#headlessui-disclosure-button-\\:re\\: > .text-base").click();

    cy.get("#headlessui-disclosure-button-\\:rg\\: > .text-base").should(
      "have.text",
      "Will AI be able to replace the human connection essential in therapy?"
    );
    cy.get("#headlessui-disclosure-button-\\:rg\\: > .text-base").click();

    cy.get("p").should(
      "have.text",
      "The human connection in therapy is central to its effectiveness. This connection involves trust, empathy, and a deep understanding of the human experience, which AI cannot replicate. While AI can provide support and some level of interaction, it cannot fully replace the emotional depth and personal connection that a human therapist offers. The therapeutic relationship is a unique bond that is crucial for the healing and growth of clients, and this cannot be replicated by AI."
    );

    cy.get("#headlessui-disclosure-button-\\:rg\\: > .text-base").click();
  });

  it("Add FAQ ", () => {
    cy.get(".justify-center > .flex").should("have.text", "Add FAQ");
    cy.get(".justify-center > .flex").click();
    cy.get(".w-1\\/3").click();
    cy.get(".w-1\\/3 > .text-gray-dark").should("have.text", "Add FAQ");

    cy.get(".gap-6 > .flex-col").click();
    cy.get(".gap-6 > .flex-col").should("have.text", "Question ");
    cy.get(".text-black").clear("T");
    cy.get(".text-black").type("Test FAQ 5");
    cy.get(".min-h-\\[calc\\(100vh-64px\\)\\] > .sm\\:px-6").click();
    cy.get(".md\\:text-xl").should("have.text", "Add Answer");
    cy.get(".ql-editor").click();
    cy.get(".ql-editor").type("Test Answer 5");

    cy.get(".justify-center").should("have.text", "Add");
    cy.get(".justify-center > .flex").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "FAQ has been added successfully"
    );
  });

  it("Add Duplicate FAQ ", () => {
    cy.get(".justify-center > .flex").should("have.text", "Add FAQ");
    cy.get(".justify-center > .flex").click();
    cy.get(".w-1\\/3").click();
    cy.get(".w-1\\/3 > .text-gray-dark").should("have.text", "Add FAQ");

    cy.get(".gap-6 > .flex-col").click();
    cy.get(".gap-6 > .flex-col").should("have.text", "Question ");
    cy.get(".text-black").clear("T");
    cy.get(".text-black").type("Test FAQ 5");
    cy.get(".min-h-\\[calc\\(100vh-64px\\)\\] > .sm\\:px-6").click();
    cy.get(".md\\:text-xl").should("have.text", "Add Answer");
    cy.get(".ql-editor").click();
    cy.get(".ql-editor").type("Test Answer 5");

    cy.get(".justify-center").should("have.text", "Add");
    cy.get(".justify-center > .flex").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Faq with this question already exists"
    );
  });

  it("Update FAQ ", () => {
    cy.contains("button", "Test FAQ 5")
      .should("be.visible")
      .get("#headlessui-disclosure-button-\\:r2\\: > .ml-6 > .mt-1")
      .click();

    cy.get(".w-1\\/3 > .text-gray-dark").should("have.text", "Edit FAQ");

    cy.get('input[type="text"][value="Test FAQ 5"]')
      .clear()
      .type("Updated FAQ 5 Title");

    cy.get(".ql-editor").click().clear();
    cy.get(".ql-editor").type("Updated FAQ 5 Answer");
    cy.contains("button", "Update").click();

    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "FAQ has been updated successfully"
    );
  });

  it("Delete FAQ ", () => {
    cy.contains("button", "Updated FAQ 5 Title")
      .should("be.visible")
      .get("#headlessui-disclosure-button-\\:r2\\: > .ml-6 > .mt-1")
      .click();

    cy.get(".bg-red-400 > .flex > .text-sm").should("have.text", "Delete");
    cy.get(".bg-red-400 > .flex > .text-sm").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "FAQ has been deleted successfully"
    );

    cy.contains("button", "Updated FAQ 4 Title").should("not.exist");
  });

  ///add duplicate faq
  /////////////////

  ////////////
  ///Can AI provide the same level of ethical decision-making as human therapists?
  ///Ethical decision-making in therapy involves considerations that go beyond data and algorithms. It includes understanding moral principles, cultural contexts, and the unique circumstances of each client. Human therapists can navigate these complex ethical landscapes and make decisions that are in the best interest of their clients. AI, on the other hand, operates within the limitations of its programming and cannot independently make such complex ethical decisions.
});
