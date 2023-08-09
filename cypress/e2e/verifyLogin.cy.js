import { login } from "../support/POM/loginPage";
import { contact } from "../support/POM/contactListPage";
 


describe('Verify Login', () => {

    beforeEach( () => {
        cy.visit('/');
    
        //Call data from fixtures
        cy.fixture('loginCredentials').then(function (data) {
            this.data = data;
        })
    })

    it('Login successful', function () {
        login.email().type(this.data.email)
        login.password().type(this.data.password)
        login.clickOnSubmit().click()
        contact.title().should('contain', 'Contact List')
    })

})