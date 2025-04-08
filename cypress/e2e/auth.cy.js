describe('Auth of pocketmate admin', () => {
  it('User logs in and logs out', () => {
  cy.viewport(1920, 1080);
  cy.visit('admin.app.pocketmate.ai');
  cy.get('#email').clear('admin_prod@pocketmate.ai');
  cy.get('#email').type('admin_prod@pocketmate.ai');
  cy.get('.py-8 > :nth-child(2) > .flex').click();
  cy.get('#password').clear('1');
  cy.get('#password').type('12345678');
  cy.wait(3000)
  cy.get('svg.cursor-pointer').click(); // Unhide
  cy.wait(3000)
  cy.get('svg.cursor-pointer').click(); // Hide again
  cy.get('#remember').check();
  cy.get('.py-8 > .justify-center').click();

  /* ====  verify login====*/
  cy.get('h1.text-black.text-2xl.font-semibold',{ timeout: 20000 })
  .should('be.visible')
  .contains('Patient Users');

  /* ==== logsout ====*/
  cy.get('#headlessui-menu-button-\\:r1\\:').click();
  cy.get('#headlessui-menu-item-\\:r4\\:').click();
  cy.get('h1.text-cxl.md\\:text-amd.text-black.font-bold')
    .should('have.text', 'Sign in to your account')
    .and('be.visible');


    })

    it('User tries to login with invalid credentials', () => {
      cy.viewport(1920, 1080);
      cy.visit('admin.app.pocketmate.ai');
      cy.get('#email').clear('admin_pro@pocketmate.ai');
      cy.get('#email').type('admin_pro@pocketmat');
      cy.get('#password').clear('1');
      cy.get('#password').type('12345');
      cy.get('.text-sm').click();
      cy.contains('Invalid email or password').should('be.visible'); 
      })


  it('forgot password', function() {
    cy.viewport(1920, 1080);
    cy.visit('admin.app.pocketmate.ai');
    cy.get('#email').click();
    cy.get(':nth-child(2) > .h-screen').click();
    cy.get('.text-right').click();
    cy.get('.__className_fbe417 > :nth-child(1) > :nth-child(2)').click();
    cy.get('.relative > .text-black').clear();
    cy.get('.relative > .text-black').type('admin_prod@pocketate.ai');
    cy.get('.gap-6 > .justify-center').click();
    cy.contains('A reset link has been sent to your email.') // Look for the text in the pop-up
    .should('be.visible'); // Ensure the pop-up is visible
    
   
  // Wait for the pop-up to disappear (adjust timing as needed)
  cy.wait(5000); // Wait for 5 seconds to simulate the pop-up disappearing

  // Check if the pop-up is no longer visible
  cy.contains('A link has been sent to your email') // Look for the text again
    .should('not.exist'); // Ensure the pop-up disappears
    
  });


    
})



