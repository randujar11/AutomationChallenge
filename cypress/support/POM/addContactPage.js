class addContact {

    ticle(){
        return cy.get('h1')
    }

    firstName(){
        return cy.get('#firstName')
    }

    lastName(){
        return cy.get('#lastName')
    }

    dateBirth(){
        return cy.get('#birthdate')
    }

    email(){
        return cy.get('#email')
    }

    phone(){
        return cy.get('#phone')
    }

    address1(){
        return cy.get('#street1')
    }

    address2(){
        return cy.get('#street2')
    }

    city(){
        return cy.get('#city')
    }

    state(){
        return cy.get('#stateProvince')
    }

    postalCode(){
        return cy.get('#postalCode')
    }
    
    country(){
        return cy.get('#country')
    }

    submit(){
        return cy.get('#submit')
    }

    cancel(){
        return cy.get('#cancel')
    }
}

export const addcontact = new addContact