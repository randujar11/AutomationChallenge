import { login } from "../support/POM/loginPage";
import { contact } from "../support/POM/contactListPage";

beforeEach( () => {
    cy.visit('/');
})

describe('Verify Login', () => {

    /*beforeEach( () => {
        cy.visit('/');
    })*/

    it('Login successful', () => {
        login.email().type('change@prueba.com')
        login.password().type('Prueba123.')
        login.clickOnSubmit().click()
        contact.title().should('contain', 'Contact List')
    })

})