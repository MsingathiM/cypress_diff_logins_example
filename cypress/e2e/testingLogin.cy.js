describe('template spec', () => {

  //logging in with different ways of input
  it('loggin in', () => {
    cy.visit('https://github.com/login');

    // cy.get('input[id="login_field"]').type('youremail@domain.com');
    cy.get('#login_field').type('youremail@domain.com');

    // cy.get('input[id="password"]').type('yourpassword');
    cy.get('#password').type('yourpassword');

    // cy.get('input[name="commit"]').click();
    cy.get('input[data-signin-label="Sign in"]').click();
   

  })

})