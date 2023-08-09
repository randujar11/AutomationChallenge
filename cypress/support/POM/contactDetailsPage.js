class contactDetails {

    title(){
        return cy.get('h1')
     }

     addContact(){
        return cy.get('#add-contact')
     }

     logout(){
        return cy.get('#logout')
     }

     returnHomePage(){
        return cy.get('#return')
     }

     firstnameD(){
        return cy.get('#firstName')
     }
     
     lastNameD(){
        return cy.get('#lastName')
     }

     dateBirthD(){
        cy.get('#birthdate')
     }

     emailD(){
        return cy.get('#email')
     }

     phoneD(){
        return cy.get('#phone')
     }

     address1D(){
        return cy.get('#street1')
     }

     address2D(){
        return cy.get('#street2')
     }

     cityD(){
        return cy.get('#city')
     }

     stateD(){
        return cy.get('#stateProvince')
     }

     postalCodeD(){
        return cy.get('#postalCode')
     }

     countryD(){
        return cy.get('#country')
     }
}

export const contactDetail = new contactDetails;