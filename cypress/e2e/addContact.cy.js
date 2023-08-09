import { addcontact } from "../support/POM/addContactPage"
import { contact } from "../support/POM/contactListPage"
import { contactDetail } from "../support/POM/contactDetailsPage";
import { faker } from '@faker-js/faker';

describe('Add contacts and verify contact Details', () => {   

    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let phone = faker.phone.number('##########')
    let address1 = faker.location.streetAddress(true)
    let address2 = faker.location.direction()
    let city = faker.location.city()
    let state = faker.location.state()
    let postalCode = faker.location.zipCode()
    let country = faker.location.country()
    let dateOfBirth = faker.date.birthdate()
            .toLocaleDateString('en-GB')
            .split("/")
            .reverse().join("-")


    beforeEach( () => {  
        //Call data from fixtures
        cy.fixture('loginCredentials').then(function (data) {
            cy.login(data.email,data.password)
            
        })
    })
    
    it('Should add a new contact 1', () =>{        
        
        contact.addContact().click()
        addcontact.ticle().should('be.visible')

        addcontact.firstName().type(firstName)
        addcontact.lastName().type(lastName)
        addcontact.dateBirth().type(dateOfBirth)
        addcontact.email().type(email)
        addcontact.phone().type(phone)
        addcontact.address1().type(address1)
        addcontact.address2().type(address2)
        addcontact.city().type(city)
        addcontact.state().type(state)
        addcontact.postalCode().type(postalCode)
        addcontact.country().type(country)
        addcontact.submit().click()

        contact.addContact().should('be.visible')
        contact.contactTable().contains('td',firstName)
    })

    it('Should add a new contact 2', () =>{        
        
        contact.addContact().click()
        addcontact.ticle().should('be.visible')

        addcontact.firstName().type(firstName)
        addcontact.lastName().type(lastName)
        addcontact.dateBirth().type(dateOfBirth)
        addcontact.email().type(email)
        addcontact.phone().type(phone)
        addcontact.address1().type(address1)
        addcontact.address2().type(address2)
        addcontact.city().type(city)
        addcontact.state().type(state)
        addcontact.postalCode().type(postalCode)
        addcontact.country().type(country)
        addcontact.submit().click()

        contact.addContact().should('be.visible')
        contact.contactTable().contains('td',firstName)
    })

    
    it('should validate de last contact added', () => {
        contact.addContact().should('be.visible')
        contact.contactTable().contains('td',firstName).should('be.visible').click()
        
        contactDetail.firstnameD().should('have.text', firstName)
        contactDetail.lastNameD().should('have.text', lastName)
        contactDetail.phoneD().should('have.text', phone)
        contactDetail.address1D().should('have.text', address1)
        contactDetail.address2D().should('have.text', address2)
        contactDetail.cityD().should('have.text', city)
        contactDetail.stateD().should('have.text', state)
        contactDetail.postalCodeD().should('have.text', postalCode)
        contactDetail.countryD().should('have.text', country)
    })
    
})
