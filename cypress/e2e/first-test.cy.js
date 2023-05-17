
describe('Verify browserstack home page', () => {

    it('Verify browserstack logo visible', () => {
        
        cy.visit('https://www.browserstack.com/');
        cy.get('#logo').should('be.visible');
    }) 
})